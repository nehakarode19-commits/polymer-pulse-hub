import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Download, TrendingUp, TrendingDown, Minus } from "lucide-react";

const FutureTrend = () => {
  const [selectedPolymer, setSelectedPolymer] = useState("PP");
  const [selectedMonth, setSelectedMonth] = useState("March");
  const [selectedYear, setSelectedYear] = useState("2024");

  const polymers = ["PP", "PE", "PVC", "PET", "PS", "ABS", "EVA", "PC/SAN"];
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const years = ["2024", "2023", "2022"];

  const reports = [
    {
      title: "Weekly Report & Future Trend - Week 3, March 2024",
      date: "March 15, 2024",
      content: {
        usaBazar: "US PP markets expected to firm in short term on supply tightness from maintenance activities. Demand outlook remains positive with automotive sector recovery.",
        europeanBazar: "European markets likely to see modest gains amid supply constraints. Import competition from Middle East expected to limit upside.",
        turkeyBazar: "Turkish PP imports trending higher. Domestic producers maintaining discipline. Short-term outlook stable to firm.",
        indianBazar: "Indian domestic PP likely to edge higher on raw material cost push. Import parity improving. Downstream demand from automotive and FMCG sectors supportive.",
        latestOffers: "Latest CFR offers: PP Film $1,180-1,200/mt, PP Injection $1,160-1,180/mt, PP Raffia $1,150-1,170/mt.",
        lastRevision: "Major producers announced $20-30/mt increase effective March 1st. Most downstream players accepting increases with minimal resistance.",
        bazaarPulse: "Overall sentiment cautiously optimistic. Supply-demand fundamentals supportive. Feedstock costs trending upward.",
        procurementOpinion: "Recommended strategy: Cover near-term requirements. Maintain flexibility for spot purchases. Monitor feedstock developments closely.",
      },
    },
    {
      title: "Weekly Report & Future Trend - Week 2, March 2024",
      date: "March 8, 2024",
      content: {
        usaBazar: "US markets steady after previous gains. Buyers showing resistance to further increases. Supply situation improving gradually.",
        europeanBazar: "European PP markets consolidating recent gains. Demand recovery pace slower than anticipated.",
        turkeyBazar: "Turkish market showing signs of stabilization after recent volatility.",
        indianBazar: "Indian markets firm on supply tightness. Multiple producers reducing allocations.",
        latestOffers: "Latest CFR offers: PP Film $1,170-1,190/mt, PP Injection $1,150-1,170/mt.",
        lastRevision: "Select producers announced $10-20/mt increases. Market acceptance mixed.",
        bazaarPulse: "Sentiment turning cautious after recent rally. Buyers seeking price stabilization.",
        procurementOpinion: "Book minimum requirements. Wait for clearer direction before major commitments.",
      },
    },
    {
      title: "Weekly Report & Future Trend - Week 1, March 2024",
      date: "March 1, 2024",
      content: {
        usaBazar: "US PP markets starting March on firm note. Supply tightness driving prices higher.",
        europeanBazar: "European markets seeing improved sentiment. Supply-demand balance tightening.",
        turkeyBazar: "Turkish PP showing resilience. Import volumes declining.",
        indianBazar: "Indian domestic PP prices rallying on feedstock cost push and supply constraints.",
        latestOffers: "Latest CFR offers: PP Film $1,160-1,180/mt, PP Injection $1,140-1,160/mt.",
        lastRevision: "Major domestic producers increased prices by $30-40/mt from February levels.",
        bazaarPulse: "Market sentiment bullish. Supply fundamentals supportive for higher prices.",
        procurementOpinion: "Secure volumes for Q2 requirements. Prices likely to trend higher in near term.",
      },
    },
  ];

  const getTrendIcon = (text: string) => {
    if (text.includes("higher") || text.includes("increase") || text.includes("firm")) {
      return <TrendingUp className="h-5 w-5 text-green-600" />;
    } else if (text.includes("lower") || text.includes("decrease") || text.includes("decline")) {
      return <TrendingDown className="h-5 w-5 text-red-600" />;
    }
    return <Minus className="h-5 w-5 text-muted-foreground" />;
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="gradient-hero text-white py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Future Trend</h1>
          <p className="text-xl text-white/90">
            Expert forecasts and trend analysis for polymer markets worldwide
          </p>
        </div>
      </section>

      <div className="container max-w-7xl mx-auto py-12 px-4">
        {/* Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4 items-end">
              <div className="flex-1">
                <label className="text-sm font-medium mb-2 block">Select Polymer</label>
                <div className="flex flex-wrap gap-2">
                  {polymers.map((polymer) => (
                    <Button
                      key={polymer}
                      variant={selectedPolymer === polymer ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedPolymer(polymer)}
                      className={selectedPolymer === polymer ? "bg-primary" : ""}
                    >
                      {polymer}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <div>
                  <label className="text-sm font-medium mb-2 block">Month</label>
                  <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                    <SelectTrigger className="w-36">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {months.map((month) => (
                        <SelectItem key={month} value={month}>
                          {month}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Year</label>
                  <Select value={selectedYear} onValueChange={setSelectedYear}>
                    <SelectTrigger className="w-28">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {years.map((year) => (
                        <SelectItem key={year} value={year}>
                          {year}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Reports List */}
        <div className="space-y-6">
          {reports.map((report, index) => (
            <Card key={index} className="border-l-4 border-l-primary hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{report.title}</h2>
                    <div className="flex items-center gap-3">
                      <Badge variant="secondary">{selectedPolymer}</Badge>
                      <p className="text-sm text-muted-foreground">{report.date}</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="shrink-0">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                </div>

                <div className="grid gap-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        {getTrendIcon(report.content.usaBazar)}
                        <div>
                          <h3 className="font-bold mb-1">USA Bazar</h3>
                          <p className="text-sm text-muted-foreground">{report.content.usaBazar}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        {getTrendIcon(report.content.europeanBazar)}
                        <div>
                          <h3 className="font-bold mb-1">European Bazar</h3>
                          <p className="text-sm text-muted-foreground">{report.content.europeanBazar}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        {getTrendIcon(report.content.turkeyBazar)}
                        <div>
                          <h3 className="font-bold mb-1">Turkey Bazar</h3>
                          <p className="text-sm text-muted-foreground">{report.content.turkeyBazar}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        {getTrendIcon(report.content.indianBazar)}
                        <div>
                          <h3 className="font-bold mb-1">Indian Bazar</h3>
                          <p className="text-sm text-muted-foreground">{report.content.indianBazar}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <h3 className="font-bold mb-1">Latest Overseas Offers</h3>
                        <p className="text-sm text-muted-foreground">{report.content.latestOffers}</p>
                      </div>

                      <div>
                        <h3 className="font-bold mb-1">Last Rate Revision</h3>
                        <p className="text-sm text-muted-foreground">{report.content.lastRevision}</p>
                      </div>

                      <div>
                        <h3 className="font-bold mb-1">Bazaar Pulse</h3>
                        <p className="text-sm text-muted-foreground">{report.content.bazaarPulse}</p>
                      </div>

                      <div className="bg-primary/5 p-4 rounded-lg border-l-2 border-primary">
                        <h3 className="font-bold mb-1 text-primary">Procurement Opinion</h3>
                        <p className="text-sm text-muted-foreground">{report.content.procurementOpinion}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FutureTrend;
