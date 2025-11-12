-- Remove the overly permissive SELECT policy that allows all authenticated users to view contact submissions
DROP POLICY IF EXISTS "Allow authenticated users to view contact_submissions" ON public.contact_submissions;

-- Contact submissions should only be viewable by admins through backend access, not through the app
-- The public insert policy remains to allow the contact form to work