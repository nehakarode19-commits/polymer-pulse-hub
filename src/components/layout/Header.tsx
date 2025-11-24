import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, User, ChevronDown } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { SubscriptionModal } from "@/components/SubscriptionModal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  const { user, signOut, hasActiveSubscription } = useAuth();
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
    { label: "Events", path: "/services" },
    { label: "Press Release", path: "/services" },
    { label: "Whatsapp Chatbot", path: "/services" },
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
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Polymer Bazaar" className="h-14 w-auto" />
        </Link>

        {/* Desktop Navigation - Only show if subscribed */}
        {showNavigation && (
          <nav className="hidden lg:flex items-center space-x-1">
            {mainMenuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted rounded-md transition-colors"
              >
                {item.label}
              </Link>
            ))}
            
            {/* Crude & Feedstock Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted">
                  Crude & Feedstock
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-background">
                {crudeFeedstockItems.map((item) => (
                  <DropdownMenuItem key={item.label} asChild>
                    <Link to={item.path} className="cursor-pointer">
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Global Bazaar Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted">
                  Global Bazaar
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-background">
                {globalBazaarItems.map((item) => (
                  <DropdownMenuItem key={item.label} asChild>
                    <Link to={item.path} className="cursor-pointer">
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Indian Bazaar Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted">
                  Indian Bazaar
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-background">
                {indianBazaarItems.map((item) => (
                  <DropdownMenuItem key={item.label} asChild>
                    <Link to={item.path} className="cursor-pointer">
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Historical Data Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted">
                  Historical Data
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-background">
                {historicalDataItems.map((item) => (
                  <DropdownMenuItem key={item.label} asChild>
                    <Link to={item.path} className="cursor-pointer">
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Future Trend Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted">
                  Future Trend
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-background max-h-96 overflow-y-auto">
                {futureTrendItems.map((item) => (
                  <DropdownMenuItem key={item.label} asChild>
                    <Link to={item.path} className="cursor-pointer">
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted">
                  Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-background">
                {servicesItems.map((item) => (
                  <DropdownMenuItem key={item.label} asChild>
                    <Link to={item.path} className="cursor-pointer">
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        )}

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span className="hidden md:inline">{user.email?.split('@')[0]}</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <Link to="/profile">My Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/pricing">My Subscription</Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={signOut}>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button asChild className="bg-primary hover:bg-primary-dark">
              <Link to="/login">Login</Link>
            </Button>
          )}

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && showNavigation && (
        <div className="lg:hidden border-t bg-background">
          <nav className="container px-4 py-4 space-y-2">
            {mainMenuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted rounded-md transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                
                {/* Crude & Feedstock in Mobile */}
                <div className="space-y-1">
                  <div className="px-3 py-2 text-sm font-semibold text-foreground">
                    Crude & Feedstock
                  </div>
                  {crudeFeedstockItems.map((item) => (
                    <Link
                      key={item.label}
                      to={item.path}
                      className="block px-6 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-muted rounded-md transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                {/* Global Bazaar in Mobile */}
                <div className="space-y-1">
                  <div className="px-3 py-2 text-sm font-semibold text-foreground">
                    Global Bazaar
                  </div>
                  {globalBazaarItems.map((item) => (
                    <Link
                      key={item.label}
                      to={item.path}
                      className="block px-6 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-muted rounded-md transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                {/* Indian Bazaar in Mobile */}
                <div className="space-y-1">
                  <div className="px-3 py-2 text-sm font-semibold text-foreground">
                    Indian Bazaar
                  </div>
                  {indianBazaarItems.map((item) => (
                    <Link
                      key={item.label}
                      to={item.path}
                      className="block px-6 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-muted rounded-md transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                {/* Historical Data in Mobile */}
                <div className="space-y-1">
                  <div className="px-3 py-2 text-sm font-semibold text-foreground">
                    Historical Data
                  </div>
                  {historicalDataItems.map((item) => (
                    <Link
                      key={item.label}
                      to={item.path}
                      className="block px-6 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-muted rounded-md transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                {/* Future Trend in Mobile */}
                <div className="space-y-1">
                  <div className="px-3 py-2 text-sm font-semibold text-foreground">
                    Future Trend
                  </div>
                  {futureTrendItems.map((item) => (
                    <Link
                      key={item.label}
                      to={item.path}
                      className="block px-6 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-muted rounded-md transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                {/* Services in Mobile */}
                <div className="space-y-1">
                  <div className="px-3 py-2 text-sm font-semibold text-foreground">
                    Services
                  </div>
                  {servicesItems.map((item) => (
                    <Link
                      key={item.label}
                      to={item.path}
                      className="block px-6 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-muted rounded-md transition-colors"
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
