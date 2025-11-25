import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Monitor, Smartphone, MessageCircle, Zap, Briefcase, Building2 } from "lucide-react";
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
      id: "website-access",
      name: "Website Access",
      icon: Monitor,
      price: "₹15,000",
      period: "+",
      description: "Full access to PolymerBazaar website with all features",
      features: [
        "Complete website access",
      ],
    },
    {
      id: "mobile-app",
      name: "Mobile Application",
      icon: Smartphone,
      price: "₹7,500",
      period: "+",
      description: "Access PolymerBazaar through our mobile app",
      features: [
        "Mobile app access",
      ],
    },
    {
      id: "normal-whatsapp",
      name: "Normal WhatsApp",
      icon: MessageCircle,
      price: "₹5,500",
      period: "+",
      description: "Get updates and support via WhatsApp",
      features: [
        "WhatsApp notifications",
      ],
    },
    {
      id: "auto-whatsapp",
      name: "Auto WhatsApp",
      icon: Zap,
      price: "₹6,500",
      period: "+",
      description: "Automated WhatsApp services and alerts",
      features: [
        "Automated alerts",
      ],
    },
    {
      id: "sourcing-delegation",
      name: "Sourcing & Delegation",
      icon: Briefcase,
      price: "₹20,000",
      period: "+",
      description: "Professional sourcing and delegation services",
      features: [
        "Professional sourcing",
      ],
    },
    {
      id: "corporate-package",
      name: "Corporate Package",
      icon: Building2,
      price: "₹25,000",
      period: "+",
      description: "Customized solutions for corporate clients",
      features: [
        "Custom solutions",
      ],
    },
  ];

  const handleSubscribe = async (planType: string) => {
    if (!user) {
      navigate("/signup");
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
    <div className="min-h-screen py-20 px-4 bg-background">
      <div className="container max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Subscribe to PolymerBazaar
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect plan for your business needs. From individual access to corporate solutions, 
            we have packages designed to empower your polymer trading journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border border-border bg-card hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-bold flex items-center gap-2 text-foreground">
                      <Icon className="h-5 w-5 text-foreground" />
                      {plan.name}
                    </CardTitle>
                    <CardDescription className="text-sm mt-2 text-muted-foreground">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                      <span className="text-xl text-muted-foreground">{plan.period}</span>
                    </div>
                    
                    <div>
                      <p className="text-sm font-semibold mb-3 flex items-center gap-2 text-foreground">
                        <Zap className="h-4 w-4" />
                        Features Included:
                      </p>
                      <ul className="space-y-2">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                            <Check className="h-4 w-4 text-success shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      onClick={() => handleSubscribe(plan.id)}
                      disabled={loading === plan.id}
                      className="w-full bg-accent-maroon hover:bg-accent-maroon/90 text-white font-semibold"
                      size="lg"
                    >
                      {loading === plan.id ? "Processing..." : "Proceed to Pay"}
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
          className="text-center mt-12 text-sm text-muted-foreground"
        >
          <p>All plans come with full access • Secure payment • No hidden fees</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;
