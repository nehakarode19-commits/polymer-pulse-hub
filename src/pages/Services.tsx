import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell, DollarSign, TrendingUp, Globe, Building2, BarChart3, Smartphone, Mail, MessageCircle, 
         Calendar, Users, MapPin, CheckCircle2, Bot, Zap, Clock, Shield, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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

  const events = [
    {
      title: "Polymer Bazaar Korea Conference & Exhibition",
      location: "South Korea",
      date: "March 2025",
      description: "Join industry leaders for insights on Asian polymer markets",
    },
    {
      title: "Polymer Bazaar London Conference & Exhibition",
      location: "London, UK",
      date: "June 2025",
      description: "European polymer market trends and networking opportunities",
    },
    {
      title: "Polymer Bazaar Dubai Summit",
      location: "Dubai, UAE",
      date: "September 2025",
      description: "Middle East polymer industry convergence",
    },
  ];

  const chatbotFeatures = [
    { icon: Zap, title: "Instant Responses", description: "Get real-time polymer prices instantly" },
    { icon: Clock, title: "24/7 Availability", description: "Access market data anytime, anywhere" },
    { icon: Bell, title: "Price Alerts", description: "Set custom alerts for price changes" },
    { icon: Shield, title: "Secure & Private", description: "Your queries remain confidential" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="gradient-hero text-white py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90"
          >
            Comprehensive polymer market intelligence delivered through multiple channels
          </motion.p>
        </div>
      </section>

      {/* Section 1: Services */}
      <section id="services" className="scroll-mt-20 py-16 bg-background">
        <div className="container max-w-7xl mx-auto px-4">
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
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all group hover:border-primary">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Different Ways to Avail Services */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">
              Different Ways To Avail Our Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {accessMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all border-2 hover:border-primary">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <method.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-bold text-lg mb-2">{method.title}</h3>
                      <p className="text-sm text-muted-foreground">{method.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Events */}
      <section id="events" className="scroll-mt-20 py-20 bg-muted/30">
        <div className="container max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-luxury bg-clip-text text-transparent">
              Events
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              PolymerBazaar.com conferences and events bring together considerable brain power from 
              the global plastic chain within the organized and strategic platform. From petrochemical 
              producers to the polymer traders to plastics manufacturers to end-users of different industries, 
              every member of the supply and value chain of our extended family aggregates an interactive virtual 
              space allowing enablement by providing a space to connect, engage and learn.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all group hover:-translate-y-2">
                  <CardContent className="p-8">
                    <Calendar className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-sm">{event.date}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-6">{event.description}</p>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="inline-block">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <Users className="h-8 w-8 text-primary" />
                  <div className="text-left">
                    <p className="text-sm text-muted-foreground">Connect</p>
                    <p className="text-sm text-muted-foreground">Engage</p>
                    <p className="text-sm text-muted-foreground">Learn</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Section 3: WhatsApp Chatbot */}
      <section id="whatsapp-chatbot" className="scroll-mt-20 py-20 bg-background">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block bg-primary/10 rounded-full p-3 mb-6">
                <Bot className="h-12 w-12 text-primary" />
              </div>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-luxury bg-clip-text text-transparent">
                WhatsApp Chatbot
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Get instant access to polymer prices and market data directly through WhatsApp. 
                Our intelligent chatbot provides real-time information, price alerts, and market 
                updates right at your fingertips. No app downloads, no complex interfaces - just 
                simple, fast, and reliable information delivery.
              </p>

              <div className="space-y-4 mb-8">
                {chatbotFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#25D366] hover:bg-[#20BD5A] text-white">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Start WhatsApp Chat
                </Button>
                <Button size="lg" variant="outline">
                  <Phone className="mr-2 h-5 w-5" />
                  +91 9374624365
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="overflow-hidden border-2 border-primary/20">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div className="bg-muted/50 rounded-2xl p-4 max-w-[80%]">
                      <p className="text-sm font-medium mb-1">You</p>
                      <p className="text-sm">What's the current PP price in India?</p>
                    </div>
                    <div className="bg-primary/10 rounded-2xl p-4 max-w-[80%] ml-auto">
                      <p className="text-sm font-medium mb-1 text-primary">Polymer Bazaar Bot</p>
                      <p className="text-sm">The current PP (Polypropylene) price in India is ₹98.50/kg. Would you like to know prices for other regions?</p>
                    </div>
                    <div className="bg-muted/50 rounded-2xl p-4 max-w-[80%]">
                      <p className="text-sm font-medium mb-1">You</p>
                      <p className="text-sm">Yes, global prices please</p>
                    </div>
                    <div className="bg-primary/10 rounded-2xl p-4 max-w-[80%] ml-auto">
                      <p className="text-sm font-medium mb-1 text-primary">Polymer Bazaar Bot</p>
                      <div className="text-sm space-y-1">
                        <p>Global PP Prices:</p>
                        <p>🇺🇸 USA: $1,150/MT</p>
                        <p>🇪🇺 Europe: €1,080/MT</p>
                        <p>🇨🇳 China: ¥8,500/MT</p>
                        <p>🇮🇳 India: ₹98.50/kg</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Type a message...</span>
                      <MessageCircle className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-gold/10 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <Card className="bg-gradient-primary border-none">
            <CardContent className="p-12 text-center text-white">
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
      </section>
    </div>
  );
};

export default Services;
