import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const PricePrediction = () => {
  const [selectedMonth, setSelectedMonth] = useState("January");
  const [selectedYear, setSelectedYear] = useState("2024");

  const predictionData = [
    {
      polymer: "PP (Polypropylene)",
      currentPrice: "94.5",
      predictedPrice: "96.0",
      trend: "up",
      confidence: "High"
    },
    {
      polymer: "HDPE (High-Density Polyethylene)",
      currentPrice: "92.0",
      predictedPrice: "91.0",
      trend: "down",
      confidence: "Medium"
    },
    {
      polymer: "LLDPE (Linear Low-Density PE)",
      currentPrice: "91.5",
      predictedPrice: "93.5",
      trend: "up",
      confidence: "High"
    },
    {
      polymer: "LDPE (Low-Density PE)",
      currentPrice: "95.0",
      predictedPrice: "94.5",
      trend: "down",
      confidence: "Medium"
    },
    {
      polymer: "PVC (Polyvinyl Chloride)",
      currentPrice: "88.0",
      predictedPrice: "89.5",
      trend: "up",
      confidence: "High"
    },
    {
      polymer: "PET (Polyethylene Terephthalate)",
      currentPrice: "97.0",
      predictedPrice: "98.5",
      trend: "up",
      confidence: "High"
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
              <h1 className="text-2xl sm:text-3xl font-bold text-primary">Price Prediction</h1>
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
              <TrendingUp className="h-7 w-7 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Market Price Predictions
              </h2>
              <p className="text-sm text-muted-foreground mt-1">Forecast for next month polymer prices</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {predictionData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="border-2 border-border/50 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-bold text-lg text-foreground">{item.polymer}</h3>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Current</span>
                      <span className="text-base font-bold text-foreground">₹{item.currentPrice}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Predicted</span>
                      <span className={`text-base font-bold ${item.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                        ₹{item.predictedPrice}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center pt-2 border-t border-border">
                      <span className="text-sm text-muted-foreground">Confidence</span>
                      <span className="text-sm font-semibold text-primary">{item.confidence}</span>
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

export default PricePrediction;
