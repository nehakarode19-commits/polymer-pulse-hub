import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, MapPin, DollarSign, Bookmark } from "lucide-react";
import { Link } from "react-router-dom";

const Career = () => {
  const categories = [
    { name: "Graphics & Design", icon: "🎨", positions: 357 },
    { name: "Code & Programing", icon: "💻", positions: 312 },
    { name: "Digital Marketing", icon: "📱", positions: 297 },
    { name: "Video & Animation", icon: "🎬", positions: 247 },
    { name: "Music & Audio", icon: "🎵", positions: 204 },
    { name: "Account & Finance", icon: "💰", positions: 167 },
    { name: "Health & Care", icon: "🏥", positions: 125 },
    { name: "Data & Science", icon: "📊", positions: 57 },
  ];

  const featuredJobs = [
    {
      id: 1,
      title: "Technical Support Specialist",
      company: "Google Inc.",
      location: "Dhaka, Bangladesh",
      salary: "$20,000 - $25,000",
      type: "PART-TIME",
      typeColor: "bg-green-100 text-green-800"
    },
    {
      id: 2,
      title: "Senior UX Designer",
      company: "Google Inc.",
      location: "Dhaka, Bangladesh",
      salary: "$20,000 - $25,000",
      type: "FULL-TIME",
      typeColor: "bg-blue-100 text-blue-800"
    },
    {
      id: 3,
      title: "Marketing Officer",
      company: "Google Inc.",
      location: "Dhaka, Bangladesh",
      salary: "$20,000 - $25,000",
      type: "INTERNSHIP",
      typeColor: "bg-orange-100 text-orange-800"
    },
    {
      id: 4,
      title: "Junior Graphic Designer",
      company: "Google Inc.",
      location: "Dhaka, Bangladesh",
      salary: "$20,000 - $25,000",
      type: "INTERNSHIP",
      typeColor: "bg-orange-100 text-orange-800"
    },
    {
      id: 5,
      title: "Interaction Designer",
      company: "Google Inc.",
      location: "Dhaka, Bangladesh",
      salary: "$20,000 - $25,000",
      type: "PART-TIME",
      typeColor: "bg-green-100 text-green-800"
    },
    {
      id: 6,
      title: "Project Manager",
      company: "Google Inc.",
      location: "Dhaka, Bangladesh",
      salary: "$20,000 - $25,000",
      type: "FULL-TIME",
      typeColor: "bg-blue-100 text-blue-800"
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="gradient-hero text-white py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Career</h1>
        </div>
      </section>

      <div className="container max-w-7xl mx-auto py-12 px-4">
        {/* Popular Category */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 border-l-4 border-maroon pl-4 text-maroon">Popular category</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-all cursor-pointer group border-2 hover:border-maroon">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-maroon transition-colors">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {category.positions} Open position
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Featured Job */}
        <div>
          <h2 className="text-3xl font-bold mb-8 border-l-4 border-maroon pl-4 text-maroon">Featured job</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredJobs.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-all border-2 hover:border-maroon">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-xl font-bold text-primary">G</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{job.title}</h3>
                        <p className="text-sm text-muted-foreground">{job.company}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Bookmark className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <span className={`px-3 py-1 rounded text-xs font-medium ${job.typeColor}`}>
                      {job.type}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Salary: {job.salary}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <MapPin className="h-4 w-4" />
                    <span>{job.location}</span>
                  </div>

                  <Button 
                    asChild
                    className="w-full bg-maroon hover:bg-maroon/90"
                  >
                    <Link to={`/job/${job.id}`}>
                      View Details
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
