import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Zap, Target, Users as UsersIcon, Lock, Rocket, TrendingUp, Globe, Lightbulb } from "lucide-react";
import TeamGallery from "@/components/TeamGallery";
import { useToast } from "@/hooks/use-toast";

const Career = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [activeSection, setActiveSection] = useState("open-roles");

  const handleJobAlertSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Success!",
      description: "You'll be notified when new roles are posted.",
    });
    setEmail("");
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const jobCategories = [
    {
      id: "strategic",
      title: "1. The Strategic Orchestrators (Advisory & Solutions)",
      subtitle: "Help clients navigate the complex Bazaar with end-to-end solutions.",
      roles: [
        {
          title: "Supply Chain Strategist",
          description: "Design resilient, cost-efficient supply chains that withstand global shocks. Optimize the flow of material for our clients."
        },
        {
          title: "Strategic Procurement Advisor",
          description: 'Act as the external "Chief Procurement Officer." Guide clients on hedging, inventory timing, and supplier negotiation.'
        },
        {
          title: "Enterprise Tech & ERP Integrator",
          description: "Eliminate friction. Connect Polymer Bazaar's live API data directly into client ERPs (SAP, Oracle) for automated decision-making."
        },
        {
          title: "Global Trade & Compliance Specialist",
          description: "Guide clients through customs, BIS standards, and sustainability regulations to ensure safe, legal commerce."
        }
      ]
    },
    {
      id: "intelligence",
      title: "2. The Intelligence Core (Bazaar & Data)",
      subtitle: 'Build the "Global Standard" for accuracy and speed.',
      roles: [
        {
          title: "AI & Quantitative Researcher",
          description: 'Develop proprietary algorithms that predict price trends before they happen. Build our "unfair advantage."'
        },
        {
          title: "Senior Bazaar Analyst",
          description: "Deep-dive experts for specific chains (PVC, PP, PE) who verify algorithmic data with real-world \"Bazaar\" insights."
        },
        {
          title: "Price Discovery Specialist",
          description: "The front-line scouts who gather, verify, and standardize daily price assessments from the market."
        },
        {
          title: "Compliance & Methodology Manager",
          description: "Ensure our pricing methods are auditable and legally sound. You protect the integrity that makes us a trusted global benchmark."
        }
      ]
    },
    {
      id: "platform",
      title: "3. The Platform Builders (Tech & Product)",
      subtitle: "We are a tech company at heart.",
      roles: [
        {
          title: "UX/UI Product Designer",
          description: 'Ensure our data is visualized beautifully. Make the "Bazaar" as intuitive as a modern consumer app.'
        },
        {
          title: "Full-Stack Engineer",
          description: "Build the robust, low-latency infrastructure that delivers critical alerts instantly to thousands of users."
        }
      ]
    },
    {
      id: "growth",
      title: "4. The Growth Engine (Sales & Strategy)",
      subtitle: "Expand from a National Leader to a Global Giant.",
      roles: [
        {
          title: "Global Business Development Manager",
          description: "Open new territories (Middle East, Europe, Vietnam). Build bridges connecting local markets to our global hub."
        },
        {
          title: "Enterprise Sales Representative",
          description: "Close high-value contracts with multinational petrochemical giants and large-scale processors."
        },
        {
          title: "Corporate Strategy Lead",
          description: "Identify the next big market shift (Recycled PET, Futures Trading) and define our roadmap to dominate it."
        },
        {
          title: "Customer Success Manager (CSM)",
          description: "Ensure clients actually use our data and succeed. You turn subscriptions into long-term partnerships."
        }
      ]
    }
  ];

  const values = [
    {
      icon: Zap,
      emoji: "⚡",
      title: "Speed with Precision",
      description: "The bazaar moves instantly. We react in seconds, but never at the cost of accuracy."
    },
    {
      icon: Target,
      emoji: "🥾",
      title: "Boots on the Ground",
      description: "We value real-world insight over ivory-tower theory. We're at the ports, in the factories, and on the trading floor."
    },
    {
      icon: UsersIcon,
      emoji: "🤝",
      title: "Client Obsession",
      description: "We don't just sell data. We don't rest until the client has solved their problem."
    },
    {
      icon: Lock,
      emoji: "🔓",
      title: "Radical Transparency",
      description: "We operate with an open book - honest pricing, honest feedback, honest culture."
    }
  ];

  return (
    <div className="min-h-screen relative">
      {/* Sticky Side Navigation */}
      <div className="hidden lg:block fixed left-8 top-1/2 -translate-y-1/2 z-40">
        <nav className="space-y-4">
          <button
            onClick={() => scrollToSection("open-roles")}
            className={`block w-40 text-left px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeSection === "open-roles"
                ? "bg-primary text-white shadow-lg"
                : "bg-background border-2 text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            Open Roles
          </button>
          <button
            onClick={() => scrollToSection("values")}
            className={`block w-40 text-left px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeSection === "values"
                ? "bg-primary text-white shadow-lg"
                : "bg-background border-2 text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            Values
          </button>
          <button
            onClick={() => scrollToSection("growth")}
            className={`block w-40 text-left px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeSection === "growth"
                ? "bg-primary text-white shadow-lg"
                : "bg-background border-2 text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            Growth
          </button>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="gradient-hero text-white py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Careers at Polymer Bazaar</h1>
          <h2 className="text-3xl font-semibold mb-8">
            Orchestrating the Future of the Global Polymer Trade
          </h2>
          <p className="text-xl text-white/90 mb-4">
            We're not just reporting on the industry - we're building its digital future.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container max-w-6xl mx-auto py-16 px-4 lg:px-16 space-y-20">
        {/* Introduction */}
        <section className="prose prose-lg max-w-none">
          <p className="text-lg text-foreground/80 leading-relaxed">
            Polymer Bazaar is evolving from a premier intelligence provider into a{" "}
            <span className="font-bold text-primary">Global Strategic Ecosystem</span>. 
            Our mission is to become the single source of truth and execution for the entire polymer value chain. 
            We are building a world where information, procurement, technology, and strategy converge.
          </p>
          <p className="text-xl font-semibold text-foreground mt-6">
            If you are a problem solver who wants to build the Global Operating System for the polymer trade, you belong here.
          </p>
        </section>

        {/* Open Roles Section */}
        <section id="open-roles" className="scroll-mt-24 space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">📂 OPEN STRATEGIC POSITIONS</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {jobCategories.map((category) => (
              <AccordionItem
                key={category.id}
                value={category.id}
                className="border-2 rounded-lg overflow-hidden hover:shadow-lg transition-all"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 text-left">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{category.title}</h3>
                    <p className="text-sm text-muted-foreground font-normal">{category.subtitle}</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-muted/20">
                  <div className="space-y-6">
                    {category.roles.map((role, idx) => (
                      <Card key={idx} className="border-l-4 border-l-primary hover:shadow-md transition-all">
                        <CardContent className="p-6">
                          <h4 className="text-lg font-bold text-foreground mb-2">{role.title}</h4>
                          <p className="text-foreground/80 leading-relaxed">{role.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Values Section */}
        <section id="values" className="scroll-mt-24 space-y-8 bg-muted/30 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">🧬 The Bazaar Code (Our Values)</h2>
            <p className="text-lg text-muted-foreground">Why we are different from the corporate giants.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <Card key={idx} className="border-2 hover:shadow-lg transition-all bg-background">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-foreground">
                          {value.emoji} {value.title}
                        </h3>
                        <p className="text-foreground/80 leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Growth Trajectory Section */}
        <section id="growth" className="scroll-mt-24 space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">🚀 Your Growth Trajectory</h2>
            <p className="text-lg text-muted-foreground">What's in it for you?</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 hover:shadow-lg transition-all">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Rocket className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">Build the Engine</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      You aren't just a cog in a legacy machine. You're building the infrastructure 
                      that will define the next decade of global trade.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-all">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">Global Exposure</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      One day analyzing data from China, the next strategizing for a client in Dubai. 
                      The world is your office.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-all md:col-span-2">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">Master the Intersection</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      Learn to operate where Supply Chain, Commodities, and Artificial Intelligence meet.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Inside the Hub Section */}
        <section className="space-y-8 bg-muted/30 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">📸 Inside the Hub</h2>
            <p className="text-lg text-muted-foreground mb-6">Life at Polymer Bazaar</p>
            <p className="text-foreground/80 leading-relaxed max-w-3xl mx-auto">
              We operate with the energy of a live trading floor, not a quiet library. We're collaborative, 
              high-paced, and tech-forward. No red tape. If you have an idea that helps a client, you build it today.
            </p>
          </div>

          <TeamGallery />
        </section>

        {/* Job Alerts Section */}
        <section className="space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">🔔 Job Alerts</h2>
            <p className="text-lg text-muted-foreground">Don't miss the revolution.</p>
          </div>

          <Card className="border-2 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <p className="text-center text-foreground/80 mb-6">
                New strategic roles in AI, Advisory, and Analysis open frequently. 
                Sign up to get notified when your perfect role appears.
              </p>
              <form onSubmit={handleJobAlertSignup} className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                  required
                />
                <Button type="submit" size="lg" className="sm:w-auto">
                  Notify Me
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Career;
