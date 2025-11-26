import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Globe, Mail, Phone, FileText, Building2, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Partnerships = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    event: "",
    delegates: "",
    message: ""
  });

  const partnerships = [
    {
      id: 1,
      name: "Plast Milan 2025",
      location: "Milan, Italy",
      date: "May 15-18, 2025",
      type: "Trade Fair",
      status: "Registration Open",
      description: "Europe's premier plastics and rubber industry exhibition featuring the latest innovations in polymer technology.",
      highlights: ["1,500+ Exhibitors", "45+ Countries", "Networking Events", "Technical Seminars"],
      image: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Plastic Show 2025 Almaty",
      location: "Almaty, Kazakhstan",
      date: "September 10-12, 2025",
      type: "Trade Fair",
      status: "Registration Open",
      description: "Central Asia's leading plastics industry trade show, connecting regional manufacturers with global suppliers.",
      highlights: ["300+ Exhibitors", "15+ Countries", "B2B Matchmaking", "Industry Forums"],
      image: "/placeholder.svg"
    },
    {
      id: 3,
      name: "Chinaplas 2025",
      location: "Shenzhen, China",
      date: "April 17-20, 2025",
      type: "Trade Fair",
      status: "Delegation Full",
      description: "Asia's largest plastics and rubber trade fair, showcasing cutting-edge technology and sustainable solutions.",
      highlights: ["4,000+ Exhibitors", "150+ Countries", "Innovation Zones", "Sustainability Summit"],
      image: "/placeholder.svg"
    },
    {
      id: 4,
      name: "NPE 2025",
      location: "Orlando, USA",
      date: "May 6-10, 2025",
      type: "Trade Fair",
      status: "Early Registration",
      description: "North America's premier plastics show featuring breakthrough technologies and business opportunities.",
      highlights: ["2,000+ Exhibitors", "60+ Countries", "Technology Showcase", "Executive Summit"],
      image: "/placeholder.svg"
    }
  ];

  const delegations = [
    {
      date: "March 2025",
      event: "Middle East Polymer Summit",
      location: "Dubai, UAE",
      spots: "8 spots remaining",
      price: "$2,500"
    },
    {
      date: "April 2025",
      event: "India Polymer Conclave",
      location: "Mumbai, India",
      spots: "12 spots remaining",
      price: "$1,200"
    },
    {
      date: "June 2025",
      event: "European Petrochemical Forum",
      location: "Rotterdam, Netherlands",
      spots: "5 spots remaining",
      price: "$3,000"
    },
    {
      date: "August 2025",
      event: "ASEAN Plastics Conference",
      location: "Bangkok, Thailand",
      spots: "15 spots remaining",
      price: "$1,800"
    }
  ];

  const mediaPartners = [
    { name: "PLAS Magazine", region: "Europe", type: "Print & Digital" },
    { name: "PlasticNews", region: "North America", type: "Online Publication" },
    { name: "Plastics Technology", region: "Global", type: "Trade Media" },
    { name: "European Plastics News", region: "Europe", type: "Industry News" },
    { name: "Injection World", region: "Global", type: "Technical Magazine" },
    { name: "Plastics Today", region: "Global", type: "Digital Media" }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.event) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // In a real implementation, this would call an edge function to send email
    toast({
      title: "Registration Submitted!",
      description: "Our team will contact you within 24 hours with delegation details.",
    });

    // Reset form
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      event: "",
      delegates: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero text-white py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Strategic Partnerships & Delegations</h1>
          <p className="text-xl text-white/90">
            Join official Polymer Bazaar delegations to leading global trade fairs and industry events
          </p>
        </div>
      </section>

      <div className="container max-w-7xl mx-auto py-12 px-4">
        <Tabs defaultValue="partnerships" className="space-y-8">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
            <TabsTrigger value="partnerships">Trade Fair Partnerships</TabsTrigger>
            <TabsTrigger value="delegations">Delegation Schedule</TabsTrigger>
            <TabsTrigger value="register">Register Interest</TabsTrigger>
          </TabsList>

          {/* Trade Fair Partnerships Tab */}
          <TabsContent value="partnerships" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Current & Upcoming Trade Fair Partnerships</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Polymer Bazaar serves as official media partner and delegation organizer for major global plastics and petrochemical trade shows
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {partnerships.map((partnership) => (
                <Card key={partnership.id} className="hover:shadow-lg transition-all border-2">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <Badge variant={partnership.status === "Registration Open" ? "default" : "secondary"}>
                        {partnership.status}
                      </Badge>
                      <Badge variant="outline">{partnership.type}</Badge>
                    </div>
                    <CardTitle className="text-2xl mb-2">{partnership.name}</CardTitle>
                    <CardDescription className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4" />
                        <span>{partnership.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4" />
                        <span>{partnership.location}</span>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{partnership.description}</p>
                    
                    <div className="grid grid-cols-2 gap-2">
                      {partnership.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <ArrowRight className="h-3 w-3 text-primary" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    <Button 
                      className="w-full" 
                      disabled={partnership.status === "Delegation Full"}
                    >
                      {partnership.status === "Delegation Full" ? "Waitlist Available" : "Join Delegation"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Media Partners Section */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-6 text-center">Our Media Partners</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {mediaPartners.map((partner, idx) => (
                  <Card key={idx} className="hover:shadow-md transition-all">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Building2 className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-bold mb-1">{partner.name}</h4>
                          <p className="text-sm text-muted-foreground mb-1">{partner.type}</p>
                          <Badge variant="outline" className="text-xs">{partner.region}</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Delegation Schedule Tab */}
          <TabsContent value="delegations" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Official Delegation Schedule 2025</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Join curated industry delegations led by Polymer Bazaar experts. Network with key decision-makers and explore new business opportunities.
              </p>
            </div>

            <div className="grid gap-6">
              {delegations.map((delegation, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-all border-2">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge>{delegation.date}</Badge>
                          <Badge variant="outline">{delegation.spots}</Badge>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{delegation.event}</h3>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span>{delegation.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground mb-1">Starting from</p>
                          <p className="text-2xl font-bold text-primary">{delegation.price}</p>
                        </div>
                        <Button>Reserve Spot</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">What's Included in Delegations?</h3>
                <div className="grid md:grid-cols-4 gap-6 mt-6">
                  <div>
                    <Globe className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <h4 className="font-bold mb-1">Event Registration</h4>
                    <p className="text-sm text-muted-foreground">Full access passes</p>
                  </div>
                  <div>
                    <Users className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <h4 className="font-bold mb-1">Networking Events</h4>
                    <p className="text-sm text-muted-foreground">Exclusive meetups</p>
                  </div>
                  <div>
                    <FileText className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <h4 className="font-bold mb-1">Market Insights</h4>
                    <p className="text-sm text-muted-foreground">Pre-event briefings</p>
                  </div>
                  <div>
                    <Building2 className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <h4 className="font-bold mb-1">Company Visits</h4>
                    <p className="text-sm text-muted-foreground">Factory tours</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Registration Form Tab */}
          <TabsContent value="register" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Register Your Interest</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Fill out the form below to join an upcoming delegation or inquire about partnership opportunities
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Delegation Registration Form</CardTitle>
                  <CardDescription>Our team will contact you within 24 hours</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+1 234 567 8900"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="event">Event / Delegation of Interest *</Label>
                      <Input
                        id="event"
                        name="event"
                        value={formData.event}
                        onChange={handleInputChange}
                        placeholder="e.g., Plast Milan 2025"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="delegates">Number of Delegates</Label>
                      <Input
                        id="delegates"
                        name="delegates"
                        type="number"
                        min="1"
                        value={formData.delegates}
                        onChange={handleInputChange}
                        placeholder="1"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Additional Information</Label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Tell us about your requirements, interests, or any questions you have..."
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      Submit Registration
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <Card className="mt-6 bg-muted/50">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-3">Need More Information?</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-primary" />
                      <span>partnerships@polymerbazaar.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary" />
                      <span>+91 9374624365</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Partnerships;
