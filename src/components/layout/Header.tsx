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
    { label: "Crude & Feedstock", path: "/crude-feedstock" },
    { label: "Global Bazaar", path: "/global-bazaar" },
    { label: "Indian Bazaar", path: "/indian-bazaar" },
    { label: "Historical Data", path: "/historical-data" },
    { label: "Future Trend", path: "/future-trend" },
    { label: "Services", path: "/services" },
    { label: "Career", path: "/career" },
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
          </nav>
        )}
        
        {/* Show Pricing link for non-subscribed users */}
        {!showNavigation && (
          <nav className="hidden lg:flex items-center">
            <Button 
              onClick={handleRestrictedAccess}
              variant="outline"
              className="mr-2"
            >
              View Membership Plans
            </Button>
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
      {isMenuOpen && (
        <div className="lg:hidden border-t bg-background">
          <nav className="container px-4 py-4 space-y-2">
            {showNavigation ? (
              mainMenuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))
            ) : (
              <Button 
                onClick={() => {
                  handleRestrictedAccess();
                  setIsMenuOpen(false);
                }}
                variant="outline"
                className="w-full"
              >
                View Membership Plans
              </Button>
            )}
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
