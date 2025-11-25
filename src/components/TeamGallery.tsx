import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar } from "lucide-react";

const TeamGallery = () => {
  const galleryImages = [
    {
      id: 1,
      title: "Plast Milan 2024",
      location: "Milan, Italy",
      date: "May 2024",
      category: "Trade Show",
      image: "/placeholder.svg",
      description: "Our team at Europe's premier plastics exhibition"
    },
    {
      id: 2,
      title: "Office Team Meeting",
      location: "Ahmedabad, India",
      date: "March 2024",
      category: "Office",
      image: "/placeholder.svg",
      description: "Quarterly strategy and planning session"
    },
    {
      id: 3,
      title: "Client Visit - Mumbai",
      location: "Mumbai, India",
      date: "February 2024",
      category: "Client Meeting",
      image: "/placeholder.svg",
      description: "Meeting with key petrochemical manufacturers"
    },
    {
      id: 4,
      title: "Chinaplas 2023",
      location: "Shenzhen, China",
      date: "April 2023",
      category: "Trade Show",
      image: "/placeholder.svg",
      description: "Delegation at Asia's largest plastics fair"
    },
    {
      id: 5,
      title: "Annual Company Retreat",
      location: "Goa, India",
      date: "January 2024",
      category: "Team Building",
      image: "/placeholder.svg",
      description: "Team bonding and strategic planning"
    },
    {
      id: 6,
      title: "Industry Conference",
      location: "Dubai, UAE",
      date: "November 2023",
      category: "Conference",
      image: "/placeholder.svg",
      description: "Middle East Polymer Summit keynote"
    },
    {
      id: 7,
      title: "Office Collaboration",
      location: "Ahmedabad, India",
      date: "Ongoing",
      category: "Office",
      image: "/placeholder.svg",
      description: "Daily operations and team collaboration"
    },
    {
      id: 8,
      title: "Factory Tour",
      location: "Gujarat, India",
      date: "September 2023",
      category: "Site Visit",
      image: "/placeholder.svg",
      description: "Polymer production facility inspection"
    }
  ];

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
          {galleryImages.map((item) => (
            <Card key={item.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-2">
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3">
                  <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
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
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="inline-block border-2 bg-gradient-to-br from-primary/5 to-primary/10">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-2">Want to Join Our Team?</h3>
              <p className="text-muted-foreground mb-4">
                We're always looking for talented individuals to join our growing team
              </p>
              <a
                href="#open-roles"
                className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
              >
                View Open Positions
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TeamGallery;
