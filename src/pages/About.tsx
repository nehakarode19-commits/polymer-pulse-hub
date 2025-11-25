import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Zap, Globe, Shield, Activity, Leaf } from "lucide-react";

const About = () => {
  const team = [
    { name: "Rajesh Kumar", role: "Founder & CEO", bio: "20+ years in petrochemical industry" },
    { name: "Priya Sharma", role: "Chief Analyst", bio: "Expert in polymer market trends" },
    { name: "Amit Patel", role: "Head of Operations", bio: "Supply chain & logistics specialist" },
    { name: "Sneha Desai", role: "Marketing Director", bio: "Brand strategy & communications" },
  ];

  const timeline = [
    { year: "2007", event: "Polymer Bazaar founded in Ahmedabad" },
    { year: "2010", event: "Expanded to cover Asian markets" },
    { year: "2015", event: "Launched mobile app and WhatsApp alerts" },
    { year: "2018", event: "Global expansion - USA, Europe, Middle East" },
    { year: "2020", event: "Introduced AI-powered price predictions" },
    { year: "2024", event: "20+ years of trusted market intelligence" },
  ];

  const clients = ["Reliance", "IOCL", "SABIC", "LyondellBasell", "Dow Chemical", "Total", "ExxonMobil", "Shell"];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="gradient-hero text-white py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Polymer Bazaar</h1>
          <p className="text-2xl text-white/90 font-semibold">
            Empowering Decisions in a Volatile World
          </p>
        </div>
      </section>

      <Tabs defaultValue="about" className="container max-w-6xl mx-auto py-12 px-4">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
          <TabsTrigger value="about">About Us</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="media">Media</TabsTrigger>
          <TabsTrigger value="press">Press</TabsTrigger>
        </TabsList>

        <TabsContent value="about" className="space-y-16">
          {/* Who We Are */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
            <div className="prose max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Polymer Bazaar is the definitive intelligence hub for the global plastics and petrochemical industry. We bridge the gap between complex data and actionable business strategy. Born in India—one of the world's fastest-growing polymer hubs—and expanded globally, we provide the critical edge that manufacturers, traders, and industry leaders need to navigate uncertain bazaars.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Unlike traditional reporting agencies that simply present historical data, we deliver forward-looking intelligence. We combine robust algorithmic tracking with deep human expertise to ensure you aren't just watching the bazaar—you are anticipating it.
              </p>
            </div>
          </section>

          {/* Our Mission */}
          <section>
            <Card className="border-2 bg-gradient-to-br from-primary/5 to-transparent">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Activity className="h-7 w-7 text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To democratize access to high-precision trade intelligence. We believe that in the polymer industry, timing is everything. Our mission is to replace speculation with certainty, enabling our clients to optimize procurement, manage inventory risk, and maximize profitability through data-backed decision-making.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* The Polymer Bazaar Advantage */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-center">The Polymer Bazaar Advantage</h2>
            <p className="text-lg text-muted-foreground text-center mb-10 max-w-3xl mx-auto">
              We have redefined how trade data is consumed. While others rely on legacy systems, we have built an ecosystem of agility.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2 hover:shadow-lg transition-all">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Real-Time Precision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The bazaar doesn't wait for weekly reports, and neither do we. Through our advanced mobile applications, SMS alerts, and WhatsApp integration, we deliver pricing and trend alerts the moment they happen.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-all">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Global Reach, Local Mastery</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    With a stronghold in the Asian bazaars and an expanding footprint across the Middle East, Europe, and the USA, we offer a unique dual perspective: granular local insights combined with global macro-trends.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-all">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Unbiased Integrity</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our independence is our currency. Our price assessments and news feeds are rigorously verified by an editorial staff that adheres to strict neutrality, ensuring the data you use is free from conflict of interest.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Our Methodology */}
          <section className="bg-muted/30 rounded-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6">Our Methodology</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Data is only as good as its source. At Polymer Bazaar, we employ a <strong className="text-foreground">Multi-Source Validation Protocol</strong>. We do not rely on single-point hearsay. Our analysts cross-reference inputs from producers, processors, and traders to filter out noise and deliver the true transaction price. This commitment to accuracy has made our price index a trusted benchmark for settlement and negotiation across the industry.
            </p>
          </section>

          {/* Committed to the Future */}
          <section>
            <Card className="border-2 bg-gradient-to-br from-green-50 to-transparent dark:from-green-950/20">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                  <Leaf className="h-7 w-7 text-green-600 dark:text-green-400" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Committed to the Future</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  As the industry evolves toward circular economy models, Polymer Bazaar is at the forefront of <strong className="text-foreground">Green Intelligence</strong>. We are actively expanding our coverage of recycled polymers, sustainability regulations, and green innovation, ensuring our clients are ready not just for today's trade, but for tomorrow's transformation.
                </p>
              </CardContent>
            </Card>
          </section>
        </TabsContent>

        <TabsContent value="team" className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground">Industry experts with decades of combined experience</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-3xl font-bold text-primary">
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                  <p className="text-sm text-primary mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="timeline" className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-muted-foreground">Major milestones in our 20+ year history</p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <Card className="inline-block">
                      <CardContent className="p-6">
                        <h3 className="text-2xl font-bold text-primary mb-2">{item.year}</h3>
                        <p className="text-muted-foreground">{item.event}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-primary relative z-10"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="media" className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Media Partners</h2>
            <p className="text-muted-foreground">Collaborating with leading industry publications</p>
          </div>
          <div className="prose max-w-none">
            <p className="text-muted-foreground">
              Polymer Bazaar partners with leading petrochemical trade publications, industry associations,
              and media outlets to deliver comprehensive market coverage and expert analysis.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {["PLAS", "TATIFLASE", "GCCA"].map((partner, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardContent className="p-12 text-center">
                  <p className="font-bold text-2xl text-primary">{partner}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="press" className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Press Releases</h2>
            <p className="text-muted-foreground">Latest news and announcements</p>
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-2">March {20-i}, 2024</p>
                  <h3 className="font-bold text-lg mb-2">Polymer Bazaar Announces Expansion into New Markets</h3>
                  <p className="text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default About;
