import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Building2 } from "lucide-react";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const CompanyPriceList = () => {
  const [selectedMonth, setSelectedMonth] = useState("April");
  const [selectedYear, setSelectedYear] = useState("2025");

  const priceListData = [
    {
      date: "Tues 19-04-2025",
      products: [
        { name: "C exsf Japan", date: "19-04-2025", link: "#" },
        { name: "Blow Mid", date: "19-04-2025", link: "#" },
        { name: "Brent", date: "19-04-2025", link: "#" },
        { name: "PP Film", date: "19-04-2025", link: "#" },
      ]
    },
    {
      date: "Mon 18-04-2025",
      products: [
        { name: "PP FILM", date: "18-04-2025", link: "#" },
        { name: "PP IM-HMEL M 12 RR", date: "18-04-2025", link: "#" },
        { name: "HI110 MG", date: "18-04-2025", link: "#" },
      ]
    },
    {
      date: "Fri 15-04-2025",
      products: [
        { name: "HDPE BLOW", date: "15-04-2025", link: "#" },
        { name: "LLDPE INJ.MLDG", date: "15-04-2025", link: "#" },
        { name: "LDPE LAMI", date: "15-04-2025", link: "#" },
      ]
    },
    {
      date: "Thu 14-04-2025",
      products: [
        { name: "PP FILM", date: "14-04-2025", link: "#" },
        { name: "Engineering Material", date: "14-04-2025", link: "#" },
      ]
    },
    {
      date: "Wed 13-04-2025",
      products: [
        { name: "PP IM-HMEL", date: "13-04-2025", link: "#" },
        { name: "HDPE", date: "13-04-2025", link: "#" },
        { name: "LLDPE", date: "13-04-2025", link: "#" },
      ]
    },
    {
      date: "Tue 12-04-2025",
      products: [
        { name: "LDPE LAMI", date: "12-04-2025", link: "#" },
        { name: "PP", date: "12-04-2025", link: "#" },
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
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-primary">Company Price List</h1>
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
                  <SelectItem value="2025">2025</SelectItem>
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
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {priceListData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="border-2 border-border/50 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  {/* Date Header - Red */}
                  <div className="bg-gradient-to-r from-primary via-primary to-primary/90 text-white px-5 py-3 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                    <p className="font-bold text-sm relative z-10 tracking-wide">{item.date}</p>
                  </div>
                  
                  {/* Products List */}
                  <div className="p-5 space-y-3 bg-gradient-to-b from-background to-muted/5">
                    {item.products.map((product, idx) => (
                      <div 
                        key={idx} 
                        className="grid grid-cols-3 gap-3 py-2 px-3 rounded-md hover:bg-primary/5 transition-colors border-b border-border/30 last:border-0"
                      >
                        <div>
                          <p className="text-xs uppercase text-muted-foreground mb-1">PRODUCT</p>
                          <p className="text-sm font-medium text-foreground">{product.name}</p>
                        </div>
                        <div>
                          <p className="text-xs uppercase text-muted-foreground mb-1">DATE</p>
                          <p className="text-sm font-medium text-foreground">{product.date}</p>
                        </div>
                        <div>
                          <p className="text-xs uppercase text-muted-foreground mb-1">PRICE LIST LINK</p>
                          <a 
                            href={product.link} 
                            className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1"
                          >
                            View
                          </a>
                        </div>
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

export default CompanyPriceList;
