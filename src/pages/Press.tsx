import { Newspaper, ExternalLink, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Press = () => {
  const pressReleases = [
    {
      date: "January 15, 2025",
      title: "Polymer Bazaar Expands AI-Powered Price Prediction to 50+ Countries",
      excerpt: "Leading polymer intelligence platform introduces advanced machine learning models for real-time market forecasting across global markets.",
      category: "Product Launch",
      featured: true
    },
    {
      date: "December 8, 2024",
      title: "Strategic Partnership with Middle East Polymer Conference 2025",
      excerpt: "Polymer Bazaar announced as official media partner for the region's largest polymer trading event in Dubai.",
      category: "Partnership",
      featured: true
    },
    {
      date: "November 20, 2024",
      title: "Polymer Bazaar Surpasses 20,000 Active Subscribers Milestone",
      excerpt: "Platform celebrates exponential growth, serving traders and manufacturers across Asia, Europe, and Americas.",
      category: "Company News",
      featured: false
    },
    {
      date: "October 5, 2024",
      title: "New Circular Economy Intelligence Module Launched",
      excerpt: "Revolutionary tracking system for recycled polymers addresses growing demand for sustainable materials intelligence.",
      category: "Product Launch",
      featured: false
    },
    {
      date: "September 12, 2024",
      title: "Polymer Bazaar Recognized as 'Best B2B SaaS Platform' at Trade Tech Awards",
      excerpt: "Industry recognition highlights platform's innovation in digital transformation of commodity trading.",
      category: "Recognition",
      featured: false
    },
    {
      date: "August 3, 2024",
      title: "Mobile App Achieves 10 Million Price Queries Per Month",
      excerpt: "iOS and Android applications set new benchmark for polymer market data accessibility on mobile devices.",
      category: "Metrics",
      featured: false
    }
  ];

  const mediaMentions = [
    {
      outlet: "Chemical Week",
      title: "How Digital Platforms Are Transforming Polymer Trading",
      date: "Dec 2024",
      link: "#"
    },
    {
      outlet: "Plastics News",
      title: "The Future of Price Discovery in Commodity Markets",
      date: "Nov 2024",
      link: "#"
    },
    {
      outlet: "TradeTech Digest",
      title: "AI and Machine Learning in Polymer Market Analysis",
      date: "Oct 2024",
      link: "#"
    },
    {
      outlet: "Business Standard",
      title: "Indian Tech Startup Disrupts Global Polymer Trading",
      date: "Sep 2024",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-white to-primary/5 py-20 border-b">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Newspaper className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Press & Media</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Latest news, announcements, and media coverage about Polymer Bazaar. Stay updated with our journey and industry insights.
            </p>
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Press Releases</h2>
            
            <div className="space-y-6">
              {pressReleases.map((release, index) => (
                <Card 
                  key={index}
                  className={`p-6 hover:shadow-xl transition-all duration-300 ${
                    release.featured ? 'border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-white' : ''
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant={release.featured ? "default" : "secondary"} className="font-medium">
                          {release.category}
                        </Badge>
                        {release.featured && (
                          <Badge className="bg-primary text-white">Featured</Badge>
                        )}
                      </div>
                      
                      <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors cursor-pointer">
                        {release.title}
                      </h3>
                      
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <Calendar className="w-4 h-4" />
                        <span>{release.date}</span>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {release.excerpt}
                      </p>
                      
                      <button className="text-primary font-medium hover:underline inline-flex items-center gap-2">
                        Read Full Release
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Media Mentions */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-primary/5">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">In The News</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mediaMentions.map((mention, index) => (
                <Card key={index} className="p-5 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-primary mb-2">
                        {mention.outlet}
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        {mention.title}
                      </h3>
                      <div className="text-xs text-muted-foreground">
                        {mention.date}
                      </div>
                    </div>
                    <a 
                      href={mention.link}
                      className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary/10 hover:bg-primary text-primary hover:text-white flex items-center justify-center transition-all"
                      aria-label="Read article"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Media Inquiries</h2>
            <p className="text-muted-foreground mb-8">
              For press releases, interviews, or media kits, please contact our media relations team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:press@polymerbazaar.com"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all font-medium"
              >
                Email Press Team
              </a>
              <a
                href="/media"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all font-medium"
              >
                Download Media Kit
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Press;
