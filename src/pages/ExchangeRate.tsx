import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DollarSign } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const ExchangeRate = () => {
  const [selectedMonth, setSelectedMonth] = useState("January");
  const [selectedYear, setSelectedYear] = useState("2024");

  const exchangeData = [
    { date: "Mon 18-04-2025", type: "Buy", rate: "83.45", change: "+0.15" },
    { date: "Fri 15-04-2025", type: "Sell", rate: "83.30", change: "-0.25" },
    { date: "Thu 14-04-2025", type: "Buy", rate: "83.55", change: "+0.10" },
    { date: "Wed 13-04-2025", type: "Sell", rate: "83.45", change: "-0.05" },
    { date: "Tue 12-04-2025", type: "Buy", rate: "83.50", change: "+0.20" },
    { date: "Mon 11-04-2025", type: "Sell", rate: "83.30", change: "-0.15" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <div className="bg-white border-b border-border">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-primary">US$-INR Exchange Rate</h1>
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
              <DollarSign className="h-7 w-7 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                US Dollar to INR Custom Rates
              </h2>
              <p className="text-sm text-muted-foreground mt-1">Daily exchange rate fluctuations</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {exchangeData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="border-2 border-border/50 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-primary via-primary to-primary/90 text-white px-5 py-3 text-center">
                    <p className="font-bold text-sm">{item.date}</p>
                  </div>
                  
                  <div className="p-6 bg-gradient-to-b from-background to-muted/5">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <p className="text-xs uppercase text-muted-foreground mb-2">Transaction Type</p>
                        <p className="text-lg font-bold text-primary">{item.type}</p>
                      </div>
                      
                      <div className="text-center">
                        <p className="text-xs uppercase text-muted-foreground mb-2">Exchange Rate</p>
                        <p className="text-2xl font-bold text-primary">₹{item.rate}</p>
                      </div>
                      
                      <div className="text-center">
                        <p className="text-xs uppercase text-muted-foreground mb-2">Daily Change</p>
                        <p className={`text-lg font-bold ${item.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                          {item.change}
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

export default ExchangeRate;
