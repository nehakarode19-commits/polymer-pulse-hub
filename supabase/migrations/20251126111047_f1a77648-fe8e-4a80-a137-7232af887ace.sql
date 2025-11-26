-- Add policy to allow profile creation in demo mode (without authentication)
CREATE POLICY "Allow profile creation for demo"
ON public.profiles
FOR INSERT
WITH CHECK (true);