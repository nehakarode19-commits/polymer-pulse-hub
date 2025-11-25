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
      title: "15 Micron TT (Transparent)",
      company: "Cosmo Films Ltd.",
      subCategory: "Transparent Film",
      priceChange: "+2.5"
    },
    {
      title: "20 Micron TT (Transparent)",
      company: "Uflex Limited",
      subCategory: "Transparent Film",
      priceChange: "-1.0"
    },
    {
      title: "25 Micron TT (Transparent)",
      company: "Polyplex Corporation",
      subCategory: "Transparent Film",
      priceChange: "+0.5"
    },
    {
      title: "15 Micron NTT (White)",
      company: "Jindal Poly Films",
      subCategory: "Non-Transparent Film",
      priceChange: "+1.5"
    },
    {
      title: "20 Micron NTT (White)",
      company: "Max Speciality Films",
      subCategory: "Non-Transparent Film",
      priceChange: "-0.5"
    },
    {
      title: "25 Micron NTT (White)",
      company: "Cosmo Films Ltd.",
      subCategory: "Non-Transparent Film",
      priceChange: "+3.0"
    },
    {
      title: "12 Micron Metalized",
      company: "Uflex Limited",
      subCategory: "Metalized Film",
      priceChange: "+2.0"
    },
    {
      title: "15 Micron Metalized",
      company: "Polyplex Corporation",
      subCategory: "Metalized Film",
      priceChange: "-1.5"
    },
    {
      title: "20 Micron Pearl",
      company: "Jindal Poly Films",
      subCategory: "Pearl Film",
      priceChange: "+1.0"
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
                  <div className="bg-gradient-to-r from-primary via-primary to-primary/90 text-white px-5 py-4 text-center">
                    <h3 className="font-bold text-base">{film.title}</h3>
                  </div>
                  
                  <div className="p-6 bg-gradient-to-b from-background to-muted/5">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-xs uppercase text-muted-foreground mb-2">Company</p>
                        <p className="text-sm font-semibold text-foreground">{film.company}</p>
                      </div>
                      
                      <div>
                        <p className="text-xs uppercase text-muted-foreground mb-2">Sub Category</p>
                        <p className="text-sm font-semibold text-foreground">{film.subCategory}</p>
                      </div>
                      
                      <div>
                        <p className="text-xs uppercase text-muted-foreground mb-2">Price Change</p>
                        <p className={`text-lg font-bold ${film.priceChange.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                          {film.priceChange}
                        </p>
                      </div>
                    </div>
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
