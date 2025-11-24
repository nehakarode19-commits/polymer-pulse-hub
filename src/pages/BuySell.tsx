import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MessageCircle } from "lucide-react";

const BuySell = () => {
  const polymers = [
    { code: "PP", name: "Polypropylene" },
    { code: "PVC", name: "Polyvinyl Chloride" },
    { code: "HDPE", name: "High Density Polyethylene" },
    { code: "LLDPE", name: "Linear Low Density Polyethylene" },
    { code: "PET", name: "Polyethylene Terephthalate" },
    { code: "ENGG", name: "Engineering Plastics" },
    { code: "EVA", name: "Ethylene Vinyl Acetate" },
    { code: "ABS", name: "Acrylonitrile Butadiene Styrene" },
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Buy & Sell</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect directly with polymer suppliers and buyers. Get instant quotes and 
            close deals faster with our verified network.
          </p>
        </div>

        <div className="grid gap-6">
          {polymers.map((polymer, index) => (
            <Card key={index} className="hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <span className="font-bold text-primary">{polymer.code}</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl">{polymer.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          Multiple grades available
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2"
                    >
                      <Phone className="h-4 w-4" />
                      Call
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2"
                    >
                      <Mail className="h-4 w-4" />
                      Email
                    </Button>
                    <Button
                      size="sm"
                      className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
                    >
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-12 bg-primary text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Looking for a specific grade or quantity?
            </h2>
            <p className="mb-6 text-white/90">
              Our team can help you find the right supplier for your needs
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Contact Sales Team
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BuySell;
