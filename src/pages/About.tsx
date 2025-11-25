import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { 
  Target, 
  Globe, 
  Shield, 
  Handshake, 
  Megaphone, 
  CheckCircle2,
  Zap,
  Users,
  Lock,
  Rocket,
  TrendingUp,
  BarChart3,
  Award,
  Lightbulb
} from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="gradient-hero text-white py-24 px-4">
        <div className="container max-w-5xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
            About Us
          </div>
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            Empowering Decisions in a<br />Volatile World
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            The definitive intelligence hub for the global plastics and petrochemical industry
          </p>
        </div>
      </section>

      {/* Tabs Navigation */}
      <Tabs defaultValue="overview" className="container max-w-7xl mx-auto px-4 -mt-8">
        <div className="bg-background rounded-xl shadow-xl border-2 p-2">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 gap-2 bg-transparent">
            <TabsTrigger value="overview" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Overview
            </TabsTrigger>
            <TabsTrigger value="methodology" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Methodology
            </TabsTrigger>
            <TabsTrigger value="partnerships" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Partnerships
            </TabsTrigger>
            <TabsTrigger value="careers" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Careers
            </TabsTrigger>
            <TabsTrigger value="values" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Our Values
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Overview Tab */}
        <TabsContent value="overview" className="mt-16 space-y-16">
          {/* Who We Are */}
          <section className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                Who We Are
              </div>
              <h2 className="text-4xl font-bold mb-6">Your Intelligence Hub for Global Polymer Trade</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Born in India and expanded globally, we bridge the gap between complex data and actionable business strategy. We provide the critical edge that manufacturers, traders, and industry leaders need to navigate uncertain markets.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Unlike traditional agencies that present historical data, we deliver <strong>forward-looking intelligence</strong> combining algorithmic tracking with deep human expertise.
              </p>
            </div>
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background">
              <CardContent className="p-10">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  To democratize access to high-precision trade intelligence. We replace speculation with certainty, enabling clients to optimize procurement, manage inventory risk, and maximize profitability through data-backed decision-making.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Key Advantages */}
          <section>
            <div className="text-center mb-12">
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                Why Choose Us
              </div>
              <h2 className="text-4xl font-bold mb-4">The Polymer Bazaar Advantage</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We've redefined how trade data is consumed with an ecosystem built for agility
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2 hover:border-primary/30 hover:shadow-2xl transition-all group">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Zap className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Real-Time Precision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Through mobile apps, SMS alerts, and WhatsApp integration, we deliver pricing and trend alerts the moment they happen.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/30 hover:shadow-2xl transition-all group">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Globe className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Global & Local Mastery</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Stronghold in Asian markets with expanding footprint across Middle East, Europe, and USA. Granular local insights meet global macro-trends.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/30 hover:shadow-2xl transition-all group">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Shield className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Unbiased Integrity</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our editorial staff adheres to strict neutrality, ensuring the data you use is free from conflict of interest. Independence is our currency.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Commitment Section */}
          <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-background rounded-3xl p-12 border-2 border-primary/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Committed to the Future</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  As the industry evolves toward circular economy models, we're at the forefront of Green Intelligence—actively expanding coverage of recycled polymers, sustainability regulations, and green innovation.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-background/80 backdrop-blur border-2">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">20+</div>
                    <p className="text-sm text-muted-foreground">Years of Intelligence</p>
                  </CardContent>
                </Card>
                <Card className="bg-background/80 backdrop-blur border-2">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">10+</div>
                    <p className="text-sm text-muted-foreground">Countries Covered</p>
                  </CardContent>
                </Card>
                <Card className="bg-background/80 backdrop-blur border-2">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                    <p className="text-sm text-muted-foreground">Market Monitoring</p>
                  </CardContent>
                </Card>
                <Card className="bg-background/80 backdrop-blur border-2">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">100%</div>
                    <p className="text-sm text-muted-foreground">Verified Data</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </TabsContent>

        {/* Methodology Tab */}
        <TabsContent value="methodology" className="mt-16 space-y-12">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
              Our Process
            </div>
            <h2 className="text-4xl font-bold mb-4">The Science Behind the Price</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              In a bazaar driven by volatility and rumors, our proprietary Triangulation Protocol ensures every number represents confirmable, tradeable reality.
            </p>
          </div>

          {/* 4-Step Process */}
          <div className="space-y-6">
            <Card className="border-2 hover:border-primary/30 transition-all">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shrink-0 font-bold text-2xl">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">Multi-Source Intelligence Gathering</h3>
                    <p className="text-muted-foreground mb-6">Casting the widest net in the polymer ecosystem</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-1" />
                        <span className="text-muted-foreground">Domestic Producers: Official & floor prices</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-1" />
                        <span className="text-muted-foreground">Importers & Traders: Spot offers & discounts</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-1" />
                        <span className="text-muted-foreground">End-Processors: Consumption patterns</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-1" />
                        <span className="text-muted-foreground">Global Benchmarks: International indicators</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/30 transition-all">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shrink-0 font-bold text-2xl">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">The "Bazaar Filter"</h3>
                    <p className="text-muted-foreground mb-6">Where human expertise meets bazaar reality</p>
                    <div className="bg-muted/50 rounded-lg p-6 space-y-2">
                      <p className="text-muted-foreground">❌ Filtered: One-off distressed sales</p>
                      <p className="text-muted-foreground">❌ Filtered: "Paper offers" without transactional intent</p>
                      <p className="text-muted-foreground">❌ Filtered: Credit-heavy deals inflating prices</p>
                      <p className="text-muted-foreground">❌ Filtered: Statistical outliers beyond confidence intervals</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/30 transition-all">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shrink-0 font-bold text-2xl">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">Triangulation & Multi-Party Verification</h3>
                    <p className="text-muted-foreground mb-6">The proof behind every data point</p>
                    <div className="bg-primary/5 rounded-lg p-6 border-l-4 border-primary">
                      <p className="text-muted-foreground mb-2">"If a trader claims they sold at ₹100/kg..."</p>
                      <p className="text-muted-foreground ml-6 mb-2">→ We verify with the buyer that they purchased at ₹100/kg</p>
                      <p className="text-muted-foreground ml-12 mb-4">→ And cross-reference with market makers for confirmation</p>
                      <p className="font-semibold text-foreground">✓ Only triple-verified data enters our assessment system</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/30 transition-all">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shrink-0 font-bold text-2xl">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">Final Assessment & Editorial Review</h3>
                    <p className="text-muted-foreground mb-6">Your contract-grade benchmark</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <BarChart3 className="h-5 w-5 text-primary shrink-0 mt-1" />
                        <span className="text-muted-foreground">Supply-demand dynamics</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Globe className="h-5 w-5 text-primary shrink-0 mt-1" />
                        <span className="text-muted-foreground">Global movements (Crude, Monomer)</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <TrendingUp className="h-5 w-5 text-primary shrink-0 mt-1" />
                        <span className="text-muted-foreground">Currency & logistics impacts</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Award className="h-5 w-5 text-primary shrink-0 mt-1" />
                        <span className="text-muted-foreground">Historical statistical patterns</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Editorial Independence */}
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background">
            <CardContent className="p-10">
              <div className="flex items-start gap-6">
                <Lock className="h-12 w-12 text-primary shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-4">Editorial Independence & Compliance</h3>
                  <p className="text-lg text-muted-foreground mb-6">The foundation of trust</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-1" />
                      <span className="text-muted-foreground">Complete separation between commercial and pricing teams</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-1" />
                      <span className="text-muted-foreground">Regular internal and external methodology audits</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-1" />
                      <span className="text-muted-foreground">Transparent correction and appeals process</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-1" />
                      <span className="text-muted-foreground">Compliance with global benchmark principles</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Partnerships Tab */}
        <TabsContent value="partnerships" className="mt-16 space-y-12">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
              Strategic Alliances
            </div>
            <h2 className="text-4xl font-bold mb-4">Beyond Data: Your Bridge to Global Opportunities</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're more than a digital platform—we're a physical force in global polymer trade as the industry's dedicated Media & Delegation Partner.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-2 hover:border-primary/30 hover:shadow-xl transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Handshake className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Curated Connections</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Meaningful matchmaking connecting you directly with suppliers, buyers, and innovators relevant to your sector.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/30 hover:shadow-xl transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Trusted Representation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Exclusive access to invitation-only receptions, private sessions, and pre-scheduled meetings.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/30 hover:shadow-xl transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Megaphone className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Industry Voice</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Opportunities for thought leadership through event interviews, panels, and editorial coverage.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-background">
            <CardContent className="p-10">
              <h3 className="text-2xl font-bold mb-6">Latest Alliance Updates</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4 p-4 bg-background rounded-lg border">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Official Media Partner for Plastic Show 2025 (Almaty)</p>
                    <p className="text-sm text-muted-foreground">Join us at Central Asia's premier polymer industry event</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-background rounded-lg border">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Registration Open for Plast Milan Delegation</p>
                    <p className="text-sm text-muted-foreground">Secure your spot at Europe's largest plastics trade fair</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-background rounded-lg border">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Exclusive Buyer-Seller Meet Coming Soon</p>
                    <p className="text-sm text-muted-foreground">Regional networking event connecting grassroots to global stage</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Inquire About Delegations
                </Button>
                <Button size="lg" variant="outline">
                  Partner With Us
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Careers Tab */}
        <TabsContent value="careers" className="mt-16 space-y-12">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
              Join Our Team
            </div>
            <h2 className="text-4xl font-bold mb-4">Orchestrating the Future of Global Polymer Trade</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're building the Global Operating System for the polymer trade. If you're a problem solver ready to shape the industry's digital future, you belong here.
            </p>
          </div>

          {/* Open Positions by Category */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 hover:border-primary/30 transition-all">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Lightbulb className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Strategic Orchestrators</h3>
                <p className="text-muted-foreground mb-4">Advisory & Solutions</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Supply Chain Strategist</li>
                  <li>• Strategic Procurement Advisor</li>
                  <li>• Enterprise Tech & ERP Integrator</li>
                  <li>• Global Trade & Compliance Specialist</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/30 transition-all">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <BarChart3 className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Intelligence Core</h3>
                <p className="text-muted-foreground mb-4">Bazaar & Data</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• AI & Quantitative Researcher</li>
                  <li>• Senior Bazaar Analyst</li>
                  <li>• Price Discovery Specialist</li>
                  <li>• Compliance & Methodology Manager</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/30 transition-all">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Rocket className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Platform Builders</h3>
                <p className="text-muted-foreground mb-4">Tech & Product</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• UX/UI Product Designer</li>
                  <li>• Full-Stack Engineer</li>
                  <li>• DevOps & Infrastructure</li>
                  <li>• Mobile App Developer</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/30 transition-all">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Growth Engine</h3>
                <p className="text-muted-foreground mb-4">Sales & Strategy</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Global Business Development Manager</li>
                  <li>• Enterprise Sales Representative</li>
                  <li>• Corporate Strategy Lead</li>
                  <li>• Customer Success Manager</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Job Alerts */}
          <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-background">
            <CardContent className="p-10 text-center">
              <Rocket className="h-12 w-12 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Stay Updated on New Opportunities</h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                New strategic roles in AI, Advisory, and Analysis open frequently. Sign up to get notified when your perfect role appears.
              </p>
              <div className="flex gap-4 max-w-xl mx-auto">
                <Input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="h-12 text-base"
                />
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground whitespace-nowrap">
                  Notify Me
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Values Tab */}
        <TabsContent value="values" className="mt-16 space-y-12">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
              Our Culture
            </div>
            <h2 className="text-4xl font-bold mb-4">The Bazaar Code</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              What makes us different from the corporate giants
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 hover:border-primary/30 hover:shadow-xl transition-all">
              <CardContent className="p-10">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Speed with Precision</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      The bazaar moves instantly. We react in seconds, but never at the cost of accuracy. Every data point is verified before it reaches you.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/30 hover:shadow-xl transition-all">
              <CardContent className="p-10">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Boots on the Ground</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We value real-world insight over ivory-tower theory. We're at the ports, in the factories, and on the trading floor.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/30 hover:shadow-xl transition-all">
              <CardContent className="p-10">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Client Obsession</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We don't just sell data. We don't rest until the client has solved their problem and achieved measurable results.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/30 hover:shadow-xl transition-all">
              <CardContent className="p-10">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Lock className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Radical Transparency</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We operate with an open book—honest pricing, honest feedback, honest culture. No hidden agendas.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Growth Benefits */}
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background">
            <CardContent className="p-12">
              <div className="text-center mb-10">
                <Rocket className="h-16 w-16 text-primary mx-auto mb-6" />
                <h3 className="text-3xl font-bold mb-4">Your Growth Trajectory</h3>
                <p className="text-lg text-muted-foreground">What's in it for you?</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-bold mb-2">Build the Engine</h4>
                  <p className="text-sm text-muted-foreground">
                    You're building the infrastructure that will define the next decade of global trade
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-bold mb-2">Global Exposure</h4>
                  <p className="text-sm text-muted-foreground">
                    One day analyzing data from China, the next strategizing for a client in Dubai
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-bold mb-2">Master the Intersection</h4>
                  <p className="text-sm text-muted-foreground">
                    Learn where Supply Chain, Commodities, and AI meet
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default About;
