import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { FileDown, Target, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import futureTrendsImg from "@/assets/future-trends.jpg";

const FutureTrend = () => {
  const [selectedMonth, setSelectedMonth] = useState("January");
  const [selectedYear, setSelectedYear] = useState("2024");
  const [selectedPolymer, setSelectedPolymer] = useState("PP");

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const years = ["2024", "2025"];
  const polymerTabs = [
    "PP",
    "PE",
    "PVC",
    "PET",
    "PS",
    "ABS",
    "EVA",
    "PC",
    "SAN",
    "Nylon 6 & 6-6",
    "PBT",
    "POM",
    "Polyester",
    "PMMA",
    "BOPP Film"
  ];

  const trendReports = [
    {
      title: "Week Closed January 18th - 24th of Jan, 2024",
      date: "January 24, 2024",
      trends: [
        {
          polymer: "PP (Polypropylene)",
          description: "Prices remained stable across major markets with slight uptick in injection molding grades. Middle East producers maintained firm offers while Asian markets showed moderate demand from automotive sector."
        },
        {
          polymer: "HDPE (High-Density Polyethylene)",
          description: "Film and blow molding grades witnessed price increases of $20-30/MT in Asian markets. Supply tightness from key producers in Saudi Arabia and UAE supporting firm price sentiment."
        },
        {
          polymer: "LLDPE (Linear Low-Density Polyethylene)",
          description: "Steady demand from packaging sector keeping prices firm. Indian market showing resilience with increased imports from Middle East and Southeast Asian suppliers."
        },
        {
          polymer: "PVC (Polyvinyl Chloride)",
          description: "Construction grade PVC prices softened by $15-25/MT due to seasonal slowdown. However, long-term outlook remains positive with infrastructure projects pipeline."
        }
      ]
    },
    {
      title: "Week Closed January 11th - 17th of Jan, 2024",
      date: "January 17, 2024",
      trends: [
        {
          polymer: "LDPE (Low-Density Polyethylene)",
          description: "Film grade LDPE seeing strong demand from flexible packaging industry. Prices firmed up by $25-35/MT across Asian and Middle Eastern markets."
        },
        {
          polymer: "PET (Polyethylene Terephthalate)",
          description: "Bottle grade PET prices remained under pressure due to oversupply situation. Recycled PET gaining market share with growing sustainability focus."
        },
        {
          polymer: "PS (Polystyrene)",
          description: "General purpose polystyrene witnessing stable demand from disposable food packaging sector. Styrene monomer prices influencing overall market sentiment."
        }
      ]
    },
    {
      title: "Week Closed January 4th - 10th of Jan, 2024",
      date: "January 10, 2024",
      trends: [
        {
          polymer: "ABS (Acrylonitrile Butadiene Styrene)",
          description: "Electronic and automotive grade ABS maintaining stable pricing. Asian producers running at high capacity utilization supporting balanced supply-demand dynamics."
        },
        {
          polymer: "Engineering Polymers",
          description: "Specialty grades including PA, PC, and POM showing firm pricing trends. Strong demand from automotive and electrical industries driving market sentiment."
        },
        {
          polymer: "PP (Polypropylene)",
          description: "Raffia and BOPP film grades witnessed price corrections of $10-20/MT in Indian subcontinent. Feedstock propylene prices declining influencing derivative markets."
        }
      ]
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

      {/* Polymer Selection Section - Enhanced Design */}
      <section className="bg-background border-y border-border py-5">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
            {/* Polymer Type Badges - Two Row Layout */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2">
                {polymerTabs.slice(0, 12).map((polymer) => (
                  <Button
                    key={polymer}
                    onClick={() => setSelectedPolymer(polymer)}
                    variant={selectedPolymer === polymer ? "default" : "outline"}
                    size="sm"
                    className={`rounded-full px-4 h-8 font-medium text-sm transition-all ${
                      selectedPolymer === polymer
                        ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm"
                        : "bg-background border-border text-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    {polymer}
                  </Button>
                ))}
                {/* Second Row */}
                <div className="w-full" />
                {polymerTabs.slice(12).map((polymer) => (
                  <Button
                    key={polymer}
                    onClick={() => setSelectedPolymer(polymer)}
                    variant={selectedPolymer === polymer ? "default" : "outline"}
                    size="sm"
                    className={`rounded-full px-4 h-8 font-medium text-sm transition-all ${
                      selectedPolymer === polymer
                        ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm"
                        : "bg-background border-border text-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    {polymer}
                  </Button>
                ))}
              </div>
            </div>

            {/* Year and Month Filters - Aligned Right */}
            <div className="flex gap-2 flex-shrink-0 lg:self-start">
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="w-24 h-8 border-border bg-background rounded-md text-sm font-medium">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-card border-border z-[100]">
                  {years.map((year) => (
                    <SelectItem 
                      key={year} 
                      value={year}
                      className="hover:bg-accent focus:bg-accent cursor-pointer"
                    >
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                <SelectTrigger className="w-32 h-8 border-border bg-background rounded-md text-sm font-medium">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-card border-border z-[100]">
                  {months.map((month) => (
                    <SelectItem 
                      key={month} 
                      value={month}
                      className="hover:bg-accent focus:bg-accent cursor-pointer"
                    >
                      {month}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Trend Reports Section */}
      <section className="container max-w-7xl mx-auto px-4 pb-12">
        <div className="space-y-6">
          {trendReports.map((report, reportIndex) => (
            <motion.div
              key={reportIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reportIndex * 0.1 }}
            >
              <Card className="border border-border overflow-hidden shadow-md">
                {/* Red Header */}
                <div className="bg-primary px-6 py-4 flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">
                    {report.title}
                  </h3>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="bg-white hover:bg-white/90 text-primary gap-2"
                    onClick={() => window.print()}
                  >
                    <FileDown className="h-4 w-4" />
                    Get More Info
                  </Button>
                </div>

                {/* Content */}
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {report.trends.map((trend, trendIndex) => (
                      <div key={trendIndex} className="pb-4 border-b border-border last:border-b-0 last:pb-0">
                        <h4 className="font-bold text-foreground mb-2">
                          {trend.polymer}:
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {trend.description}
                        </p>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-4 pt-4 border-t border-border">
                    Report Date: {report.date}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FutureTrend;
