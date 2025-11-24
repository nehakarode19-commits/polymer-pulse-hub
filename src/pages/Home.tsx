import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Calculator, TrendingUp, Globe, BarChart3, Users, ChevronLeft, ChevronRight, Sparkles, Award, Zap, Rocket, LineChart, Target, Star, CheckCircle2, Play, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Home = () => {
  const [activeInsightTab, setActiveInsightTab] = useState("blog");
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

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
    { title: "20+ Years of Trust", icon: Award },
    { title: "Global Coverage", icon: Globe },
    { title: "Real-Time Data", icon: Zap },
    { title: "Expert Analysis", icon: Star },
    { title: "Multi-Channel Access", icon: Rocket },
  ];

  const events = [
    {
      title: "Polymer Bazar Korea Conference & Exhibition",
      location: "South Korea",
    },
    {
      title: "Polymer Bazar London Conference & Exhibition",
      location: "London UK",
    },
    {
      title: "Polymer Bazar Singapore Conference & Exhibition",
      location: "Singapore",
    },
    {
      title: "Polymer Bazar Dubai Conference & Exhibition",
      location: "Dubai UAE",
    },
  ];

  const currentInsights = insights[activeInsightTab as keyof typeof insights] || insights.blog;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/20 to-background">
      {/* Hero Banner Section */}
      <section className="relative gradient-hero text-white min-h-[90vh] flex items-center px-4 overflow-hidden">
        {/* Advanced Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]"></div>
          
          {/* Floating Particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
          
          {/* Large Gradient Blobs */}
          <motion.div
            className="absolute -top-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-accent-orange/15 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, -50, 0],
              y: [0, 50, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-accent-red/15 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.4, 1],
              rotate: [0, 90, 0],
              opacity: [0.2, 0.35, 0.2],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>

        <div className="container max-w-7xl mx-auto relative z-10">
          <motion.div
            style={{ opacity, scale }}
            className="text-center space-y-10"
          >
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Badge className="text-base px-8 py-3 bg-white/20 text-white border-white/40 backdrop-blur-md shadow-2xl hover:bg-white/30 transition-all">
                <Award className="w-5 h-5 mr-2 inline animate-pulse" />
                Trusted 20+ Years in Industry
              </Badge>
            </motion.div>

            {/* Main Heading with Gradient */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-black tracking-tight mb-6">
                <span className="inline-block bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent drop-shadow-2xl">
                  POLYMER
                </span>
                <br />
                <span className="inline-block bg-gradient-to-r from-white/90 to-white/70 bg-clip-text text-transparent">
                  BAZAAR
                </span>
              </h1>
            </motion.div>

            {/* Animated Tagline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="relative inline-block"
            >
              <div className="flex items-center justify-center gap-8 text-4xl md:text-5xl font-bold flex-wrap px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl">
                <motion.div
                  className="flex items-center gap-3"
                  whileHover={{ scale: 1.05 }}
                >
                  <LineChart className="w-8 h-8" />
                  <span className="bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">Price</span>
                </motion.div>
                <span className="text-white/40">|</span>
                <motion.div
                  className="flex items-center gap-3"
                  whileHover={{ scale: 1.05 }}
                >
                  <Target className="w-8 h-8" />
                  <span className="bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">Prediction</span>
                </motion.div>
                <span className="text-white/40">|</span>
                <motion.div
                  className="flex items-center gap-3"
                  whileHover={{ scale: 1.05 }}
                >
                  <TrendingUp className="w-8 h-8" />
                  <span className="bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">Profit</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-2xl md:text-3xl text-white/95 max-w-5xl mx-auto leading-relaxed font-light"
            >
              Polymer Bazar Offers Accurate, Transparent, And Community-Driven Updates
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="bg-white text-primary hover:bg-white shadow-2xl hover:shadow-white/20 transition-all duration-300 text-xl px-12 py-8 rounded-xl font-bold group">
                  <Calculator className="mr-3 h-7 w-7 group-hover:rotate-12 transition-transform" />
                  Start Calculator
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" variant="outline" className="bg-white/10 border-2 border-white/40 text-white hover:bg-white/20 backdrop-blur-md shadow-2xl transition-all duration-300 text-xl px-12 py-8 rounded-xl font-bold group">
                  <Play className="mr-3 h-7 w-7 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="grid grid-cols-3 gap-8 max-w-4xl mx-auto pt-16"
            >
              {[
                { number: "20+", label: "Years Experience" },
                { number: "10K+", label: "Active Users" },
                { number: "50+", label: "Countries" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20"
                >
                  <div className="text-5xl font-bold mb-2">{stat.number}</div>
                  <div className="text-white/80 text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Latest Insights Section */}
      <section className="py-32 px-4 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-accent-orange/5 rounded-full blur-3xl"></div>
        
        <div className="container max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block"
            >
              <Badge className="mb-6 bg-gradient-to-r from-primary/10 to-accent-orange/10 text-primary border-primary/20 px-6 py-3 text-base">
                <Sparkles className="w-5 h-5 mr-2 animate-pulse" />
                Intelligence Hub
              </Badge>
            </motion.div>
            <h2 className="text-6xl md:text-7xl font-black mb-8">
              <span className="bg-gradient-to-r from-primary via-accent-red to-accent-orange bg-clip-text text-transparent">
                Latest Insights
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Our analysts across the global petrochemical supply chain are tracking markets 24/7 to give you <span className="text-primary font-semibold">Price, Prediction, and Profit</span> intelligence. We deliver this through a mix of reports, videos, webinars, and more.
            </p>
          </motion.div>

          <Tabs value={activeInsightTab} onValueChange={setActiveInsightTab} className="mb-12">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 h-auto p-2 bg-secondary/50 backdrop-blur-sm border border-border/50">
              {["select", "news", "blog", "insightPapers", "webinars", "videoInsights"].map((tab) => (
                <TabsTrigger 
                  key={tab}
                  value={tab}
                  className="data-[state=active]:bg-white data-[state=active]:shadow-lg data-[state=active]:text-primary py-3 px-6 rounded-lg font-semibold transition-all capitalize"
                >
                  {tab === "insightPapers" ? "Insight Papers" : tab === "videoInsights" ? "Video Insights" : tab}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentInsights.map((insight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="h-full"
              >
                <Card className="group hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 hover:border-primary/50 h-full bg-gradient-to-b from-card to-card/50 backdrop-blur-sm">
                  <div className="h-56 bg-gradient-to-br from-primary via-accent-red to-accent-orange relative overflow-hidden">
                    {/* Animated Overlay */}
                    <motion.div
                      className="absolute inset-0"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1 }}
                          className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                        >
                          <ArrowRight className="w-8 h-8 text-white" />
                        </motion.div>
                      </div>
                    </motion.div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-white/0 via-white/50 to-white/0"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  
                  <CardContent className="p-8">
                    <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 px-3 py-1">
                      {insight.type}
                    </Badge>
                    <h3 className="font-bold text-2xl mb-4 group-hover:text-primary transition-colors leading-tight line-clamp-2">
                      {insight.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <CheckCircle2 className="w-4 h-4" />
                      <span className="font-medium">{insight.date}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed line-clamp-3">{insight.excerpt}</p>
                    <Button variant="link" className="p-0 h-auto text-primary font-semibold group/btn text-base">
                      Read Full Article
                      <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-2 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Map Section */}
      <section className="py-32 px-4 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-secondary/50"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjEiIGZpbGw9ImhzbCh2YXIoLS1wcmltYXJ5KSkiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9nPjwvc3ZnPg==')] opacity-40"></div>
        </div>
        
        <div className="container max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl group"
            >
              {/* Main Globe Container */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent-red/20 to-accent-orange/20 backdrop-blur-sm">
                {/* Rotating Globe */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 opacity-30"
                >
                  <Globe className="h-full w-full text-primary" />
                </motion.div>
                
                {/* Center Globe */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <Globe className="h-48 w-48 text-primary/40" />
                  </motion.div>
                </div>
                
                {/* Animated Markers */}
                {[
                  { top: "20%", left: "20%", delay: 0, label: "USA" },
                  { top: "25%", right: "25%", delay: 0.5, label: "Europe" },
                  { bottom: "30%", left: "45%", delay: 1, label: "Asia" },
                  { top: "45%", right: "15%", delay: 1.5, label: "Middle East" },
                  { bottom: "20%", right: "35%", delay: 2, label: "India" },
                ].map((position, i) => (
                  <motion.div
                    key={i}
                    className="absolute group/marker"
                    style={{ top: position.top, left: position.left, right: position.right, bottom: position.bottom }}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: position.delay, duration: 0.5 }}
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: position.delay,
                      }}
                      className="w-5 h-5 rounded-full bg-primary shadow-lg shadow-primary/50 relative cursor-pointer"
                    >
                      {/* Ping Effect */}
                      <span className="absolute inset-0 rounded-full bg-primary animate-ping"></span>
                    </motion.div>
                    
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-black/80 text-white text-xs rounded-lg opacity-0 group-hover/marker:opacity-100 transition-opacity whitespace-nowrap">
                      {position.label}
                    </div>
                  </motion.div>
                ))}
                
                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full opacity-20">
                  <motion.line
                    x1="20%" y1="20%" x2="45%" y2="45%"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                  />
                  <motion.line
                    x1="75%" y1="25%" x2="45%" y2="45%"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 1 }}
                  />
                </svg>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <Badge className="mb-6 bg-gradient-to-r from-primary/10 to-accent-orange/10 text-primary border-primary/20 px-6 py-3 text-base">
                  <Globe className="w-5 h-5 mr-2" />
                  Worldwide Coverage
                </Badge>
                <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
                  Global Market <span className="bg-gradient-to-r from-primary to-accent-orange bg-clip-text text-transparent">Coverage</span>
                </h2>
              </div>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Polymer Bazaar bridges the world's polymer markets, delivering <span className="text-primary font-semibold">real-time prices, trends, and intelligence</span> across key regions. From the USA to Europe, Middle East to Asia, we track volatility and opportunities across <span className="text-primary font-semibold">10+ countries</span> including China, Nepal, Sri Lanka, Bangladesh, and KSA.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {["USA", "Europe", "China", "India", "UAE", "Bangladesh", "Nepal", "Sri Lanka"].map((country, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.05, x: 5 }}
                  >
                    <Badge variant="outline" className="w-full justify-center text-base px-4 py-3 border-2 hover:border-primary hover:bg-primary/5 transition-all cursor-pointer">
                      <CheckCircle2 className="w-4 h-4 mr-2 text-primary" />
                      {country}
                    </Badge>
                  </motion.div>
                ))}
              </div>
              
              <div className="bg-gradient-to-r from-primary/5 to-accent-orange/5 p-8 rounded-2xl border-2 border-primary/10">
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">$800B+</div>
                    <div className="text-sm text-muted-foreground">Industry Size</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">5.4%</div>
                    <div className="text-sm text-muted-foreground">CAGR Growth</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground">Market Tracking</div>
                  </div>
                </div>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent-red hover:from-primary-dark hover:to-accent-red shadow-xl hover:shadow-2xl transition-all text-lg px-10 py-6 group">
                  Explore Markets
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </Button>
              </motion.div>
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
