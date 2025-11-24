import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";
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
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      {/* Hero Section */}
      <header className="relative gradient-hero h-80 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-accent-orange/90" />
        <div className="container max-w-7xl mx-auto relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-black tracking-tight text-white mb-4 drop-shadow-2xl">
              Buy &amp; Sell Polymers
            </h1>
            <p className="text-lg md:text-xl text-white/95 max-w-3xl mx-auto font-medium">
              Direct access to verified polymer suppliers with one-tap Call, Email, or WhatsApp support.
            </p>
          </motion.div>
        </div>
      </header>

      <section className="container max-w-7xl mx-auto px-4 py-16">
        {/* Polymer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {polymers.map((polymer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              <Card className="group overflow-hidden border-2 border-border/50 hover:border-primary/50 bg-card shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                {/* Image Header */}
                <div 
                  className="relative h-56 bg-cover bg-center overflow-hidden"
                  style={{ backgroundImage: `url(${polymer.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  {/* Category Label */}
                  <div className="absolute top-4 left-4 px-3 py-1.5 bg-primary/90 backdrop-blur-sm rounded-full">
                    <span className="text-xs font-bold text-white tracking-wider uppercase">
                      Polymer Code
                    </span>
                  </div>
                  
                  {/* Polymer Code */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-4xl font-black text-white drop-shadow-2xl mb-2">
                      {polymer.code}
                    </h3>
                    <p className="text-sm text-white/90 font-medium drop-shadow-lg line-clamp-1">
                      {polymer.name}
                    </p>
                  </div>
                </div>

                <CardContent className="p-6 flex-1 flex flex-col">
                  {/* Connect Header */}
                  <div className="mb-4 pb-3 border-b border-border">
                    <h4 className="text-sm font-bold text-primary uppercase tracking-wide">
                      Connect for {polymer.code}
                    </h4>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3 flex-1">
                    {/* Call */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 flex-1">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                          <Phone className="h-5 w-5 text-primary" />
                        </div>
                        <span className="text-sm font-semibold text-foreground">Call</span>
                      </div>
                      <Button
                        onClick={() => handleCall(polymer.phone)}
                        size="sm"
                        className="bg-primary hover:bg-primary/90 text-white shadow-md hover:shadow-lg transition-all"
                      >
                        Call Desk
                      </Button>
                    </div>

                    {/* Email */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 flex-1">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <span className="text-sm font-semibold text-foreground">Email</span>
                      </div>
                      <Button
                        onClick={() => handleEmail(polymer.email)}
                        size="sm"
                        variant="outline"
                        className="border-primary/60 text-primary hover:bg-primary hover:text-white transition-all"
                      >
                        Send Mail
                      </Button>
                    </div>

                    {/* WhatsApp */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 flex-1">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                          <MessageCircle className="h-5 w-5 text-primary" />
                        </div>
                        <span className="text-sm font-semibold text-foreground">WhatsApp</span>
                      </div>
                      <Button
                        onClick={() => handleWhatsApp(polymer.phone)}
                        size="sm"
                        variant="outline"
                        className="border-primary/60 text-primary hover:bg-primary hover:text-white transition-all"
                      >
                        Chat Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default BuySell;
