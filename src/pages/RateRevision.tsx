import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TrendingUp, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const RateRevision = () => {
  const [selectedMonth, setSelectedMonth] = useState("January");
  const [selectedYear, setSelectedYear] = useState("2024");

  const revisionData = [
    {
      company: "IOCL",
      grade: "PP FILM",
      priceChange: "+2.5",
      currentPrice: "94.5"
    },
    {
      company: "Reliance Industries",
      grade: "HDPE BLOW",
      priceChange: "-1.0",
      currentPrice: "92.0"
    },
    {
      company: "Haldia Petrochemicals",
      grade: "LLDPE INJ.MLDG",
      priceChange: "+3.0",
      currentPrice: "91.5"
    },
    {
      company: "Gail India",
      grade: "PP IM-HMEL",
      priceChange: "+1.5",
      currentPrice: "93.5"
    },
    {
      company: "ONGC Petro",
      grade: "LDPE LAMI",
      priceChange: "-0.5",
      currentPrice: "95.0"
    },
    {
      company: "Bharat Petroleum",
      grade: "Engineering Material",
      priceChange: "+2.0",
      currentPrice: "96.0"
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
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-primary">Rate Revision</h1>
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

      {/* Rate Revision Content */}
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Glass Morphism Header */}
        <div className="mb-10">
          <div className="flex items-center gap-4 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent backdrop-blur-sm border border-primary/20 rounded-2xl p-6 shadow-xl">
            <div className="p-3 bg-primary/20 backdrop-blur-md rounded-xl border border-primary/30 shadow-lg">
              <Calendar className="h-7 w-7 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Latest Price Revisions
              </h2>
              <p className="text-sm text-muted-foreground mt-1">Recent polymer price changes by company</p>
            </div>
          </div>
        </div>

        {/* Revision Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {revisionData.map((revision, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="border-2 border-border/50 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  {/* Card Header */}
                  <div className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-white px-5 py-4 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                    <h3 className="font-bold text-lg relative z-10 tracking-wide">{revision.company}</h3>
                  </div>
                  
                  {/* Card Body */}
                  <div className="p-5 space-y-4 bg-gradient-to-b from-background to-muted/5">
                    <div className="flex justify-between items-center py-2 px-2 rounded-md border-b border-border/50">
                      <span className="text-sm font-medium text-muted-foreground">Grade</span>
                      <span className="text-sm font-semibold text-foreground">{revision.grade}</span>
                    </div>
                    
                    <div className="flex justify-between items-center py-2 px-2 rounded-md border-b border-border/50">
                      <span className="text-sm font-medium text-muted-foreground">Current Price</span>
                      <span className="text-base font-bold text-primary">₹{revision.currentPrice}</span>
                    </div>
                    
                    <div className="flex justify-between items-center py-2 px-2 rounded-md bg-primary/5">
                      <span className="text-sm font-medium text-muted-foreground">Change</span>
                      <span className={`text-base font-bold flex items-center gap-1 ${
                        revision.priceChange.startsWith('+') ? 'text-green-600' : 'text-red-600'
                      }`}>
                        <TrendingUp className={`h-4 w-4 ${
                          revision.priceChange.startsWith('+') ? 'rotate-0' : 'rotate-180'
                        }`} />
                        {revision.priceChange}
                      </span>
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

export default RateRevision;
