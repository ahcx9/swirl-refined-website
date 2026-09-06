DO $$ BEGIN
  CREATE TYPE public.app_role AS ENUM ('admin','moderator','user');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

CREATE TABLE IF NOT EXISTS public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role public.app_role NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role)
$$;

DROP POLICY IF EXISTS "Users can view their own roles" ON public.user_roles;
CREATE POLICY "Users can view their own roles" ON public.user_roles
  FOR SELECT TO authenticated USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Admins can view all roles" ON public.user_roles;
CREATE POLICY "Admins can view all roles" ON public.user_roles
  FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));

-- contact_submissions: keep public insert, admin-only read
REVOKE SELECT, UPDATE, DELETE ON public.contact_submissions FROM anon;
REVOKE UPDATE, DELETE ON public.contact_submissions FROM authenticated;
GRANT INSERT ON public.contact_submissions TO anon;
GRANT SELECT ON public.contact_submissions TO authenticated;
GRANT ALL ON public.contact_submissions TO service_role;

DROP POLICY IF EXISTS "Admins can view contact submissions" ON public.contact_submissions;
CREATE POLICY "Admins can view contact submissions" ON public.contact_submissions
  FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));

-- ffcc_leads: inserts happen server-side (service role); admin-only read
REVOKE SELECT, INSERT, UPDATE, DELETE ON public.ffcc_leads FROM anon;
REVOKE INSERT, UPDATE, DELETE ON public.ffcc_leads FROM authenticated;
GRANT SELECT ON public.ffcc_leads TO authenticated;
GRANT ALL ON public.ffcc_leads TO service_role;

DROP POLICY IF EXISTS "Admins can view ffcc leads" ON public.ffcc_leads;
CREATE POLICY "Admins can view ffcc leads" ON public.ffcc_leads
  FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));