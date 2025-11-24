import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp, Globe, BarChart3, Users, ShieldCheck, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const insights = [
    {
      type: "BLOG",
      title: "Polypropylene Market Analysis Q1 2024",
      date: "March 16, 2024",
      excerpt: "Comprehensive analysis of global PP pricing trends and market dynamics...",
    },
    {
      type: "NEWS",
      title: "PVC Suspension Prices Surge in Asia",
      date: "March 15, 2024",
      excerpt: "Asian PVC markets see significant price movements driven by supply constraints...",
    },
    {
      type: "INSIGHT",
      title: "LDPE Film CFR Forecast 2024",
      date: "March 14, 2024",
      excerpt: "Expert predictions on LDPE pricing trajectories for the coming quarter...",
    },
    {
      type: "BLOG",
      title: "HDPE Injection Grade Market Update",
      date: "March 13, 2024",
      excerpt: "Latest developments in HDPE markets across major trading hubs...",
    },
  ];

  const polymers = [
    { name: "Polypropylene (PP)", code: "PP" },
    { name: "High Density Polyethylene", code: "HDPE" },
    { name: "Low Density Polyethylene", code: "LDPE" },
    { name: "Linear Low Density PE", code: "LLDPE" },
    { name: "Polyvinyl Chloride", code: "PVC" },
    { name: "Polyethylene Terephthalate", code: "PET" },
  ];

  const features = [
    {
      icon: TrendingUp,
      title: "Real-Time Market Intelligence",
      description: "Live pricing updates and market movements across global polymer markets",
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Track prices across USA, Europe, Middle East, Asia, and emerging markets",
    },
    {
      icon: BarChart3,
      title: "Historical Analytics",
      description: "Access comprehensive historical data and trend analysis tools",
    },
    {
      icon: Users,
      title: "Expert Insights",
      description: "Industry analysis from seasoned petrochemical market experts",
    },
    {
      icon: ShieldCheck,
      title: "Trusted Data",
      description: "20+ years of reliable, accurate polymer market intelligence",
    },
    {
      icon: Clock,
      title: "Daily Updates",
      description: "Fresh market reports, news alerts, and price revisions every day",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative gradient-hero text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        <div className="container max-w-6xl mx-auto relative z-10">
          <div className="text-center space-y-6">
            <Badge variant="secondary" className="text-sm px-4 py-1 bg-white/20 text-white border-white/30">
              Trusted 20+ Years
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance">
              Global Polymer Market Intelligence Platform
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto text-balance">
              Accurate, transparent, and community-driven polymer price intelligence
              across the global petrochemical supply chain
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
                <Link to="/pricing">View Plans</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Try Calculator
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Insights */}
      <section className="py-16 px-4">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Latest Insights</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our global network of analysts track the petrochemical supply chain 24/7,
              delivering actionable intelligence through reports, videos, webinars, and real-time alerts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {insights.map((insight, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-3">
                    {insight.type}
                  </Badge>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                    {insight.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">{insight.date}</p>
                  <p className="text-sm text-muted-foreground mb-4">{insight.excerpt}</p>
                  <Button variant="link" className="p-0 h-auto text-primary">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Polymers We Cover */}
      <section className="py-16 px-4 bg-secondary">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Polymers We Cover</h2>
            <p className="text-lg text-muted-foreground">
              Complete bazaar intelligence across the polymer spectrum
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {polymers.map((polymer, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:border-primary">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <span className="text-2xl font-bold text-primary">{polymer.code}</span>
                  </div>
                  <h3 className="font-bold text-lg">{polymer.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Polymer Bazaar</h2>
            <p className="text-lg text-muted-foreground">
              The most comprehensive polymer market intelligence platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-start space-y-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-xl">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-white">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Speak to Our Experts Today</h2>
          <p className="text-xl mb-8 text-white/90">
            Get personalized solutions for your polymer intelligence needs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <Input
              placeholder="First Name"
              className="bg-white text-foreground"
            />
            <Input
              placeholder="Last Name"
              className="bg-white text-foreground"
            />
            <Input
              type="email"
              placeholder="Email ID"
              className="bg-white text-foreground"
            />
            <Input
              type="tel"
              placeholder="Phone Number"
              className="bg-white text-foreground"
            />
          </div>
          <Button
            size="lg"
            className="mt-6 bg-white text-primary hover:bg-white/90"
          >
            Submit
          </Button>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 px-4 bg-secondary">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              Sign up to our free newsletter and get regular industry updates
            </h3>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input type="email" placeholder="Your email address" className="flex-1" />
              <Button className="bg-primary hover:bg-primary-dark">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
