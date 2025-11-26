import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { User, Session } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";

interface Subscription {
  id: string;
  plan_type: string;
  status: string;
  end_date: string | null;
}

interface AuthContextType {
  user: User | null;
  session: Session | null;
  subscription: Subscription | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, fullName: string, phone: string, city: string) => Promise<void>;
  signOut: () => Promise<void>;
  hasActiveSubscription: () => boolean;
  sendPhoneOTP: (phone: string) => Promise<void>;
  verifyPhoneOTP: (phone: string, otp: string) => Promise<{ isNewUser: boolean }>;
  completeSignup: (fullName: string, email: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const USE_MOCK_OTP = true; // Demo-only: mock phone OTP without backend

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [loading, setLoading] = useState(true);
  const [mockPhoneNumber, setMockPhoneNumber] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription: authSubscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        
        // Fetch subscription when user changes
        if (session?.user) {
          setTimeout(() => fetchSubscription(session.user.id), 0);
        } else {
          setSubscription(null);
        }
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchSubscription(session.user.id).finally(() => setLoading(false));
      } else {
        setLoading(false);
      }
    });

    return () => authSubscription.unsubscribe();
  }, []);

  const fetchSubscription = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from("subscriptions")
        .select("*")
        .eq("user_id", userId)
        .maybeSingle();

      if (error) throw error;
      setSubscription(data);
    } catch (error) {
      console.error("Error fetching subscription:", error);
      setSubscription(null);
    }
  };

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;
    navigate("/");
  };

  const signUp = async (email: string, password: string, fullName: string, phone: string, city: string) => {
    const redirectUrl = `${window.location.origin}/pricing`;
    
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: redirectUrl,
        data: {
          full_name: fullName,
          phone: phone,
          city: city,
        },
      },
    });

    if (error) throw error;

    // Update profile with additional info
    if (data.user) {
      await supabase
        .from("profiles")
        .update({ phone, city })
        .eq("id", data.user.id);
    }

    // Redirect to pricing page to choose a plan
    navigate("/pricing");
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    setSubscription(null);
    navigate("/");
  };

  const hasActiveSubscription = () => {
    if (!subscription) return false;
    if (subscription.status !== "active") return false;
    if (subscription.end_date) {
      return new Date(subscription.end_date) > new Date();
    }
    return true;
  };

  const sendPhoneOTP = async (phone: string) => {
    if (USE_MOCK_OTP) {
      // Demo mode: store phone and simulate async OTP send
      setMockPhoneNumber(phone);
      await new Promise((resolve) => setTimeout(resolve, 500));
      console.warn("Mock OTP: Any 6-digit code will work");
      return;
    }

    const { error } = await supabase.auth.signInWithOtp({
      phone,
      options: {
        shouldCreateUser: true,
      },
    });

    if (error) throw error;
  };

  const verifyPhoneOTP = async (phone: string, otp: string) => {
    if (USE_MOCK_OTP) {
      // Accept any 6-digit OTP in demo mode and check for existing user
      if (otp.length !== 6) {
        throw new Error("Please enter a 6-digit OTP");
      }
      
      // Check if user with this phone exists in profiles
      const { data: existingProfile } = await supabase
        .from("profiles")
        .select("id, full_name, email")
        .eq("phone", phone)
        .maybeSingle();
      
      if (existingProfile && existingProfile.full_name && existingProfile.email) {
        // Existing user - sign them in
        const mockUser = {
          id: existingProfile.id,
          phone: phone,
          email: existingProfile.email,
          app_metadata: {},
          user_metadata: { full_name: existingProfile.full_name },
          aud: 'authenticated',
          created_at: new Date().toISOString(),
        } as User;
        
        setUser(mockUser);
        setSession({ user: mockUser, access_token: 'mock-token', refresh_token: 'mock-refresh' } as any);
        return { isNewUser: false };
      }
      
      // New user - they'll need to complete signup
      return { isNewUser: true };
    }

    const { data, error } = await supabase.auth.verifyOtp({
      phone,
      token: otp,
      type: 'sms',
    });

    if (error) throw error;

    // Check if this is a new user by looking for profile
    if (data.user) {
      const { data: profile } = await supabase
        .from("profiles")
        .select("full_name, email")
        .eq("id", data.user.id)
        .maybeSingle();

      const isNewUser = !profile || !profile.full_name || !profile.email;
      return { isNewUser };
    }

    return { isNewUser: false };
  };

  const completeSignup = async (fullName: string, email: string) => {
    if (USE_MOCK_OTP) {
      // Demo mode: create mock user and profile with proper UUID format
      const mockUserId = crypto.randomUUID();
      
      // Use service role to bypass RLS for demo mode
      const serviceRoleKey = import.meta.env.VITE_SUPABASE_SERVICE_ROLE_KEY;
      const supabaseAdmin = createClient(
        import.meta.env.VITE_SUPABASE_URL,
        serviceRoleKey || import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
      );
      
      // Create profile record using admin client
      await supabaseAdmin.from("profiles").insert({
        id: mockUserId,
        full_name: fullName,
        email: email,
        phone: mockPhoneNumber,
      });
      
      // Create mock user session
      const mockUser = {
        id: mockUserId,
        phone: mockPhoneNumber,
        email: email,
        app_metadata: {},
        user_metadata: { full_name: fullName },
        aud: 'authenticated',
        created_at: new Date().toISOString(),
      } as User;
      
      setUser(mockUser);
      setSession({ user: mockUser, access_token: 'mock-token', refresh_token: 'mock-refresh' } as any);
      
      navigate("/pricing");
      return;
    }

    if (!user) throw new Error("No user found");

    // Update profile with signup details
    const { error } = await supabase
      .from("profiles")
      .update({ 
        full_name: fullName,
        email: email,
      })
      .eq("id", user.id);

    if (error) throw error;

    // Redirect to pricing page to choose a plan
    navigate("/pricing");
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        subscription,
        loading,
        signIn,
        signUp,
        signOut,
        hasActiveSubscription,
        sendPhoneOTP,
        verifyPhoneOTP,
        completeSignup,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
