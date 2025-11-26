import { Palette, Code, Smartphone, Video, Music, DollarSign, Heart, BarChart, MapPin, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Career = () => {
  const categories = [
    { icon: Palette, name: "Graphics & Design", positions: "357 Open position" },
    { icon: Code, name: "Code & Programing", positions: "312 Open position" },
    { icon: Smartphone, name: "Digital Marketing", positions: "297 Open position" },
    { icon: Video, name: "Video & Animation", positions: "247 Open position" },
    { icon: Music, name: "Music & Audio", positions: "204 Open position" },
    { icon: DollarSign, name: "Account & Finance", positions: "167 Open position" },
    { icon: Heart, name: "Health & Care", positions: "125 Open position" },
    { icon: BarChart, name: "Data & Science", positions: "57 Open position" },
  ];

  const featuredJobs = [
    {
      title: "Technical Support Specialist",
      company: "Google Inc.",
      type: "PART-TIME",
      salary: "$20,000 - $25,000",
      location: "Dhaka, Bangladesh"
    },
    {
      title: "Senior UX Designer",
      company: "Google Inc.",
      type: "FULL-TIME",
      salary: "$20,000 - $25,000",
      location: "Dhaka, Bangladesh"
    },
    {
      title: "Marketing Officer",
      company: "Google Inc.",
      type: "INTERNSHIP",
      salary: "$20,000 - $25,000",
      location: "Dhaka, Bangladesh"
    },
    {
      title: "Junior Graphic Designer",
      company: "Google Inc.",
      type: "INTERNSHIP",
      salary: "$20,000 - $25,000",
      location: "Dhaka, Bangladesh"
    },
    {
      title: "Interaction Designer",
      company: "Google Inc.",
      type: "PART-TIME",
      salary: "$20,000 - $25,000",
      location: "Dhaka, Bangladesh"
    },
    {
      title: "Project Manager",
      company: "Google Inc.",
      type: "FULL-TIME",
      salary: "$20,000 - $25,000",
      location: "Dhaka, Bangladesh"
    },
  ];

  const getJobTypeBadgeColor = (type: string) => {
    switch (type) {
      case "PART-TIME":
        return "bg-blue-100 text-blue-700 hover:bg-blue-100";
      case "FULL-TIME":
        return "bg-green-100 text-green-700 hover:bg-green-100";
      case "INTERNSHIP":
        return "bg-orange-100 text-orange-700 hover:bg-orange-100";
      default:
        return "bg-gray-100 text-gray-700 hover:bg-gray-100";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">Career</h1>
        </div>
      </section>

      {/* Popular Category Section */}
      <section id="popular-category" className="py-16 scroll-mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4">Popular category</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-primary">
                <div className="flex flex-col items-center text-center">
                  <category.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.positions}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section id="featured-jobs" className="py-16 bg-muted/30 scroll-mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4">Featured job</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredJobs.map((job, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                      G
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{job.title}</h3>
                      <p className="text-sm text-muted-foreground">{job.company}</p>
                    </div>
                  </div>
                  <Bookmark className="w-5 h-5 text-muted-foreground cursor-pointer hover:text-primary" />
                </div>

                <div className="space-y-3 mb-4">
                  <Badge className={getJobTypeBadgeColor(job.type)}>{job.type}</Badge>
                  <p className="text-sm">Salary: <span className="font-semibold">{job.salary}</span></p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{job.location}</span>
                  </div>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90">View Details</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;
