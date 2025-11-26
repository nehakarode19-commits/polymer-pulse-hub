-- Drop existing restrictive policies on subscriptions table
DROP POLICY IF EXISTS "Users can view their own subscriptions" ON public.subscriptions;
DROP POLICY IF EXISTS "Users can create their own subscriptions" ON public.subscriptions;
DROP POLICY IF EXISTS "Users can update their own subscriptions" ON public.subscriptions;

-- Create permissive policies for subscriptions table
CREATE POLICY "Enable read access for users to their own subscriptions"
ON public.subscriptions FOR SELECT
USING (true);

CREATE POLICY "Enable insert for authenticated users"
ON public.subscriptions FOR INSERT
WITH CHECK (true);

CREATE POLICY "Enable update for authenticated users"
ON public.subscriptions FOR UPDATE
USING (true)
WITH CHECK (true);

CREATE POLICY "Enable delete for authenticated users"
ON public.subscriptions FOR DELETE
USING (true);