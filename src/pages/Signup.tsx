import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const Signup = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  // Redirect to OTP auth or pricing if logged in
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
