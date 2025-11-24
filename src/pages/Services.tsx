import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell, DollarSign, TrendingUp, Globe, Building2, BarChart3, Smartphone, Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    { icon: Bell, title: "Daily News Alert", description: "Real-time polymer market news and updates" },
    { icon: DollarSign, title: "Crude Offers ($/bbl)", description: "Latest crude oil pricing and trends" },
    { icon: DollarSign, title: "Naphtha Offers ($/mt)", description: "Naphtha pricing across regions" },
    { icon: DollarSign, title: "Feedstock Offers ($/mt)", description: "Comprehensive feedstock pricing" },
    { icon: Globe, title: "International Polymer Offers", description: "Global polymer price intelligence" },
    { icon: Building2, title: "Ethylene, Propylene, Styrene, VCM", description: "Monomer pricing and forecasts" },
    { icon: BarChart3, title: "PP, PE & PVC Analysis", description: "In-depth polymer market analysis" },
    { icon: TrendingUp, title: "Polymers Future Trend", description: "Expert price forecasts and trends" },
    { icon: Building2, title: "Plant Shutdown News", description: "Production updates worldwide" },
    { icon: Globe, title: "Polymer Market Scenario", description: "Market outlook and commentary" },
  ];

  const accessMethods = [
    { icon: Globe, title: "Website Access", description: "Full platform access via web browser" },
    { icon: Mail, title: "Daily Polymer Report", description: "Comprehensive daily email reports" },
    { icon: Mail, title: "Email Newsletter", description: "Regular market updates via email" },
    { icon: Smartphone, title: "Android Application", description: "Mobile app for on-the-go access" },
    { icon: Bell, title: "Pop-up Alerts", description: "Instant price change notifications" },
    { icon: MessageCircle, title: "WhatsApp Alerts", description: "Real-time updates on WhatsApp" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="gradient-hero text-white py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-white/90">
            Comprehensive polymer market intelligence delivered through multiple channels
          </p>
        </div>
      </section>

      <div className="container max-w-7xl mx-auto py-12 px-4">
        {/* Introduction */}
        <div className="prose max-w-none mb-12">
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Polymer Bazaar is a leading information services provider for the global polymer and
            petrochemical industry. We deliver comprehensive market intelligence through news alerts,
            price reports, and trend analysis via Email, WhatsApp, SMS, and our web platform.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our annual subscription provides unlimited access to daily editorial content curated from
            global sources, premium business research, extensive databases, and powerful search tools
            designed for polymer industry professionals.
          </p>
        </div>

        {/* Our Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Different Ways to Avail Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Different Ways To Avail Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accessMethods.map((method, index) => (
              <Card key={index} className="hover:shadow-lg transition-all border-2 hover:border-primary">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <method.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{method.title}</h3>
                  <p className="text-sm text-muted-foreground">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Subscription Plans CTA */}
        <Card className="bg-primary text-white">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Choose the plan that best fits your needs and gain instant access to 
              comprehensive polymer market intelligence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
                <Link to="/pricing">View Subscription Plans</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Contact Sales
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Services;
