import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import logoNav from "@/assets/logo-nav.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, User, ChevronDown, X, Shield } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { SubscriptionModal } from "@/components/SubscriptionModal";
import { useUserRole } from "@/hooks/useUserRole";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  const { user, signOut, hasActiveSubscription } = useAuth();
  const { isAdmin } = useUserRole();
  const navigate = useNavigate();

  const mainMenuItems = [
    { label: "Buy & Sell", path: "/buy-sell" },
    { label: "About", path: "/about" },
    { label: "Career", path: "/career" },
  ];

  const crudeFeedstockItems = [
    { label: "ACN - Acrylonitrile", path: "/crude-feedstock" },
    { label: "Butadine", path: "/crude-feedstock" },
    { label: "Crude", path: "/crude-feedstock" },
    { label: "EDC", path: "/crude-feedstock" },
    { label: "Ethylene", path: "/crude-feedstock" },
    { label: "MEG", path: "/crude-feedstock" },
    { label: "Naphtha", path: "/crude-feedstock" },
    { label: "PTA", path: "/crude-feedstock" },
    { label: "Propylene", path: "/crude-feedstock" },
    { label: "Styrene", path: "/crude-feedstock" },
    { label: "VCM", path: "/crude-feedstock" },
    { label: "Vinyl Acetate - VA", path: "/crude-feedstock" },
  ];

  const globalBazaarItems = [
    { label: "U.S.A", path: "/global-bazaar" },
    { label: "Europe", path: "/global-bazaar" },
    { label: "Asia-China", path: "/global-bazaar" },
    { label: "Asia-India", path: "/global-bazaar" },
    { label: "Asia-Iran", path: "/global-bazaar" },
    { label: "Asia-Pakistan", path: "/global-bazaar" },
    { label: "Asia-Nepal", path: "/global-bazaar" },
    { label: "Asia-SriLanka", path: "/global-bazaar" },
    { label: "Asia-Bangladesh", path: "/global-bazaar" },
    { label: "Other Asian Nation", path: "/global-bazaar" },
    { label: "KSA", path: "/global-bazaar" },
    { label: "Africa-Egypt", path: "/global-bazaar" },
    { label: "Middle East", path: "/global-bazaar" },
    { label: "Turkey", path: "/global-bazaar" },
  ];

  const indianBazaarItems = [
    { label: "City Wise", path: "/indian-bazaar" },
    { label: "Rate Revision", path: "/rate-revision" },
    { label: "Price Prediction", path: "/price-prediction" },
    { label: "Company Price List", path: "/company-price-list" },
    { label: "US$-INR Custom Exchange Rate", path: "/exchange-rate" },
    { label: "BOPP Film ( TT & NTT )", path: "/bopp-film" },
    { label: "Indian Government Policies", path: "/government-policies" },
  ];

  const historicalDataItems = [
    { label: "HDPE", path: "/historical-data" },
    { label: "LDPE", path: "/historical-data" },
    { label: "LLDPE", path: "/historical-data" },
    { label: "PP", path: "/historical-data" },
    { label: "PVC", path: "/historical-data" },
  ];

  const futureTrendItems = [
    { label: "PP", path: "/future-trend" },
    { label: "PE", path: "/future-trend" },
    { label: "PVC", path: "/future-trend" },
    { label: "PET", path: "/future-trend" },
    { label: "PS", path: "/future-trend" },
    { label: "ABS", path: "/future-trend" },
    { label: "EVA", path: "/future-trend" },
    { label: "PC", path: "/future-trend" },
    { label: "SAN", path: "/future-trend" },
    { label: "Nylon 6 & 6.6", path: "/future-trend" },
    { label: "PBT", path: "/future-trend" },
    { label: "POM", path: "/future-trend" },
    { label: "Polyester", path: "/future-trend" },
    { label: "PMMA", path: "/future-trend" },
    { label: "BOPP Film", path: "/future-trend" },
  ];

  const servicesItems = [
    { label: "Events", path: "/events" },
    { label: "Press Release", path: "/press-release" },
    { label: "WhatsApp Chatbot", path: "/whatsapp-chatbot" },
  ];

  const handleSignOut = async () => {
    await signOut();
    navigate("/login");
  };

  if (!user || !hasActiveSubscription) {
    return (
      <>
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-20 items-center justify-between px-4">
            <Link to="/" className="flex items-center space-x-2 transition-transform hover:scale-105">
              <img src={logo} alt="Polymer Bazaar" className="h-12 w-auto" />
            </Link>
            <div className="flex items-center gap-4">
              <Link to="/pricing">
                <Button 
                  variant="outline" 
                  className="border-primary/50 hover:border-primary hover:bg-primary/5 transition-all duration-300"
                >
                  View Plans
                </Button>
              </Link>
              <Link to="/login">
                <Button className="bg-primary hover:bg-primary-dark shadow-md hover:shadow-lg transition-all duration-300">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </header>
        <SubscriptionModal 
          open={showSubscriptionModal} 
          onOpenChange={setShowSubscriptionModal} 
        />
      </>
    );
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 shadow-sm">
        <div className="container flex h-20 items-center justify-between px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 transition-transform hover:scale-105 duration-300">
            <img src={logoNav} alt="Polymer Bazaar" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          {hasActiveSubscription && (
            <nav className="hidden lg:flex items-center space-x-1">
              {/* Buy & Sell */}
              <Link
                to="/buy-sell"
                className="px-4 py-2 text-sm font-medium text-foreground rounded-lg hover:bg-primary/5 hover:text-primary transition-all duration-200"
              >
                Buy & Sell
              </Link>

              {/* About Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className="px-4 py-2 text-sm font-medium text-foreground rounded-lg hover:bg-primary/5 hover:text-primary transition-all duration-200 h-auto group"
                  >
                    About
                    <ChevronDown className="ml-1.5 h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-64 bg-background/95 backdrop-blur-lg border border-border/50 shadow-xl z-[100] rounded-xl p-2 animate-in fade-in-0 zoom-in-95">
                  <DropdownMenuItem asChild className="rounded-lg hover:bg-primary hover:text-white focus:bg-primary focus:text-white cursor-pointer transition-colors">
                    <Link to="/about" className="w-full px-3 py-2.5">
                      <span className="font-medium">About Us</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="rounded-lg hover:bg-primary hover:text-white focus:bg-primary focus:text-white cursor-pointer transition-colors">
                    <Link to="/our-methodology" className="w-full px-3 py-2.5">
                      <span className="font-medium">Our Methodology</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="rounded-lg hover:bg-primary hover:text-white focus:bg-primary focus:text-white cursor-pointer transition-colors">
                    <Link to="/partnerships" className="w-full px-3 py-2.5">
                      <span className="font-medium">Strategic Alliances & Delegations</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="rounded-lg hover:bg-primary hover:text-white focus:bg-primary focus:text-white cursor-pointer transition-colors">
                    <Link to="/careers-detailed" className="w-full px-3 py-2.5">
                      <span className="font-medium">Careers at Polymer Bazaar</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Crude & Feedstock Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className="px-4 py-2 text-sm font-medium text-foreground rounded-lg hover:bg-primary/5 hover:text-primary transition-all duration-200 h-auto group"
                  >
                    Crude & Feedstock
                    <ChevronDown className="ml-1.5 h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-64 bg-background/95 backdrop-blur-lg border border-border/50 shadow-xl z-[100] rounded-xl p-2 max-h-80 overflow-y-auto animate-in fade-in-0 zoom-in-95">
                  {crudeFeedstockItems.map((item) => (
                    <DropdownMenuItem key={item.label} asChild className="rounded-lg hover:bg-primary hover:text-white focus:bg-primary focus:text-white cursor-pointer transition-colors">
                      <Link to={item.path} className="w-full px-3 py-2.5">
                        <span className="font-medium">{item.label}</span>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Global Bazaar Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className="px-4 py-2 text-sm font-medium text-foreground rounded-lg hover:bg-primary/5 hover:text-primary transition-all duration-200 h-auto group"
                  >
                    Global Bazaar
                    <ChevronDown className="ml-1.5 h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-64 bg-background/95 backdrop-blur-lg border border-border/50 shadow-xl z-[100] rounded-xl p-2 max-h-80 overflow-y-auto animate-in fade-in-0 zoom-in-95">
                  {globalBazaarItems.map((item) => (
                    <DropdownMenuItem key={item.label} asChild className="rounded-lg hover:bg-primary hover:text-white focus:bg-primary focus:text-white cursor-pointer transition-colors">
                      <Link to={item.path} className="w-full px-3 py-2.5">
                        <span className="font-medium">{item.label}</span>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Indian Bazaar Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className="px-4 py-2 text-sm font-medium text-foreground rounded-lg hover:bg-primary/5 hover:text-primary transition-all duration-200 h-auto group"
                  >
                    Indian Bazaar
                    <ChevronDown className="ml-1.5 h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-72 bg-background/95 backdrop-blur-lg border border-border/50 shadow-xl z-[100] rounded-xl p-2 animate-in fade-in-0 zoom-in-95">
                  {indianBazaarItems.map((item) => (
                    <DropdownMenuItem key={item.label} asChild className="rounded-lg hover:bg-primary hover:text-white focus:bg-primary focus:text-white cursor-pointer transition-colors">
                      <Link to={item.path} className="w-full px-3 py-2.5">
                        <span className="font-medium">{item.label}</span>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Historical Data Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className="px-4 py-2 text-sm font-medium text-foreground rounded-lg hover:bg-primary/5 hover:text-primary transition-all duration-200 h-auto group"
                  >
                    Historical Data
                    <ChevronDown className="ml-1.5 h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-background/95 backdrop-blur-lg border border-border/50 shadow-xl z-[100] rounded-xl p-2 animate-in fade-in-0 zoom-in-95">
                  {historicalDataItems.map((item) => (
                    <DropdownMenuItem key={item.label} asChild className="rounded-lg hover:bg-primary hover:text-white focus:bg-primary focus:text-white cursor-pointer transition-colors">
                      <Link to={item.path} className="w-full px-3 py-2.5">
                        <span className="font-medium">{item.label}</span>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Future Trend Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className="px-4 py-2 text-sm font-medium text-foreground rounded-lg hover:bg-primary/5 hover:text-primary transition-all duration-200 h-auto group"
                  >
                    Future Trend
                    <ChevronDown className="ml-1.5 h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-64 bg-background/95 backdrop-blur-lg border border-border/50 shadow-xl z-[100] rounded-xl p-2 max-h-80 overflow-y-auto animate-in fade-in-0 zoom-in-95">
                  {futureTrendItems.map((item) => (
                    <DropdownMenuItem key={item.label} asChild className="rounded-lg hover:bg-primary hover:text-white focus:bg-primary focus:text-white cursor-pointer transition-colors">
                      <Link to={item.path} className="w-full px-3 py-2.5">
                        <span className="font-medium">{item.label}</span>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Services Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className="px-4 py-2 text-sm font-medium text-foreground rounded-lg hover:bg-primary/5 hover:text-primary transition-all duration-200 h-auto group"
                  >
                    Services
                    <ChevronDown className="ml-1.5 h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-background/95 backdrop-blur-lg border border-border/50 shadow-xl z-[100] rounded-xl p-2 animate-in fade-in-0 zoom-in-95">
                  {servicesItems.map((item) => (
                    <DropdownMenuItem key={item.label} asChild className="rounded-lg hover:bg-primary hover:text-white focus:bg-primary focus:text-white cursor-pointer transition-colors">
                      <Link to={item.path} className="w-full px-3 py-2.5">
                        <span className="font-medium">{item.label}</span>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Career */}
              <Link
                to="/career"
                className="px-4 py-2 text-sm font-medium text-foreground rounded-lg hover:bg-primary/5 hover:text-primary transition-all duration-200"
              >
                Career
              </Link>
            </nav>
          )}

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {isAdmin && (
              <Link to="/admin">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="hidden lg:flex items-center gap-2 border-primary/30 hover:border-primary hover:bg-primary/5 transition-all duration-300"
                >
                  <Shield className="h-4 w-4" />
                  <span>Admin</span>
                </Button>
              </Link>
            )}

            {/* User Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full border-primary/30 hover:border-primary hover:bg-primary/5 transition-all duration-300"
                >
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-background/95 backdrop-blur-lg border border-border/50 shadow-xl z-[100] rounded-xl p-2 animate-in fade-in-0 zoom-in-95">
                <DropdownMenuItem asChild className="rounded-lg hover:bg-primary hover:text-white focus:bg-primary focus:text-white cursor-pointer transition-colors">
                  <Link to="/profile" className="w-full px-3 py-2.5">
                    <span className="font-medium">Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="rounded-lg hover:bg-primary hover:text-white focus:bg-primary focus:text-white cursor-pointer transition-colors">
                  <Link to="/pricing" className="w-full px-3 py-2.5">
                    <span className="font-medium">Subscription</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={handleSignOut}
                  className="rounded-lg hover:bg-destructive/10 focus:bg-destructive/10 cursor-pointer text-destructive transition-colors"
                >
                  <span className="w-full px-3 py-2.5 font-medium">Sign Out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden rounded-full hover:bg-primary/5 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && hasActiveSubscription && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-border/40 bg-background/98 backdrop-blur-lg"
            >
              <nav className="container px-4 py-6 space-y-2 max-h-[calc(100vh-5rem)] overflow-y-auto">
                {/* Buy & Sell */}
                <Link
                  to="/buy-sell"
                  className="block px-4 py-3 text-sm font-medium text-foreground hover:bg-primary/5 hover:text-primary rounded-lg transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Buy & Sell
                </Link>

                {/* About Submenu */}
                <div className="space-y-1">
                  <div className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wide">About</div>
                  <Link
                    to="/about"
                    className="block px-6 py-2.5 text-sm text-muted-foreground hover:bg-primary hover:text-white rounded-lg transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link
                    to="/our-methodology"
                    className="block px-6 py-2.5 text-sm text-muted-foreground hover:bg-primary hover:text-white rounded-lg transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Our Methodology
                  </Link>
                  <Link
                    to="/partnerships"
                    className="block px-6 py-2.5 text-sm text-muted-foreground hover:bg-primary hover:text-white rounded-lg transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Strategic Alliances & Delegations
                  </Link>
                  <Link
                    to="/careers-detailed"
                    className="block px-6 py-2.5 text-sm text-muted-foreground hover:bg-primary hover:text-white rounded-lg transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Careers at Polymer Bazaar
                  </Link>
                </div>

                {/* Crude & Feedstock */}
                <div className="space-y-1 mt-2">
                  <div className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    Crude & Feedstock
                  </div>
                  {crudeFeedstockItems.slice(0, 5).map((item) => (
                    <Link
                      key={item.label}
                      to={item.path}
                      className="block px-6 py-2.5 text-sm text-muted-foreground hover:bg-primary hover:text-white rounded-lg transition-all duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                {/* Career in Mobile */}
                <Link
                  to="/career"
                  className="block px-4 py-3 text-sm font-medium text-foreground hover:bg-primary hover:text-white rounded-lg transition-all duration-200 mt-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Career
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <SubscriptionModal 
        open={showSubscriptionModal} 
        onOpenChange={setShowSubscriptionModal} 
      />
    </>
  );
};

export default Header;
