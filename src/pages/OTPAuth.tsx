import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
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

  useEffect(() => {
    if (resendTimer > 0) {
      const interval = setInterval(() => {
        setResendTimer((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [resendTimer]);

  const startResendTimer = () => {
    setResendTimer(30);
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
          title: "Signup OTP Verified Successfully!",
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

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) {
      value = value[0];
    }
    
    const newOtp = otp.split("");
    newOtp[index] = value;
    setOtp(newOtp.join(""));

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
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

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16 bg-background">
      <div className="w-full max-w-[500px]">
        {/* Phone Entry Step */}
        {step === "phone" && (
          <div className="space-y-6">
            <div className="space-y-3">
              <h1 className="text-[36px] font-bold text-foreground">
                Welcome to Polymer Bazaar
              </h1>
              <p className="text-[16px] text-muted-foreground">
                Sign in or create a new account using your mobile number.
              </p>
            </div>

            <form onSubmit={handleSendOTP} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="phone" className="text-[14px] font-medium text-foreground">
                  Mobile Number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter Mobile Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="h-12 text-[15px] bg-background border-input rounded-md"
                />
              </div>

              <Button
                type="submit"
                disabled={loading || !phone}
                className="w-full h-12 text-[16px] font-semibold bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                {loading ? "Sending OTP..." : "Send OTP"}
              </Button>

              <p className="text-center text-[13px] text-muted-foreground mt-2">
                This screen automatically handles both{" "}
                <span className="font-semibold text-foreground">Login</span> and{" "}
                <span className="font-semibold text-foreground">Signup</span>
              </p>
            </form>
          </div>
        )}

        {/* OTP Verification Step */}
        {step === "otp" && (
          <div className="space-y-6">
            <div className="space-y-3">
              <h1 className="text-[36px] font-bold text-foreground">
                Verify Your Number
              </h1>
              <p className="text-[16px] text-muted-foreground">
                Enter the 6-digit OTP sent to your mobile number.
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-[14px] font-medium text-foreground">
                  Mobile Number
                </label>
                <Input
                  type="tel"
                  value={phone}
                  disabled
                  className="h-12 text-[15px] bg-muted/50 border-input rounded-md"
                />
              </div>

              <div className="flex gap-3 justify-center">
                {[0, 1, 2, 3, 4, 5].map((index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={otp[index] || ""}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleOtpKeyDown(index, e)}
                    className="w-12 h-12 text-center text-[20px] font-semibold border-2 border-input rounded-md focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none bg-background transition-all"
                  />
                ))}
              </div>

              <Button
                onClick={handleVerifyOTP}
                disabled={loading || otp.length !== 6}
                className="w-full h-12 text-[16px] font-semibold bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                {loading ? "Verifying..." : "Verify OTP"}
              </Button>

              <div className="text-center">
                <p className="text-[14px] text-muted-foreground">
                  Didn't receive the OTP?{" "}
                  {resendTimer > 0 ? (
                    <span className="text-primary font-medium">{resendTimer}s</span>
                  ) : (
                    <button
                      type="button"
                      onClick={handleResendOTP}
                      disabled={loading}
                      className="text-primary font-medium hover:underline disabled:opacity-50"
                    >
                      Resend OTP
                    </button>
                  )}
                </p>
              </div>

              <p className="text-center text-[13px] text-muted-foreground mt-2">
                After verification, we'll automatically detect if you're a new or existing user.
              </p>
            </div>
          </div>
        )}

        {/* Signup Completion Step */}
        {step === "signup" && (
          <div className="space-y-6">
            <div className="space-y-3">
              <h1 className="text-[36px] font-bold text-foreground">
                Complete Your Profile
              </h1>
              <p className="text-[16px] text-muted-foreground">
                You're new here! Let's complete your account setup.
              </p>
            </div>

            <form onSubmit={handleCompleteSignup} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-[14px] font-medium text-foreground">
                  Name <span className="text-primary">*</span>
                </label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="h-12 text-[15px] bg-background border-input rounded-md"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone-signup" className="text-[14px] font-medium text-foreground">
                  Mobile Number
                </label>
                <Input
                  id="phone-signup"
                  type="tel"
                  value={phone}
                  disabled
                  className="h-12 text-[15px] bg-muted/50 border-input rounded-md"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-[14px] font-medium text-foreground">
                  Email <span className="text-primary">*</span>
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Please enter your email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="h-12 text-[15px] bg-background border-input rounded-md"
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full h-12 text-[16px] font-semibold bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                {loading ? "Creating Account..." : "Sign up"}
              </Button>

              <p className="text-center text-[13px] text-muted-foreground mt-2">
                Once completed, you'll be directed to choose a membership plan.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default OTPAuth;
