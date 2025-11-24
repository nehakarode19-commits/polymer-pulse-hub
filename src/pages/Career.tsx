import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Briefcase, MapPin, DollarSign, Clock, Bookmark } from "lucide-react";

const Career = () => {
  const categories = [
    { name: "Graphics & Design", openPositions: 357 },
    { name: "Code & Programming", openPositions: 312 },
    { name: "Digital Marketing", openPositions: 297 },
    { name: "Video & Animation", openPositions: 247 },
    { name: "Music & Audio", openPositions: 204 },
    { name: "Account & Finance", openPositions: 167 },
    { name: "Health & Care", openPositions: 125 },
    { name: "Data & Science", openPositions: 57 },
  ];

  const featuredJobs = [
    {
      title: "Technical Support Specialist",
      company: "Polymer Bazaar",
      type: "Full-time",
      salary: "$50,000 - $70,000",
      location: "Ahmedabad, Gujarat",
      description: "Provide technical support to clients using our platform",
    },
    {
      title: "Senior Market Analyst",
      company: "Polymer Bazaar",
      type: "Full-time",
      salary: "$80,000 - $100,000",
      location: "Mumbai, Maharashtra",
      description: "Analyze polymer market trends and prepare comprehensive reports",
    },
    {
      title: "Business Development Manager",
      company: "Polymer Bazaar",
      type: "Full-time",
      salary: "$70,000 - $90,000",
      location: "Delhi, India",
      description: "Drive business growth and client acquisition in polymer industry",
    },
    {
      title: "Software Engineer",
      company: "Polymer Bazaar",
      type: "Full-time",
      salary: "$60,000 - $85,000",
      location: "Ahmedabad, Gujarat",
      description: "Develop and maintain our web platform and mobile applications",
    },
    {
      title: "Content Writer",
      company: "Polymer Bazaar",
      type: "Part-time",
      salary: "$30,000 - $45,000",
      location: "Remote",
      description: "Create engaging content about polymer industry and market trends",
    },
    {
      title: "Data Analyst Intern",
      company: "Polymer Bazaar",
      type: "Internship",
      salary: "$20,000 - $25,000",
      location: "Ahmedabad, Gujarat",
      description: "Assist in analyzing polymer pricing data and market patterns",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="gradient-hero text-white py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl text-white/90 mb-8">
            Build your career with the leading polymer market intelligence platform
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="flex gap-3">
              <Input
                placeholder="Job title, keywords, or company"
                className="bg-white text-foreground"
              />
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8">
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container max-w-7xl mx-auto py-12 px-4">
        {/* Popular Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Popular Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-all cursor-pointer group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {category.openPositions} Open positions
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Featured Jobs */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Jobs</h2>
          <div className="grid gap-6">
            {featuredJobs.map((job, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-3">
                        <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <span className="text-2xl font-bold text-primary">PB</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-xl mb-1">{job.title}</h3>
                          <p className="text-sm text-muted-foreground mb-3">{job.company}</p>
                          <div className="flex flex-wrap gap-2 mb-3">
                            <Badge
                              variant={
                                job.type === "Full-time"
                                  ? "default"
                                  : job.type === "Part-time"
                                  ? "secondary"
                                  : "outline"
                              }
                            >
                              {job.type}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-4">{job.description}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4" />
                          <span>{job.salary}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>Posted 2 days ago</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex md:flex-col gap-2 shrink-0">
                      <Button className="bg-primary hover:bg-primary-dark flex-1 md:flex-none">
                        Apply Now
                      </Button>
                      <Button variant="outline" size="icon">
                        <Bookmark className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Join Us */}
        <Card className="mt-16 bg-primary text-white">
          <CardContent className="p-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Why Join Polymer Bazaar?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="font-bold text-xl mb-2">Growth Opportunities</h3>
                <p className="text-white/90">
                  Continuous learning and career advancement in a growing company
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">💼</div>
                <h3 className="font-bold text-xl mb-2">Industry Leader</h3>
                <p className="text-white/90">
                  Work with the leading polymer market intelligence platform
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🌟</div>
                <h3 className="font-bold text-xl mb-2">Great Culture</h3>
                <p className="text-white/90">
                  Collaborative environment with talented professionals
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Career;
