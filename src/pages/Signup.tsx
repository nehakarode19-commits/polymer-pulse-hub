import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const Signup = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  // Redirect to /auth for OTP login/signup flow
  useEffect(() => {
    if (user) {
      navigate("/pricing");
    } else {
      navigate("/auth");
    }
  }, [user, navigate]);

  return null;
};

export default Signup;
