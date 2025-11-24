import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, DollarSign, Clock, Calendar, TrendingUp, GraduationCap, Bookmark, Copy } from "lucide-react";
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
    <div className="min-h-screen">
      <section className="gradient-hero text-white py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Career</h1>
        </div>
      </section>

      <div className="container max-w-7xl mx-auto py-12 px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-2xl font-bold text-primary">G</span>
                  </div>
                  <div className="flex-1">
                    <h1 className="text-3xl font-bold mb-2">Technical Support Specialist</h1>
                    <p className="text-lg text-muted-foreground mb-2">at Google Inc.</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge className="bg-green-100 text-green-800">PART-TIME</Badge>
                      <Badge variant="outline" className="border-maroon text-maroon">Featured</Badge>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>Dhaka, Bangladesh</span>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-maroon">Job Description</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Velstar is a Shopify Plus agency, and we partner with brands to help them grow, we also do the same with our people!
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Here at Velstar, we don't just make websites, we create exceptional digital experiences that consumers love. Our team of designers, developers, strategists, and creators work together to push brands to the next level. From Platform Migration, User Experience & User Interface Design, to Digital Marketing, we have a proven track record of delivering outstanding eCommerce solutions and driving sales for our clients.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 text-maroon">Requirements</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-maroon mr-3 mt-1">•</span>
                      <span className="text-muted-foreground">Great troubleshooting and analytical skills combined with the desire to tackle challenges head-on</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-maroon mr-3 mt-1">•</span>
                      <span className="text-muted-foreground">3+ years of experience in back-end development working either with multiple smaller or large scale applications</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-maroon mr-3 mt-1">•</span>
                      <span className="text-muted-foreground">Experience with HTML, Javascript, CSS, PHP, Symphony and/or Laravel</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-maroon mr-3 mt-1">•</span>
                      <span className="text-muted-foreground">Working regularly with APIs and Web Services (REST, GrapQL, SOAP, etc)</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 text-maroon">Desirable:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-maroon mr-3 mt-1">•</span>
                      <span className="text-muted-foreground">Working knowledge of eCommerce platforms, ideally Shopify but also others e.g. Magento, WooCommerce, BigCommerce, etc</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-maroon mr-3 mt-1">•</span>
                      <span className="text-muted-foreground">Working knowledge of payment gateways</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-maroon mr-3 mt-1">•</span>
                      <span className="text-muted-foreground">API platform experience / Building restful APIs</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-maroon">Benefits</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-maroon mr-3 mt-1">•</span>
                      <span className="text-muted-foreground">Early finish on Fridays for our end of week catch up (4:30 finish, and drink of your choice from the bar)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-maroon mr-3 mt-1">•</span>
                      <span className="text-muted-foreground">28 days holiday (including bank holidays) rising by 1 day per year PLUS an additional day off on your birthday</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-maroon mr-3 mt-1">•</span>
                      <span className="text-muted-foreground">Generous annual bonus</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="sticky top-20 border-2">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 text-maroon">Job Overview</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-maroon mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Job Posted:</p>
                      <p className="font-medium">14 Jun, 2021</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-maroon mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Job expire in:</p>
                      <p className="font-medium">14 Aug, 2021</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <TrendingUp className="h-5 w-5 text-maroon mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Job Level:</p>
                      <p className="font-medium">Entry Level</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <DollarSign className="h-5 w-5 text-maroon mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Salary:</p>
                      <p className="font-medium">$20,000 - $25,000</p>
                      <p className="text-xs text-muted-foreground">Yearly salary</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <GraduationCap className="h-5 w-5 text-maroon mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Education:</p>
                      <p className="font-medium">Graduation</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-maroon mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Job Location:</p>
                      <p className="font-medium">Dhaka, Bangladesh</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  <Button className="w-full bg-maroon hover:bg-maroon/90" size="lg">
                    Apply Now
                  </Button>
                  <Button variant="outline" className="w-full" size="lg">
                    <Bookmark className="h-4 w-4 mr-2" />
                    Save Job
                  </Button>
                  
                  <div className="pt-4">
                    <p className="text-sm font-medium mb-2">Share this job:</p>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={handleCopyLink}
                    >
                      <Copy className="h-4 w-4 mr-2" />
                      Copy Links
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
