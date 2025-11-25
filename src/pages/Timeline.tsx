import { Clock, CheckCircle2 } from "lucide-react";

const Timeline = () => {
  const milestones = [
    {
      year: "2007",
      title: "Foundation",
      description: "Polymer Bazaar was founded in Ahmedabad, India with a vision to revolutionize polymer trading intelligence."
    },
    {
      year: "2010",
      title: "Digital Platform Launch",
      description: "Launched our first digital platform for real-time polymer price tracking across Indian markets."
    },
    {
      year: "2013",
      title: "Global Expansion",
      description: "Extended coverage to Middle East and Asian markets, serving 500+ clients worldwide."
    },
    {
      year: "2015",
      title: "WhatsApp Integration",
      description: "Pioneered WhatsApp-based market intelligence delivery, making data accessible to traders on-the-go."
    },
    {
      year: "2018",
      title: "AI-Powered Analytics",
      description: "Introduced machine learning models for price prediction and trend analysis."
    },
    {
      year: "2020",
      title: "Mobile App Launch",
      description: "Released mobile applications for iOS and Android, reaching 10,000+ active users."
    },
    {
      year: "2022",
      title: "Strategic Partnerships",
      description: "Became official media partner for major polymer trade fairs across Asia, Europe, and Americas."
    },
    {
      year: "2024",
      title: "Market Leadership",
      description: "Recognized as the leading polymer intelligence platform with 50+ country coverage and 20,000+ subscribers."
    },
    {
      year: "2025",
      title: "Future Ready",
      description: "Expanding into circular economy intelligence and sustainable polymer tracking for the next generation of trading."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-white to-primary/5 py-20 border-b">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Clock className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Journey</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From a small startup in Ahmedabad to a global leader in polymer market intelligence. Explore the milestones that shaped our story.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary to-primary/20" />

              {/* Timeline Items */}
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div 
                    key={index}
                    className={`relative flex items-start gap-8 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-primary border-4 border-white shadow-lg z-10" />

                    {/* Content Card */}
                    <div className={`flex-1 ml-20 md:ml-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                      <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group">
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`flex items-center gap-2 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                            <CheckCircle2 className="w-5 h-5 text-primary" />
                            <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {milestone.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="flex-1 hidden md:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-primary/5">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">The Journey Continues</h2>
            <p className="text-muted-foreground mb-8">
              As we look ahead, we remain committed to innovation, excellence, and empowering the global polymer industry with cutting-edge intelligence and insights.
            </p>
            <a
              href="/about"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all font-medium"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Timeline;
