import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Users, Building2, Briefcase, Presentation, Users2, Factory } from "lucide-react";
import { Button } from "@/components/ui/button";

const TeamGallery = () => {
  const galleryImages = [
    {
      id: 1,
      title: "Plast Milan 2024",
      location: "Milan, Italy",
      date: "May 2024",
      category: "Trade Show",
      icon: Presentation,
      iconColor: "text-blue-600",
      bgColor: "bg-blue-50",
      description: "Our team at Europe's premier plastics exhibition"
    },
    {
      id: 2,
      title: "Office Team Meeting",
      location: "Ahmedabad, India",
      date: "March 2024",
      category: "Office",
      icon: Building2,
      iconColor: "text-purple-600",
      bgColor: "bg-purple-50",
      description: "Quarterly strategy and planning session"
    },
    {
      id: 3,
      title: "Client Visit - Mumbai",
      location: "Mumbai, India",
      date: "February 2024",
      category: "Client Meeting",
      icon: Users,
      iconColor: "text-green-600",
      bgColor: "bg-green-50",
      description: "Meeting with key petrochemical manufacturers"
    },
    {
      id: 4,
      title: "Chinaplas 2023",
      location: "Shenzhen, China",
      date: "April 2023",
      category: "Trade Show",
      icon: Presentation,
      iconColor: "text-blue-600",
      bgColor: "bg-blue-50",
      description: "Delegation at Asia's largest plastics fair"
    },
    {
      id: 5,
      title: "Annual Company Retreat",
      location: "Goa, India",
      date: "January 2024",
      category: "Team Building",
      icon: Users2,
      iconColor: "text-orange-600",
      bgColor: "bg-orange-50",
      description: "Team bonding and strategic planning"
    },
    {
      id: 6,
      title: "Industry Conference",
      location: "Dubai, UAE",
      date: "November 2023",
      category: "Conference",
      icon: Briefcase,
      iconColor: "text-red-600",
      bgColor: "bg-red-50",
      description: "Middle East Polymer Summit keynote"
    },
    {
      id: 7,
      title: "Office Collaboration",
      location: "Ahmedabad, India",
      date: "Ongoing",
      category: "Office",
      icon: Building2,
      iconColor: "text-purple-600",
      bgColor: "bg-purple-50",
      description: "Daily operations and team collaboration"
    },
    {
      id: 8,
      title: "Factory Tour",
      location: "Gujarat, India",
      date: "September 2023",
      category: "Site Visit",
      icon: Factory,
      iconColor: "text-indigo-600",
      bgColor: "bg-indigo-50",
      description: "Polymer production facility inspection"
    }
  ];

  const scrollToJobs = () => {
    const element = document.getElementById('open-roles');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Inside the Hub</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See our team in action at trade shows, client meetings, and our offices around the world
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((item) => {
            const IconComponent = item.icon;
            return (
              <Card key={item.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-2 hover:border-primary">
                <div className={`relative aspect-[4/3] flex items-center justify-center ${item.bgColor}`}>
                  <IconComponent className={`h-20 w-20 ${item.iconColor}`} strokeWidth={1.5} />
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-background/90 backdrop-blur-sm border border-border">
                      {item.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-4 space-y-2">
                  <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{item.date}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Card className="inline-block border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10 hover:shadow-xl transition-all">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-2 text-foreground">Want to Join Our Team?</h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                We're always looking for talented individuals to join our growing team
              </p>
              <Button
                onClick={scrollToJobs}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all"
              >
                View Open Positions
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TeamGallery;
