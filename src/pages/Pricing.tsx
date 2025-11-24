import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Zap, Crown, Building2 } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const Pricing = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState<string | null>(null);

  const plans = [
    {
      id: "basic",
      name: "Basic",
      icon: Zap,
      price: "₹12,000",
      period: "/year",
      description: "Perfect for small businesses and startups",
      features: [
        "Access to Global & Indian Bazaar",
        "Basic historical data (1 year)",
        "Weekly market updates",
        "Email support",
        "Mobile app access",
      ],
      popular: false,
    },
    {
      id: "premium",
      name: "Premium",
      icon: Crown,
      price: "₹24,000",
      period: "/year",
      description: "Most popular for growing businesses",
      features: [
        "Everything in Basic",
        "Full historical data (5+ years)",
        "Daily market updates",
        "Future trend analysis",
        "Priority support",
        "API access",
        "Custom reports",
        "WhatsApp integration",
      ],
      popular: true,
    },
    {
      id: "enterprise",
      name: "Enterprise",
      icon: Building2,
      price: "Custom",
      period: "",
      description: "Tailored solutions for large organizations",
      features: [
        "Everything in Premium",
        "Unlimited historical data",
        "Real-time price alerts",
        "Dedicated account manager",
        "Custom integrations",
        "On-premise deployment option",
        "Training & onboarding",
        "24/7 phone support",
      ],
      popular: false,
    },
  ];

  const handleSubscribe = async (planType: string) => {
    if (!user) {
      navigate("/signup");
      return;
    }

    if (planType === "enterprise") {
      toast({
        title: "Contact Sales",
        description: "Please contact our sales team for enterprise pricing.",
      });
      return;
    }

    setLoading(planType);

    try {
      // Create or update subscription for this user
      const { error } = await supabase.from("subscriptions").upsert(
        {
          user_id: user.id,
          plan_type: planType,
          status: "active",
          start_date: new Date().toISOString(),
          end_date: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(), // 1 year from now
        },
        { onConflict: "user_id" }
      );

      if (error) throw error;

      toast({
        title: "🎉 Subscription Activated!",
        description: `Welcome to ${planType} plan! You now have full access to all features.`,
      });

      // Wait a moment for the toast, then redirect and reload to update subscription status
      setTimeout(() => {
        window.location.href = "/";
      }, 1500);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to activate subscription",
        variant: "destructive",
      });
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 bg-gradient-luxury bg-clip-text text-transparent">
            Choose Your Plan
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get instant access to comprehensive polymer market data and insights
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className={`relative h-full ${
                    plan.popular
                      ? "border-primary shadow-xl shadow-primary/20 scale-105"
                      : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  <CardHeader className="text-center pb-8">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription className="mt-2">{plan.description}</CardDescription>
                    <div className="mt-6">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      onClick={() => handleSubscribe(plan.id)}
                      disabled={loading === plan.id}
                      className={`w-full ${
                        plan.popular
                          ? "bg-primary hover:bg-primary-dark"
                          : ""
                      }`}
                      variant={plan.popular ? "default" : "outline"}
                      size="lg"
                    >
                      {loading === plan.id ? "Processing..." : user ? "Subscribe Now" : "Sign Up to Continue"}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16 text-sm text-muted-foreground"
        >
          <p>All plans include 14-day money-back guarantee • Cancel anytime • No hidden fees</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;
