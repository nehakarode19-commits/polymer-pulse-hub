import { Link, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useState } from "react";
import { SubscriptionModal } from "@/components/SubscriptionModal";
import { useUserRole } from "@/hooks/useUserRole";
import { Shield } from "lucide-react";
import logo from "@/assets/logo.png";

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
    <footer className="bg-white border-t mt-20">
      {/* Main Footer */}
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img
                src={logo}
                alt="Polymer Bazaar"
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed max-w-sm">
              Leading global platform for polymer trade intelligence and market insights.
            </p>
            
            {/* Contact Cards */}
            <div className="space-y-3 mb-6">
              <a
                href="tel:+919374524365"
                className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-primary/5 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Call us</div>
                  <div className="text-sm font-medium">+91 93 745 24 365</div>
                </div>
              </a>
              
              <a
                href="mailto:Info@polymerbazaar.com"
                className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-primary/5 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Email us</div>
                  <div className="text-sm font-medium break-all">Info@polymerbazaar.com</div>
                </div>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-primary text-muted-foreground hover:text-white flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-primary text-muted-foreground hover:text-white flex items-center justify-center transition-all"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-primary text-muted-foreground hover:text-white flex items-center justify-center transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-primary text-muted-foreground hover:text-white flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2.5">
              {otherLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1 inline-block transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-foreground">Resources</h4>
            <ul className="space-y-2.5">
              {otherInfo.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1 inline-block transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-foreground">Newsletter</h4>
            <p className="text-xs text-muted-foreground mb-4">
              Get the latest polymer market updates
            </p>
            <div className="flex gap-2 mb-4">
              <Input
                type="email"
                placeholder="Enter email"
                className="h-10 text-sm"
              />
              <Button size="sm" className="h-10 px-4 bg-primary hover:bg-primary/90">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-start gap-2 text-xs text-muted-foreground">
              <MapPin className="h-3 w-3 mt-0.5 flex-shrink-0" />
              <span>Ahmedabad, Gujarat, India</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t bg-gray-50">
        <div className="container px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-xs text-muted-foreground">
              © 2007-2025 Polymer Bazaar. All rights reserved.
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
