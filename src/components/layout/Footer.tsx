import { Link, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useState } from "react";
import { SubscriptionModal } from "@/components/SubscriptionModal";
import { useUserRole } from "@/hooks/useUserRole";
import { Shield } from "lucide-react";

const Footer = () => {
  const { user, hasActiveSubscription } = useAuth();
  const { isAdmin } = useUserRole();
  const navigate = useNavigate();
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);

  const otherLinks = [
    { label: "Buy & Sell", path: "/buy-sell" },
    { label: "About", path: "/about" },
    { label: "Crude & Feedstock", path: "/crude-feedstock" },
    { label: "Global Bazaar", path: "/global-bazaar" },
    { label: "Indian Bazaar", path: "/indian-bazaar" },
    { label: "Future Trend", path: "/future-trend" },
    { label: "Historical Data", path: "/historical-data" },
  ];

  const otherInfo = [
    { label: "Future Trend", path: "/future-trend" },
    { label: "Careers", path: "/career" },
    { label: "Privacy Policy", path: "/privacy-policy" },
    { label: "Terms & Conditions", path: "/terms-conditions" },
    { label: "VIP Delegation", path: "/partnerships" },
  ];

  return (
    <footer className="bg-background border-t mt-20">
      {/* Main Footer */}
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Contact Us */}
          <div>
            <h4 className="font-semibold text-base mb-6 text-foreground">Contact Us</h4>
            <div className="space-y-4">
              <a
                href="tel:+919374524365"
                className="flex items-start gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>+91 93 745 24 365</span>
              </a>
              
              <a
                href="mailto:Info@polymerbazaar.com"
                className="flex items-start gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                <span className="break-all">Info@polymerbazaar.com</span>
              </a>

              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>M/S SAMYAK ENTERPRISE, Ahmedabad, Gujarat, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-base mb-6 text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              {otherLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Information */}
          <div>
            <h4 className="font-semibold text-base mb-6 text-foreground">Other Information</h4>
            <ul className="space-y-3">
              {otherInfo.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="font-semibold text-base mb-6 text-foreground">Get in Touch</h4>
            <p className="text-sm text-muted-foreground mb-4">
              You can contact Us to send email to us
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="h-10 text-sm bg-white"
              />
              <Button size="sm" className="h-10 px-4 bg-primary hover:bg-primary/90 flex-shrink-0">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t">
        <div className="container px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              All Copyright ©2007 – 2024 reserved.
            </div>
            
            {isAdmin && (
              <Button 
                asChild 
                variant="outline" 
                size="sm"
                className="h-9 border-primary/30 text-primary hover:bg-primary hover:text-white"
              >
                <Link to="/admin">
                  <Shield className="h-4 w-4 mr-2" />
                  Admin
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>

      <SubscriptionModal 
        open={showSubscriptionModal} 
        onOpenChange={setShowSubscriptionModal} 
      />
    </footer>
  );
};

export default Footer;
