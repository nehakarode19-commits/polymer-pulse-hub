-- Drop the old check constraint
ALTER TABLE public.subscriptions 
DROP CONSTRAINT IF EXISTS subscriptions_plan_type_check;

-- Add new check constraint with the new plan types
ALTER TABLE public.subscriptions 
ADD CONSTRAINT subscriptions_plan_type_check 
CHECK (plan_type IN (
  'website-access',
  'mobile-app', 
  'normal-whatsapp',
  'auto-whatsapp',
  'sourcing-delegation',
  'corporate-package',
  'basic',
  'premium',
  'enterprise'
));