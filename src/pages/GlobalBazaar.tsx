import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageCircle } from "lucide-react";

const GlobalBazaar = () => {
  const [selectedCountry, setSelectedCountry] = useState("USA");
  const [selectedMonth, setSelectedMonth] = useState("March");
  const [selectedYear, setSelectedYear] = useState("2024");

  const countries = [
    "USA", "EUROPE", "China", "India", "Iran", "Pakistan", 
    "Nepal", "Sri Lanka", "Bangladesh", "Other Asian Nation", 
    "KSA", "Turkey", "Egypt"
  ];

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const years = ["2024", "2023", "2022", "2021"];

  const bazaarContent = {
    USA: `The US polymer market showed resilience in March 2024, with steady demand from automotive and packaging sectors. 
    
Polypropylene (PP): PP prices remained relatively stable with modest gains of $20-30/mt across injection and film grades. Supply tightness from planned maintenance at several Gulf Coast facilities supported pricing. Demand from automotive applications remained robust despite broader economic headwinds.

High Density Polyethylene (HDPE): HDPE markets firmed by $30-40/mt on the back of stronger export demand and constrained domestic availability. Blow molding grades led the price increases, while injection molding grades showed more moderate gains.

Linear Low Density Polyethylene (LLDPE): LLDPE prices edged higher by $25-35/mt, supported by healthy film sector demand. The domestic supply-demand balance remained relatively tight, underpinning price stability.`,
    
    EUROPE: `European polymer markets navigated mixed conditions in March, balancing supply constraints with cautious buyer sentiment.

Polypropylene (PP): European PP prices stabilized after previous declines, with spot differentials narrowing. Demand from automotive and consumer goods remained subdued, but supply discipline from producers prevented further erosion.

HDPE & LLDPE: Polyethylene markets showed divergent trends, with HDPE experiencing modest gains while LLDPE remained under pressure from import competition and slower packaging demand.`,
    
    China: `Chinese polymer markets entered Q2 with cautious optimism, supported by improved downstream operating rates and policy support for manufacturing.

PP: Domestic PP prices firmed on supply tightness and better downstream demand. Import volumes declined as domestic-import price arbitrage narrowed.

HDPE: HDPE markets strengthened on restocking activity and improved sentiment in the pipe and film sectors.`,
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="gradient-hero text-white py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Global Bazaar</h1>
          <p className="text-xl text-white/90">
            Comprehensive polymer market intelligence across global regions
          </p>
        </div>
      </section>

      <div className="container max-w-7xl mx-auto py-12 px-4">
        {/* Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
              {/* Country Selection */}
              <div className="flex-1 w-full">
                <label className="text-sm font-medium mb-2 block">Select Region</label>
                <div className="flex flex-wrap gap-2">
                  {countries.map((country) => (
                    <Button
                      key={country}
                      variant={selectedCountry === country ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCountry(country)}
                      className={selectedCountry === country ? "bg-primary" : ""}
                    >
                      {country}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Date Selection */}
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

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Market Content */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">
                  {selectedCountry} Bazaar - {selectedMonth} {selectedYear}
                </h2>
                <div className="prose max-w-none">
                  <div className="whitespace-pre-line text-muted-foreground">
                    {bazaarContent[selectedCountry as keyof typeof bazaarContent] || bazaarContent.USA}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* WhatsApp Chatbot */}
          <div>
            <Card className="sticky top-20 bg-green-50 border-green-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Auto WhatsApp Chatbot</h3>
                    <p className="text-xs text-muted-foreground">Mon-Fri: 9:30am - 7pm</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 mb-4 border">
                  <p className="font-semibold mb-2">Contact Number:</p>
                  <p className="text-xl font-bold text-green-600">+91 9374624365</p>
                </div>

                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold mb-1">Commands:</p>
                    <div className="bg-white rounded p-3 border space-y-2">
                      <p className="text-xs">• Send <span className="font-mono font-bold">PP</span> for Polypropylene prices</p>
                      <p className="text-xs">• Send <span className="font-mono font-bold">HDPE</span> for HDPE prices</p>
                      <p className="text-xs">• Send <span className="font-mono font-bold">NEWS</span> for latest news</p>
                      <p className="text-xs">• Send <span className="font-mono font-bold">HIST</span> for historical data</p>
                    </div>
                  </div>

                  <div className="bg-white rounded p-3 border">
                    <p className="font-semibold mb-1">Example:</p>
                    <p className="text-xs text-muted-foreground">
                      Send "PP INDIA" to get Indian PP prices instantly
                    </p>
                  </div>
                </div>

                <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Start Chat on WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalBazaar;
