import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ChevronLeft, ChevronRight, TrendingUp, Globe2, BarChart3, Users, Building2, FileText, Video, Newspaper, BookOpen, Calendar, ArrowRight, Check, Phone, Mail, MapPin, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import heroCorporate1 from "@/assets/hero-corporate-1.jpg";
import heroCorporate2 from "@/assets/hero-corporate-2.jpg";
import polymerPpImg from "@/assets/polymer-pellets-pp.jpg";
import polymerHdpeImg from "@/assets/polymer-pellets-hdpe.jpg";
import polymerLdpeImg from "@/assets/polymer-pellets-ldpe.jpg";
import whyPolymerModernImg from "@/assets/why-polymer-modern.jpg";
import globalCoverageModernImg from "@/assets/global-coverage-modern.jpg";
import expertPortraitImg from "@/assets/expert-portrait.jpg";
import contactExpertImg from "@/assets/contact-expert.jpg";
import insightNewsImg from "@/assets/insight-news.jpg";
import insightBlogImg from "@/assets/insight-blog.jpg";
import insightPapersImg from "@/assets/insight-papers.jpg";
import insightWebinarImg from "@/assets/insight-webinar.jpg";
import eventSeoulImg from "@/assets/event-seoul.jpg";
import eventLondonImg from "@/assets/event-london.jpg";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeFilter, setActiveFilter] = useState("all");

  const heroSlides = [
    {
      image: heroCorporate1,
      title: "Global Polymer Price Intelligence",
      subtitle: "Real-time market data and insights across PP, HDPE, LDPE, PVC, PET and more",
      cta: "Explore Our Data"
    },
    {
      image: heroCorporate2,
      title: "Navigate Market Volatility With Confidence",
      subtitle: "Access transparent, accurate pricing intelligence trusted by industry leaders for 20+ years",
      cta: "Get Started Today"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const insights = [
    { type: "News", title: "Polyethylene prices surge in Asian markets amid supply constraints", date: "Mar 15, 2024", image: insightNewsImg, category: "Market Analysis" },
    { type: "Blog", title: "Understanding the impact of crude oil fluctuations on polymer pricing", date: "Mar 12, 2024", image: insightBlogImg, category: "Price Analysis" },
    { type: "Paper", title: "Q1 2024 Global Polymer Market Outlook and Forecast Report", date: "Mar 10, 2024", image: insightPapersImg, category: "Research" },
    { type: "Webinar", title: "Future trends in sustainable polymer production and pricing", date: "Mar 8, 2024", image: insightWebinarImg, category: "Event" },
  ];

  const polymers = [
    { name: "Polypropylene (PP)", code: "PP", image: polymerPpImg, description: "Comprehensive price coverage across injection, film and fiber grades" },
    { name: "High Density Polyethylene", code: "HDPE", image: polymerHdpeImg, description: "Blow molding, injection and film grade pricing intelligence" },
    { name: "Low Density Polyethylene", code: "LDPE", image: polymerLdpeImg, description: "Film and general purpose grade market data and forecasts" },
    { name: "Linear Low Density PE", code: "LLDPE", image: polymerPpImg, description: "Rotomolding and film grade price assessments" },
    { name: "Polyvinyl Chloride", code: "PVC", image: polymerHdpeImg, description: "Suspension and emulsion PVC pricing across regions" },
    { name: "Polyethylene Terephthalate", code: "PET", image: polymerLdpeImg, description: "Bottle and fiber grade PET price intelligence" },
  ];

  const services = [
    {
      title: "Daily Price Assessments",
      description: "Access real-time polymer price assessments across global markets, updated daily with transparent methodologies.",
      icon: TrendingUp
    },
    {
      title: "Market Reports & Analysis",
      description: "In-depth market analysis, supply-demand fundamentals, and expert commentary to guide your decisions.",
      icon: FileText
    },
    {
      title: "Consulting Services",
      description: "Customized consulting engagements to help you navigate complex market dynamics and optimize procurement.",
      icon: Users
    },
  ];

  const advantages = [
    { icon: Users, title: "Expert Team", description: "Industry veterans with decades of polymer market experience providing unmatched insights" },
    { icon: Globe2, title: "Global Coverage", description: "10+ countries tracked including USA, Europe, China, India, Middle East and more" },
    { icon: BarChart3, title: "Data-Driven", description: "Proprietary methodology combining market intelligence with rigorous data validation" },
  ];

  const events = [
    { title: "Polymer Pricing Conference 2024", location: "Singapore", date: "May 15-17, 2024", image: eventSeoulImg },
    { title: "Petrochemical Markets Summit", location: "London, UK", date: "Jun 10-11, 2024", image: eventLondonImg },
    { title: "Asian Bazaar Forum", location: "Mumbai, India", date: "Jul 22-23, 2024", image: eventSeoulImg },
  ];

  const helpCategories = [
    { title: "Market Analysis", description: "Get expert analysis on polymer market trends, supply-demand dynamics and price drivers" },
    { title: "Price Benchmarking", description: "Benchmark your procurement costs against transparent market assessments" },
    { title: "Custom Research", description: "Commission tailored research reports on specific polymers, regions or market segments" },
    { title: "Training & Support", description: "Access training programs and dedicated support to maximize platform value" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Slider */}
      <section className="relative h-[600px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: currentSlide === index ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/70" />
            
            <div className="absolute inset-0 flex items-center">
              <div className="container max-w-7xl mx-auto px-6">
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: currentSlide === index ? 0 : 30, opacity: currentSlide === index ? 1 : 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="max-w-3xl text-white"
                >
                  <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">{slide.title}</h1>
                  <p className="text-xl md:text-2xl mb-8 text-white/90">{slide.subtitle}</p>
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 h-auto">
                    {slide.cta}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
        
        {/* Slider Controls */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-12 h-1 transition-all ${
                currentSlide === index ? 'bg-white' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
        
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
          className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
          className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </section>

      {/* Latest Insights */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="container max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-4">Latest Insights</h2>
              <p className="text-muted-foreground text-lg max-w-2xl">
                Stay informed with our latest market analysis, reports, and expert commentary on the global polymer industry
              </p>
            </div>
            <div className="flex gap-2">
              {["all", "news", "blog", "research"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-lg capitalize transition-all ${
                    activeFilter === filter
                      ? 'bg-primary text-white'
                      : 'bg-white hover:bg-gray-50'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {insights.map((insight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group hover:shadow-xl transition-all duration-300 h-full border-2 hover:border-primary/30">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={insight.image} 
                      alt={insight.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-white">{insight.type}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="text-sm text-muted-foreground mb-2">{insight.date}</div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {insight.title}
                    </h3>
                    <Badge variant="outline" className="mt-2">{insight.category}</Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/insights">
                View All Insights
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Polymers We Cover */}
      <section className="py-20 px-6">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Polymers We Cover</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Comprehensive price intelligence and market analysis across major polymer resins and grades
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {polymers.map((polymer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 h-full">
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={polymer.image} 
                      alt={polymer.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <Badge className="bg-white text-primary text-lg px-4 py-2 font-bold">
                        {polymer.code}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-3">{polymer.name}</h3>
                    <p className="text-muted-foreground">{polymer.description}</p>
                    <Button variant="link" className="mt-4 p-0 text-primary group-hover:translate-x-2 transition-transform">
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Polymer Bazaar Video Section */}
      <section className="py-20 px-6 bg-[#1a2332] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={whyPolymerModernImg} alt="" className="w-full h-full object-cover" />
        </div>
        
        <div className="container max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-6">Why Polymer Bazaar</h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              Discover how we're transforming polymer market intelligence with transparency, accuracy, and expertise
            </p>
            
            <div className="relative aspect-video max-w-3xl mx-auto rounded-xl overflow-hidden shadow-2xl">
              <img src={whyPolymerModernImg} alt="Why Polymer Bazaar" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <button className="w-20 h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all hover:scale-110 group">
                  <Play className="h-8 w-8 text-primary ml-1 group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Market Highlights */}
      <section className="py-16 px-6 bg-gradient-to-r from-primary to-primary/90 text-white">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">Polymer Bazaar Market Highlights</h2>
              <p className="text-xl text-white/90">
                Weekly market summaries, price movements, and expert analysis delivered straight to your inbox
              </p>
            </div>
            <div>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 h-auto">
                Sign Up Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How We Deliver Our Services */}
      <section className="py-20 px-6">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How We Deliver Our Services</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Our products & platforms give you access across multiple platforms to ensure you stay informed wherever you are
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl"
            >
              <img src={expertPortraitImg} alt="Expert Advisor" className="w-full h-full object-cover" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {services.map((service, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                    <Button variant="link" className="mt-2 p-0 text-primary">
                      Find out more <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Polymer Bazaar Advantage */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">The Polymer Bazaar Advantage</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              What sets us apart in delivering world-class polymer market intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center p-8 h-full hover:shadow-xl transition-all border-2 hover:border-primary/30">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <advantage.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{advantage.title}</h3>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Coverage Map */}
      <section className="py-20 px-6">
        <div className="container max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                <Globe2 className="w-4 h-4 mr-2" />
                Global Reach
              </Badge>
              <h2 className="text-4xl font-bold mb-6">Worldwide Market Coverage</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Track polymer prices and market trends across major global hubs including USA, Europe, China, India, Middle East, and Southeast Asia. Our network of experts provides on-the-ground intelligence you can trust.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["USA", "Europe", "China", "India", "UAE", "Singapore", "South Korea", "Thailand"].map((region, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="font-medium">{region}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl"
            >
              <img src={globalCoverageModernImg} alt="Global Coverage" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Latest Events */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Latest Events</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Join us at upcoming conferences, summits, and industry gatherings worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group hover:shadow-xl transition-all border-2 hover:border-primary/30 h-full">
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{event.date}</span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/events">
                View All Events
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How Can We Help */}
      <section className="py-20 px-6">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How Can We Help?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Whether you're looking for data, analysis or expertise, we have solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {helpCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-8 hover:shadow-xl transition-all border-2 hover:border-primary/30 h-full">
                  <h3 className="text-2xl font-bold mb-3">{category.title}</h3>
                  <p className="text-muted-foreground mb-4">{category.description}</p>
                  <Button variant="link" className="p-0 text-primary">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6 bg-gradient-to-r from-slate-50 to-blue-50">
        <div className="container max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[600px] rounded-xl overflow-hidden shadow-2xl"
            >
              <img src={contactExpertImg} alt="Contact Expert" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4">Speak to Our Experts Today</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get in touch with our team to discuss your polymer intelligence needs and discover how we can help
              </p>

              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <Input placeholder="First Name *" required className="h-12" />
                  <Input placeholder="Last Name *" required className="h-12" />
                </div>
                <Input type="email" placeholder="Email Address *" required className="h-12" />
                <Input type="tel" placeholder="Phone Number" className="h-12" />
                <Input placeholder="Company Name" className="h-12" />
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="I'm interested in..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="prices">Price Assessments</SelectItem>
                    <SelectItem value="consulting">Consulting Services</SelectItem>
                    <SelectItem value="reports">Market Reports</SelectItem>
                    <SelectItem value="events">Events & Conferences</SelectItem>
                  </SelectContent>
                </Select>
                <Textarea placeholder="Message" rows={4} />
                <Button size="lg" className="w-full md:w-auto bg-primary hover:bg-primary/90 text-lg px-10 py-6 h-auto">
                  Submit Enquiry
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">+91 93746 24365</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">info@polymerbazaar.com</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-12 px-6 bg-primary text-white">
        <div className="container max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Sign up to our free newsletter</h3>
              <p className="text-white/80">Get regular industry updates from Polymer Bazaar</p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <Input 
                placeholder="Enter your email" 
                className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/60 min-w-[280px]"
              />
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 h-12">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;