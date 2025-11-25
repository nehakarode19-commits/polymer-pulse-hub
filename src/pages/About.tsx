import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { 
  Target, 
  Globe, 
  TrendingUp, 
  Shield, 
  Handshake, 
  Megaphone, 
  CheckCircle2,
  Zap,
  Users,
  Lock,
  Rocket,
  ArrowRight
} from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="gradient-hero text-white py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">About Polymer Bazaar</h1>
          <p className="text-2xl text-white/90 font-semibold">
            Empowering Decisions in a Volatile World
          </p>
        </div>
      </section>

      <div className="container max-w-7xl mx-auto py-16 px-4 space-y-24">
        {/* Who We Are */}
        <section>
          <h2 className="text-4xl font-bold mb-8">Who We Are</h2>
          <div className="prose max-w-none space-y-6 text-lg text-muted-foreground">
            <p>
              Polymer Bazaar is the definitive intelligence hub for the global plastics and petrochemical industry. We bridge the gap between complex data and actionable business strategy. Born in India—one of the world's fastest-growing polymer hubs—and expanded globally, we provide the critical edge that manufacturers, traders, and industry leaders need to navigate uncertain bazaars.
            </p>
            <p>
              Unlike traditional reporting agencies that simply present historical data, we deliver forward-looking intelligence. We combine robust algorithmic tracking with deep human expertise to ensure you aren't just watching the bazaar—you are anticipating it.
            </p>
          </div>
        </section>

        {/* Our Mission */}
        <section>
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-background to-primary/5">
            <CardContent className="p-12">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To democratize access to high-precision trade intelligence. We believe that in the polymer industry, timing is everything. Our mission is to replace speculation with certainty, enabling our clients to optimize procurement, manage inventory risk, and maximize profitability through data-backed decision-making.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* The Polymer Bazaar Advantage */}
        <section>
          <h2 className="text-4xl font-bold mb-8">The Polymer Bazaar Advantage</h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            We have redefined how trade data is consumed. While others rely on legacy systems, we have built an ecosystem of agility.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary/30 hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Zap className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Real-Time Precision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The bazaar doesn't wait for weekly reports, and neither do we. Through our advanced mobile applications, SMS alerts, and WhatsApp integration, we deliver pricing and trend alerts the moment they happen.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/30 hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Globe className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Global Reach, Local Mastery</h3>
                <p className="text-muted-foreground leading-relaxed">
                  With a stronghold in the Asian bazaars and an expanding footprint across the Middle East, Europe, and the USA, we offer a unique dual perspective: granular local insights combined with global macro-trends.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/30 hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Shield className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Unbiased Integrity</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our independence is our currency. Our price assessments and news feeds are rigorously verified by an editorial staff that adheres to strict neutrality, ensuring the data you use is free from conflict of interest.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Our Methodology */}
        <section>
          <h2 className="text-4xl font-bold mb-8">Our Methodology</h2>
          <div className="prose max-w-none space-y-6 text-lg text-muted-foreground">
            <p>
              Data is only as good as its source. At Polymer Bazaar, we employ a <strong>Multi-Source Validation Protocol</strong>. We do not rely on single-point hearsay. Our analysts cross-reference inputs from producers, processors, and traders to filter out noise and deliver the true transaction price. This commitment to accuracy has made our price index a trusted benchmark for settlement and negotiation across the industry.
            </p>
          </div>

          {/* Detailed Methodology Section */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold mb-6">The Science Behind the Price</h3>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              At Polymer Bazaar, we don't just gather prices; we validate them. In a bazaar driven by volatility and rumors, our proprietary Triangulation Protocol ensures every number represents confirmable, tradeable reality.
            </p>

            <div className="space-y-8">
              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 font-bold text-primary text-xl">
                      1
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold mb-3">Multi-Source Intelligence Gathering</h4>
                      <p className="text-muted-foreground mb-4">Casting the Widest Net in the Polymer Ecosystem</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-1" />
                          <span className="text-muted-foreground">Domestic Producers: Official prices and unannounced floor prices</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-1" />
                          <span className="text-muted-foreground">Importers & Traders: Spot offers, distressed sales, and bulk discounts</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-1" />
                          <span className="text-muted-foreground">End-Processors: Actual consumption patterns and inventory levels</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-1" />
                          <span className="text-muted-foreground">Global Benchmarks: Real-time international indicators and feedstock trends</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 font-bold text-primary text-xl">
                      2
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold mb-3">The "Bazaar Filter" — Our Analytical Edge</h4>
                      <p className="text-muted-foreground mb-4">Where Human Expertise Meets Bazaar Reality</p>
                      <div className="space-y-2 text-muted-foreground">
                        <p>❌ Filtered Out: One-off distressed sales distorting true price levels</p>
                        <p>❌ Filtered Out: "Paper offers" without transactional intent</p>
                        <p>❌ Filtered Out: Credit-heavy deals inflating visible prices</p>
                        <p>❌ Filtered Out: Outliers beyond statistical confidence intervals</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 font-bold text-primary text-xl">
                      3
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold mb-3">Triangulation & Multi-Party Verification</h4>
                      <p className="text-muted-foreground mb-4">The Proof Behind Every Data Point</p>
                      <div className="bg-primary/5 rounded-lg p-6 space-y-3 text-muted-foreground">
                        <p>"If a trader claims they sold at ₹100/kg..."</p>
                        <p className="pl-6">...We verify with the buyer that they purchased at ₹100/kg...</p>
                        <p className="pl-12">...And cross-reference with market makers for confirmation.</p>
                        <p className="font-semibold text-foreground mt-4">Only triple-verified data enters our assessment system.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 font-bold text-primary text-xl">
                      4
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold mb-3">Final Assessment & Editorial Review</h4>
                      <p className="text-muted-foreground mb-4">Your Contract-Grade Benchmark</p>
                      <p className="text-muted-foreground mb-3">Our Editorial Board reviews all verified data against:</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-1" />
                          <span className="text-muted-foreground">Current supply-demand dynamics</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-1" />
                          <span className="text-muted-foreground">Global movements (Crude, Monomer)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-1" />
                          <span className="text-muted-foreground">Currency and logistics impacts</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-1" />
                          <span className="text-muted-foreground">Historical statistical patterns</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Committed to the Future */}
        <section className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-6">Committed to the Future</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            As the industry evolves toward circular economy models, Polymer Bazaar is at the forefront of Green Intelligence. We are actively expanding our coverage of recycled polymers, sustainability regulations, and green innovation, ensuring our clients are ready not just for today's trade, but for tomorrow's transformation.
          </p>
        </section>

        {/* Strategic Partnerships & Delegation Services */}
        <section>
          <h2 className="text-4xl font-bold mb-4">Strategic Alliances & Delegations</h2>
          <p className="text-2xl text-primary font-semibold mb-8">
            Beyond Bazaar Data: Your Direct Bridge to Global Opportunities
          </p>
          
          <div className="prose max-w-none space-y-6 text-lg text-muted-foreground mb-12">
            <p>
              While others simply report on the industry, Polymer Bazaar actively connects you to it. We are more than a digital platform; we are a physical force in the global polymer trade. As the industry's dedicated Media & Delegation Partner, we bridge the gap between local insights and global opportunities.
            </p>
            <p className="font-semibold text-foreground text-xl">
              We don't just observe the bazaar—we ensure you have a seat at the table.
            </p>
          </div>

          <h3 className="text-3xl font-bold mb-8">The Power of Partnership</h3>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-2">
              <CardContent className="p-8">
                <h4 className="text-xl font-bold mb-4">Official Delegation Leadership</h4>
                <p className="text-muted-foreground leading-relaxed">
                  We organize and lead business-focused delegations to the world's most critical trade fairs. We do not just facilitate travel; we curate a professional ecosystem where networking, deal-making, and knowledge exchange happen seamlessly.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8">
                <h4 className="text-xl font-bold mb-4">Our Proven Partnership Model</h4>
                <p className="text-muted-foreground leading-relaxed">
                  We leverage a curated portfolio of partnerships with leading trade fairs and conferences worldwide. Our clients benefit from a structured program designed for maximum ROI, covering the entire spectrum—from niche regional buyer-seller meets to premier international expos.
                </p>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-3xl font-bold mb-8">Why Join a Polymer Bazaar Delegation?</h3>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-2 hover:border-primary/30 hover:shadow-xl transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Handshake className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-xl font-bold mb-4">🤝 Curated Connections</h4>
                <p className="text-muted-foreground leading-relaxed">
                  We cut through the noise of massive trade floors. We facilitate meaningful matchmaking, connecting you directly with the suppliers, buyers, and innovators relevant to your specific sector.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/30 hover:shadow-xl transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-xl font-bold mb-4">🏛️ Trusted Representation</h4>
                <p className="text-muted-foreground leading-relaxed">
                  When you travel with Polymer Bazaar, you carry the weight of an established industry institution. Our relationships grant our delegates exclusive access to invitation-only receptions, private negotiating sessions, and pre-scheduled one-on-one meetings.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/30 hover:shadow-xl transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Megaphone className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-xl font-bold mb-4">📢 Industry Voice</h4>
                <p className="text-muted-foreground leading-relaxed">
                  We provide a platform for thought leadership. Our delegates and partners often find opportunities to share insights through event interviews, panel discussions, and our editorial coverage.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-background">
            <CardContent className="p-8">
              <h4 className="text-2xl font-bold mb-6">📰 Alliance Updates & Announcements</h4>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <p className="text-muted-foreground"><strong>[New Partnership]</strong> Official Media Partner for Plastic show 2025 (Almaty)</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <p className="text-muted-foreground"><strong>[Upcoming Delegation]</strong> Registration now open for Plast Milan Delegation</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <p className="text-muted-foreground"><strong>[Regional Focus]</strong> Polymer Bazaar to host exclusive Buyer-Seller Meet</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary-dark text-primary-foreground">
                  Inquire About Delegations
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline">
                  Partner With Us
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-xl italic text-muted-foreground">
              "Connecting the grassroots to the global stage—your success is our business."
            </p>
          </div>
        </section>

        {/* Careers Section */}
        <section>
          <h2 className="text-4xl font-bold mb-4">Careers at Polymer Bazaar</h2>
          <p className="text-2xl text-primary font-semibold mb-8">
            Orchestrating the Future of the Global Polymer Trade
          </p>
          
          <div className="prose max-w-none space-y-6 text-lg text-muted-foreground mb-12">
            <p>
              We're not just reporting on the industry - we're building its digital future.
            </p>
            <p>
              Polymer Bazaar is evolving from a premier intelligence provider into a Global Strategic Ecosystem. Our mission is to become the single source of truth and execution for the entire polymer value chain. We are building a world where information, procurement, technology, and strategy converge.
            </p>
            <p className="font-semibold text-foreground text-xl">
              If you are a problem solver who wants to build the Global Operating System for the polymer trade, you belong here.
            </p>
          </div>

          <h3 className="text-3xl font-bold mb-8">📂 OPEN STRATEGIC POSITIONS</h3>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="strategic" className="border-2 rounded-lg px-6">
              <AccordionTrigger className="text-xl font-bold hover:no-underline">
                1. The Strategic Orchestrators (Advisory & Solutions)
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4">
                <p className="text-muted-foreground mb-4">Help clients navigate the complex Bazaar with end-to-end solutions.</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                    <div>
                      <h5 className="font-semibold">Supply Chain Strategist</h5>
                      <p className="text-muted-foreground">Design resilient, cost-efficient supply chains that withstand global shocks. Optimize the flow of material for our clients.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                    <div>
                      <h5 className="font-semibold">Strategic Procurement Advisor</h5>
                      <p className="text-muted-foreground">Act as the external "Chief Procurement Officer." Guide clients on hedging, inventory timing, and supplier negotiation.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                    <div>
                      <h5 className="font-semibold">Enterprise Tech & ERP Integrator</h5>
                      <p className="text-muted-foreground">Eliminate friction. Connect Polymer Bazaar's live API data directly into client ERPs (SAP, Oracle) for automated decision-making.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                    <div>
                      <h5 className="font-semibold">Global Trade & Compliance Specialist</h5>
                      <p className="text-muted-foreground">Guide clients through customs, BIS standards, and sustainability regulations to ensure safe, legal commerce.</p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="intelligence" className="border-2 rounded-lg px-6">
              <AccordionTrigger className="text-xl font-bold hover:no-underline">
                2. The Intelligence Core (Bazaar & Data)
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4">
                <p className="text-muted-foreground mb-4">Build the "Global Standard" for accuracy and speed.</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                    <div>
                      <h5 className="font-semibold">AI & Quantitative Researcher</h5>
                      <p className="text-muted-foreground">Develop proprietary algorithms that predict price trends before they happen. Build our "unfair advantage."</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                    <div>
                      <h5 className="font-semibold">Senior Bazaar Analyst</h5>
                      <p className="text-muted-foreground">Deep-dive experts for specific chains (PVC, PP, PE) who verify algorithmic data with real-world "Bazaar" insights.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                    <div>
                      <h5 className="font-semibold">Price Discovery Specialist</h5>
                      <p className="text-muted-foreground">The front-line scouts who gather, verify, and standardize daily price assessments from the market.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                    <div>
                      <h5 className="font-semibold">Compliance & Methodology Manager</h5>
                      <p className="text-muted-foreground">Ensure our pricing methods are auditable and legally sound. You protect the integrity that makes us a trusted global benchmark.</p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="platform" className="border-2 rounded-lg px-6">
              <AccordionTrigger className="text-xl font-bold hover:no-underline">
                3. The Platform Builders (Tech & Product)
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4">
                <p className="text-muted-foreground mb-4">We are a tech company at heart.</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                    <div>
                      <h5 className="font-semibold">UX/UI Product Designer</h5>
                      <p className="text-muted-foreground">Ensure our data is visualized beautifully. Make the "Bazaar" as intuitive as a modern consumer app.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                    <div>
                      <h5 className="font-semibold">Full-Stack Engineer</h5>
                      <p className="text-muted-foreground">Build the robust, low-latency infrastructure that delivers critical alerts instantly to thousands of users.</p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="growth" className="border-2 rounded-lg px-6">
              <AccordionTrigger className="text-xl font-bold hover:no-underline">
                4. The Growth Engine (Sales & Strategy)
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4">
                <p className="text-muted-foreground mb-4">Expand from a National Leader to a Global Giant.</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                    <div>
                      <h5 className="font-semibold">Global Business Development Manager</h5>
                      <p className="text-muted-foreground">Open new territories (Middle East, Europe, Vietnam). Build bridges connecting local markets to our global hub.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                    <div>
                      <h5 className="font-semibold">Enterprise Sales Representative</h5>
                      <p className="text-muted-foreground">Close high-value contracts with multinational petrochemical giants and large-scale processors.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                    <div>
                      <h5 className="font-semibold">Corporate Strategy Lead</h5>
                      <p className="text-muted-foreground">Identify the next big market shift (Recycled PET, Futures Trading) and define our roadmap to dominate it.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                    <div>
                      <h5 className="font-semibold">Customer Success Manager (CSM)</h5>
                      <p className="text-muted-foreground">Ensure clients actually use our data and succeed. You turn subscriptions into long-term partnerships.</p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* The Bazaar Code */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold mb-8">🧬 The Bazaar Code (Our Values)</h3>
            <p className="text-lg text-muted-foreground mb-8">Why we are different from the corporate giants.</p>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Zap className="h-8 w-8 text-primary shrink-0" />
                    <div>
                      <h4 className="text-xl font-bold mb-2">⚡ Speed with Precision</h4>
                      <p className="text-muted-foreground">The bazaar moves instantly. We react in seconds, but never at the cost of accuracy.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Users className="h-8 w-8 text-primary shrink-0" />
                    <div>
                      <h4 className="text-xl font-bold mb-2">🥾 Boots on the Ground</h4>
                      <p className="text-muted-foreground">We value real-world insight over ivory-tower theory. We're at the ports, in the factories, and on the trading floor.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Target className="h-8 w-8 text-primary shrink-0" />
                    <div>
                      <h4 className="text-xl font-bold mb-2">🤝 Client Obsession</h4>
                      <p className="text-muted-foreground">We don't just sell data. We don't rest until the client has solved their problem.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Lock className="h-8 w-8 text-primary shrink-0" />
                    <div>
                      <h4 className="text-xl font-bold mb-2">🔓 Radical Transparency</h4>
                      <p className="text-muted-foreground">We operate with an open book - honest pricing, honest feedback, honest culture.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Growth Trajectory */}
          <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-background mt-12">
            <CardContent className="p-10">
              <div className="flex items-start gap-6">
                <Rocket className="h-12 w-12 text-primary shrink-0" />
                <div>
                  <h3 className="text-3xl font-bold mb-6">🚀 Your Growth Trajectory</h3>
                  <p className="text-lg text-muted-foreground mb-6">What's in it for you?</p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <p className="text-muted-foreground"><strong>Build the Engine:</strong> You aren't just a cog in a legacy machine. You're building the infrastructure that will define the next decade of global trade.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <p className="text-muted-foreground"><strong>Global Exposure:</strong> One day analyzing data from China, the next strategizing for a client in Dubai. The world is your office.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <p className="text-muted-foreground"><strong>Master the Intersection:</strong> Learn to operate where Supply Chain, Commodities, and Artificial Intelligence meet.</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Job Alerts */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold mb-4">🔔 Job Alerts</h3>
            <p className="text-lg text-muted-foreground mb-6">Don't miss the revolution. New strategic roles in AI, Advisory, and Analysis open frequently.</p>
            <div className="flex gap-4 justify-center max-w-xl mx-auto">
              <Input type="email" placeholder="Enter your email" className="h-12" />
              <Button size="lg" className="bg-primary hover:bg-primary-dark text-primary-foreground">
                Notify Me
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
