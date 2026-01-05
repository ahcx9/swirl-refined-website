import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactNotificationRequest {
  name: string;
  email: string;
  phone: string;
  business_type: string;
  message: string;
}

// Rate limiting using in-memory store (resets on cold start, but provides basic protection)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW_MS = 3600000; // 1 hour
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(clientIP: string): boolean {
  const now = Date.now();
  const record = rateLimitStore.get(clientIP);
  
  if (!record || now > record.resetTime) {
    rateLimitStore.set(clientIP, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  
  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }
  
  record.count++;
  return false;
}

// Input validation functions
function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
}

function validatePhone(phone: string): boolean {
  // Allow digits, spaces, dashes, parentheses, and plus sign
  const phoneRegex = /^[\d\s\-\(\)\+]+$/;
  return phoneRegex.test(phone) && phone.length >= 7 && phone.length <= 20;
}

function validateName(name: string): boolean {
  return name.trim().length >= 1 && name.length <= 100;
}

function validateBusinessType(businessType: string): boolean {
  const allowedTypes = [
    'restaurant',
    'cafe',
    'quick-service',
    'hotel',
    'cloud-kitchen',
    'food-truck',
    'other'
  ];
  return allowedTypes.includes(businessType.toLowerCase()) || 
         (businessType.length >= 1 && businessType.length <= 100);
}

function validateMessage(message: string | undefined): boolean {
  if (!message) return true; // Message is optional
  return message.length <= 5000;
}

// HTML sanitization to prevent injection
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

function sanitizeInput(input: string, maxLength: number): string {
  return escapeHtml(input.trim().substring(0, maxLength));
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  // Get client IP for rate limiting
  const clientIP = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
                   req.headers.get('x-real-ip') || 
                   'unknown';

  // Check rate limit
  if (isRateLimited(clientIP)) {
    console.warn(`Rate limit exceeded for IP: ${clientIP}`);
    return new Response(
      JSON.stringify({ error: "Too many requests. Please try again later." }),
      {
        status: 429,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }

  try {
    const body = await req.json();
    const { name, email, phone, business_type, message }: ContactNotificationRequest = body;

    // Validate required fields exist
    if (!name || !email || !phone || !business_type) {
      console.warn('Missing required fields in contact submission');
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Validate input formats
    if (!validateName(name)) {
      return new Response(
        JSON.stringify({ error: "Invalid name format" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    if (!validateEmail(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email format" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    if (!validatePhone(phone)) {
      return new Response(
        JSON.stringify({ error: "Invalid phone format" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    if (!validateBusinessType(business_type)) {
      return new Response(
        JSON.stringify({ error: "Invalid business type" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    if (!validateMessage(message)) {
      return new Response(
        JSON.stringify({ error: "Message is too long (max 5000 characters)" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Sanitize all inputs for HTML embedding
    const safeName = sanitizeInput(name, 100);
    const safeEmail = sanitizeInput(email, 254);
    const safePhone = sanitizeInput(phone, 20);
    const safeBusinessType = sanitizeInput(business_type, 100);
    const safeMessage = message ? sanitizeInput(message, 5000) : '';

    console.log(`Sending contact notification for: ${safeName} from IP: ${clientIP}`);

    // Send notification email to your business email
    const emailResponse = await resend.emails.send({
      from: "Swirl Contact Form <onboarding@resend.dev>",
      to: ["abid@swirl.cx"],
      subject: `New Contact Form Submission from ${safeName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0052CC;">New Contact Form Submission</h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${safeName}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
            <p style="margin: 10px 0;"><strong>Phone:</strong> <a href="tel:${safePhone}">${safePhone}</a></p>
            <p style="margin: 10px 0;"><strong>Business Type:</strong> ${safeBusinessType}</p>
          </div>
          
          ${safeMessage ? `
            <div style="margin: 20px 0;">
              <h3 style="color: #333;">Message:</h3>
              <p style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #0052CC; border-radius: 4px;">
                ${safeMessage.replace(/\n/g, '<br>')}
              </p>
            </div>
          ` : ''}
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; color: #666; font-size: 12px;">
            <p>This notification was sent from your Swirl website contact form.</p>
            <p style="color: #999; font-size: 10px;">Submitted from IP: ${clientIP}</p>
          </div>
        </div>
      `,
    });

    console.log("Notification email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error sending notification email:", error);
    // Return generic error message to client, don't expose internal details
    return new Response(
      JSON.stringify({ error: "Unable to send notification. Please try again later." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
