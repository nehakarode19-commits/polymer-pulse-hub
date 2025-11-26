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

    // Get the plan name for display
    const planName = plans.find(p => p.id === planType)?.name || planType;

    // Store mock subscription in localStorage for demo mode
    const mockSubscription = {
      id: crypto.randomUUID(),
      user_id: user.id,
      plan_type: planType,
      status: "active",
      start_date: new Date().toISOString(),
      end_date: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(), // 1 year from now
    };
    localStorage.setItem("demo_subscription", JSON.stringify(mockSubscription));

    // Show success message immediately (demo mode - no database operation)
    toast({
      title: "🎉 Subscription Activated!",
      description: `Welcome to ${planName} plan! You now have full access to all features.`,
    });

    // Wait a moment for the toast, then redirect
    setTimeout(() => {
      setLoading(null);
      window.location.href = "/";
    }, 1500);
  };

  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-br from-background via-secondary/30 to-background">
      <div className="container max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-block mb-4"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary text-white text-sm font-semibold shadow-md">
              Subscription Plans
            </span>
          </motion.div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Subscribe to <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">PolymerBazaar</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose the perfect plan for your business needs. From individual access to corporate solutions, 
            we have packages designed to empower your polymer trading journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="h-full"
              >
                <Card className="pricing-card h-full flex flex-col border-2 border-border/50 bg-card hover:border-primary/30 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
                  {/* Decorative gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <CardHeader className="pb-4 relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {plan.name}
                    </CardTitle>
                    <CardDescription className="text-sm mt-2 text-muted-foreground min-h-[40px]">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="flex-1 flex flex-col space-y-6 relative z-10">
                    <div className="border-b border-border pb-4">
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                        <span className="text-xl text-muted-foreground">{plan.period}</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">per year</p>
                    </div>
                    
                    <div className="flex-1">
                      <p className="text-sm font-semibold mb-4 flex items-center gap-2 text-foreground">
                        <Zap className="h-4 w-4 text-primary" />
                        Features Included:
                      </p>
                      <ul className="space-y-3">
                        {plan.features.map((feature, i) => (
                          <motion.li 
                            key={i} 
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + i * 0.05 }}
                            className="flex items-start gap-3 text-sm text-foreground"
                          >
                            <div className="mt-0.5 w-5 h-5 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                              <Check className="h-3 w-3 text-success" />
                            </div>
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Fixed height button container for perfect alignment */}
                    <div className="pt-6 mt-auto">
                      <Button
                        onClick={() => handleSubscribe(plan.id)}
                        disabled={loading === plan.id}
                        className="proceed-button w-full h-12 bg-primary hover:bg-primary-dark text-primary-foreground font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                      >
                        {loading === plan.id ? (
                          <span className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                            Processing...
                          </span>
                        ) : (
                          "Proceed to Pay"
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16 space-y-4"
        >
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-success" />
              Full Access to All Features
            </span>
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-success" />
              Secure Payment
            </span>
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-success" />
              No Hidden Fees
            </span>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Need help choosing a plan? <button className="text-primary hover:underline font-semibold">Contact our sales team</button>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;
