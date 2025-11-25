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
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Hero Section */}
      <header className="relative h-56 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(210,25%,25%)] via-[hsl(210,20%,35%)] to-[hsl(25,40%,45%)]" />
        <div className="container max-w-7xl mx-auto relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
              Buy & Sell Polymers
            </h1>
            <p className="text-sm md:text-base text-white/90 max-w-2xl mx-auto">
              Direct access to verified polymer suppliers with one-tap Call, Email, or WhatsApp support.
            </p>
          </motion.div>
        </div>
      </header>

      <section className="container max-w-6xl mx-auto px-6 py-16">
        {/* Polymer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {polymers.map((polymer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              <Card className="overflow-hidden border-0 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.12)] transition-all duration-300 rounded-lg group">
                {/* Image with Subtle Overlay - NO LARGE TEXT */}
                <div className="relative h-44 w-full overflow-hidden">
                  <img 
                    src={polymer.image} 
                    alt={polymer.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle gradient overlay only */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>

                {/* Polymer Name Label - Below Image */}
                <div className="py-4 text-center bg-background">
                  <h3 className="text-lg font-bold text-foreground tracking-tight">
                    {polymer.code}
                  </h3>
                </div>

                {/* Action Icons - Horizontal Layout */}
                <div className="px-4 pb-4 bg-white">
                  <div className="flex items-center justify-center gap-1">
                    {/* Call Button */}
                    <button
                      onClick={() => handleCall(polymer.phone)}
                      className="flex flex-col items-center gap-1.5 py-2 px-3 rounded-md hover:bg-muted transition-all group/btn flex-1"
                    >
                      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center group-hover/btn:bg-primary/10 transition-all">
                        <Phone className="h-4 w-4 text-muted-foreground group-hover/btn:text-primary" />
                      </div>
                      <span className="text-[10px] font-semibold text-foreground">Call</span>
                    </button>

                    {/* Email Button */}
                    <button
                      onClick={() => handleEmail(polymer.email)}
                      className="flex flex-col items-center gap-1.5 py-2 px-3 rounded-md hover:bg-muted transition-all group/btn flex-1"
                    >
                      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center group-hover/btn:bg-primary/10 transition-all">
                        <Mail className="h-4 w-4 text-muted-foreground group-hover/btn:text-primary" />
                      </div>
                      <span className="text-[10px] font-semibold text-foreground">Email</span>
                    </button>

                    {/* WhatsApp Button */}
                    <button
                      onClick={() => handleWhatsApp(polymer.phone)}
                      className="flex flex-col items-center gap-1.5 py-2 px-3 rounded-md hover:bg-muted transition-all group/btn flex-1"
                    >
                      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center group-hover/btn:bg-primary/10 transition-all">
                        <MessageCircle className="h-4 w-4 text-muted-foreground group-hover/btn:text-primary" />
                      </div>
                      <span className="text-[10px] font-semibold text-foreground">WhatsApp</span>
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
