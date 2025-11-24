import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Download, TrendingUp, Calendar, FileText, Target } from "lucide-react";
import { motion } from "framer-motion";
import futureTrendsImg from "@/assets/future-trends.jpg";
import marketAnalysisImg from "@/assets/market-analysis.jpg";

const FutureTrend = () => {
  const [selectedPolymer, setSelectedPolymer] = useState("PP");
  const [selectedMonth, setSelectedMonth] = useState("January");
  const [selectedYear, setSelectedYear] = useState("2024");

  const polymers = ["PP", "PE", "PVC", "PET", "PS", "ABS"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const years = ["2024", "2025"];

  const reports = [
    {
      title: "Global PP Market Outlook",
      date: "January 15, 2024",
      sections: [
        {
          title: "Market Overview",
          content: "The global polypropylene market shows robust growth momentum with increasing demand from automotive and packaging sectors. Supply constraints in Asia-Pacific region continue to support price stability."
        },
        {
          title: "Price Forecast",
          content: "We expect PP prices to trend upward by 3-5% in Q1 2024, driven by rising feedstock costs and strong downstream demand. Regional variations may apply based on local supply-demand dynamics."
        },
        {
          title: "Key Market Drivers",
          content: "Major factors include: crude oil price movements, naphtha cracker maintenance schedules, growing packaging industry demand, and automotive sector recovery in key markets."
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

      {/* Content Section */}
      <section className="container max-w-7xl mx-auto px-4 py-12">
        {/* Filter Section */}
        <Card className="mb-8 border-2 border-primary/20 shadow-xl">
          <CardContent className="p-6">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                <span className="font-semibold text-foreground">Select Report Parameters:</span>
              </div>
              
              {/* Polymer Buttons */}
              <div className="flex flex-wrap gap-2">
                {polymers.map((polymer) => (
                  <Button
                    key={polymer}
                    variant={selectedPolymer === polymer ? "default" : "outline"}
                    onClick={() => setSelectedPolymer(polymer)}
                    className={selectedPolymer === polymer ? "bg-primary" : "border-primary/30 hover:border-primary"}
                  >
                    {polymer}
                  </Button>
                ))}
              </div>

              <div className="ml-auto flex gap-4">
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
          </CardContent>
        </Card>

        {/* Trend Reports */}
        <div className="space-y-8">
          {reports.map((report, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="border-2 border-primary/20 shadow-2xl bg-card">

                
                <CardHeader className="border-b border-border pb-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-4 bg-primary/10 rounded-lg">
                        <TrendingUp className="h-10 w-10 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-3xl font-bold text-foreground mb-2">
                          {report.title}
                        </CardTitle>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm">{report.date}</span>
                        </div>
                      </div>
                    </div>
                    <Button className="bg-primary hover:bg-primary-dark">
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </Button>
                  </div>
                </CardHeader>

                <CardContent className="pt-8">
                  <div className="space-y-8">
                    {report.sections.map((section, sectionIndex) => (
                      <motion.div
                        key={sectionIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: sectionIndex * 0.15 }}
                        className="bg-muted/30 rounded-lg p-6 border border-border hover:border-primary/50 transition-all"
                      >
                        <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          {section.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {section.content}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Key Metrics */}
                  <div className="mt-8 grid md:grid-cols-3 gap-6">
                    <Card className="bg-primary/5 border-primary/30">
                      <CardContent className="p-6">
                        <p className="text-sm text-muted-foreground mb-2">Price Forecast</p>
                        <p className="text-3xl font-black text-primary">+3-5%</p>
                        <p className="text-xs text-muted-foreground mt-1">Q1 2024</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-success/5 border-success/30">
                      <CardContent className="p-6">
                        <p className="text-sm text-muted-foreground mb-2">Demand Growth</p>
                        <p className="text-3xl font-black text-success">+6.2%</p>
                        <p className="text-xs text-muted-foreground mt-1">YoY</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-accent-orange/5 border-accent-orange/30">
                      <CardContent className="p-6">
                        <p className="text-sm text-muted-foreground mb-2">Market Outlook</p>
                        <p className="text-3xl font-black text-accent-orange">Bullish</p>
                        <p className="text-xs text-muted-foreground mt-1">Next Quarter</p>
                      </CardContent>
                    </Card>
                  </div>
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
