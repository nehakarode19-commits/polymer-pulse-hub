import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Film } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const BOPPFilm = () => {
  const [selectedMonth, setSelectedMonth] = useState("January");
  const [selectedYear, setSelectedYear] = useState("2024");

  const filmData = [
    {
      type: "TT (Transparent)",
      grades: [
        { name: "15 Micron", price: "145.0" },
        { name: "20 Micron", price: "142.5" },
        { name: "25 Micron", price: "140.0" },
      ]
    },
    {
      type: "NTT (Non-Transparent)",
      grades: [
        { name: "15 Micron White", price: "148.0" },
        { name: "20 Micron White", price: "145.5" },
        { name: "25 Micron White", price: "143.0" },
      ]
    },
    {
      type: "Metalized",
      grades: [
        { name: "12 Micron", price: "165.0" },
        { name: "15 Micron", price: "162.0" },
        { name: "20 Micron", price: "158.5" },
      ]
    },
    {
      type: "Pearl",
      grades: [
        { name: "15 Micron", price: "155.0" },
        { name: "20 Micron", price: "152.5" },
        { name: "25 Micron", price: "150.0" },
      ]
    },
    {
      type: "Matt",
      grades: [
        { name: "20 Micron", price: "147.0" },
        { name: "25 Micron", price: "144.5" },
        { name: "30 Micron", price: "142.0" },
      ]
    },
    {
      type: "Heat Sealable",
      grades: [
        { name: "18 Micron", price: "146.0" },
        { name: "20 Micron", price: "144.0" },
        { name: "25 Micron", price: "141.5" },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <div className="bg-white border-b border-border">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Film className="h-6 w-6 text-primary" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-primary">BOPP Film (TT & NTT)</h1>
            </div>
            
            <div className="flex items-center gap-3">
              <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Month" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="January">January</SelectItem>
                  <SelectItem value="February">February</SelectItem>
                  <SelectItem value="March">March</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="w-28">
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-10">
          <div className="flex items-center gap-4 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent backdrop-blur-sm border border-primary/20 rounded-2xl p-6 shadow-xl">
            <div className="p-3 bg-primary/20 backdrop-blur-md rounded-xl border border-primary/30 shadow-lg">
              <Film className="h-7 w-7 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                BOPP Film Grades & Pricing
              </h2>
              <p className="text-sm text-muted-foreground mt-1">Transparent (TT) and Non-Transparent (NTT) film prices</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filmData.map((film, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="border-2 border-primary/10 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-primary via-primary to-primary/90 text-white px-5 py-4 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                    <h3 className="font-bold text-lg relative z-10 tracking-wide">{film.type}</h3>
                  </div>
                  
                  <div className="p-5 space-y-3 bg-gradient-to-b from-background to-muted/5">
                    {film.grades.map((grade, idx) => (
                      <div 
                        key={idx} 
                        className="flex justify-between items-center py-3 px-2 rounded-md hover:bg-primary/5 transition-colors border-b border-border/50 last:border-0"
                      >
                        <span className="text-sm font-medium text-foreground">{grade.name}</span>
                        <span className="text-base font-bold text-primary">₹{grade.price}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BOPPFilm;
