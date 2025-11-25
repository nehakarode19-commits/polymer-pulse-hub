import { Image, Video, FileText, Download } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Media = () => {
  const images = [
    { title: "Polymer Trade Fair 2024", category: "Events", url: "/placeholder.svg" },
    { title: "Global Bazaar Launch", category: "Product", url: "/placeholder.svg" },
    { title: "Team Meeting Dubai", category: "Company", url: "/placeholder.svg" },
    { title: "Conference Speaking", category: "Events", url: "/placeholder.svg" },
    { title: "Office Culture", category: "Company", url: "/placeholder.svg" },
    { title: "Award Ceremony", category: "Recognition", url: "/placeholder.svg" }
  ];

  const videos = [
    { title: "Polymer Bazaar Platform Demo", duration: "3:45", thumbnail: "/placeholder.svg" },
    { title: "Market Analysis Webinar", duration: "28:15", thumbnail: "/placeholder.svg" },
    { title: "Customer Success Stories", duration: "5:30", thumbnail: "/placeholder.svg" },
    { title: "Trade Fair Highlights 2024", duration: "8:20", thumbnail: "/placeholder.svg" }
  ];

  const pressKit = [
    { name: "Company Logo (PNG)", size: "2.4 MB", type: "image" },
    { name: "Company Logo (SVG)", size: "456 KB", type: "image" },
    { name: "Brand Guidelines", size: "8.2 MB", type: "document" },
    { name: "Product Screenshots", size: "15.8 MB", type: "archive" },
    { name: "Executive Photos", size: "12.3 MB", type: "archive" },
    { name: "Fact Sheet 2024", size: "1.2 MB", type: "document" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-white to-primary/5 py-20 border-b">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Image className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Media Gallery</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore our collection of images, videos, and press materials. Download high-resolution assets for media and partnership purposes.
            </p>
          </div>
        </div>
      </section>

      {/* Media Tabs */}
      <section className="py-20">
        <div className="container px-4">
          <Tabs defaultValue="images" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="images">Images</TabsTrigger>
              <TabsTrigger value="videos">Videos</TabsTrigger>
              <TabsTrigger value="press-kit">Press Kit</TabsTrigger>
            </TabsList>

            {/* Images Tab */}
            <TabsContent value="images">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((item, index) => (
                  <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Image className="w-16 h-16 text-primary/40" />
                      </div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                    </div>
                    <div className="p-4">
                      <span className="text-xs text-primary font-medium">{item.category}</span>
                      <h3 className="font-semibold mt-1">{item.title}</h3>
                      <button className="mt-3 text-sm text-primary hover:underline flex items-center gap-2">
                        <Download className="w-4 h-4" />
                        Download
                      </button>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Videos Tab */}
            <TabsContent value="videos">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {videos.map((video, index) => (
                  <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Video className="w-8 h-8 text-primary" />
                        </div>
                      </div>
                      <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold">{video.title}</h3>
                      <button className="mt-3 text-sm text-primary hover:underline">
                        Watch Video
                      </button>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Press Kit Tab */}
            <TabsContent value="press-kit">
              <div className="max-w-3xl mx-auto">
                <div className="bg-gradient-to-br from-primary/5 to-white p-8 rounded-xl border mb-8">
                  <h2 className="text-2xl font-bold mb-3">Press Kit</h2>
                  <p className="text-muted-foreground">
                    Download our official brand assets, logos, and company information for media and partnership use.
                  </p>
                </div>

                <div className="space-y-3">
                  {pressKit.map((file, index) => (
                    <Card key={index} className="p-5 hover:shadow-lg transition-all duration-300 group">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <FileText className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold group-hover:text-primary transition-colors">
                              {file.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">{file.size}</p>
                          </div>
                        </div>
                        <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all flex items-center gap-2">
                          <Download className="w-4 h-4" />
                          Download
                        </button>
                      </div>
                    </Card>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gray-50 rounded-lg text-center">
                  <p className="text-sm text-muted-foreground">
                    For media inquiries or custom assets, contact{" "}
                    <a href="mailto:media@polymerbazaar.com" className="text-primary hover:underline font-medium">
                      media@polymerbazaar.com
                    </a>
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Media;
