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
  message?: string;
}

// Simple in-memory rate limiter
const rateLimiter = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 3600000; // 1 hour in milliseconds
const RATE_LIMIT_MAX_REQUESTS = 10;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const requests = rateLimiter.get(ip) || [];
  
  // Filter out requests older than the window
  const recentRequests = requests.filter(timestamp => now - timestamp < RATE_LIMIT_WINDOW);
  
  if (recentRequests.length >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }
  
  // Add current request and update map
  recentRequests.push(now);
  rateLimiter.set(ip, recentRequests);
  
  return true;
}

function validateInput(data: ContactNotificationRequest): { valid: boolean; error?: string } {
  // Validate name
  if (!data.name || data.name.trim().length === 0 || data.name.length > 100) {
    return { valid: false, error: "Invalid name" };
  }
  
  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email) || data.email.length > 255) {
    return { valid: false, error: "Invalid email" };
  }
  
  // Validate phone
  const phoneRegex = /^[+\d\s()-]+$/;
  if (!data.phone || data.phone.length < 7 || data.phone.length > 20 || !phoneRegex.test(data.phone)) {
    return { valid: false, error: "Invalid phone number" };
  }
  
  // Validate business_type
  const validBusinessTypes = ['Restaurant', 'Cafe', 'Food Truck', 'Fine Dining', 'Cloud Kitchen', 'Quick Service', 'Hotel'];
  if (!data.business_type || !validBusinessTypes.includes(data.business_type)) {
    return { valid: false, error: "Invalid business type" };
  }
  
  // Validate message (optional)
  if (data.message && data.message.length > 2000) {
    return { valid: false, error: "Message too long" };
  }
  
  return { valid: true };
}

function sanitizeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Rate limiting
    const clientIP = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || 
                     req.headers.get('x-real-ip') || 
                     'unknown';
    
    if (!checkRateLimit(clientIP)) {
      console.warn(`Rate limit exceeded for IP: ${clientIP}`);
      return new Response(
        JSON.stringify({ error: "Rate limit exceeded. Please try again later." }),
        {
          status: 429,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const data: ContactNotificationRequest = await req.json();
    
    // Validate input
    const validation = validateInput(data);
    if (!validation.valid) {
      console.error('Validation error:', validation.error);
      return new Response(
        JSON.stringify({ error: validation.error }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const { name, email, phone, business_type, message } = data;

    console.log('Sending contact notification for:', sanitizeHtml(name));

    // Send notification email to your business email with sanitized content
    const sanitizedName = sanitizeHtml(name);
    const sanitizedEmail = sanitizeHtml(email);
    const sanitizedPhone = sanitizeHtml(phone);
    const sanitizedBusinessType = sanitizeHtml(business_type);
    const sanitizedMessage = message ? sanitizeHtml(message).replace(/\n/g, '<br>') : '';
    
    const emailResponse = await resend.emails.send({
      from: "Swirl Contact Form <onboarding@resend.dev>",
      to: ["abid@swirl.cx"],
      subject: `New Contact Form Submission from ${sanitizedName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0052CC;">New Contact Form Submission</h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${sanitizedName}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${sanitizedEmail}">${sanitizedEmail}</a></p>
            <p style="margin: 10px 0;"><strong>Phone:</strong> <a href="tel:${sanitizedPhone}">${sanitizedPhone}</a></p>
            <p style="margin: 10px 0;"><strong>Business Type:</strong> ${sanitizedBusinessType}</p>
          </div>
          
          ${sanitizedMessage ? `
            <div style="margin: 20px 0;">
              <h3 style="color: #333;">Message:</h3>
              <p style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #0052CC; border-radius: 4px;">
                ${sanitizedMessage}
              </p>
            </div>
          ` : ''}
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; color: #666; font-size: 12px;">
            <p>This notification was sent from your Swirl website contact form.</p>
          </div>
        </div>
      `,
    });

    console.log("Notification email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error sending notification email:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
