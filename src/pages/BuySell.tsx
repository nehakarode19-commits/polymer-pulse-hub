import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const BuySell = () => {
  const polymers = [
    { 
      code: "PP", 
      name: "Polypropylene",
      image: "https://images.unsplash.com/photo-1614854262318-831574f15f1f?w=800&q=80",
      phone: "+91 93746 24365",
      email: "info@polymerbazaar.com"
    },
    { 
      code: "PVC", 
      name: "Polyvinyl Chloride",
      image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&q=80",
      phone: "+91 93746 24365",
      email: "info@polymerbazaar.com"
    },
    { 
      code: "LLDPE", 
      name: "Linear Low Density Polyethylene",
      image: "https://images.unsplash.com/photo-1580982324671-decad83d7f58?w=800&q=80",
      phone: "+91 93746 24365",
      email: "info@polymerbazaar.com"
    },
    { 
      code: "HDPE", 
      name: "High Density Polyethylene",
      image: "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=800&q=80",
      phone: "+91 93746 24365",
      email: "info@polymerbazaar.com"
    },
    { 
      code: "LDPE", 
      name: "Low Density Polyethylene",
      image: "https://images.unsplash.com/photo-1588508065469-b676f87df6b5?w=800&q=80",
      phone: "+91 93746 24365",
      email: "info@polymerbazaar.com"
    },
    { 
      code: "PET", 
      name: "Polyethylene Terephthalate",
      image: "https://images.unsplash.com/photo-1562408590-e32931084e23?w=800&q=80",
      phone: "+91 93746 24365",
      email: "info@polymerbazaar.com"
    },
    { 
      code: "PS", 
      name: "Polystyrene",
      image: "https://images.unsplash.com/photo-1614854262318-831574f15f1f?w=800&q=80",
      phone: "+91 93746 24365",
      email: "info@polymerbazaar.com"
    },
    { 
      code: "ABS", 
      name: "Acrylonitrile Butadiene Styrene",
      image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&q=80",
      phone: "+91 93746 24365",
      email: "info@polymerbazaar.com"
    },
    { 
      code: "ENGG", 
      name: "Engineering Plastics",
      image: "https://images.unsplash.com/photo-1580982324671-decad83d7f58?w=800&q=80",
      phone: "+91 93746 24365",
      email: "info@polymerbazaar.com"
    },
    { 
      code: "EVA", 
      name: "Ethylene Vinyl Acetate",
      image: "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=800&q=80",
      phone: "+91 93746 24365",
      email: "info@polymerbazaar.com"
    },
  ];

  const handleCall = (phone: string) => {
    window.location.href = `tel:${phone}`;
    toast.success("Opening phone dialer...");
  };

  const handleEmail = (email: string) => {
    window.location.href = `mailto:${email}`;
    toast.success("Opening email client...");
  };

  const handleWhatsApp = (phone: string) => {
    const whatsappNumber = phone.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
    toast.success("Opening WhatsApp...");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-64 bg-gradient-to-br from-primary/20 via-primary/10 to-background flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=1200&q=80')] bg-cover bg-center opacity-20" />
        <h1 className="relative text-5xl font-bold text-foreground z-10">Buy & Sell</h1>
      </div>

      <div className="container max-w-7xl mx-auto px-4 py-12">
        {/* Polymer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {polymers.map((polymer, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-2">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={polymer.image} 
                  alt={polymer.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-3xl font-bold text-white">{polymer.code}</h3>
                </div>
              </div>
              <CardContent className="p-4 space-y-2">
                <div className="flex items-center justify-between py-2 border-b">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Call</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleCall(polymer.phone)}
                    className="text-primary hover:text-primary-dark"
                  >
                    <MessageCircle className="h-5 w-5" />
                  </Button>
                </div>
                <div className="flex items-center justify-between py-2 border-b">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Email</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleEmail(polymer.email)}
                    className="text-primary hover:text-primary-dark"
                  >
                    <MessageCircle className="h-5 w-5" />
                  </Button>
                </div>
                <div className="flex items-center justify-between py-2">
                  <MessageCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium">WhatsApp</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleWhatsApp(polymer.phone)}
                    className="text-green-600 hover:text-green-700"
                  >
                    <MessageCircle className="h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuySell;
