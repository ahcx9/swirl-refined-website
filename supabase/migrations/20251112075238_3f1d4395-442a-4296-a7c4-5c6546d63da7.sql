-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS public.contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  business_type TEXT NOT NULL,
  message TEXT,
  status TEXT DEFAULT 'new' NOT NULL
);

-- Enable Row Level Security
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public form submission)
CREATE POLICY "Allow public inserts on contact_submissions"
ON public.contact_submissions
FOR INSERT
TO anon
WITH CHECK (true);

-- Allow authenticated users to view all submissions (for admin purposes)
CREATE POLICY "Allow authenticated users to view contact_submissions"
ON public.contact_submissions
FOR SELECT
TO authenticated
USING (true);