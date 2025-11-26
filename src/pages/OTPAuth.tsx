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
    <div className="min-h-screen flex items-center justify-center px-4 py-16 bg-muted/30">
      <div className="w-full max-w-[480px] bg-background rounded-2xl shadow-2xl p-8 md:p-12 border border-border/50">
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <h1 className="text-[40px] font-bold text-primary mb-2">
            Polymer Bazaar
          </h1>
        </div>
        {/* Phone Entry Step */}
        {/* Phone Entry Step */}
        {step === "phone" && (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-[28px] font-bold text-foreground">
                Welcome Back
              </h2>
              <p className="text-[14px] text-muted-foreground">
                Please fill in your details below to continue
              </p>
            </div>

            <form onSubmit={handleSendOTP} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="phone" className="text-[14px] font-semibold text-foreground block">
                  Mobile Number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your mobile number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="h-12 text-[15px] bg-background border-input rounded-lg px-4"
                />
              </div>

              <Button
                type="submit"
                disabled={loading || !phone}
                className="w-full h-12 text-[16px] font-semibold bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg"
              >
                {loading ? "Sending OTP..." : "Send OTP"}
              </Button>

              <div className="text-center">
                <p className="text-[14px] text-muted-foreground">
                  Don't have an account?{" "}
                  <span className="text-primary font-semibold cursor-pointer hover:underline">
                    Sign Up
                  </span>
                </p>
              </div>

              <p className="text-center text-[13px] text-muted-foreground/80 pt-2">
                Unlock valuable insights into polymer pricing and market trends
              </p>
            </form>
          </div>
        )}

        {/* OTP Verification Step */}
        {/* OTP Verification Step */}
        {step === "otp" && (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-[28px] font-bold text-foreground">
                Verify OTP
              </h2>
              <p className="text-[14px] text-muted-foreground">
                Enter the 6-digit code sent to your mobile
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-[14px] font-semibold text-foreground block">
                  Mobile Number
                </label>
                <Input
                  type="tel"
                  value={phone}
                  disabled
                  className="h-12 text-[15px] bg-muted/50 border-input rounded-lg px-4"
                />
              </div>

              <div className="space-y-3">
                <label className="text-[14px] font-semibold text-foreground block">
                  Enter OTP
                </label>
                <div className="flex gap-2 justify-center">
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
                      className="w-12 h-12 text-center text-[20px] font-semibold border-2 border-input rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none bg-background transition-all"
                    />
                  ))}
                </div>
              </div>

              <Button
                onClick={handleVerifyOTP}
                disabled={loading || otp.length !== 6}
                className="w-full h-12 text-[16px] font-semibold bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg"
              >
                {loading ? "Verifying..." : "Verify OTP"}
              </Button>

              <div className="text-center">
                <p className="text-[14px] text-muted-foreground">
                  Didn't receive the OTP?{" "}
                  {resendTimer > 0 ? (
                    <span className="text-primary font-semibold">{resendTimer}s</span>
                  ) : (
                    <button
                      type="button"
                      onClick={handleResendOTP}
                      disabled={loading}
                      className="text-primary font-semibold hover:underline disabled:opacity-50"
                    >
                      Resend OTP
                    </button>
                  )}
                </p>
              </div>

              <p className="text-center text-[13px] text-muted-foreground/80 pt-2">
                Unlock valuable insights into polymer pricing and market trends
              </p>
            </div>
          </div>
        )}

        {/* Signup Completion Step */}
        {step === "signup" && (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-[28px] font-bold text-foreground">
                Complete Your Profile
              </h2>
              <p className="text-[14px] text-muted-foreground">
                Please fill in your details below to continue
              </p>
            </div>

            <form onSubmit={handleCompleteSignup} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-[14px] font-semibold text-foreground block">
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
                  className="h-12 text-[15px] bg-background border-input rounded-lg px-4"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone-signup" className="text-[14px] font-semibold text-foreground block">
                  Mobile Number
                </label>
                <Input
                  id="phone-signup"
                  type="tel"
                  value={phone}
                  disabled
                  className="h-12 text-[15px] bg-muted/50 border-input rounded-lg px-4"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-[14px] font-semibold text-foreground block">
                  Email Address <span className="text-primary">*</span>
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="h-12 text-[15px] bg-background border-input rounded-lg px-4"
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full h-12 text-[16px] font-semibold bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg"
              >
                {loading ? "Creating Account..." : "Sign Up"}
              </Button>

              <p className="text-center text-[13px] text-muted-foreground/80 pt-2">
                Unlock valuable insights into polymer pricing and market trends
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default OTPAuth;
