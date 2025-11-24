import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Calculator, TrendingUp, Globe, BarChart3, Users, ShieldCheck, Clock, ChevronLeft, ChevronRight, Sparkles, Award, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Home = () => {
  const [activeInsightTab, setActiveInsightTab] = useState("blog");
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
      <section className="relative gradient-hero text-white py-32 px-4 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-accent-orange/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>

        <div className="container max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Badge variant="secondary" className="text-sm px-6 py-2 bg-white/20 text-white border-white/30 backdrop-blur-sm shadow-lg">
                <Award className="w-4 h-4 mr-2 inline" />
                Trusted 20+ Years
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-6xl md:text-7xl lg:text-8xl font-bold text-balance leading-tight"
            >
              POLYMER BAZAAR
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex items-center justify-center gap-6 text-3xl md:text-4xl font-bold flex-wrap"
            >
              <motion.span
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0 }}
              >
                Price
              </motion.span>
              <span className="text-white/50">|</span>
              <motion.span
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
              >
                Prediction
              </motion.span>
              <span className="text-white/50">|</span>
              <motion.span
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1.4 }}
              >
                Profit
              </motion.span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto text-balance leading-relaxed"
            >
              Polymer Bazar Offers Accurate Transparent, And Community-Drive Updates
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
            >
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-lg px-8 py-6">
                <Calculator className="mr-2 h-6 w-6" />
                Calculator
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Latest Insights Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-background to-secondary/30">
        <div className="container max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <Sparkles className="w-4 h-4 mr-2" />
              Intelligence Hub
            </Badge>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent-orange bg-clip-text text-transparent">
              Latest Insights
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our analysts across the global petrochemical supply chain are tracking markets 24/7 to give you Price, Prediction, and Profit intelligence. We deliver this through a mix of reports, videos, webinars, and more.
            </p>
          </motion.div>

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentInsights.map((insight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border-2 hover:border-primary/50 h-full">
                  <div className="h-52 bg-gradient-to-br from-primary via-accent-red to-accent-orange relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                      whileHover={{ opacity: 0.3 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute top-4 right-4">
                      <Sparkles className="w-6 h-6 text-white opacity-60" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary">
                      {insight.type}
                    </Badge>
                    <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors leading-tight">
                      {insight.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 font-medium">{insight.date}</p>
                    <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{insight.excerpt}</p>
                    <Button variant="link" className="p-0 h-auto text-primary font-semibold group/btn">
                      Read More 
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Map Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-secondary via-background to-secondary/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjEiIGZpbGw9ImhzbCh2YXIoLS1wcmltYXJ5KSkiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9nPjwvc3ZnPg==')] opacity-40"></div>
        <div className="container max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] bg-gradient-to-br from-primary/10 via-accent-red/10 to-accent-orange/10 rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 opacity-20"
              >
                <Globe className="h-full w-full text-primary" />
              </motion.div>
              <Globe className="h-40 w-40 text-primary/30 relative z-10" />
              {[
                { top: "25%", left: "25%", delay: 0 },
                { top: "33%", right: "33%", delay: 0.5 },
                { bottom: "33%", left: "50%", delay: 1 },
                { top: "50%", right: "20%", delay: 1.5 },
                { bottom: "25%", right: "40%", delay: 2 },
              ].map((position, i) => (
                <motion.div
                  key={i}
                  className="absolute w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50"
                  style={position}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: position.delay,
                  }}
                />
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                <Globe className="w-4 h-4 mr-2" />
                Worldwide Coverage
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Global Market Coverage</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Polymer Bazaar bridges the world&apos;s polymer markets, delivering real-time prices, trends, and intelligence across key regions. From the USA to Europe, Middle East to Asia, we track volatility and opportunities across 10+ countries including China, Nepal, Sri Lanka, Bangladesh, and KSA. Access localized data on PP, HDPE, PVC via SMS, WhatsApp, or our platform—serving an $800+ billion industry growing at 5.4% CAGR.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["USA", "Europe", "China", "India", "UAE", "Bangladesh"].map((country, i) => (
                  <Badge key={i} variant="outline" className="text-sm px-4 py-2">
                    {country}
                  </Badge>
                ))}
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary-dark shadow-lg hover:shadow-xl transition-all hover:scale-105">
                More Info
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Polymers We Cover Section */}
      <section className="py-24 px-4">
        <div className="container max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <Zap className="w-4 h-4 mr-2" />
              Product Coverage
            </Badge>
            <h2 className="text-5xl font-bold mb-4">Polymers We Cover</h2>
            <p className="text-lg text-muted-foreground">
              Complete bazaar intelligence across the polymer spectrum
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {polymers.map((polymer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-primary/50 overflow-hidden h-full">
                  <div className="h-40 bg-gradient-to-br from-primary via-accent-red to-accent-orange flex items-center justify-center relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="text-5xl font-bold text-white relative z-10 drop-shadow-lg">{polymer.code}</span>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">{polymer.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{polymer.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Bazaar Insights Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-secondary via-background to-secondary/50 relative">
        <div className="container max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <TrendingUp className="w-4 h-4 mr-2" />
              Strategic Intelligence
            </Badge>
            <h2 className="text-5xl font-bold mb-4">Our Bazaar Insights</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: TrendingUp,
                title: "Turning Market Complexity into Business Clarity",
                description: "We deliver polymer intelligence through intuitive channels—prices, forecasts, alerts—empowering procurement, trading, and strategy teams to make confident decisions in volatile markets.",
              },
              {
                icon: BarChart3,
                title: "Optimize Sourcing With Real-Time Intelligence",
                bullets: [
                  "Daily price alerts for HDPE, PP, PVC volatility",
                  "Supplier performance tracking across Asia–Europe hubs",
                  "Alternative material analysis incl. sustainable rPET",
                ],
              },
              {
                icon: Globe,
                title: "Maximize Opportunities With Live Market Access",
                description: "Stay ahead of arbitrage and risk via direct, transparent data streams. Our platform delivers instant notifications on price movements, helping you capitalize on market opportunities 24/7.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <Card className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full border-2 hover:border-primary/30">
                  <CardContent className="p-8">
                    <motion.div
                      className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent-orange flex items-center justify-center mb-6 shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <item.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-5 leading-tight">{item.title}</h3>
                    {item.description && (
                      <p className="text-muted-foreground mb-6 leading-relaxed">{item.description}</p>
                    )}
                    {item.bullets && (
                      <ul className="space-y-3 text-muted-foreground mb-6">
                        {item.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-primary mr-3 text-xl">•</span>
                            <span className="leading-relaxed">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    <Button variant="link" className="p-0 text-primary font-semibold group/btn">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Polymer Bazaar Carousel */}
      <section className="py-24 px-4">
        <div className="container max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-primary to-accent-orange bg-clip-text text-transparent">
              Why Polymer Bazaar
            </h2>
          </motion.div>
          
          <div className="relative max-w-6xl mx-auto">
            <div className="flex items-center justify-center gap-10 overflow-hidden px-20">
              {whyPolymerBazaar.slice(carouselIndex, carouselIndex + 3).map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex-1"
                >
                  <Card className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 hover:border-primary/50 group">
                    <div className="h-56 bg-gradient-to-br from-primary via-accent-red to-accent-orange relative overflow-hidden">
                      <motion.div
                        className="absolute inset-0 bg-white/10"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: index * 0.5,
                        }}
                      />
                    </div>
                    <CardContent className="p-8 text-center">
                      <h3 className="font-bold text-xl group-hover:text-primary transition-colors">{item.title}</h3>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 shadow-xl hover:shadow-2xl hover:scale-110 transition-all border-2"
              onClick={() => setCarouselIndex(Math.max(0, carouselIndex - 1))}
              disabled={carouselIndex === 0}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 shadow-xl hover:shadow-2xl hover:scale-110 transition-all border-2"
              onClick={() => setCarouselIndex(Math.min(whyPolymerBazaar.length - 3, carouselIndex + 1))}
              disabled={carouselIndex >= whyPolymerBazaar.length - 3}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Events Preview */}
      <section className="py-24 px-4 bg-gradient-to-b from-secondary to-background">
        <div className="container max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold mb-16 text-center">Events</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 border-2 hover:border-primary/50 h-full">
                  <div className="h-56 bg-gradient-to-br from-primary via-accent-red to-accent-orange relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
                      whileHover={{ opacity: 0.6 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors leading-tight">
                      {event.title}
                    </h3>
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                      {event.location}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Button size="lg" asChild className="bg-primary hover:bg-primary-dark shadow-xl hover:shadow-2xl transition-all hover:scale-105 text-lg px-8 py-6">
              <Link to="/events">
                View all Events
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Speak to Our Experts Section */}
      <section className="py-24 px-4">
        <div className="container max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-[500px] bg-gradient-to-br from-primary/20 via-accent-red/20 to-accent-orange/20 rounded-2xl flex items-center justify-center shadow-2xl relative overflow-hidden"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute inset-0 opacity-20"
              >
                <Users className="h-full w-full text-primary" />
              </motion.div>
              <Users className="h-40 w-40 text-primary/40 relative z-10" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                <Users className="w-4 h-4 mr-2" />
                Expert Consultation
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Speak to our experts today</h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Get personalized solutions for your polymer intelligence needs. Our experts are ready to help you navigate the complex world of polymer markets.
              </p>
              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <Input placeholder="First Name" className="h-12" />
                  <Input placeholder="Last Name" className="h-12" />
                </div>
                <Input type="email" placeholder="Email ID" className="h-12" />
                <Input type="tel" placeholder="Phone Number" className="h-12" />
                <Button size="lg" className="bg-primary hover:bg-primary-dark w-full md:w-auto shadow-xl hover:shadow-2xl transition-all hover:scale-105 text-lg px-10 py-6">
                  Submit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Strip */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary via-accent-red to-accent-orange text-white relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            background: "linear-gradient(90deg, transparent 0%, white 50%, transparent 100%)",
            backgroundSize: "200% 100%",
          }}
        />
        <div className="container max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Sign up to our free newsletter and get regular industry updates from Polymer Bazaar
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 bg-white/95 text-foreground h-14 text-lg shadow-lg" 
              />
              <Button className="bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all hover:scale-105 h-14 px-8 text-lg font-semibold">
                Sign Up
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
