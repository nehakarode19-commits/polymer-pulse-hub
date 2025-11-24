import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to pricing/subscription page
    navigate("/pricing");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-secondary">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="text-3xl font-bold text-primary mb-2">
            Polymer Bazaar
          </div>
          <CardTitle className="text-2xl">Create Account</CardTitle>
          <CardDescription>
            Enter your details to get started with Polymer Bazaar
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Your Name *</Label>
              <Input
                id="name"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email ID *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="city">City *</Label>
              <Input
                id="city"
                name="city"
                placeholder="Enter your city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary-dark"
            >
              Proceed to Payment
            </Button>
          </form>

          <p className="text-center text-sm mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-primary hover:underline font-medium">
              Login
            </Link>
          </p>

          <p className="text-xs text-center text-muted-foreground mt-4">
            By signing up, you agree to our Terms & Conditions and Privacy Policy
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Signup;
