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
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Hero Section */}
      <header className="relative h-64 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="container max-w-7xl mx-auto relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
              Buy & Sell Polymers
            </h1>
            <p className="text-base md:text-lg text-white/95 max-w-2xl mx-auto font-medium">
              Direct access to verified polymer suppliers with one-tap Call, Email, or WhatsApp support.
            </p>
          </motion.div>
        </div>
      </header>

      <section className="container max-w-7xl mx-auto px-6 py-20">
        {/* Polymer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {polymers.map((polymer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              <Card className="overflow-hidden border-2 border-border/50 hover:border-primary/40 bg-card shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl group">
                {/* Image with Overlay */}
                <div className="relative h-56 w-full overflow-hidden">
                  <img 
                    src={polymer.image} 
                    alt={polymer.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                  {/* Large Polymer Code Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-5xl md:text-6xl font-black text-white drop-shadow-2xl tracking-wider">
                      {polymer.code}
                    </h3>
                  </div>
                </div>

                {/* Polymer Name Label */}
                <div className="py-5 text-center bg-card border-t border-border/30">
                  <p className="text-base font-semibold text-foreground/90">
                    {polymer.name}
                  </p>
                </div>

                {/* Action Buttons - Enhanced Design */}
                <div className="px-5 pb-5 bg-card">
                  <div className="flex items-center justify-center gap-3">
                    {/* Call Button */}
                    <button
                      onClick={() => handleCall(polymer.phone)}
                      className="flex flex-col items-center gap-2 py-3 px-4 rounded-xl hover:bg-primary/5 transition-all group/btn flex-1 border border-border/30 hover:border-primary/40"
                      aria-label="Call"
                    >
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover/btn:from-primary/20 group-hover/btn:to-primary/10 transition-all shadow-sm">
                        <Phone className="h-5 w-5 text-primary" strokeWidth={2} />
                      </div>
                      <span className="text-xs font-bold text-foreground">Call</span>
                    </button>

                    {/* Email Button */}
                    <button
                      onClick={() => handleEmail(polymer.email)}
                      className="flex flex-col items-center gap-2 py-3 px-4 rounded-xl hover:bg-primary/5 transition-all group/btn flex-1 border border-border/30 hover:border-primary/40"
                      aria-label="Email"
                    >
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover/btn:from-primary/20 group-hover/btn:to-primary/10 transition-all shadow-sm">
                        <Mail className="h-5 w-5 text-primary" strokeWidth={2} />
                      </div>
                      <span className="text-xs font-bold text-foreground">Email</span>
                    </button>

                    {/* WhatsApp Button */}
                    <button
                      onClick={() => handleWhatsApp(polymer.phone)}
                      className="flex flex-col items-center gap-2 py-3 px-4 rounded-xl hover:bg-green-50 transition-all group/btn flex-1 border border-border/30 hover:border-green-500/40"
                      aria-label="WhatsApp"
                    >
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-50 to-green-100/50 flex items-center justify-center group-hover/btn:from-green-100 group-hover/btn:to-green-50 transition-all shadow-sm">
                        <MessageCircle className="h-5 w-5 text-green-600" strokeWidth={2} />
                      </div>
                      <span className="text-xs font-bold text-foreground">WhatsApp</span>
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
