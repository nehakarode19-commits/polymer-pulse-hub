import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Globe, TrendingUp, DollarSign } from "lucide-react";
import { motion } from "framer-motion";
import globalTradingImg from "@/assets/global-trading.jpg";
import refineryHeroImg from "@/assets/refinery-hero.jpg";
import globalBazaarDarkImg from "@/assets/global-bazaar-dark.jpg";

const GlobalBazaar = () => {
  const [selectedMonth, setSelectedMonth] = useState("January");
  const [selectedYear, setSelectedYear] = useState("2024");

  const countries = ["USA", "Europe", "China", "India", "Iran", "Pakistan", "Nepal", "Sri Lanka", "Bangladesh", "KSA", "Turkey", "Egypt"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const years = ["2020", "2021", "2022", "2023", "2024"];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative h-80 bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${globalBazaarDarkImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-primary/40 to-black/50" />
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
              <Globe className="h-5 w-5 text-white" />
              <span className="text-sm font-semibold text-white tracking-wide">Global Market Intelligence</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4 drop-shadow-2xl">
              Global Bazaar
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Real-time polymer pricing and market insights across 12+ countries
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="container max-w-7xl mx-auto px-4 py-12">
        {/* Filter Section */}
        <Card className="mb-8 border-2 border-primary/20 shadow-xl">
          <CardContent className="p-6">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <span className="font-semibold text-foreground">Market Filters:</span>
              </div>
              <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                <SelectTrigger className="w-40 border-primary/30">
                  <SelectValue placeholder="Select month" />
                </SelectTrigger>
                <SelectContent className="bg-background z-50">
                  {months.map((month) => (
                    <SelectItem key={month} value={month}>
                      {month}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="w-32 border-primary/30">
                  <SelectValue placeholder="Select year" />
                </SelectTrigger>
                <SelectContent className="bg-background z-50">
                  {years.map((year) => (
                    <SelectItem key={year} value={year}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Country Tabs */}
        <Tabs defaultValue="USA" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 bg-muted/50 p-2 h-auto">
            {countries.map((country) => (
              <TabsTrigger
                key={country}
                value={country}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-semibold"
              >
                {country}
              </TabsTrigger>
            ))}
          </TabsList>

          {countries.map((country) => (
            <TabsContent key={country} value={country}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Card 
                  className="relative overflow-hidden border-2 border-primary/20 shadow-2xl"
                  style={{
                    backgroundImage: `url(${refineryHeroImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />
                  <CardContent className="relative z-10 p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <DollarSign className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-foreground">{country} Market Data</h2>
                        <p className="text-muted-foreground">
                          {selectedMonth} {selectedYear} Pricing Overview
                        </p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {["PP", "HDPE", "LDPE", "LLDPE", "PVC", "PET"].map((polymer) => (
                        <motion.div
                          key={polymer}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Card className="bg-card/80 backdrop-blur-sm border-primary/30 hover:border-primary hover:shadow-xl transition-all group">
                            <CardContent className="p-6">
                              <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                  {polymer}
                                </h3>
                                <TrendingUp className="h-6 w-6 text-success" />
                              </div>
                              <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                  <span className="text-muted-foreground">Current Price:</span>
                                  <span className="font-bold text-primary">$1,245/MT</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                  <span className="text-muted-foreground">Change:</span>
                                  <span className="font-bold text-success">+2.5%</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                  <span className="text-muted-foreground">Volume:</span>
                                  <span className="font-medium text-foreground">5,240 MT</span>
                                </div>
                              </div>
                              <div className="mt-4 pt-4 border-t border-border">
                                <p className="text-xs text-muted-foreground">
                                  Updated: {selectedMonth} {selectedYear}
                                </p>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-8 p-6 bg-muted/50 rounded-lg border border-border">
                      <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <Globe className="h-5 w-5 text-primary" />
                        Market Insights for {country}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        The {country} polymer market shows steady growth in {selectedMonth} {selectedYear}. 
                        Key polymers like PP and HDPE demonstrate strong demand with moderate price increases. 
                        Market conditions remain favorable for long-term investments with stable supply chains 
                        and growing industrial applications across various sectors.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </section>
    </div>
  );
};

export default GlobalBazaar;
