import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Calculator, TrendingUp, Globe, BarChart3, Users, ChevronLeft, ChevronRight, Sparkles, Award, Zap, Rocket, LineChart, Target, Star, CheckCircle2, Play, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import worldMapImage from "@/assets/world-map-analytics.jpg";
import polymerPelletsImage from "@/assets/polymer-pellets-1.jpg";
import polymerWarehouseImage from "@/assets/polymer-warehouse.jpg";
import expertConsultationImg from "@/assets/expert-consultation.jpg";
import eventSeoulImg from "@/assets/event-seoul.jpg";
import eventLondonImg from "@/assets/event-london.jpg";
import polymerPpImg from "@/assets/polymer-pellets-pp.jpg";
import polymerHdpeImg from "@/assets/polymer-pellets-hdpe.jpg";
import polymerLdpeImg from "@/assets/polymer-pellets-ldpe.jpg";
import insightNewsImg from "@/assets/insight-news.jpg";
import insightBlogImg from "@/assets/insight-blog.jpg";
import insightPapersImg from "@/assets/insight-papers.jpg";
import insightWebinarImg from "@/assets/insight-webinar.jpg";
import insightVideoImg from "@/assets/insight-video.jpg";
import polymerWhy1Img from "@/assets/polymer-why-1.jpg";
import polymerWhy2Img from "@/assets/polymer-why-2.jpg";
import polymerWhy3Img from "@/assets/polymer-why-3.jpg";
import heroBackgroundMotionImg from "@/assets/hero-background-motion.jpg";
import worldMapLight from "@/assets/world-map-light.png";
import globalCoverageModernImg from "@/assets/global-coverage-modern.jpg";
import consultationModernImg from "@/assets/consultation-modern.jpg";
import whyPolymerModernImg from "@/assets/why-polymer-modern.jpg";
import newsletterModernImg from "@/assets/newsletter-modern.jpg";

const Home = () => {
  const [activeInsightTab, setActiveInsightTab] = useState("blog");
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
        image: insightBlogImg,
      },
      {
        type: "BLOG",
        title: "PVC Suspension",
        date: "MARCH 16, 2022",
        excerpt: "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulpuKorem",
        image: insightBlogImg,
      },
      {
        type: "BLOG",
        title: "LDPE Film CFR",
        date: "MARCH 16, 2022",
        excerpt: "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulpuKorem",
        image: insightBlogImg,
      },
      {
        type: "BLOG",
        title: "HDPE",
        date: "MARCH 16, 2022",
        excerpt: "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulpuKorem",
        image: insightBlogImg,
      },
    ],
    news: [
      {
        type: "NEWS",
        title: "Global PP Markets Rise",
        date: "MARCH 18, 2022",
        excerpt: "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulpuKorem",
        image: insightNewsImg,
      },
      {
        type: "NEWS",
        title: "Asian HDPE Prices Surge",
        date: "MARCH 17, 2022",
        excerpt: "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulpuKorem",
        image: insightNewsImg,
      },
    ],
    insightPapers: [
      {
        type: "INSIGHT",
        title: "Q1 2024 Market Analysis",
        date: "MARCH 15, 2022",
        excerpt: "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulpuKorem",
        image: insightPapersImg,
      },
    ],
    webinars: [
      {
        type: "WEBINAR",
        title: "Polymer Trading Strategies",
        date: "MARCH 14, 2022",
        excerpt: "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulpuKorem",
        image: insightWebinarImg,
      },
    ],
    videoInsights: [
      {
        type: "VIDEO",
        title: "Market Update Weekly",
        date: "MARCH 13, 2022",
        excerpt: "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulpuKorem",
        image: insightVideoImg,
      },
    ],
    select: [
      {
        type: "SELECT",
        title: "Featured Insights",
        date: "MARCH 20, 2022",
        excerpt: "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulpuKorem",
        image: insightNewsImg,
      },
      {
        type: "SELECT",
        title: "Industry Trends 2024",
        date: "MARCH 19, 2022",
        excerpt: "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulpuKorem",
        image: insightPapersImg,
      },
      {
        type: "SELECT",
        title: "Polymer Market Analysis",
        date: "MARCH 18, 2022",
        excerpt: "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulpuKorem",
        image: insightBlogImg,
      },
      {
        type: "SELECT",
        title: "Supply Chain Updates",
        date: "MARCH 17, 2022",
        excerpt: "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulpuKorem",
        image: insightWebinarImg,
      },
    ],
  };

  const polymers = [
    { name: "Polypropylene (PP)", code: "PP", description: "• Packaging & automotive\n• Textile applications\n• High-performance thermoplastic", image: polymerPpImg },
    { name: "High Density Polyethylene", code: "HDPE", description: "• Bottles & pipes\n• Industrial containers\n• Excellent chemical resistance", image: polymerHdpeImg },
    { name: "Low Density Polyethylene", code: "LDPE", description: "• Flexible film & bags\n• Packaging applications\n• Soft & flexible", image: polymerLdpeImg },
    { name: "Linear Low Density PE", code: "LLDPE", description: "• Stretch film\n• Flexible packaging\n• Enhanced strength", image: polymerPpImg },
    { name: "Polyvinyl Chloride", code: "PVC", description: "• Pipes & cables\n• Construction applications\n• Versatile polymer", image: polymerHdpeImg },
    { name: "Polyethylene Terephthalate", code: "PET", description: "• Bottles & containers\n• Textile fibers\n• Clear & strong", image: polymerLdpeImg },
  ];

  const whyPolymerBazaar = [
    { 
      title: "20+ Years of Trust", 
      icon: Award,
      description: "Two decades of proven excellence in polymer market intelligence and trade data across global markets."
    },
    { 
      title: "Global Coverage", 
      icon: Globe,
      description: "Comprehensive market insights spanning 10+ countries with on-ground intelligence and local expertise."
    },
    { 
      title: "Real-Time Data", 
      icon: Zap,
      description: "Instant price updates and market movements delivered through web, mobile, SMS, and WhatsApp channels."
    },
    { 
      title: "Expert Analysis", 
      icon: Star,
      description: "Industry-leading forecasts and trend analysis by seasoned polymer market experts and analysts."
    },
    { 
      title: "Multi-Channel Access", 
      icon: Rocket,
      description: "Seamless access to market data anytime, anywhere through multiple platforms and communication channels."
    },
  ];

  const events = [
    {
      title: "Polymer Bazar Korea Conference & Exhibition",
      location: "South Korea",
      category: "CONFERENCE",
      description: "Join industry leaders for the premier polymer trading conference in Asia Pacific region",
      author: "Sarah Kim",
      time: "2h ago",
      categoryColor: "bg-blue-500"
    },
    {
      title: "Polymer Bazar London Conference & Exhibition",
      location: "London UK",
      category: "EXHIBITION",
      description: "Explore the latest innovations in polymer manufacturing and global trade opportunities",
      author: "James Wilson",
      time: "5h ago",
      categoryColor: "bg-purple-500"
    },
    {
      title: "Polymer Bazar Singapore Conference & Exhibition",
      location: "Singapore",
      category: "NETWORKING",
      description: "Connect with polymer industry professionals and discover emerging market trends",
      author: "Li Wei",
      time: "1d ago",
      categoryColor: "bg-pink-500"
    },
    {
      title: "Polymer Bazar Dubai Conference & Exhibition",
      location: "Dubai UAE",
      category: "WORKSHOP",
      description: "Hands-on sessions covering polymer pricing strategies and market analysis techniques",
      author: "Ahmed Hassan",
      time: "2d ago",
      categoryColor: "bg-orange-500"
    },
  ];

  const currentInsights = insights[activeInsightTab as keyof typeof insights] || insights.blog;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/20 to-background">
      {/* Hero Banner Section */}
      <section className="relative text-white min-h-[80vh] flex items-center px-4 overflow-hidden">
        {/* Background Image with Parallax Motion Effect */}
        <motion.div 
          className="absolute inset-0 z-0"
        >
          <motion.img 
            src={heroBackgroundMotionImg} 
            alt="Polymer Manufacturing in Motion" 
            className="w-full h-full object-cover"
            initial={{ scale: 1.05 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 25, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          />
          {/* Multi-layer Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-accent-red/85 to-accent-orange/90" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </motion.div>

        {/* Floating Animated Elements */}
        <div className="absolute inset-0 overflow-hidden z-10">
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

        <div className="container max-w-7xl mx-auto relative z-20">
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
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white shadow-2xl hover:shadow-white/20 transition-all duration-300 text-xl px-12 py-8 rounded-xl font-bold group">
                  <Link to="/pricing">
                    <Calculator className="mr-3 h-7 w-7 group-hover:rotate-12 transition-transform" />
                    Get Started
                    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild size="lg" variant="outline" className="bg-white/10 border-2 border-white/40 text-white hover:bg-white/20 backdrop-blur-md shadow-2xl transition-all duration-300 text-xl px-12 py-8 rounded-xl font-bold group">
                  <Link to="/about">
                    <Play className="mr-3 h-7 w-7 group-hover:scale-110 transition-transform" />
                    Learn More
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="grid grid-cols-3 gap-8 max-w-4xl mx-auto pt-12"
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
      <section className="py-16 px-4 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background"></div>
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          />
          <motion.div 
            className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
          />
        </div>
        
        <div className="container max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Badge className="mb-6 bg-gradient-to-r from-primary to-red-600 text-white border-0 px-6 py-2.5 text-base shadow-lg">
              <Sparkles className="w-5 h-5 mr-2" />
              Intelligence Hub
            </Badge>
            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Latest Insights
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Our analysts across the global petrochemical supply chain are tracking markets 24/7 to give you <span className="text-primary font-semibold">Price, Prediction, and Profit</span> intelligence. We deliver this through a mix of reports, videos, webinars, and more.
            </p>
          </motion.div>

          <Tabs value={activeInsightTab} onValueChange={setActiveInsightTab} className="mb-12">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 h-auto p-2 bg-card/50 backdrop-blur-sm border-2 border-border/50 rounded-xl shadow-lg">
              {["select", "news", "blog", "insightPapers", "webinars", "videoInsights"].map((tab) => (
                <TabsTrigger 
                  key={tab}
                  value={tab}
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-red-600 data-[state=active]:text-white data-[state=active]:shadow-xl py-3 px-4 rounded-lg font-semibold transition-all capitalize text-sm hover:bg-muted/50"
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
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.1, 
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="h-full"
              >
                <Card className="group relative hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-border hover:border-primary/50 h-full bg-gradient-to-br from-card via-card to-muted/20 backdrop-blur-sm shadow-xl hover:shadow-[0_20px_60px_-15px_rgba(229,57,53,0.4)]">
                  {/* Gradient overlay on card */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/10 group-hover:to-primary/5 transition-all duration-500 pointer-events-none z-10"></div>
                  
                  {/* Image Section */}
                  <div className="h-56 relative overflow-hidden">
                    <img 
                      src={insight.image} 
                      alt={insight.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125 group-hover:rotate-2"
                    />
                    
                    {/* Multi-layer Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>
                    
                    {/* Hover Play Button */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ scale: 0.5 }}
                      whileHover={{ scale: 1 }}
                    >
                      <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border-2 border-white/50 shadow-2xl">
                        <Play className="w-10 h-10 text-white fill-white ml-1" />
                      </div>
                    </motion.div>
                    
                    {/* Floating Badge */}
                    <motion.div 
                      className="absolute top-4 right-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Badge className="bg-gradient-to-r from-primary to-red-600 text-white border-0 px-3 py-1.5 shadow-xl font-semibold">
                        {insight.type}
                      </Badge>
                    </motion.div>
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none"></div>
                    
                    {/* Bottom border glow */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                    />
                  </div>
                  
                  {/* Content Section */}
                  <CardContent className="p-6 relative z-20">
                    <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors duration-300 leading-tight line-clamp-2 min-h-[56px]">
                      {insight.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <span className="font-medium">{insight.date}</span>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-5 leading-relaxed line-clamp-3">
                      {insight.excerpt}
                    </p>
                    
                    <Button 
                      variant="ghost" 
                      className="p-0 h-auto text-primary font-semibold group/btn hover:bg-transparent relative overflow-hidden w-full justify-start"
                    >
                      <span className="relative z-10 flex items-center">
                        Read Full Article
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                      </span>
                      <span className="absolute inset-0 w-0 bg-primary/5 group-hover/btn:w-full transition-all duration-300 rounded-md"></span>
                    </Button>
                  </CardContent>

                  {/* Corner decoration */}
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary/10 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Market Coverage Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Polymer Bazaar: Serving the Global Polymer Market
              </h2>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Polymer Bazaar is a leading platform that connects polymer buyers and suppliers from around the world. With a vast network spanning across multiple continents, we offer real-time pricing updates, market insights, and essential industry news to help you stay ahead. Whether you're in North America, Europe, Asia, Africa, or any other region, Polymer Bazaar provides reliable and up-to-date information to empower your business decisions.
                </p>
                
                <p>
                  Our mission is to bridge the global polymer market, offering seamless access to data and resources that drive success across borders. From large-scale manufacturers to small enterprises, our platform ensures that you're always in the know, no matter where you're located.
                </p>
                
                <p>
                  Explore the worldwide presence of Polymer Bazaar and join our global network today.
                </p>
              </div>
            </motion.div>

            {/* Right Side - World Map with Pin Points (Larger) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3 relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={worldMapLight}
                  alt="Global Market Coverage"
                  className="w-full h-auto grayscale brightness-75 contrast-125 opacity-50 saturate-0"
                  style={{ filter: 'grayscale(100%) brightness(0.75) contrast(1.25) drop-shadow(0 0 20px rgba(150, 150, 150, 0.3))' }}
                />
                {/* Metallic gray overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-400/20 via-gray-500/15 to-gray-600/20 pointer-events-none"></div>
                
                {/* Interactive Pin Points */}
                {[
                  { number: "01", top: "25%", left: "15%", region: "North America" },
                  { number: "02", top: "30%", left: "20%", region: "Central America" },
                  { number: "03", top: "65%", left: "25%", region: "South America" },
                  { number: "04", top: "22%", left: "48%", region: "Europe" },
                  { number: "05", top: "28%", left: "70%", region: "Asia" },
                  { number: "06", top: "50%", left: "48%", region: "Africa" },
                  { number: "07", top: "70%", left: "80%", region: "Australia" },
                ].map((pin, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5, type: "spring" }}
                    className="absolute group/pin cursor-pointer"
                    style={{ top: pin.top, left: pin.left }}
                  >
                    <div className="relative flex flex-col items-center">
                      {/* Pin Marker */}
                      <motion.div
                        whileHover={{ scale: 1.3 }}
                        transition={{ duration: 0.3 }}
                        className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs shadow-xl relative z-10 border-2 border-white"
                      >
                        {pin.number}
                        {/* Pulse Effect */}
                        <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30"></span>
                      </motion.div>
                      
                      {/* Hover Tooltip */}
                      <div className="absolute top-full mt-2 opacity-0 group-hover/pin:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div className="bg-foreground text-background rounded-lg shadow-xl px-3 py-1.5 text-xs font-medium whitespace-nowrap">
                          {pin.region}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Polymers We Cover Section */}
      <section className="py-16 px-4">
        <div className="container max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-primary text-white border-primary shadow-md">
              <Zap className="w-4 h-4 mr-2" />
              Product Coverage
            </Badge>
            <h2 className="text-5xl font-bold mb-4">Polymers We Cover</h2>
            <p className="text-lg text-muted-foreground">
              Complete bazaar intelligence across the polymer spectrum
            </p>
          </motion.div>

          {/* Polymer Visual Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            <div className="md:col-span-2 relative h-80 rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src={whyPolymerModernImg}
                alt="Polymer Manufacturing"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-white text-3xl font-bold mb-2">Premium Quality Polymers</h3>
                  <p className="text-white/90 text-lg">State-of-the-art manufacturing facilities worldwide</p>
                </div>
              </div>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src={heroBackgroundMotionImg}
                alt="Polymer Innovation"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white text-2xl font-bold mb-2">Innovation & Quality</h3>
                  <p className="text-white/90 text-sm">Leading the future of polymer markets</p>
                </div>
              </div>
            </div>
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
                <Card className="group shadow-xl hover:shadow-[0_25px_70px_-15px_rgba(229,57,53,0.5)] transition-all duration-500 hover:scale-105 hover:border-primary/50 overflow-hidden h-full bg-gradient-to-br from-card to-accent-pink/10 border-2">
                  <div className="relative overflow-hidden">
                    {/* Gradient Overlay on Image */}
                    <div className="absolute inset-0 z-10 bg-gradient-to-br from-primary/60 via-accent-red/50 to-accent-orange/40 mix-blend-multiply"></div>
                    <img 
                      src={polymer.image} 
                      alt={polymer.name}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Polymer Code Badge */}
                    <div className="absolute bottom-4 left-4 z-20">
                      <Badge className="bg-white/90 text-primary text-lg px-4 py-2 font-bold shadow-lg">
                        {polymer.code}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">{polymer.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">{polymer.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Bazaar Insights Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <Badge className="mb-6 bg-primary text-white border-primary shadow-lg px-6 py-2.5">
              <TrendingUp className="w-5 h-5 mr-2" />
              Strategic Intelligence
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Our Bazaar Insights
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Transform complex market data into actionable intelligence for your business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Turning Market Complexity into Business Clarity",
                description: "We deliver polymer intelligence through intuitive channels—prices, forecasts, alerts—empowering procurement, trading, and strategy teams to make confident decisions in volatile markets.",
                gradient: "from-blue-500/10 via-primary/10 to-purple-500/10",
                iconBg: "from-blue-500 to-primary",
              },
              {
                icon: BarChart3,
                title: "Optimize Sourcing With Real-Time Intelligence",
                bullets: [
                  "Daily price alerts for HDPE, PP, PVC volatility",
                  "Supplier performance tracking across Asia–Europe hubs",
                  "Alternative material analysis incl. sustainable rPET",
                ],
                gradient: "from-primary/10 via-red-500/10 to-orange-500/10",
                iconBg: "from-primary to-red-500",
              },
              {
                icon: Globe,
                title: "Maximize Opportunities With Live Market Access",
                description: "Stay ahead of arbitrage and risk via direct, transparent data streams. Our platform delivers instant notifications on price movements, helping you capitalize on market opportunities 24/7.",
                gradient: "from-purple-500/10 via-primary/10 to-pink-500/10",
                iconBg: "from-purple-500 to-primary",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6, type: "spring" }}
                whileHover={{ y: -10 }}
              >
                <Card className={`group relative overflow-hidden h-full border-2 border-border hover:border-primary/50 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br ${item.gradient}`}>
                  {/* Animated background effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/10 group-hover:to-primary/5 transition-all duration-500"></div>
                  
                  <CardContent className="p-8 relative z-10">
                    {/* Icon with gradient background */}
                    <motion.div
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.iconBg} flex items-center justify-center mb-6 shadow-xl relative overflow-hidden`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                      <item.icon className="h-10 w-10 text-white relative z-10" strokeWidth={2.5} />
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold mb-5 leading-tight group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    
                    {item.description && (
                      <p className="text-muted-foreground mb-6 leading-relaxed text-base">
                        {item.description}
                      </p>
                    )}
                    
                    {item.bullets && (
                      <ul className="space-y-4 mb-6">
                        {item.bullets.map((bullet, i) => (
                          <motion.li 
                            key={i} 
                            className="flex items-start group/item"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * i }}
                          >
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 group-hover/item:bg-primary/20 transition-colors">
                              <CheckCircle2 className="w-4 h-4 text-primary" />
                            </div>
                            <span className="leading-relaxed text-muted-foreground text-sm">{bullet}</span>
                          </motion.li>
                        ))}
                      </ul>
                    )}
                    
                    <Button 
                      variant="ghost" 
                      className="p-0 h-auto text-primary font-semibold group/btn hover:bg-transparent relative overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center">
                        Explore More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                      </span>
                      <span className="absolute inset-0 w-0 bg-primary/5 group-hover/btn:w-full transition-all duration-300 rounded-md"></span>
                    </Button>
                  </CardContent>

                  {/* Corner decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Polymer Bazaar Section */}
      <section className="py-32 px-4 relative">
        <div className="container max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Why Polymer Bazaar
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Industry-leading intelligence platform trusted worldwide
            </p>
          </motion.div>
          
          {/* Grid Layout - No Carousel */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {whyPolymerBazaar.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="group h-full bg-card hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30">
                  {/* Icon */}
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-red-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="font-bold text-2xl mb-4">{item.title}</h3>
                    
                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Preview */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="mb-4 text-sm px-4 py-1.5 border-primary/20 bg-primary/5">
              Upcoming Events
            </Badge>
            <h2 className="text-5xl font-bold mb-4">Events</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Connect with industry leaders at our global conferences and exhibitions
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {events.slice(0, 3).map((event, index) => {
              const eventImages = [eventSeoulImg, eventLondonImg, eventSeoulImg];
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                >
                  <Card className="group bg-card hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden h-full">
                    {/* Image Section */}
                    <div className="relative h-56 overflow-hidden">
                      <motion.img 
                        src={eventImages[index]} 
                        alt={event.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.6 }}
                      />
                      
                      {/* Category Badge */}
                      <Badge 
                        className={`absolute top-4 left-4 ${event.categoryColor} text-white border-0 text-xs font-semibold px-3 py-1 shadow-lg`}
                      >
                        {event.category}
                      </Badge>
                    </div>

                    <CardContent className="p-6">
                      {/* Location with icon */}
                      <p className="text-xs text-muted-foreground mb-3 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        {event.location}
                      </p>

                      {/* Title */}
                      <h3 className="font-bold text-xl mb-3 leading-tight group-hover:text-primary transition-colors line-clamp-2">
                        {event.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground mb-6 line-clamp-2 leading-relaxed">
                        {event.description}
                      </p>

                      {/* Divider */}
                      <div className="h-px bg-border mb-4"></div>

                      {/* Author Section */}
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-red-600 flex items-center justify-center text-white font-semibold text-sm shadow-md">
                          {event.author.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-sm">{event.author}</p>
                          <p className="text-xs text-muted-foreground">{event.time}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Button 
              size="lg" 
              asChild 
              className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all hover:scale-105 text-base px-8"
            >
              <Link to="/events">
                View all Events
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Speak to Our Experts Section */}
      <section className="py-16 px-4">
        <div className="container max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-[500px] rounded-2xl shadow-2xl relative overflow-hidden group"
            >
              <img 
                src={consultationModernImg} 
                alt="Professional business consultation" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent-orange/20" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-4 bg-primary text-white border-primary shadow-md">
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
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src={newsletterModernImg} 
            alt="Newsletter signup" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-accent-red/95 to-accent-orange/95" />
        </div>
        
        {/* Animated Overlay */}
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
        
        <div className="container max-w-5xl mx-auto relative z-10 text-white">
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
