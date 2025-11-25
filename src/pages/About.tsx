import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Target, Eye, Heart, History } from "lucide-react";

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
          <h1 className="text-5xl font-bold mb-6">About Polymer Bazaar</h1>
          <p className="text-xl text-white/90">
            Leading the polymer intelligence industry for over two decades
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

        <TabsContent value="about" className="space-y-12">
          <div className="prose max-w-none mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Polymer Bazaar is a leading information services provider specializing in polymer and petrochemical markets. Since our founding, we have been committed to delivering precise, transparent market intelligence to industry professionals worldwide.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our platform offers comprehensive daily updates, historical data analysis, future trend predictions, and real-time pricing intelligence across all major polymer categories including PP, HDPE, LDPE, LLDPE, PVC, and PET.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis. Curabitur vel magna eu elit pulvinar interdum ac vel felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis. Curabitur vel magna eu elit pulvinar interdum ac vel felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Purpose</h3>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis. Curabitur vel magna eu elit pulvinar interdum ac vel felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <History className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our History</h3>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis. Curabitur vel magna eu elit pulvinar interdum ac vel felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-6 text-center">Our Clients</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {clients.map((client, index) => (
                <Card key={index} className="hover:shadow-lg transition-all">
                  <CardContent className="p-6 text-center">
                    <p className="font-semibold text-muted-foreground">{client}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-6 text-center">Media Partners</h3>
            <div className="flex justify-center gap-8 flex-wrap">
              {["PLAS", "TATIFLASE", "GCCA"].map((partner, index) => (
                <Card key={index} className="hover:shadow-lg transition-all">
                  <CardContent className="p-8 text-center min-w-32">
                    <p className="font-bold text-xl text-primary">{partner}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
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
