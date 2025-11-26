import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import TeamGallery from "@/components/TeamGallery";
import { useState } from "react";

const Career = () => {
  const [email, setEmail] = useState("");
  const [activeSection, setActiveSection] = useState("open-roles");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
    }
  };

  const handleJobAlert = () => {
    console.log("Job alert signup:", email);
    setEmail("");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20 px-4">
        <div className="container max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Careers at Polymer Bazaar</h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Orchestrating the Future of the Global Polymer Trade
          </h2>
          <p className="text-lg md:text-xl mb-4">
            We're not just reporting on the industry - we're building its digital future.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            Polymer Bazaar is evolving from a premier intelligence provider into a Global Strategic Ecosystem. 
            Our mission is to become the single source of truth and execution for the entire polymer value chain. 
            We are building a world where information, procurement, technology, and strategy converge.
          </p>
          <p className="text-base md:text-lg mt-4 font-medium">
            If you are a problem solver who wants to build the Global Operating System for the polymer trade, you belong here.
          </p>
        </div>
      </section>

      <div className="container max-w-7xl mx-auto py-12 px-4">
        {/* Horizontal Navigation - Enhanced Design */}
        <div className="bg-white rounded-2xl shadow-lg border border-border/30 p-2 mb-16">
          <nav className="flex items-center justify-center gap-1 flex-wrap">
            <button
              onClick={() => scrollToSection("open-roles")}
              className={`flex-1 min-w-[140px] px-6 py-3 text-sm font-semibold rounded-xl transition-all duration-300 whitespace-nowrap ${
                activeSection === "open-roles" 
                  ? "bg-primary text-white shadow-md scale-105" 
                  : "text-foreground hover:bg-muted/50"
              }`}
            >
              Open Roles
            </button>
            <button
              onClick={() => scrollToSection("values")}
              className={`flex-1 min-w-[140px] px-6 py-3 text-sm font-semibold rounded-xl transition-all duration-300 whitespace-nowrap ${
                activeSection === "values" 
                  ? "bg-primary text-white shadow-md scale-105" 
                  : "text-foreground hover:bg-muted/50"
              }`}
            >
              Values
            </button>
            <button
              onClick={() => scrollToSection("growth")}
              className={`flex-1 min-w-[140px] px-6 py-3 text-sm font-semibold rounded-xl transition-all duration-300 whitespace-nowrap ${
                activeSection === "growth" 
                  ? "bg-primary text-white shadow-md scale-105" 
                  : "text-foreground hover:bg-muted/50"
              }`}
            >
              Growth
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className={`flex-1 min-w-[140px] px-6 py-3 text-sm font-semibold rounded-xl transition-all duration-300 whitespace-nowrap ${
                activeSection === "team" 
                  ? "bg-primary text-white shadow-md scale-105" 
                  : "text-foreground hover:bg-muted/50"
              }`}
            >
              Inside the Hub
            </button>
            <button
              onClick={() => scrollToSection("alerts")}
              className={`flex-1 min-w-[140px] px-6 py-3 text-sm font-semibold rounded-xl transition-all duration-300 whitespace-nowrap ${
                activeSection === "alerts" 
                  ? "bg-primary text-white shadow-md scale-105" 
                  : "text-foreground hover:bg-muted/50"
              }`}
            >
              Job Alerts
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto">
            {/* Open Roles Section */}
            <section id="open-roles" className="mb-16 scroll-mt-24">
              <h2 className="text-4xl font-bold mb-8 text-primary border-l-4 border-primary pl-4">
                📂 OPEN STRATEGIC POSITIONS
              </h2>
              
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="orchestrators" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-xl font-bold hover:text-primary">
                    1. The Strategic Orchestrators (Advisory & Solutions)
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <p className="text-muted-foreground mb-4">
                      Help clients navigate the complex Bazaar with end-to-end solutions.
                    </p>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-bold text-lg mb-2">Supply Chain Strategist</h4>
                        <p className="text-muted-foreground">
                          Design resilient, cost-efficient supply chains that withstand global shocks. 
                          Optimize the flow of material for our clients.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Strategic Procurement Advisor</h4>
                        <p className="text-muted-foreground">
                          Act as the external "Chief Procurement Officer." Guide clients on hedging, 
                          inventory timing, and supplier negotiation.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Enterprise Tech & ERP Integrator</h4>
                        <p className="text-muted-foreground">
                          Eliminate friction. Connect Polymer Bazaar's live API data directly into 
                          client ERPs (SAP, Oracle) for automated decision-making.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Global Trade & Compliance Specialist</h4>
                        <p className="text-muted-foreground">
                          Guide clients through customs, BIS standards, and sustainability regulations 
                          to ensure safe, legal commerce.
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="intelligence" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-xl font-bold hover:text-primary">
                    2. The Intelligence Core (Bazaar & Data)
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <p className="text-muted-foreground mb-4">
                      Build the "Global Standard" for accuracy and speed.
                    </p>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-bold text-lg mb-2">AI & Quantitative Researcher</h4>
                        <p className="text-muted-foreground">
                          Develop proprietary algorithms that predict price trends before they happen. 
                          Build our "unfair advantage."
                        </p>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Senior Bazaar Analyst</h4>
                        <p className="text-muted-foreground">
                          Deep-dive experts for specific chains (PVC, PP, PE) who verify algorithmic 
                          data with real-world "Bazaar" insights.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Price Discovery Specialist</h4>
                        <p className="text-muted-foreground">
                          The front-line scouts who gather, verify, and standardize daily price 
                          assessments from the market.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Compliance & Methodology Manager</h4>
                        <p className="text-muted-foreground">
                          Ensure our pricing methods are auditable and legally sound. You protect the 
                          integrity that makes us a trusted global benchmark.
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="platform" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-xl font-bold hover:text-primary">
                    3. The Platform Builders (Tech & Product)
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <p className="text-muted-foreground mb-4">
                      We are a tech company at heart.
                    </p>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-bold text-lg mb-2">UX/UI Product Designer</h4>
                        <p className="text-muted-foreground">
                          Ensure our data is visualized beautifully. Make the "Bazaar" as intuitive 
                          as a modern consumer app.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Full-Stack Engineer</h4>
                        <p className="text-muted-foreground">
                          Build the robust, low-latency infrastructure that delivers critical alerts 
                          instantly to thousands of users.
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="growth" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-xl font-bold hover:text-primary">
                    4. The Growth Engine (Sales & Strategy)
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <p className="text-muted-foreground mb-4">
                      Expand from a National Leader to a Global Giant.
                    </p>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-bold text-lg mb-2">Global Business Development Manager</h4>
                        <p className="text-muted-foreground">
                          Open new territories (Middle East, Europe, Vietnam). Build bridges connecting 
                          local markets to our global hub.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Enterprise Sales Representative</h4>
                        <p className="text-muted-foreground">
                          Close high-value contracts with multinational petrochemical giants and 
                          large-scale processors.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Corporate Strategy Lead</h4>
                        <p className="text-muted-foreground">
                          Identify the next big market shift (Recycled PET, Futures Trading) and 
                          define our roadmap to dominate it.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Customer Success Manager (CSM)</h4>
                        <p className="text-muted-foreground">
                          Ensure clients actually use our data and succeed. You turn subscriptions 
                          into long-term partnerships.
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            {/* Values Section */}
            <section id="values" className="mb-16 scroll-mt-24">
              <h2 className="text-4xl font-bold mb-8 text-primary border-l-4 border-primary pl-4">
                🧬 The Bazaar Code (Our Values)
              </h2>
              <p className="text-xl mb-8 text-muted-foreground">
                Why we are different from the corporate giants.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">⚡ Speed with Precision</h3>
                    <p className="text-muted-foreground">
                      The bazaar moves instantly. We react in seconds, but never at the cost of accuracy.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">🥾 Boots on the Ground</h3>
                    <p className="text-muted-foreground">
                      We value real-world insight over ivory-tower theory. We're at the ports, in the 
                      factories, and on the trading floor.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">🤝 Client Obsession</h3>
                    <p className="text-muted-foreground">
                      We don't just sell data. We don't rest until the client has solved their problem.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">🔓 Radical Transparency</h3>
                    <p className="text-muted-foreground">
                      We operate with an open book - honest pricing, honest feedback, honest culture.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Growth Section */}
            <section id="growth" className="mb-16 scroll-mt-24">
              <h2 className="text-4xl font-bold mb-8 text-primary border-l-4 border-primary pl-4">
                🚀 Your Growth Trajectory
              </h2>
              <p className="text-xl mb-8 text-muted-foreground">What's in it for you?</p>
              
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Build the Engine</h3>
                    <p className="text-muted-foreground">
                      You aren't just a cog in a legacy machine. You're building the infrastructure 
                      that will define the next decade of global trade.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Global Exposure</h3>
                    <p className="text-muted-foreground">
                      One day analyzing data from China, the next strategizing for a client in Dubai. 
                      The world is your office.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Master the Intersection</h3>
                    <p className="text-muted-foreground">
                      Learn to operate where Supply Chain, Commodities, and Artificial Intelligence meet.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Team Section */}
            <section id="team" className="mb-16 scroll-mt-24">
              <h2 className="text-4xl font-bold mb-8 text-primary border-l-4 border-primary pl-4">
                📸 Inside the Hub
              </h2>
              <p className="text-xl mb-8 text-muted-foreground">Life at Polymer Bazaar</p>
              
              <Card className="mb-8">
                <CardContent className="p-6">
                  <p className="text-lg leading-relaxed">
                    We operate with the energy of a live trading floor, not a quiet library. 
                    We're collaborative, high-paced, and tech-forward. No red tape. If you have 
                    an idea that helps a client, you build it today.
                  </p>
                </CardContent>
              </Card>

              <TeamGallery />
            </section>

            {/* Job Alerts Section */}
            <section id="alerts" className="scroll-mt-24">
              <h2 className="text-4xl font-bold mb-8 text-primary border-l-4 border-primary pl-4">
                🔔 Job Alerts
              </h2>
              <p className="text-xl mb-8 text-muted-foreground">Don't miss the revolution.</p>
              
              <Card>
                <CardContent className="p-8">
                  <p className="text-lg mb-6">
                    New strategic roles in AI, Advisory, and Analysis open frequently. 
                    Sign up to get notified when your perfect role appears.
                  </p>
                  
                  <div className="flex gap-4 max-w-xl">
                    <Input
                      type="email"
                      placeholder="Enter Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1"
                    />
                    <Button 
                      onClick={handleJobAlert}
                      className="bg-primary hover:bg-primary/90 text-white px-8"
                    >
                      Notify Me
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
      </div>
    </div>
  );
};

export default Career;
