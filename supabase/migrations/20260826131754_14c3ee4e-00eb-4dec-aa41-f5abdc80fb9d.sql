CREATE TABLE public.ffcc_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  contact_name TEXT NOT NULL,
  phone_e164 TEXT NOT NULL,
  work_email TEXT,
  brand_name TEXT NOT NULL,
  source TEXT NOT NULL DEFAULT 'FFCC Riyadh 2026',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT ALL ON public.ffcc_leads TO service_role;

ALTER TABLE public.ffcc_leads ENABLE ROW LEVEL SECURITY;

CREATE INDEX idx_ffcc_leads_created_at ON public.ffcc_leads (created_at DESC);