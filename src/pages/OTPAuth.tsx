import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { Phone, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

type Step = "phone" | "otp" | "signup";

const OTPAuth = () => {
  const navigate = useNavigate();
  const { sendOTP, verifyOTP, completeSignup } = useAuth();
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
      await sendOTP(phone);
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
    if (otp.length !== 4) {
      toast({
        title: "Invalid OTP",
        description: "Please enter the 4-digit OTP",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const { isNewUser } = await verifyOTP(phone, otp);
      
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
      await sendOTP(phone);
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
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-background via-background to-primary/5">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center space-y-3">
          <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            <Phone className="w-8 h-8 text-primary" />
          </div>
          <CardTitle className="text-2xl font-bold">
            {step === "phone" && "Enter Mobile Number"}
            {step === "otp" && "Verify OTP"}
            {step === "signup" && "Complete Your Profile"}
          </CardTitle>
          <CardDescription>
            {step === "phone" && "We'll send you a verification code"}
            {step === "otp" && `Code sent to ${phone}`}
            {step === "signup" && "Just a few more details to get started"}
          </CardDescription>
        </CardHeader>

        <CardContent>
          {step !== "phone" && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleBack}
              className="mb-4 -mt-2"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          )}

          {step === "phone" && (
            <form onSubmit={handleSendOTP} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Mobile Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91 9876543210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="text-base"
                />
              </div>

              <Button
                type="submit"
                disabled={loading || !phone}
                className="w-full"
              >
                {loading ? "Sending..." : "Send OTP"}
              </Button>
            </form>
          )}

          {step === "otp" && (
            <div className="space-y-6">
              <div className="space-y-3">
                <Label className="text-center block">Enter 4-Digit OTP</Label>
                <div className="flex justify-center">
                  <InputOTP
                    maxLength={4}
                    value={otp}
                    onChange={setOtp}
                  >
                    <InputOTPGroup>
                      <InputOTPSlot index={0} className="w-14 h-14 text-xl" />
                      <InputOTPSlot index={1} className="w-14 h-14 text-xl" />
                      <InputOTPSlot index={2} className="w-14 h-14 text-xl" />
                      <InputOTPSlot index={3} className="w-14 h-14 text-xl" />
                    </InputOTPGroup>
                  </InputOTP>
                </div>
              </div>

              <Button
                onClick={handleVerifyOTP}
                disabled={loading || otp.length !== 4}
                className="w-full"
              >
                {loading ? "Verifying..." : "Verify & Continue"}
              </Button>

              <div className="text-center">
                <button
                  type="button"
                  onClick={handleResendOTP}
                  disabled={resendTimer > 0 || loading}
                  className="text-sm text-muted-foreground hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {resendTimer > 0
                    ? `Resend OTP in ${resendTimer}s`
                    : "Resend OTP"}
                </button>
              </div>
            </div>
          )}

          {step === "signup" && (
            <form onSubmit={handleCompleteSignup} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full"
              >
                {loading ? "Creating Account..." : "Complete Signup"}
              </Button>
            </form>
          )}

          <p className="text-xs text-center text-muted-foreground mt-6">
            By continuing, you agree to our Terms & Conditions and Privacy Policy
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default OTPAuth;
