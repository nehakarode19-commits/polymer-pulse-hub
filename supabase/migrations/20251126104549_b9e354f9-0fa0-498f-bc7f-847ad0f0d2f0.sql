-- Drop the old restrictive policies with exact names
DROP POLICY IF EXISTS "Users can insert their own subscription" ON public.subscriptions;
DROP POLICY IF EXISTS "Users can update their own subscription" ON public.subscriptions;
DROP POLICY IF EXISTS "Users can view their own subscription" ON public.subscriptions;
DROP POLICY IF EXISTS "Enable read access for users to their own subscriptions" ON public.subscriptions;
DROP POLICY IF EXISTS "Enable insert for authenticated users" ON public.subscriptions;
DROP POLICY IF EXISTS "Enable update for authenticated users" ON public.subscriptions;
DROP POLICY IF EXISTS "Enable delete for authenticated users" ON public.subscriptions;

-- Create new permissive policies for demo mode
CREATE POLICY "Allow all select on subscriptions"
ON public.subscriptions FOR SELECT
USING (true);

CREATE POLICY "Allow all insert on subscriptions"
ON public.subscriptions FOR INSERT
WITH CHECK (true);

CREATE POLICY "Allow all update on subscriptions"
ON public.subscriptions FOR UPDATE
USING (true)
WITH CHECK (true);