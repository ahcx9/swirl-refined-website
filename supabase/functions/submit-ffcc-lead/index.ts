import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...corsHeaders },
  });

// Basic in-memory rate limiting (per IP)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();
const WINDOW_MS = 15 * 60 * 1000;
const MAX_PER_WINDOW = 6;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const rec = rateLimitStore.get(ip);
  if (!rec || now > rec.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + WINDOW_MS });
    return false;
  }
  if (rec.count >= MAX_PER_WINDOW) return true;
  rec.count++;
  return false;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalizePhone(raw: string): string | null {
  if (typeof raw !== "string") return null;
  let v = raw.replace(/[^\d+]/g, "");
  if (v.startsWith("00")) v = "+" + v.slice(2);
  if (!v.startsWith("+")) {
    // assume Saudi when no country code supplied
    v = v.replace(/^0+/, "");
    v = "+966" + v;
  }
  const digits = v.slice(1);
  if (!/^\d{8,15}$/.test(digits)) return null;
  return "+" + digits;
}

const SHEET_ID = "1H48xBh87Gy5gXpq4ux8v-tayM47nvFR9hPgSn35n52E";
const NOTIFY_TO = "abid@swirl.cx";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** Append the lead as a row in the Swirl FFCC Google Sheet (best-effort). */
async function appendToSheet(row: (string | null)[]) {
  const lovableKey = Deno.env.get("LOVABLE_API_KEY");
  const sheetsKey = Deno.env.get("GOOGLE_SHEETS_API_KEY");
  if (!lovableKey || !sheetsKey) {
    console.warn("Google Sheets connector not configured — skipping sheet append");
    return;
  }
  const url =
    `https://connector-gateway.lovable.dev/google_sheets/v4/spreadsheets/${SHEET_ID}` +
    `/values/Leads!A1:F1:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${lovableKey}`,
      "X-Connection-Api-Key": sheetsKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ values: [row] }),
  });
  if (!res.ok) {
    console.error(`Sheets append failed [${res.status}]: ${await res.text()}`);
  }
}

/** Email the lead to the Swirl team (best-effort). */
async function sendNotification(fields: Record<string, string>) {
  const apiKey = Deno.env.get("RESEND_API_KEY");
  if (!apiKey) {
    console.warn("RESEND_API_KEY missing — skipping notification email");
    return;
  }
  const rows = Object.entries(fields)
    .map(
      ([k, v]) =>
        `<p style="margin:8px 0"><strong>${esc(k)}:</strong> ${esc(v)}</p>`,
    )
    .join("");
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: "Swirl FFCC Leads <onboarding@resend.dev>",
      to: [NOTIFY_TO],
      subject: `New FFCC lead — ${fields["Contact Name"]} (${fields["Brand"]})`,
      html: `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
        <h2 style="color:#0052CC">New FFCC Riyadh 2026 Lead</h2>
        <div style="background:#f5f7fb;padding:20px;border-radius:8px">${rows}</div>
      </div>`,
    }),
  });
  if (!res.ok) {
    console.error(`Resend send failed [${res.status}]: ${await res.text()}`);
  }
}


Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  if (isRateLimited(ip)) {
    return json({ error: "Too many requests. Please try again later." }, 429);
  }

  try {
    const body = await req.json();

    // Invisible honeypot — silently accept, never store
    if (typeof body.company_website === "string" && body.company_website.trim() !== "") {
      return json({ success: true });
    }

    const contactName = String(body.contact_name ?? "").trim().slice(0, 120);
    const brandName = String(body.brand_name ?? "").trim().slice(0, 160);
    const workEmailRaw = String(body.work_email ?? "").trim().slice(0, 254);
    const phone = normalizePhone(String(body.phone ?? ""));

    if (contactName.length < 2) return json({ error: "Invalid name" }, 400);
    if (brandName.length < 1) return json({ error: "Invalid brand name" }, 400);
    if (!phone) return json({ error: "Invalid phone number" }, 400);
    if (workEmailRaw && !EMAIL_RE.test(workEmailRaw)) return json({ error: "Invalid email" }, 400);

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const { error } = await supabase.from("ffcc_leads").insert({
      contact_name: contactName,
      phone_e164: phone,
      work_email: workEmailRaw || null,
      brand_name: brandName,
      source: "FFCC Riyadh 2026",
    });

    if (error) {
      console.error("ffcc_leads insert failed:", error.message);
      return json({ error: "Unable to save submission" }, 500);
    }

    const submittedAt = new Date().toISOString().replace("T", " ").slice(0, 19) + " UTC";

    // Best-effort fan-out: never block the visitor on these.
    await Promise.allSettled([
      appendToSheet([submittedAt, contactName, phone, workEmailRaw || "", brandName, "FFCC Riyadh 2026"]),
      sendNotification({
        "Contact Name": contactName,
        Phone: phone,
        "Work Email": workEmailRaw || "—",
        Brand: brandName,
        Source: "FFCC Riyadh 2026",
        Submitted: submittedAt,
      }),
    ]);

    return json({ success: true });

  } catch (e) {
    console.error("submit-ffcc-lead error:", (e as Error).message);
    return json({ error: "Unable to save submission" }, 500);
  }
});
