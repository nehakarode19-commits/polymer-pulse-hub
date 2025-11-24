import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Globe } from "lucide-react";
import { motion } from "framer-motion";
import globalBazaarDarkImg from "@/assets/global-bazaar-dark.jpg";

const GlobalBazaar = () => {
  const [selectedCountry, setSelectedCountry] = useState("U.S.A");
  const [selectedMonth, setSelectedMonth] = useState("April");
  const [selectedYear, setSelectedYear] = useState("2025");

  const countries = [
    { code: "U.S.A", label: "U.S.A", flag: "🇺🇸", currency: "$/Mt" },
    { code: "Europe", label: "Europe", flag: "🇪🇺", currency: "€/Mt" },
    { code: "Asia-China", label: "Asia-China", flag: "🇨🇳", currency: "¥/Mt" },
    { code: "Asia-India", label: "Asia-India", flag: "🇮🇳", currency: "₹/Kg" },
    { code: "Asia-Iran", label: "Asia-Iran", flag: "🇮🇷", currency: "$/Mt" },
    { code: "Asia-Pakistan", label: "Asia-Pakistan", flag: "🇵🇰", currency: "₨/Kg" },
    { code: "Asia-Nepal", label: "Asia-Nepal", flag: "🇳🇵", currency: "₨/Kg" },
    { code: "Asia-SriLanka", label: "Asia-SriLanka", flag: "🇱🇰", currency: "₨/Kg" },
    { code: "Asia-Bangladesh", label: "Asia-Bangladesh", flag: "🇧🇩", currency: "৳/Kg" },
    { code: "Other Asian Nation", label: "Other Asian Nation", flag: "🌏", currency: "$/Mt" },
    { code: "KSA", label: "KSA", flag: "🇸🇦", currency: "SAR/Mt" },
    { code: "Africa-Egypt", label: "Africa-Egypt", flag: "🇪🇬", currency: "EGP/Mt" },
    { code: "Middle East", label: "Middle East", flag: "🌍", currency: "$/Mt" },
    { code: "Turkey", label: "Turkey", flag: "🇹🇷", currency: "₺/Mt" },
  ];

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const years = ["2024", "2025", "2026"];

  // Sample pricing data structure
  const pricingData: Record<string, any> = {
    "U.S.A": {
      PP: [
        { grade: "PP Raffia", price: 1210 },
        { grade: "Homo - IQ", price: 1180 },
        { grade: "Film - IQ", price: 1200 },
        { grade: "Co Poly.", price: 1220 },
      ],
      HDPE: [
        { grade: "Blow Molding", price: 1150 },
        { grade: "Injection Grade", price: 1170 },
        { grade: "Film Grade", price: 1190 },
      ],
      LLDPE: [
        { grade: "Film Grade", price: 1100 },
        { grade: "Rotomolding", price: 1120 },
      ],
      PVC: [
        { grade: "Suspension Grade", price: 980 },
        { grade: "Emulsion Grade", price: 1050 },
      ],
    },
    Europe: {
      PP: [
        { grade: "PP Raffia", price: 1210 },
        { grade: "Homo - IQ", price: 1180 },
        { grade: "Film - IQ", price: 1200 },
        { grade: "Co Poly.", price: 1220 },
      ],
      HDPE: [
        { grade: "Blow Molding", price: 1150 },
        { grade: "Injection Grade", price: 1170 },
      ],
      LLDPE: [
        { grade: "Film Grade", price: 1100 },
        { grade: "Rotomolding", price: 1120 },
      ],
    },
  };

  const selectedCountryData = countries.find(c => c.code === selectedCountry);
  const countryPricing = pricingData[selectedCountry] || {};

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative h-72 bg-cover bg-center bg-no-repeat flex items-center justify-start"
        style={{ backgroundImage: `url(${globalBazaarDarkImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-primary/50 to-black/60" />
        <div className="container relative z-10 px-8">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-6xl font-black text-white drop-shadow-2xl"
          >
            Global Bazaar
          </motion.h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="container max-w-7xl mx-auto px-8 py-12">
        {/* Header with Icon and Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Globe className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-primary">Global Bazaar</h2>
          </div>

          {/* Month and Year Filters */}
          <div className="flex gap-4">
            <Select value={selectedMonth} onValueChange={setSelectedMonth}>
              <SelectTrigger className="w-40 bg-background border-border">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-background border-border z-50">
                {months.map((month) => (
                  <SelectItem key={month} value={month}>
                    {month}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger className="w-32 bg-background border-border">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-background border-border z-50">
                {years.map((year) => (
                  <SelectItem key={year} value={year}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Country Tabs */}
        <Tabs value={selectedCountry} onValueChange={setSelectedCountry} className="space-y-6">
          <TabsList className="w-full flex flex-wrap justify-start gap-2 bg-transparent p-0 h-auto">
            {countries.map((country) => (
              <TabsTrigger
                key={country.code}
                value={country.code}
                className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=inactive]:bg-muted/50 data-[state=inactive]:text-foreground border border-border hover:border-primary transition-all rounded-md font-medium text-sm"
              >
                <span className="mr-2">{country.flag}</span>
                {country.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {countries.map((country) => (
            <TabsContent key={country.code} value={country.code}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                {/* Week Header Banner */}
                <div className="bg-primary text-white py-3 px-6 rounded-t-lg font-bold text-center text-lg mb-0">
                  1st Week {selectedMonth} {selectedYear} - ({country.currency})
                </div>

                {/* Pricing Data Cards */}
                <Card className="border-2 border-primary/20 shadow-xl rounded-t-none">
                  <CardContent className="p-6">
                    {Object.keys(countryPricing).length > 0 ? (
                      <div className="space-y-8">
                        {Object.entries(countryPricing).map(([polymer, grades]: [string, any]) => (
                          <div key={polymer} className="border-b border-border last:border-b-0 pb-6 last:pb-0">
                            {/* Polymer Category Header */}
                            <h3 className="text-xl font-bold text-primary mb-4">{polymer}</h3>
                            
                            {/* Pricing Table */}
                            <div className="space-y-2">
                              {grades.map((item: any, idx: number) => (
                                <div 
                                  key={idx}
                                  className="grid grid-cols-2 gap-4 py-3 px-4 hover:bg-muted/50 rounded-lg transition-colors"
                                >
                                  <div>
                                    <p className="text-sm text-muted-foreground mb-0.5">Grade / Material</p>
                                    <p className="font-semibold text-foreground">{item.grade}</p>
                                  </div>
                                  <div className="text-right">
                                    <p className="text-sm text-muted-foreground mb-0.5">Price</p>
                                    <p className="font-bold text-primary text-lg">#{item.price}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-12 text-muted-foreground">
                        <Globe className="h-16 w-16 mx-auto mb-4 opacity-50" />
                        <p className="text-lg">No pricing data available for {country.label}</p>
                        <p className="text-sm mt-2">Please check back later or select another region</p>
                      </div>
                    )}
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
