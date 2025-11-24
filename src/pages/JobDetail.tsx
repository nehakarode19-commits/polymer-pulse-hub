import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, DollarSign, Clock, GraduationCap, TrendingUp, Share2, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const JobDetail = () => {
  const { toast } = useToast();

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied!",
      description: "Job link has been copied to clipboard",
    });
  };

  return (
    <div className="min-h-screen py-12 px-4 bg-secondary">
      <div className="container max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-20 h-20 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-2xl font-bold text-primary">PB</span>
                  </div>
                  <div className="flex-1">
                    <h1 className="text-3xl font-bold mb-2">Senior Market Analyst</h1>
                    <p className="text-lg text-muted-foreground mb-4">Polymer Bazaar</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-primary">Full-time</Badge>
                      <Badge variant="outline">Featured</Badge>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-8 text-sm">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-primary" />
                    <span>$80,000 - $100,000 / year</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>Mumbai, Maharashtra</span>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Job Description</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis. Curabitur vel magna eu elit pulvinar interdum. Donec ac magna vel felis commodo placerat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed euismod nunc id lacus tincidunt, nec tincidunt eros vulputate. Mauris cursus lectus at magna facilisis, vel malesuada orci aliquet.
                  </p>

                  <h3 className="text-xl font-bold mb-4">Requirements</h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <span className="text-primary mr-3 mt-1">•</span>
                      <span className="text-muted-foreground">Bachelor&apos;s degree in Economics, Business, Chemistry, or related field; Master&apos;s preferred</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3 mt-1">•</span>
                      <span className="text-muted-foreground">5+ years of experience in market analysis, preferably in petrochemicals or polymer industry</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3 mt-1">•</span>
                      <span className="text-muted-foreground">Strong analytical skills with proficiency in data analysis tools and Excel</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3 mt-1">•</span>
                      <span className="text-muted-foreground">Excellent written and verbal communication skills in English</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3 mt-1">•</span>
                      <span className="text-muted-foreground">Ability to work independently and manage multiple priorities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3 mt-1">•</span>
                      <span className="text-muted-foreground">Understanding of global polymer supply chains and trading patterns</span>
                    </li>
                  </ul>

                  <h3 className="text-xl font-bold mb-4">Desirable</h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <span className="text-primary mr-3 mt-1">•</span>
                      <span className="text-muted-foreground">Experience with SQL, Python, or other programming languages for data analysis</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3 mt-1">•</span>
                      <span className="text-muted-foreground">Knowledge of commodity trading and pricing mechanisms</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3 mt-1">•</span>
                      <span className="text-muted-foreground">Previous experience in publishing or market research</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3 mt-1">•</span>
                      <span className="text-muted-foreground">Multilingual capabilities, especially Asian languages</span>
                    </li>
                  </ul>

                  <h3 className="text-xl font-bold mb-4">Benefits</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <p className="font-medium">Health Insurance</p>
                      <p className="text-sm text-muted-foreground">Comprehensive medical coverage</p>
                    </div>
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <p className="font-medium">Work from Home</p>
                      <p className="text-sm text-muted-foreground">Flexible remote options</p>
                    </div>
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <p className="font-medium">Learning & Development</p>
                      <p className="text-sm text-muted-foreground">Training and courses</p>
                    </div>
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <p className="font-medium">Performance Bonus</p>
                      <p className="text-sm text-muted-foreground">Annual bonus based on results</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="sticky top-20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6">Job Overview</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                      <Clock className="h-4 w-4" />
                      <span>Job Posted:</span>
                    </div>
                    <p className="font-medium">March 15, 2024</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                      <Clock className="h-4 w-4" />
                      <span>Job Expire:</span>
                    </div>
                    <p className="font-medium">April 30, 2024</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                      <TrendingUp className="h-4 w-4" />
                      <span>Job Level:</span>
                    </div>
                    <p className="font-medium">Senior Level</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                      <Briefcase className="h-4 w-4" />
                      <span>Experience:</span>
                    </div>
                    <p className="font-medium">5+ Years</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                      <GraduationCap className="h-4 w-4" />
                      <span>Education:</span>
                    </div>
                    <p className="font-medium">Master&apos;s Degree</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                      <DollarSign className="h-4 w-4" />
                      <span>Salary:</span>
                    </div>
                    <p className="font-medium">$80,000 - $100,000</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                      <MapPin className="h-4 w-4" />
                      <span>Job Location:</span>
                    </div>
                    <p className="font-medium">Mumbai, Maharashtra</p>
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  <Button className="w-full bg-primary hover:bg-primary-dark" size="lg">
                    Apply Now
                  </Button>
                  
                  <div>
                    <p className="text-sm font-medium mb-2 flex items-center gap-2">
                      <Share2 className="h-4 w-4" />
                      Share Job:
                    </p>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={handleCopyLink}
                    >
                      <Copy className="h-4 w-4 mr-2" />
                      Copy Link
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
