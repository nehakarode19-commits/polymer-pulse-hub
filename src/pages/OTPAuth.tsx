import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { Mail, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

type Step = "email" | "otp" | "signup";

const OTPAuth = () => {
  const navigate = useNavigate();
  const { sendEmailOTP, verifyEmailOTP, completeSignup } = useAuth();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState<Step>("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [resendTimer, setResendTimer] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
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
      await sendEmailOTP(email);
      setStep("otp");
      startResendTimer();
      toast({
        title: "OTP Sent",
        description: "Please check your email for the verification code.",
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
      const { isNewUser } = await verifyEmailOTP(email, otp);
      
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
      await completeSignup(formData.name, formData.phone);
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
      await sendEmailOTP(email);
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
      setStep("email");
      setOtp("");
    } else if (step === "signup") {
      setStep("otp");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-background via-background to-primary/5">
      <Card className="w-full max-w-md shadow-lg border-border/50">
        <CardHeader className="text-center space-y-3 pb-6">
          <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            <Mail className="w-8 h-8 text-primary" />
          </div>
          <CardTitle className="text-2xl font-bold">
            {step === "email" && "Enter Email Address"}
            {step === "otp" && "Verify OTP"}
            {step === "signup" && "Complete Your Profile"}
          </CardTitle>
          <CardDescription className="text-base">
            {step === "email" && "We'll send you a verification code"}
            {step === "otp" && `Code sent to ${email}`}
            {step === "signup" && "Just a few more details to get started"}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {step !== "email" && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleBack}
              className="mb-2 -mt-2 hover:bg-primary hover:text-white"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          )}

          {step === "email" && (
            <form onSubmit={handleSendOTP} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-11 text-base"
                />
              </div>

              <Button
                type="submit"
                disabled={loading || !email}
                className="w-full h-11 text-base font-semibold"
              >
                {loading ? "Sending..." : "Send OTP"}
              </Button>

              <p className="text-xs text-center text-muted-foreground pt-2">
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
          )}

          {step === "otp" && (
            <div className="space-y-6">
              <div className="space-y-4">
                <Label className="text-center block text-sm font-medium">
                  Enter 6-Digit OTP
                </Label>
                <div className="flex justify-center">
                  <InputOTP
                    maxLength={6}
                    value={otp}
                    onChange={setOtp}
                  >
                    <InputOTPGroup className="gap-2">
                      <InputOTPSlot index={0} className="w-12 h-12 text-lg" />
                      <InputOTPSlot index={1} className="w-12 h-12 text-lg" />
                      <InputOTPSlot index={2} className="w-12 h-12 text-lg" />
                      <InputOTPSlot index={3} className="w-12 h-12 text-lg" />
                      <InputOTPSlot index={4} className="w-12 h-12 text-lg" />
                      <InputOTPSlot index={5} className="w-12 h-12 text-lg" />
                    </InputOTPGroup>
                  </InputOTP>
                </div>
              </div>

              <Button
                onClick={handleVerifyOTP}
                disabled={loading || otp.length !== 6}
                className="w-full h-11 text-base font-semibold"
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
          )}

          {step === "signup" && (
            <form onSubmit={handleCompleteSignup} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">
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
                  className="h-11"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium">
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91 9876543210"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                  className="h-11"
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full h-11 text-base font-semibold"
              >
                {loading ? "Creating Account..." : "Complete Signup"}
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default OTPAuth;
