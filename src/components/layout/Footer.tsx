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

  // Only show footer links if user has active subscription
  const showFooterLinks = user && hasActiveSubscription();

  const handleRestrictedAccess = () => {
    if (!user) {
      navigate("/login");
    } else {
      setShowSubscriptionModal(true);
    }
  };

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
  ];

  return (
    <footer className="bg-secondary border-t mt-20">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <Phone className="h-4 w-4 mt-0.5 text-primary" />
                <span>+91 93 745 24 365</span>
              </div>
              <div className="flex items-start space-x-2">
                <Mail className="h-4 w-4 mt-0.5 text-primary" />
                <span>Info@polymerbazaar.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary" />
                <span>M/S SAMYAK ENTERPRISE, Ahmedabad, Gujarat, India</span>
              </div>
            </div>
          </div>

          {/* Other Links - Always visible */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {otherLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Information - Always visible */}
          <div>
            <h3 className="font-bold text-lg mb-4">Other Information</h3>
            <ul className="space-y-2 text-sm">
              {otherInfo.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4">Get in Touch</h3>
            <p className="text-sm text-muted-foreground mb-4">
              You can contact Us to send email to us
            </p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Your email"
                className="flex-1"
              />
              <Button size="icon" className="bg-primary hover:bg-primary-dark">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t">
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              All Copyright ©2007 – 2024 reserved.
            </div>
            {isAdmin && (
              <Button asChild variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link to="/admin">
                  <Shield className="h-4 w-4 mr-2" />
                  Admin Panel
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
