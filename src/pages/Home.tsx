import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Calculator, TrendingUp, Globe, BarChart3, Users, ShieldCheck, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const [activeInsightTab, setActiveInsightTab] = useState("blog");
  const [carouselIndex, setCarouselIndex] = useState(0);

  const insights = {
    blog: [
      {
        type: "BLOG",
        title: "Polypropylene",
        date: "MARCH 16, 2022",
        excerpt: "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulpuKorem",
      },
      {
        type: "BLOG",
        title: "PVC Suspension",
        date: "MARCH 16, 2022",
        excerpt: "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulpuKorem",
      },
      {
        type: "BLOG",
        title: "LDPE Film CFR",
        date: "MARCH 16, 2022",
        excerpt: "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulpuKorem",
      },
      {
        type: "BLOG",
        title: "HDPE",
        date: "MARCH 16, 2022",
        excerpt: "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulpuKorem",
      },
    ],
    news: [
      {
        type: "NEWS",
        title: "Global PP Markets Rise",
        date: "MARCH 18, 2022",
        excerpt: "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulpuKorem",
      },
      {
        type: "NEWS",
        title: "Asian HDPE Prices Surge",
        date: "MARCH 17, 2022",
        excerpt: "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulpuKorem",
      },
    ],
    insightPapers: [
      {
        type: "INSIGHT",
        title: "Q1 2024 Market Analysis",
        date: "MARCH 15, 2022",
        excerpt: "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulpuKorem",
      },
    ],
    webinars: [
      {
        type: "WEBINAR",
        title: "Polymer Trading Strategies",
        date: "MARCH 14, 2022",
        excerpt: "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulpuKorem",
      },
    ],
    videoInsights: [
      {
        type: "VIDEO",
        title: "Market Update Weekly",
        date: "MARCH 13, 2022",
        excerpt: "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulpuKorem",
      },
    ],
  };

  const polymers = [
    { name: "Polypropylene (PP)", code: "PP", description: "High-performance thermoplastic polymer for packaging, automotive, and textile applications" },
    { name: "High Density Polyethylene", code: "HDPE", description: "Strong plastic for bottles, pipes, and industrial containers with excellent chemical resistance" },
    { name: "Low Density Polyethylene", code: "LDPE", description: "Flexible plastic ideal for film, bags, and packaging applications" },
    { name: "Linear Low Density PE", code: "LLDPE", description: "Enhanced strength polyethylene for stretch film and flexible packaging" },
    { name: "Polyvinyl Chloride", code: "PVC", description: "Versatile polymer for pipes, cables, and construction applications" },
    { name: "Polyethylene Terephthalate", code: "PET", description: "Clear, strong plastic for bottles, containers, and textile fibers" },
  ];

  const whyPolymerBazaar = [
    { title: "20+ Years of Trust", image: "trusted" },
    { title: "Global Coverage", image: "global" },
    { title: "Real-Time Data", image: "realtime" },
    { title: "Expert Analysis", image: "expert" },
    { title: "Multi-Channel Access", image: "multichannel" },
  ];

  const events = [
    {
      title: "Polymer Bazar Korea Conference & Exhibition",
      location: "South Korea",
      image: "korea",
    },
    {
      title: "Polymer Bazar London Conference & Exhibition",
      location: "London UK",
      image: "london",
    },
    {
      title: "Polymer Bazar Singapore Conference & Exhibition",
      location: "Singapore",
      image: "singapore",
    },
    {
      title: "Polymer Bazar Dubai Conference & Exhibition",
      location: "Dubai UAE",
      image: "dubai",
    },
  ];

  const currentInsights = insights[activeInsightTab as keyof typeof insights] || insights.blog;

  return (
    <div className="min-h-screen">
      {/* Hero Banner Section */}
      <section className="relative gradient-hero text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        <div className="container max-w-6xl mx-auto relative z-10">
          <div className="text-center space-y-6">
            <Badge variant="secondary" className="text-sm px-4 py-1 bg-white/20 text-white border-white/30">
              Trusted 20+ Years
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance">
              POLYMER BAZAAR
            </h1>
            <div className="flex items-center justify-center gap-4 text-2xl md:text-3xl font-bold">
              <span>Price</span>
              <span className="text-white/70">|</span>
              <span>Prediction</span>
              <span className="text-white/70">|</span>
              <span>Profit</span>
            </div>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto text-balance">
              Polymer Bazar Offers Accurate Transparent, And Community-Drive Updates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                <Calculator className="mr-2 h-5 w-5" />
                Calculator
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Insights Section */}
      <section className="py-16 px-4">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Latest Insights</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our analysts across the global petrochemical supply chain are tracking markets 24/7 to give you Price, Prediction, and Profit intelligence. We deliver this through a mix of reports, videos, webinars, and more.
            </p>
          </div>

          <Tabs value={activeInsightTab} onValueChange={setActiveInsightTab} className="mb-8">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-6">
              <TabsTrigger value="select">Select</TabsTrigger>
              <TabsTrigger value="news">News</TabsTrigger>
              <TabsTrigger value="blog">Blog</TabsTrigger>
              <TabsTrigger value="insightPapers">Insight Papers</TabsTrigger>
              <TabsTrigger value="webinars">Webinars</TabsTrigger>
              <TabsTrigger value="videoInsights">Video Insights</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentInsights.map((insight, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/5"></div>
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

      {/* Global Map Section */}
      <section className="py-16 px-4 bg-secondary">
        <div className="container max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 bg-primary/5 rounded-lg flex items-center justify-center">
              <Globe className="h-32 w-32 text-primary/20" />
              <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-primary animate-pulse"></div>
              <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.5s" }}></div>
              <div className="absolute bottom-1/3 left-1/2 w-3 h-3 rounded-full bg-primary animate-pulse" style={{ animationDelay: "1s" }}></div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Global Market Coverage</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Polymer Bazaar bridges the world&apos;s polymer markets, delivering real-time prices, trends, and intelligence across key regions. From the USA to Europe, Middle East to Asia, we track volatility and opportunities across 10+ countries including China, Nepal, Sri Lanka, Bangladesh, and KSA. Access localized data on PP, HDPE, PVC via SMS, WhatsApp, or our platform—serving an $800+ billion industry growing at 5.4% CAGR.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary-dark">
                More Info
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Polymers We Cover Section */}
      <section className="py-16 px-4">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Polymers We Cover</h2>
            <p className="text-lg text-muted-foreground">
              Complete bazaar intelligence across the polymer spectrum
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {polymers.map((polymer, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:border-primary overflow-hidden">
                <div className="h-32 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary">{polymer.code}</span>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">{polymer.name}</h3>
                  <p className="text-sm text-muted-foreground">{polymer.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Bazaar Insights Section */}
      <section className="py-16 px-4 bg-secondary">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Bazaar Insights</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Turning Market Complexity into Business Clarity</h3>
                <p className="text-muted-foreground mb-4">
                  We deliver polymer intelligence through intuitive channels—prices, forecasts, alerts—empowering procurement, trading, and strategy teams to make confident decisions in volatile markets.
                </p>
                <Button variant="link" className="p-0 text-primary">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Optimize Sourcing With Real-Time Intelligence</h3>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Daily price alerts for HDPE, PP, PVC volatility</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Supplier performance tracking across Asia–Europe hubs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Alternative material analysis incl. sustainable rPET</span>
                  </li>
                </ul>
                <Button variant="link" className="p-0 text-primary">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Maximize Opportunities With Live Market Access</h3>
                <p className="text-muted-foreground mb-4">
                  Stay ahead of arbitrage and risk via direct, transparent data streams. Our platform delivers instant notifications on price movements, helping you capitalize on market opportunities 24/7.
                </p>
                <Button variant="link" className="p-0 text-primary">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Polymer Bazaar Carousel */}
      <section className="py-16 px-4">
        <div className="container max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Polymer Bazaar</h2>
          
          <div className="relative">
            <div className="flex items-center justify-center gap-8 overflow-hidden">
              {whyPolymerBazaar.slice(carouselIndex, carouselIndex + 3).map((item, index) => (
                <Card key={index} className="w-80 hover:shadow-lg transition-all">
                  <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/5"></div>
                  <CardContent className="p-6 text-center">
                    <h3 className="font-bold text-lg">{item.title}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2"
              onClick={() => setCarouselIndex(Math.max(0, carouselIndex - 1))}
              disabled={carouselIndex === 0}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2"
              onClick={() => setCarouselIndex(Math.min(whyPolymerBazaar.length - 3, carouselIndex + 1))}
              disabled={carouselIndex >= whyPolymerBazaar.length - 3}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Events Preview */}
      <section className="py-16 px-4 bg-secondary">
        <div className="container max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Events</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {events.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-all group">
                <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/5"></div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    {event.location}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" asChild className="bg-primary hover:bg-primary-dark">
              <Link to="/events">View all Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Speak to Our Experts Section */}
      <section className="py-16 px-4">
        <div className="container max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="h-96 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center">
              <Users className="h-32 w-32 text-primary/20" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Speak to our experts today</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get personalized solutions for your polymer intelligence needs. Our experts are ready to help you navigate the complex world of polymer markets.
              </p>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="First Name" />
                  <Input placeholder="Last Name" />
                </div>
                <Input type="email" placeholder="Email ID" />
                <Input type="tel" placeholder="Phone Number" />
                <Button size="lg" className="bg-primary hover:bg-primary-dark">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Strip */}
      <section className="py-12 px-4 bg-primary text-white">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              Sign up to our free newsletter and get regular industry updates from Polymer Bazaar
            </h3>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 bg-white text-foreground" 
              />
              <Button className="bg-white text-primary hover:bg-white/90">
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
