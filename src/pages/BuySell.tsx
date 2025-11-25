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
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative py-16 bg-primary">
        <div className="container max-w-7xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
              Buy & Sell Polymers
            </h1>
            <p className="text-base text-white/90 max-w-2xl mx-auto">
              Direct access to verified polymer suppliers with one-tap Call, Email, or WhatsApp support.
            </p>
          </motion.div>
        </div>
      </header>

      <section className="container max-w-7xl mx-auto px-6 py-12">
        {/* Polymer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {polymers.map((polymer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              <Card className="overflow-hidden border border-border hover:border-primary transition-all duration-300 group">
                {/* Image with Polymer Code Overlay */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img 
                    src={polymer.image} 
                    alt={polymer.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-5xl font-black text-white drop-shadow-lg">
                      {polymer.code}
                    </h3>
                  </div>
                </div>

                {/* Polymer Name */}
                <div className="p-4 text-center border-b border-border">
                  <p className="text-sm font-medium text-muted-foreground">
                    {polymer.name}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="p-4">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      onClick={() => handleCall(polymer.phone)}
                      className="flex flex-col items-center gap-1 py-2 px-3 rounded-lg hover:bg-muted transition-colors flex-1"
                      aria-label="Call"
                    >
                      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                        <Phone className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-xs font-medium text-foreground">Call</span>
                    </button>

                    <button
                      onClick={() => handleEmail(polymer.email)}
                      className="flex flex-col items-center gap-1 py-2 px-3 rounded-lg hover:bg-muted transition-colors flex-1"
                      aria-label="Email"
                    >
                      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                        <Mail className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-xs font-medium text-foreground">Email</span>
                    </button>

                    <button
                      onClick={() => handleWhatsApp(polymer.phone)}
                      className="flex flex-col items-center gap-1 py-2 px-3 rounded-lg hover:bg-muted transition-colors flex-1"
                      aria-label="WhatsApp"
                    >
                      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                        <MessageCircle className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-xs font-medium text-foreground">WhatsApp</span>
                    </button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default BuySell;
