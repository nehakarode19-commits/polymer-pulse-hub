import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const IndianBazaar = () => {
  const [selectedCity, setSelectedCity] = useState("Ahem");
  const [selectedMonth, setSelectedMonth] = useState("January");
  const [selectedYear, setSelectedYear] = useState("2024");

  const polymerData = [
    {
      title: "IOCL - PP",
      items: [
        { name: "PP FILM", price: "94.5" },
        { name: "PP IM-HMEL M 12 RR", price: "93.5" },
        { name: "HI110 MG", price: "93.25" },
      ]
    },
    {
      title: "H.D.P.E. BLOW",
      items: [
        { name: "PP FILM", price: "94.5" },
        { name: "PP IM-HMEL M 12 RR", price: "93.5" },
        { name: "HI110 MG", price: "93.25" },
      ]
    },
    {
      title: "LLDPE INJ.MLDG",
      items: [
        { name: "PP FILM", price: "94.5" },
        { name: "PP IM-HMEL M 12 RR", price: "93.5" },
        { name: "HI110 MG", price: "93.25" },
      ]
    },
    {
      title: "Engineering Material",
      items: [
        { name: "PP FILM", price: "94.5" },
        { name: "PP IM-HMEL M 12 RR", price: "93.5" },
        { name: "HI110 MG", price: "93.25" },
      ]
    },
    {
      title: "PP",
      items: [
        { name: "PP FILM", price: "94.5" },
        { name: "PP IM-HMEL M 12 RR", price: "93.5" },
        { name: "HI110 MG", price: "93.25" },
      ]
    },
    {
      title: "LDPE LAMI. (7 M.F.I.)",
      items: [
        { name: "PP FILM", price: "94.5" },
        { name: "PP IM-HMEL M 12 RR", price: "93.5" },
        { name: "HI110 MG", price: "93.25" },
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
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-primary">Indian Bazaar</h1>
            </div>
            
            {/* Month and Year Selectors */}
            <div className="flex items-center gap-3">
              <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Month" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="January">January</SelectItem>
                  <SelectItem value="February">February</SelectItem>
                  <SelectItem value="March">March</SelectItem>
                  <SelectItem value="April">April</SelectItem>
                  <SelectItem value="May">May</SelectItem>
                  <SelectItem value="June">June</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="w-28">
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2022">2022</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {/* City Wise Section */}
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Ribbon Header with Filters */}
        <div className="mb-10">
          <div className="flex items-center justify-between flex-wrap gap-6">
            {/* Ribbon Style Heading with Gradient */}
            <div className="relative inline-block">
              <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white px-10 py-5 relative shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                    <FileText className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold tracking-wide">City Wise Data</h2>
                </div>
                {/* Ribbon fold left */}
                <div className="absolute left-0 top-full w-0 h-0 border-l-[25px] border-l-transparent border-t-[18px] border-t-slate-900/70"></div>
                {/* Ribbon fold right */}
                <div className="absolute right-0 top-full w-0 h-0 border-r-[25px] border-r-transparent border-t-[18px] border-t-slate-900/70"></div>
                {/* Decorative shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
              </div>
            </div>
            
            {/* City Filter with enhanced styling */}
            <Select value={selectedCity} onValueChange={setSelectedCity}>
              <SelectTrigger className="w-52 h-12 border-2 border-primary/20 hover:border-primary/40 transition-colors">
                <SelectValue placeholder="Select City" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Ahem">Ahem</SelectItem>
                <SelectItem value="Mumbai">Mumbai</SelectItem>
                <SelectItem value="Delhi">Delhi</SelectItem>
                <SelectItem value="Bangalore">Bangalore</SelectItem>
                <SelectItem value="Chennai">Chennai</SelectItem>
                <SelectItem value="Kolkata">Kolkata</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Polymer Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {polymerData.map((polymer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="border-2 border-primary/10 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  {/* Card Header with vibrant red gradient */}
                  <div className="bg-gradient-to-r from-primary via-primary to-primary/90 text-white px-5 py-4 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                    <h3 className="font-bold text-lg relative z-10 tracking-wide">{polymer.title}</h3>
                  </div>
                  
                  {/* Card Body with enhanced styling */}
                  <div className="p-5 space-y-3 bg-gradient-to-b from-background to-muted/5">
                    {polymer.items.map((item, idx) => (
                      <div 
                        key={idx} 
                        className="flex justify-between items-center py-3 px-2 rounded-md hover:bg-primary/5 transition-colors border-b border-border/50 last:border-0"
                      >
                        <span className="text-sm font-medium text-foreground">{item.name}</span>
                        <span className="text-base font-bold text-primary">{item.price}</span>
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

export default IndianBazaar;
