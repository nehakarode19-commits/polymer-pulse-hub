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
        {/* Section Title and Filters */}
        <div className="mb-6 flex items-center justify-between flex-wrap gap-4">
          <h2 className="text-2xl font-bold text-foreground">City Wise</h2>
          
          {/* City Filter */}
          <Select value={selectedCity} onValueChange={setSelectedCity}>
            <SelectTrigger className="w-48">
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

        {/* Polymer Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {polymerData.map((polymer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="border border-border shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  {/* Card Header */}
                  <div className="bg-primary text-white px-4 py-3 text-center">
                    <h3 className="font-bold text-base">{polymer.title}</h3>
                  </div>
                  
                  {/* Card Body */}
                  <div className="p-4 space-y-2">
                    {polymer.items.map((item, idx) => (
                      <div 
                        key={idx} 
                        className="flex justify-between items-center py-2 border-b border-border last:border-0"
                      >
                        <span className="text-sm text-muted-foreground">{item.name}</span>
                        <span className="text-sm font-semibold text-foreground">{item.price}</span>
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
