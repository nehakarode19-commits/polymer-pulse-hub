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
    <div className="min-h-screen flex items-start justify-start px-8 py-16 bg-white">
      <div className="w-full max-w-[540px]">
        {/* Phone Entry Step */}
        {step === "phone" && (
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-[32px] font-bold text-[#1a1a1a]">
                Welcome to Polymer Bazaar
              </h1>
              <p className="text-[15px] text-[#666666]">
                Please fill in your details below.
              </p>
            </div>

            <form onSubmit={handleSendOTP} className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="phone" className="text-[14px] text-[#4a4a4a]">
                  Mobile Number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter Mobile Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="h-12 text-[15px] bg-[#f5f5f5] border-[#e0e0e0] rounded-md"
                />
              </div>

              <Button
                type="submit"
                disabled={loading || !phone}
                className="w-full h-12 text-[16px] font-semibold bg-[#c62828] hover:bg-[#b71c1c] text-white rounded-md"
              >
                {loading ? "Sending..." : "Send OTP"}
              </Button>

              <p className="text-center text-[14px] text-[#666666]">
                Already have an account?{" "}
                <span className="text-[#c62828] font-medium cursor-pointer hover:underline">
                  Login
                </span>
              </p>
            </form>
          </div>
        )}

        {/* OTP Verification Step */}
        {step === "otp" && (
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-[32px] font-bold text-[#1a1a1a]">
                Welcome to Polymer Bazaar
              </h1>
              <p className="text-[15px] text-[#666666]">
                Please fill in your details below.
              </p>
            </div>

            <div className="space-y-5">
              <div className="space-y-2">
                <label className="text-[14px] text-[#4a4a4a]">
                  Mobile Number
                </label>
                <Input
                  type="tel"
                  value={phone}
                  disabled
                  className="h-12 text-[15px] bg-[#f5f5f5] border-[#e0e0e0] rounded-md"
                />
              </div>

              <div className="flex gap-3">
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
                    className="w-14 h-14 text-center text-[20px] font-medium border-2 border-[#e0e0e0] rounded-md focus:border-[#c62828] focus:outline-none bg-white"
                  />
                ))}
              </div>

              <Button
                onClick={handleVerifyOTP}
                disabled={loading || otp.length !== 6}
                className="w-full h-12 text-[16px] font-semibold bg-[#c62828] hover:bg-[#b71c1c] text-white rounded-md"
              >
                {loading ? "Verifying..." : "Verify OTP"}
              </Button>

              <div className="text-center">
                <p className="text-[14px] text-[#666666]">
                  Don't receive the OTP?{" "}
                  {resendTimer > 0 ? (
                    <span className="text-[#c62828] font-medium">{resendTimer}s</span>
                  ) : (
                    <button
                      type="button"
                      onClick={handleResendOTP}
                      disabled={loading}
                      className="text-[#c62828] font-medium hover:underline disabled:opacity-50"
                    >
                      Resend
                    </button>
                  )}
                </p>
              </div>

              <p className="text-center text-[14px] text-[#666666]">
                Already have an account?{" "}
                <span className="text-[#c62828] font-medium cursor-pointer hover:underline">
                  Login
                </span>
              </p>
            </div>
          </div>
        )}

        {/* Signup Completion Step */}
        {step === "signup" && (
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-[32px] font-bold text-[#1a1a1a]">
                Welcome to Polymer Bazaar
              </h1>
              <p className="text-[15px] text-[#666666]">
                Please fill in your details below.
              </p>
            </div>

            <form onSubmit={handleCompleteSignup} className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="name" className="text-[14px] text-[#4a4a4a]">
                  Name <span className="text-[#c62828]">*</span>
                </label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="h-12 text-[15px] bg-[#f5f5f5] border-[#e0e0e0] rounded-md"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone-signup" className="text-[14px] text-[#4a4a4a]">
                  Mobile Number
                </label>
                <Input
                  id="phone-signup"
                  type="tel"
                  value={phone}
                  disabled
                  className="h-12 text-[15px] bg-[#f5f5f5] border-[#e0e0e0] rounded-md"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-[14px] text-[#4a4a4a]">
                  Email <span className="text-[#c62828]">*</span>
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
                  className="h-12 text-[15px] bg-[#f5f5f5] border-[#e0e0e0] rounded-md"
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full h-12 text-[16px] font-semibold bg-[#c62828] hover:bg-[#b71c1c] text-white rounded-md"
              >
                {loading ? "Creating Account..." : "Sign up"}
              </Button>

              <p className="text-center text-[14px] text-[#666666]">
                I already have an account{" "}
                <span className="text-[#c62828] font-medium cursor-pointer hover:underline">
                  Login
                </span>
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default OTPAuth;
