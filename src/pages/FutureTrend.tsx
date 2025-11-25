import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { FileDown, Target } from "lucide-react";
import { motion } from "framer-motion";
import futureTrendsImg from "@/assets/future-trends.jpg";

const FutureTrend = () => {
  const [selectedMonth, setSelectedMonth] = useState("January");
  const [selectedYear, setSelectedYear] = useState("2024");

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const years = ["2024", "2025"];

  const trendData = [
    {
      title: "PP Market Price Forecast Q1 2024",
      description: "Comprehensive analysis of polypropylene market trends showing expected 3-5% price increase driven by rising feedstock costs and strong downstream demand from automotive and packaging sectors.",
      date: "January 15, 2024"
    },
    {
      title: "HDPE Supply-Demand Analysis",
      description: "High-density polyethylene market outlook indicating supply tightness in Asia-Pacific region with projected price stability through first quarter amid balanced supply-demand dynamics.",
      date: "January 10, 2024"
    },
    {
      title: "PVC Industry Outlook 2024",
      description: "Polyvinyl chloride market forecast highlighting construction sector recovery and infrastructure investments supporting steady demand growth across major global markets.",
      date: "January 8, 2024"
    },
    {
      title: "LDPE Global Trade Patterns",
      description: "Low-density polyethylene international trade analysis revealing shifting supply chains and emerging market opportunities in Southeast Asian packaging industries.",
      date: "January 5, 2024"
    },
    {
      title: "PET Recycling Market Trends",
      description: "Polyethylene terephthalate recycling sector growth forecast showing increased investment in circular economy initiatives and sustainable packaging solutions.",
      date: "January 3, 2024"
    },
    {
      title: "PS Market Dynamics Review",
      description: "Polystyrene market assessment covering raw material price volatility and demand fluctuations in food packaging and consumer electronics applications.",
      date: "December 28, 2023"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative h-80 bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${futureTrendsImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-accent-orange/85" />
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
              <Target className="h-5 w-5 text-white" />
              <span className="text-sm font-semibold text-white tracking-wide">Market Forecasting</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4 drop-shadow-2xl">
              Future Trend
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Expert polymer market forecasts, price predictions, and trend analysis for informed decision-making
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="container max-w-7xl mx-auto px-4 py-12">
        {/* Header with Month/Year Selection */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <h2 className="text-3xl font-bold text-foreground">Future Trend Reports</h2>
            <div className="flex gap-4">
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
          </div>

          <Card className="border-2 border-primary/20 shadow-xl">
            <CardContent className="p-6">
              <div className="space-y-6">
                {trendData.map((trend, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start justify-between gap-4 pb-6 border-b border-border last:border-b-0 last:pb-0"
                  >
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-2">
                        {trend.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2 leading-relaxed">
                        {trend.description}
                      </p>
                      <p className="text-xs text-muted-foreground">{trend.date}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="flex-shrink-0 hover:bg-primary/10"
                      onClick={() => window.print()}
                    >
                      <FileDown className="h-5 w-5 text-primary" />
                    </Button>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default FutureTrend;
