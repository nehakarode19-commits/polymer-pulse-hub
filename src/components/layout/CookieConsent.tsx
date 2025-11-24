import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleSettings = () => {
    // This would open a settings modal in a real app
    localStorage.setItem("cookie-consent", "custom");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-300">
      <Card className="max-w-lg mx-4 p-6 shadow-xl">
        <h2 className="text-2xl font-bold mb-4">We Care Your Privacy</h2>
        <p className="text-muted-foreground mb-4">
          We use cookies and similar technologies to help provide better user experience, analyze 
          traffic, and tailor content. By clicking &quot;Accept all Cookies&quot;, you agree to store 
          cookies on your device.
        </p>
        <Link
          to="/privacy"
          className="text-primary hover:underline text-sm mb-6 inline-block"
        >
          More about how we use cookies →
        </Link>
        <div className="flex flex-col sm:flex-row gap-3 justify-end">
          <Button
            variant="outline"
            onClick={handleSettings}
            className="order-2 sm:order-1"
          >
            Cookie Settings
          </Button>
          <Button
            onClick={handleAccept}
            className="bg-primary hover:bg-primary-dark order-1 sm:order-2"
          >
            Accept all Cookies
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default CookieConsent;
