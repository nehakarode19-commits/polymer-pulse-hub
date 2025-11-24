import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, TrendingUp, MapPin, DollarSign, IndianRupee } from "lucide-react";
import { motion } from "framer-motion";
import polymerProductionImg from "@/assets/polymer-production.jpg";
import chemicalPlantImg from "@/assets/chemical-plant.jpg";

const IndianBazaar = () => {
  const cities = [
    { name: "Mumbai", price: "₹95.50/kg", change: "+2.3%", trend: "up" },
    { name: "Delhi", price: "₹94.80/kg", change: "+1.8%", trend: "up" },
    { name: "Bangalore", price: "₹96.20/kg", change: "+2.5%", trend: "up" },
    { name: "Chennai", price: "₹93.90/kg", change: "+1.2%", trend: "up" },
    { name: "Ahmedabad", price: "₹95.10/kg", change: "+2.1%", trend: "up" },
    { name: "Kolkata", price: "₹94.50/kg", change: "+1.5%", trend: "up" },
  ];

  const rateRevisions = [
    { company: "Reliance Industries", polymer: "PP", oldPrice: "₹92.00", newPrice: "₹95.50", date: "Jan 15, 2024" },
    { company: "IOCL", polymer: "HDPE", oldPrice: "₹88.50", newPrice: "₹91.20", date: "Jan 14, 2024" },
    { company: "Haldia Petrochemicals", polymer: "LLDPE", oldPrice: "₹85.00", newPrice: "₹87.80", date: "Jan 13, 2024" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative h-80 bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${polymerProductionImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-accent-orange/85" />
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
              <MapPin className="h-5 w-5 text-white" />
              <span className="text-sm font-semibold text-white tracking-wide">Indian Market Intelligence</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4 drop-shadow-2xl">
              Indian Bazaar
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Comprehensive city-wise polymer pricing, rate revisions, and market predictions across India
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="container max-w-7xl mx-auto px-4 py-12 space-y-12">
        {/* City Wise Pricing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-primary/10 rounded-lg">
              <MapPin className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground">City Wise Pricing</h2>
              <p className="text-muted-foreground">Real-time polymer prices across major Indian cities</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city, index) => (
              <motion.div
                key={city.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card 
                  className="relative overflow-hidden border-2 border-primary/20 hover:border-primary hover:shadow-2xl transition-all group"
                  style={{
                    backgroundImage: `url(${chemicalPlantImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-background/95 to-background/90 group-hover:from-primary/5 group-hover:to-background/95 transition-all" />
                  <CardContent className="relative z-10 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {city.name}
                      </h3>
                      <Building2 className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">PP Price (INR/kg)</p>
                        <p className="text-3xl font-black text-primary">{city.price}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-success" />
                        <span className="text-lg font-bold text-success">{city.change}</span>
                        <span className="text-sm text-muted-foreground">vs last week</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Rate Revision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-primary/10 rounded-lg">
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground">Latest Rate Revisions</h2>
              <p className="text-muted-foreground">Recent price updates from major manufacturers</p>
            </div>
          </div>

          <Card className="border-2 border-primary/20 shadow-xl">
            <CardContent className="p-6">
              <div className="space-y-4">
                {rateRevisions.map((revision, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 bg-muted/30 rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all"
                  >
                    <div className="grid md:grid-cols-5 gap-4 items-center">
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Company</p>
                        <p className="font-bold text-foreground">{revision.company}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Polymer</p>
                        <p className="font-bold text-primary">{revision.polymer}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Old Price</p>
                        <p className="font-semibold text-foreground/70 line-through">{revision.oldPrice}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">New Price</p>
                        <p className="font-bold text-success text-lg">{revision.newPrice}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground mb-1">Effective Date</p>
                        <p className="font-medium text-foreground">{revision.date}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* USD-INR Exchange Rate */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card 
            className="border-2 border-primary/20 shadow-xl relative overflow-hidden"
            style={{
              backgroundImage: `url(${chemicalPlantImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-background/98 to-background/95" />
            <CardHeader className="relative z-10">
              <CardTitle className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <DollarSign className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">US$ - INR Custom Exchange Rate</h3>
                  <p className="text-sm text-muted-foreground font-normal">Current market exchange rates</p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-primary/5 rounded-lg border-2 border-primary/20">
                  <p className="text-sm text-muted-foreground mb-2">Current Rate</p>
                  <div className="flex items-center gap-2">
                    <IndianRupee className="h-6 w-6 text-primary" />
                    <p className="text-4xl font-black text-primary">83.25</p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">per USD</p>
                </div>
                <div className="p-6 bg-card rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground mb-2">24h Change</p>
                  <p className="text-3xl font-bold text-success">+0.15</p>
                  <p className="text-sm text-success mt-1">+0.18%</p>
                </div>
                <div className="p-6 bg-card rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground mb-2">Week High</p>
                  <p className="text-3xl font-bold text-foreground">83.42</p>
                  <p className="text-sm text-muted-foreground mt-1">Jan 15, 2024</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* BOPP Film Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="border-2 border-primary/20 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">BOPP Film (TT & NTT)</h3>
                  <p className="text-sm text-muted-foreground font-normal">Biaxially Oriented Polypropylene Film Pricing</p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-gradient-to-br from-primary/5 to-transparent border-primary/30">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-foreground mb-4">Treated BOPP (TT)</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">20 Micron</span>
                        <span className="text-lg font-bold text-primary">₹128.50/kg</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">25 Micron</span>
                        <span className="text-lg font-bold text-primary">₹125.20/kg</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">30 Micron</span>
                        <span className="text-lg font-bold text-primary">₹122.80/kg</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-accent-orange/5 to-transparent border-accent-orange/30">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-foreground mb-4">Non-Treated BOPP (NTT)</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">20 Micron</span>
                        <span className="text-lg font-bold text-accent-orange">₹118.50/kg</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">25 Micron</span>
                        <span className="text-lg font-bold text-accent-orange">₹115.20/kg</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">30 Micron</span>
                        <span className="text-lg font-bold text-accent-orange">₹112.80/kg</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </div>
  );
};

export default IndianBazaar;
