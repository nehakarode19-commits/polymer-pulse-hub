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
import { Menu, User, ChevronDown } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { SubscriptionModal } from "@/components/SubscriptionModal";
import { useUserRole } from "@/hooks/useUserRole";
import { Shield } from "lucide-react";

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
    { label: "Rate Revision", path: "/indian-bazaar" },
    { label: "Price Prediction", path: "/indian-bazaar" },
    { label: "Company Price List", path: "/indian-bazaar" },
    { label: "US$-INR Custom Exchange Rate", path: "/indian-bazaar" },
    { label: "BOPP Film ( TT & NTT )", path: "/indian-bazaar" },
    { label: "Indian Government Policies", path: "/indian-bazaar" },
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
    { label: "Whatsapp Chatbot", path: "/whatsapp-chatbot" },
  ];

  // Show subscription modal when non-subscribed user tries to access content
  const handleRestrictedAccess = () => {
    if (!user) {
      navigate("/login");
    } else {
      setShowSubscriptionModal(true);
    }
  };

  // Only show navigation items if user has active subscription
  const showNavigation = user && hasActiveSubscription();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-white/95 backdrop-blur-md shadow-md">
      <div className="container flex h-16 sm:h-20 items-center justify-between px-4 sm:px-6">
        {/* Logo - Always visible and clickable to Home */}
        <Link to="/" className="flex items-center flex-shrink-0" aria-label="Go to Polymer Bazaar home">
          <img
            src={logoNav}
            alt="Polymer Bazaar"
            className="h-10 sm:h-12 w-auto object-contain hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Desktop Navigation - Modern and attractive */}
        {showNavigation && (
          <nav className="hidden lg:flex items-center justify-center flex-1 gap-1 mx-4 xl:mx-8">
            {/* Buy & Sell */}
            <Link
              to="/buy-sell"
              className="px-4 py-2.5 text-sm font-medium text-foreground rounded-lg hover:bg-primary/5 hover:text-primary transition-all duration-200 whitespace-nowrap"
            >
              Buy & Sell
            </Link>

            {/* About Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="px-4 py-2.5 text-sm font-medium text-foreground rounded-lg hover:bg-primary/5 hover:text-primary transition-all duration-200 h-auto">
                  About
                  <ChevronDown className="ml-1.5 h-4 w-4 transition-transform group-hover:rotate-180" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white border border-border/50 shadow-xl z-[100] rounded-lg p-2">
                <DropdownMenuItem asChild className="rounded-md hover:bg-primary/5 focus:bg-primary/5 cursor-pointer">
                  <Link to="/about" className="w-full px-3 py-2">
                    About Us
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="rounded-md hover:bg-primary/5 focus:bg-primary/5 cursor-pointer">
                  <Link to="/team" className="w-full px-3 py-2">
                    Team
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="rounded-md hover:bg-primary/5 focus:bg-primary/5 cursor-pointer">
                  <Link to="/timeline" className="w-full px-3 py-2">
                    Timeline
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="rounded-md hover:bg-primary/5 focus:bg-primary/5 cursor-pointer">
                  <Link to="/media" className="w-full px-3 py-2">
                    Media
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="rounded-md hover:bg-primary/5 focus:bg-primary/5 cursor-pointer">
                  <Link to="/press" className="w-full px-3 py-2">
                    Press
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            {/* Crude & Feedstock Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="px-4 py-2.5 text-sm font-medium text-foreground rounded-lg hover:bg-primary/5 hover:text-primary transition-all duration-200 h-auto">
                  Crude & Feedstock
                  <ChevronDown className="ml-1.5 h-4 w-4 transition-transform group-hover:rotate-180" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white border border-border/50 shadow-xl z-[100] rounded-lg p-2 max-h-80 overflow-y-auto">
                {crudeFeedstockItems.map((item) => (
                  <DropdownMenuItem key={item.label} asChild className="rounded-md hover:bg-primary/5 focus:bg-primary/5 cursor-pointer">
                    <Link to={item.path} className="w-full px-3 py-2">
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Global Bazaar Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="px-4 py-2.5 text-sm font-medium text-foreground rounded-lg hover:bg-primary/5 hover:text-primary transition-all duration-200 h-auto">
                  Global Bazaar
                  <ChevronDown className="ml-1.5 h-4 w-4 transition-transform group-hover:rotate-180" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white border border-border/50 shadow-xl z-[100] rounded-lg p-2 max-h-80 overflow-y-auto">
                {globalBazaarItems.map((item) => (
                  <DropdownMenuItem key={item.label} asChild className="rounded-md hover:bg-primary/5 focus:bg-primary/5 cursor-pointer">
                    <Link to={item.path} className="w-full px-3 py-2">
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Indian Bazaar Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="px-4 py-2.5 text-sm font-medium text-foreground rounded-lg hover:bg-primary/5 hover:text-primary transition-all duration-200 h-auto">
                  Indian Bazaar
                  <ChevronDown className="ml-1.5 h-4 w-4 transition-transform group-hover:rotate-180" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white border border-border/50 shadow-xl z-[100] rounded-lg p-2 max-h-80 overflow-y-auto">
                {indianBazaarItems.map((item) => (
                  <DropdownMenuItem key={item.label} asChild className="rounded-md hover:bg-primary/5 focus:bg-primary/5 cursor-pointer">
                    <Link to={item.path} className="w-full px-3 py-2">
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Historical Data Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="px-4 py-2.5 text-sm font-medium text-foreground rounded-lg hover:bg-primary/5 hover:text-primary transition-all duration-200 h-auto">
                  Historical Data
                  <ChevronDown className="ml-1.5 h-4 w-4 transition-transform group-hover:rotate-180" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white border border-border/50 shadow-xl z-[100] rounded-lg p-2">
                {historicalDataItems.map((item) => (
                  <DropdownMenuItem key={item.label} asChild className="rounded-md hover:bg-primary/5 focus:bg-primary/5 cursor-pointer">
                    <Link to={item.path} className="w-full px-3 py-2">
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Future Trend Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="px-4 py-2.5 text-sm font-medium text-foreground rounded-lg hover:bg-primary/5 hover:text-primary transition-all duration-200 h-auto">
                  Future Trend
                  <ChevronDown className="ml-1.5 h-4 w-4 transition-transform group-hover:rotate-180" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white border border-border/50 shadow-xl z-[100] rounded-lg p-2 max-h-96 overflow-y-auto">
                {futureTrendItems.map((item) => (
                  <DropdownMenuItem key={item.label} asChild className="rounded-md hover:bg-primary/5 focus:bg-primary/5 cursor-pointer">
                    <Link to={item.path} className="w-full px-3 py-2">
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="px-4 py-2.5 text-sm font-medium text-foreground rounded-lg hover:bg-primary/5 hover:text-primary transition-all duration-200 h-auto">
                  Services
                  <ChevronDown className="ml-1.5 h-4 w-4 transition-transform group-hover:rotate-180" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white border border-border/50 shadow-xl z-[100] rounded-lg p-2">
                {servicesItems.map((item) => (
                  <DropdownMenuItem key={item.label} asChild className="rounded-md hover:bg-primary/5 focus:bg-primary/5 cursor-pointer">
                    <Link to={item.path} className="w-full px-3 py-2">
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Career */}
            <Link
              to="/career"
              className="px-4 py-2.5 text-sm font-medium text-foreground rounded-lg hover:bg-primary/5 hover:text-primary transition-all duration-200"
            >
              Career
            </Link>
          </nav>
        )}

        {/* Right Side Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {user ? (
            <>
              {/* Admin Button - Only visible to admins */}
              {isAdmin && (
                <Button asChild variant="outline" size="sm" className="hidden sm:flex border-primary/30 text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-200">
                  <Link to="/admin">
                    <Shield className="h-4 w-4 sm:mr-2" />
                    <span className="hidden sm:inline">Admin</span>
                  </Link>
                </Button>
              )}
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2 rounded-lg hover:bg-primary/5 transition-all duration-200 h-9 sm:h-10 px-2 sm:px-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                    </div>
                    <span className="hidden md:inline font-medium text-sm">{user.email?.split('@')[0]}</span>
                    <ChevronDown className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-white border border-border/50 shadow-xl z-[100] rounded-lg p-2">
                  <DropdownMenuItem asChild className="rounded-md hover:bg-primary/5 focus:bg-primary/5 cursor-pointer">
                    <Link to="/profile" className="w-full px-3 py-2">
                      <User className="h-4 w-4 mr-2 inline" />
                      My Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="rounded-md hover:bg-primary/5 focus:bg-primary/5 cursor-pointer">
                    <Link to="/pricing" className="w-full px-3 py-2">
                      <Shield className="h-4 w-4 mr-2 inline" />
                      My Subscription
                    </Link>
                  </DropdownMenuItem>
                  <div className="h-px bg-border/50 my-1" />
                  <DropdownMenuItem onClick={signOut} className="rounded-md hover:bg-destructive/10 focus:bg-destructive/10 cursor-pointer text-destructive px-3 py-2">
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              {isAdmin && (
                <Button asChild variant="outline" size="sm" className="hidden sm:flex border-primary/30 text-primary hover:bg-primary hover:text-white transition-all duration-200">
                  <Link to="/admin">
                    <Shield className="h-4 w-4" />
                  </Link>
                </Button>
              )}
              <Button asChild size="sm" className="bg-primary hover:bg-primary-dark shadow-sm hover:shadow-md transition-all duration-200 h-9 text-sm">
                <Link to="/login">Login</Link>
              </Button>
            </>
          )}

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden hover:bg-primary/5 transition-all duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && showNavigation && (
        <div className="lg:hidden border-t border-border/50 bg-white/95 backdrop-blur-md shadow-lg">
          <nav className="container px-4 py-4 space-y-1">
            {/* Home */}
            <Link
              to="/"
              className="block px-4 py-3 text-sm font-medium text-foreground hover:bg-primary/5 hover:text-primary rounded-lg transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            {/* Buy & Sell */}
            <Link
              to="/buy-sell"
              className="block px-4 py-3 text-sm font-medium text-foreground hover:bg-primary/5 hover:text-primary rounded-lg transition-all duration-200 whitespace-nowrap"
              onClick={() => setIsMenuOpen(false)}
            >
              Buy & Sell
            </Link>

            {/* About Submenu */}
            <div className="space-y-1">
              <div className="px-4 py-2 text-xs font-semibold text-muted-foreground">About</div>
              <Link
                to="/about"
                className="block px-6 py-2.5 text-sm text-muted-foreground hover:bg-primary/5 hover:text-primary rounded-lg transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/team"
                className="block px-6 py-2.5 text-sm text-muted-foreground hover:bg-primary/5 hover:text-primary rounded-lg transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Team
              </Link>
              <Link
                to="/timeline"
                className="block px-6 py-2.5 text-sm text-muted-foreground hover:bg-primary/5 hover:text-primary rounded-lg transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Timeline
              </Link>
              <Link
                to="/media"
                className="block px-6 py-2.5 text-sm text-muted-foreground hover:bg-primary/5 hover:text-primary rounded-lg transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Media
              </Link>
              <Link
                to="/press"
                className="block px-6 py-2.5 text-sm text-muted-foreground hover:bg-primary/5 hover:text-primary rounded-lg transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Press
              </Link>
            </div>

            {/* Career */}
            <Link
              to="/career"
              className="block px-4 py-3 text-sm font-medium text-foreground hover:bg-primary/5 hover:text-primary rounded-lg transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Career
            </Link>
                
            {/* Crude & Feedstock in Mobile */}
            <div className="space-y-1 mt-2">
              <div className="px-4 py-2 text-sm font-bold text-foreground/80 uppercase tracking-wide">
                Crude & Feedstock
              </div>
              {crudeFeedstockItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="block px-8 py-2.5 text-sm text-foreground hover:bg-primary/5 hover:text-primary rounded-lg transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Global Bazaar in Mobile */}
            <div className="space-y-1 mt-2">
              <div className="px-4 py-2 text-sm font-bold text-foreground/80 uppercase tracking-wide">
                Global Bazaar
              </div>
              {globalBazaarItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="block px-8 py-2.5 text-sm text-foreground hover:bg-primary/5 hover:text-primary rounded-lg transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Indian Bazaar in Mobile */}
            <div className="space-y-1 mt-2">
              <div className="px-4 py-2 text-sm font-bold text-foreground/80 uppercase tracking-wide">
                Indian Bazaar
              </div>
              {indianBazaarItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="block px-8 py-2.5 text-sm text-foreground hover:bg-primary/5 hover:text-primary rounded-lg transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Historical Data in Mobile */}
            <div className="space-y-1 mt-2">
              <div className="px-4 py-2 text-sm font-bold text-foreground/80 uppercase tracking-wide">
                Historical Data
              </div>
              {historicalDataItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="block px-8 py-2.5 text-sm text-foreground hover:bg-primary/5 hover:text-primary rounded-lg transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Future Trend in Mobile */}
            <div className="space-y-1 mt-2">
              <div className="px-4 py-2 text-sm font-bold text-foreground/80 uppercase tracking-wide">
                Future Trend
              </div>
              {futureTrendItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="block px-8 py-2.5 text-sm text-foreground hover:bg-primary/5 hover:text-primary rounded-lg transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Services in Mobile */}
            <div className="space-y-1 mt-2">
              <div className="px-4 py-2 text-sm font-bold text-foreground/80 uppercase tracking-wide">
                Services
              </div>
              {servicesItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="block px-8 py-2.5 text-sm text-foreground hover:bg-primary/5 hover:text-primary rounded-lg transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
            ))}
          </div>
          </nav>
        </div>
      )}

      <SubscriptionModal 
        open={showSubscriptionModal} 
        onOpenChange={setShowSubscriptionModal} 
      />
    </header>
  );
};

export default Header;
