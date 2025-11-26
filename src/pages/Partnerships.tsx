import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Handshake, Shield, Megaphone, Calendar, MapPin } from "lucide-react";

const Partnerships = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero text-white py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Strategic Alliances & Delegations</h1>
          <p className="text-xl text-white/90 mb-8">
            Beyond Bazaar Data: Your Direct Bridge to Global Opportunities
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container max-w-6xl mx-auto py-16 px-4 space-y-16">
        {/* Introduction */}
        <section className="prose prose-lg max-w-none">
          <p className="text-lg text-foreground/80 leading-relaxed">
            While others simply report on the industry, Polymer Bazaar actively connects you to it. 
            We are more than a digital platform; we are a physical force in the global polymer trade. 
            As the industry's dedicated <span className="font-semibold text-primary">Media & Delegation Partner</span>, 
            we bridge the gap between local insights and global opportunities.
          </p>
          <p className="text-xl font-semibold text-foreground mt-6">
            We don't just observe the bazaar—we ensure you have a seat at the table.
          </p>
        </section>

        {/* The Power of Partnership */}
        <section className="space-y-8">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-foreground">The Power of Partnership</h2>
            <p className="text-lg text-foreground/80 mb-8">
              Our role goes far beyond standard media coverage. We serve as a strategic link between 
              event organizers and industry professionals, offering a dual advantage that no other provider can match:
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-6">
            <Card className="border-2 hover:shadow-lg transition-all">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-foreground">Official Delegation Leadership</h3>
                <p className="text-foreground/80 leading-relaxed">
                  We organize and lead business-focused delegations to the world's most critical trade fairs. 
                  We do not just facilitate travel; we curate a professional ecosystem where networking, 
                  deal-making, and knowledge exchange happen seamlessly.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-all">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-foreground">Our Proven Partnership Model</h3>
                <p className="text-foreground/80 leading-relaxed">
                  We leverage a curated portfolio of partnerships with leading trade fairs and conferences worldwide. 
                  Our clients benefit from a structured program designed for maximum ROI, covering the entire 
                  spectrum—from niche regional buyer-seller meets to premier international expos.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-all">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-foreground">Strategic Visibility</h3>
                <p className="text-foreground/80 leading-relaxed">
                  We amplify our partners' presence. Through our official status, we ensure your brand and voice 
                  are featured before, during, and after events, putting you in front of the decision-makers who matter.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Why Join Section */}
        <section className="space-y-8 bg-muted/30 rounded-2xl p-8 md:p-12">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-foreground">Why Join a Polymer Bazaar Delegation?</h2>
            <p className="text-lg text-foreground/80 mb-8">
              When you join us, you move from being an attendee to being an insider. 
              We transform a standard business visit into a high-value growth opportunity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:shadow-lg transition-all bg-background">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                  <Handshake className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">🤝 Curated Connections</h3>
                <p className="text-foreground/80 leading-relaxed">
                  We cut through the noise of massive trade floors. We facilitate meaningful matchmaking, 
                  connecting you directly with the suppliers, buyers, and innovators relevant to your specific sector.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-all bg-background">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">🏛️ Trusted Representation</h3>
                <p className="text-foreground/80 leading-relaxed">
                  When you travel with Polymer Bazaar, you carry the weight of an established industry institution. 
                  Our relationships grant our delegates exclusive access to invitation-only receptions, private 
                  negotiating sessions, and pre-scheduled one-on-one meetings.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-all bg-background">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                  <Megaphone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">📢 Industry Voice</h3>
                <p className="text-foreground/80 leading-relaxed">
                  We provide a platform for thought leadership. Our delegates and partners often find opportunities 
                  to share insights through event interviews, panel discussions, and our editorial coverage.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Alliance Updates */}
        <section className="space-y-8">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-foreground">📰 Alliance Updates & Announcements</h2>
            <p className="text-lg text-foreground/80 mb-8">
              Stay connected with our latest partnerships and delegation opportunities.
            </p>
          </div>

          <div className="space-y-4">
            <Card className="border-l-4 border-l-primary hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary mb-2">[New Partnership]</p>
                    <h3 className="text-xl font-bold mb-2 text-foreground">
                      Official Media Partner for Plastic show 2025 (Almaty)
                    </h3>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary mb-2">[Upcoming Delegation]</p>
                    <h3 className="text-xl font-bold mb-2 text-foreground">
                      Registration now open for Plast Milan Delegation
                    </h3>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Handshake className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary mb-2">[Regional Focus]</p>
                    <h3 className="text-xl font-bold mb-2 text-foreground">
                      Polymer Bazaar to host exclusive Buyer-Seller Meet in [Next City]
                    </h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Actions */}
        <section className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              Inquire About Delegations
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              Partner With Us / Join Next Delegation
            </Button>
          </div>
        </section>

        {/* Closing Quote */}
        <section className="text-center py-12">
          <blockquote className="text-2xl md:text-3xl font-bold text-primary italic">
            "Connecting the grassroots to the global stage—your success is our business."
          </blockquote>
        </section>
      </div>
    </div>
  );
};

export default Partnerships;
