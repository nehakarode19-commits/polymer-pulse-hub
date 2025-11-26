import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

type Step = "phone" | "otp" | "signup";

const OTPAuth = () => {
  const navigate = useNavigate();
  const { sendPhoneOTP, verifyPhoneOTP, completeSignup } = useAuth();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState<Step>("phone");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [resendTimer, setResendTimer] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const startResendTimer = () => {
    setResendTimer(30);
    const interval = setInterval(() => {
      setResendTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await sendPhoneOTP(phone);
      setStep("otp");
      startResendTimer();
      toast({
        title: "OTP Sent",
        description: "Please check your phone for the verification code.",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to send OTP",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async () => {
    if (otp.length !== 6) {
      toast({
        title: "Invalid OTP",
        description: "Please enter the 6-digit OTP",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const { isNewUser } = await verifyPhoneOTP(phone, otp);
      
      if (isNewUser) {
        setStep("signup");
        toast({
          title: "Welcome!",
          description: "Please complete your profile to continue.",
        });
      } else {
        toast({
          title: "Login Successful",
          description: "Welcome back!",
        });
        navigate("/");
      }
    } catch (error: any) {
      toast({
        title: "Verification Failed",
        description: error.message || "Invalid OTP. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCompleteSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await completeSignup(formData.name, formData.email);
      toast({
        title: "Account Created!",
        description: "Please choose a membership plan to continue.",
      });
    } catch (error: any) {
      toast({
        title: "Signup Failed",
        description: error.message || "Failed to complete signup",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleResendOTP = async () => {
    if (resendTimer > 0) return;
    
    setLoading(true);
    try {
      await sendPhoneOTP(phone);
      startResendTimer();
      toast({
        title: "OTP Resent",
        description: "A new verification code has been sent.",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to resend OTP",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    if (step === "otp") {
      setStep("phone");
      setOtp("");
    } else if (step === "signup") {
      setStep("otp");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12 bg-background">
      <div className="w-full max-w-xl">
        {/* Back Button */}
        {step !== "phone" && (
          <button
            onClick={handleBack}
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </button>
        )}

        {/* Phone Entry Step */}
        {step === "phone" && (
          <div className="space-y-8">
            <div className="space-y-3">
              <h1 className="text-4xl font-bold text-foreground">
                Welcome to Polymer Bazaar
              </h1>
              <p className="text-base text-muted-foreground">
                Please fill in your details below.
              </p>
            </div>

            <form onSubmit={handleSendOTP} className="space-y-6">
              <div className="space-y-3">
                <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                  Mobile Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter Mobile Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="h-12 text-base bg-secondary/50 border-border"
                />
              </div>

              <Button
                type="submit"
                disabled={loading || !phone}
                className="w-full h-12 text-base font-semibold bg-primary hover:bg-primary/90"
              >
                {loading ? "Sending..." : "Send OTP"}
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => setStep("phone")}
                  className="text-primary font-medium hover:underline"
                >
                  Login
                </button>
              </p>
            </form>
          </div>
        )}

        {/* OTP Verification Step */}
        {step === "otp" && (
          <div className="space-y-8">
            <div className="space-y-3">
              <h1 className="text-4xl font-bold text-foreground">
                Verify OTP
              </h1>
              <p className="text-base text-muted-foreground">
                Enter the 6-digit code sent to {phone}
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <Label className="text-sm font-medium text-foreground">
                  Enter OTP
                </Label>
                <div className="flex justify-start">
                  <InputOTP
                    maxLength={6}
                    value={otp}
                    onChange={setOtp}
                  >
                    <InputOTPGroup className="gap-3">
                      <InputOTPSlot index={0} className="w-14 h-14 text-xl border-border" />
                      <InputOTPSlot index={1} className="w-14 h-14 text-xl border-border" />
                      <InputOTPSlot index={2} className="w-14 h-14 text-xl border-border" />
                      <InputOTPSlot index={3} className="w-14 h-14 text-xl border-border" />
                      <InputOTPSlot index={4} className="w-14 h-14 text-xl border-border" />
                      <InputOTPSlot index={5} className="w-14 h-14 text-xl border-border" />
                    </InputOTPGroup>
                  </InputOTP>
                </div>
              </div>

              <Button
                onClick={handleVerifyOTP}
                disabled={loading || otp.length !== 6}
                className="w-full h-12 text-base font-semibold bg-primary hover:bg-primary/90"
              >
                {loading ? "Verifying..." : "Verify & Continue"}
              </Button>

              <div className="text-center">
                <button
                  type="button"
                  onClick={handleResendOTP}
                  disabled={resendTimer > 0 || loading}
                  className="text-sm text-muted-foreground hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {resendTimer > 0
                    ? `Resend OTP in ${resendTimer}s`
                    : "Didn't receive code? Resend OTP"}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Signup Completion Step */}
        {step === "signup" && (
          <div className="space-y-8">
            <div className="space-y-3">
              <h1 className="text-4xl font-bold text-foreground">
                Complete Your Profile
              </h1>
              <p className="text-base text-muted-foreground">
                Just a few more details to get started.
              </p>
            </div>

            <form onSubmit={handleCompleteSignup} className="space-y-6">
              <div className="space-y-3">
                <Label htmlFor="name" className="text-sm font-medium text-foreground">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="h-12 text-base bg-secondary/50 border-border"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="h-12 text-base bg-secondary/50 border-border"
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full h-12 text-base font-semibold bg-primary hover:bg-primary/90"
              >
                {loading ? "Creating Account..." : "Complete Signup"}
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                By continuing, you agree to our{" "}
                <a href="/terms-conditions" className="text-primary hover:underline">
                  Terms & Conditions
                </a>{" "}
                and{" "}
                <a href="/privacy-policy" className="text-primary hover:underline">
                  Privacy Policy
                </a>
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default OTPAuth;
