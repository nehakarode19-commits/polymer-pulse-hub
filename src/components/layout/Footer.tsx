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
    <footer className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 border-t border-primary/10 mt-20">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/60 via-primary to-primary/60" />
      
      <div className="container px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6 group">
              <img
                src={logo}
                alt="Polymer Bazaar"
                className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Your trusted partner in the global polymer trade, providing real-time market intelligence and trade solutions.
            </p>
            
            {/* Social Media Links */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/5 hover:bg-primary text-muted-foreground hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/5 hover:bg-primary text-muted-foreground hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/5 hover:bg-primary text-muted-foreground hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/5 hover:bg-primary text-muted-foreground hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-foreground relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary rounded-full" />
            </h3>
            <ul className="space-y-3">
              {otherLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-all duration-200 inline-flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Information */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-foreground relative inline-block">
              Resources
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary rounded-full" />
            </h3>
            <ul className="space-y-3">
              {otherInfo.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-all duration-200 inline-flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-foreground relative inline-block">
              Get in Touch
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary rounded-full" />
            </h3>
            
            {/* Contact Info */}
            <div className="space-y-4 mb-6">
              <a
                href="tel:+919374524365"
                className="flex items-start gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/5 group-hover:bg-primary flex items-center justify-center flex-shrink-0 transition-colors">
                  <Phone className="h-4 w-4 text-primary group-hover:text-white transition-colors" />
                </div>
                <span className="pt-1.5">+91 93 745 24 365</span>
              </a>
              
              <a
                href="mailto:Info@polymerbazaar.com"
                className="flex items-start gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/5 group-hover:bg-primary flex items-center justify-center flex-shrink-0 transition-colors">
                  <Mail className="h-4 w-4 text-primary group-hover:text-white transition-colors" />
                </div>
                <span className="pt-1.5 break-all">Info@polymerbazaar.com</span>
              </a>
              
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <div className="w-9 h-9 rounded-lg bg-primary/5 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <span className="pt-1.5">Ahmedabad, Gujarat, India</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-4 border border-primary/10">
              <p className="text-xs text-muted-foreground mb-3 font-medium">
                Subscribe to our newsletter
              </p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-white border-white/50 focus-visible:ring-primary h-9 text-sm"
                />
                <Button size="sm" className="bg-primary hover:bg-primary/90 shadow-sm h-9 px-3">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground text-center md:text-left">
              All Copyright © 2007 – 2025 Polymer Bazaar. All rights reserved.
            </div>
            
            <div className="flex items-center gap-4">
              {isAdmin && (
                <Button 
                  asChild 
                  variant="outline" 
                  size="sm" 
                  className="border-primary/30 text-primary hover:bg-primary hover:text-white transition-all duration-200"
                >
                  <Link to="/admin">
                    <Shield className="h-4 w-4 mr-2" />
                    Admin Panel
                  </Link>
                </Button>
              )}
              
              <div className="text-xs text-muted-foreground hidden sm:block">
                Made with ❤️ in India
              </div>
            </div>
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
