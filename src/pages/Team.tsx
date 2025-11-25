import { Users, Linkedin, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";

const Team = () => {
  const teamMembers = [
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      image: "/placeholder.svg",
      bio: "Leading Polymer Bazaar's vision with 20+ years in polymer trading",
      email: "rajesh@polymerbazaar.com",
      linkedin: "#"
    },
    {
      name: "Priya Sharma",
      role: "Chief Market Analyst",
      image: "/placeholder.svg",
      bio: "Expert in global polymer market trends and price forecasting",
      email: "priya@polymerbazaar.com",
      linkedin: "#"
    },
    {
      name: "Amit Patel",
      role: "Head of Technology",
      image: "/placeholder.svg",
      bio: "Building scalable solutions for polymer trade intelligence",
      email: "amit@polymerbazaar.com",
      linkedin: "#"
    },
    {
      name: "Sarah Johnson",
      role: "Global Business Development",
      image: "/placeholder.svg",
      bio: "Expanding our presence across international markets",
      email: "sarah@polymerbazaar.com",
      linkedin: "#"
    },
    {
      name: "Mohammed Ali",
      role: "Senior Polymer Analyst",
      image: "/placeholder.svg",
      bio: "Specializing in Middle East and Asian polymer markets",
      email: "mohammed@polymerbazaar.com",
      linkedin: "#"
    },
    {
      name: "Lisa Chen",
      role: "Head of Customer Success",
      image: "/placeholder.svg",
      bio: "Ensuring exceptional experience for our global clients",
      email: "lisa@polymerbazaar.com",
      linkedin: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-white to-primary/5 py-20 border-b">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Team</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The passionate professionals behind Polymer Bazaar's success. Our diverse team brings together expertise from trading, technology, and market analysis to serve the global polymer industry.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 group border-2 hover:border-primary/20"
              >
                <div className="text-center">
                  {/* Avatar */}
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300">
                    <Users className="w-16 h-16 text-primary/60" />
                  </div>
                  
                  {/* Info */}
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {member.bio}
                  </p>
                  
                  {/* Contact */}
                  <div className="flex items-center justify-center gap-3 pt-4 border-t">
                    <a
                      href={`mailto:${member.email}`}
                      className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-primary text-muted-foreground hover:text-white flex items-center justify-center transition-all"
                      aria-label="Email"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                    <a
                      href={member.linkedin}
                      className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-primary text-muted-foreground hover:text-white flex items-center justify-center transition-all"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-primary/5">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
            <p className="text-muted-foreground mb-8">
              We're always looking for talented individuals to join our mission of transforming the global polymer trade.
            </p>
            <a
              href="/career"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all font-medium"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
