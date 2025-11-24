import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import polymerPpImg from "@/assets/polymer-card-pp.jpg";
import polymerPvcImg from "@/assets/polymer-card-pvc.jpg";
import polymerLldpeImg from "@/assets/polymer-card-lldpe.jpg";
import polymerHdpeImg from "@/assets/polymer-card-hdpe.jpg";
import polymerLdpeImg from "@/assets/polymer-card-ldpe.jpg";
import polymerPetImg from "@/assets/polymer-card-pet.jpg";
import polymerPsImg from "@/assets/polymer-card-ps.jpg";
import polymerAbsImg from "@/assets/polymer-card-abs.jpg";
import polymerEnggImg from "@/assets/polymer-card-engg.jpg";
import polymerEvaImg from "@/assets/polymer-card-eva.jpg";

const BuySell = () => {
  const polymers = [
    { 
      code: "PP", 
      name: "Polypropylene",
      image: polymerPpImg,
      phone: "+91 93746 24365",
      email: "info@polymerbazaar.com"
    },
    { 
      code: "PVC", 
      name: "Polyvinyl Chloride",
      image: polymerPvcImg,
      phone: "+91 93746 24365",
      email: "info@polymerbazaar.com"
    },
    { 
      code: "LLDPE", 
      name: "Linear Low Density Polyethylene",
      image: polymerLldpeImg,
      phone: "+91 93746 24365",
      email: "info@polymerbazaar.com"
    },
    { 
      code: "HDPE", 
      name: "High Density Polyethylene",
      image: polymerHdpeImg,
      phone: "+91 93746 24365",
      email: "info@polymerbazaar.com"
    },
    { 
      code: "LDPE", 
      name: "Low Density Polyethylene",
      image: polymerLdpeImg,
      phone: "+91 93746 24365",
      email: "info@polymerbazaar.com"
    },
    { 
      code: "PET", 
      name: "Polyethylene Terephthalate",
      image: polymerPetImg,
      phone: "+91 93746 24365",
      email: "info@polymerbazaar.com"
    },
    { 
      code: "PS", 
      name: "Polystyrene",
      image: polymerPsImg,
      phone: "+91 93746 24365",
      email: "info@polymerbazaar.com"
    },
    { 
      code: "ABS", 
      name: "Acrylonitrile Butadiene Styrene",
      image: polymerAbsImg,
      phone: "+91 93746 24365",
      email: "info@polymerbazaar.com"
    },
    { 
      code: "ENGG", 
      name: "Engineering Plastics",
      image: polymerEnggImg,
      phone: "+91 93746 24365",
      email: "info@polymerbazaar.com"
    },
    { 
      code: "EVA", 
      name: "Ethylene Vinyl Acetate",
      image: polymerEvaImg,
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
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative gradient-hero h-64 md:h-72 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/0 to-background/40" />
        <div className="container max-w-7xl mx-auto relative z-10 text-center">
          <p className="text-sm font-semibold tracking-[0.2em] text-primary-foreground/80 uppercase mb-2">
            Trade Desk
          </p>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-primary-foreground mb-3">
            Buy &amp; Sell Polymers
          </h1>
          <p className="text-sm md:text-base text-primary-foreground/80 max-w-2xl mx-auto">
            Direct access to verified polymer suppliers with one-tap Call, Email, or WhatsApp support.
          </p>
        </div>
      </header>

      <section className="container max-w-7xl mx-auto px-4 py-12">
        {/* Polymer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {polymers.map((polymer, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-maroon/15 bg-card"
            >
              <div 
                className="relative h-48 bg-cover bg-center flex items-end justify-between p-4"
                style={{ backgroundImage: `url(${polymer.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <div className="relative z-10">
                  <p className="text-xs font-medium text-white/70 tracking-[0.2em] uppercase drop-shadow-md">
                    Polymer Code
                  </p>
                  <h3 className="text-3xl font-extrabold text-white drop-shadow-lg">{polymer.code}</h3>
                  <p className="mt-1 text-xs text-white/80 line-clamp-2 drop-shadow-md">
                    {polymer.name}
                  </p>
                </div>
                
                <div className="relative z-10 hidden md:flex flex-col items-end gap-1 text-right text-[10px] text-white/90 drop-shadow-md">
                  <span className="inline-flex items-center gap-1">
                    <Phone className="h-3 w-3" /> Live Desk
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Mail className="h-3 w-3" /> Email Support
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MessageCircle className="h-3 w-3" /> WhatsApp Alerts
                  </span>
                </div>
              </div>

              <CardContent className="p-4 space-y-3">
                <div className="text-xs font-semibold text-muted-foreground tracking-wide uppercase mb-1">
                  Connect For {polymer.code}
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2 py-1 border-b border-border/60">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Phone className="h-4 w-4" />
                      </span>
                      <span className="font-medium">Call</span>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleCall(polymer.phone)}
                      className="border-primary/60 text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      Call Desk
                    </Button>
                  </div>

                  <div className="flex items-center justify-between gap-2 py-1 border-b border-border/60">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Mail className="h-4 w-4" />
                      </span>
                      <span className="font-medium">Email</span>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEmail(polymer.email)}
                      className="border-primary/60 text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      Send Mail
                    </Button>
                  </div>

                  <div className="flex items-center justify-between gap-2 py-1">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <MessageCircle className="h-4 w-4" />
                      </span>
                      <span className="font-medium">WhatsApp</span>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleWhatsApp(polymer.phone)}
                      className="border-primary/60 text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      Chat Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
};

export default BuySell;
