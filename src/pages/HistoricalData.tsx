import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { TrendingUp, Calendar, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import marketAnalysisImg from "@/assets/market-analysis.jpg";
import refineryHeroImg from "@/assets/refinery-hero.jpg";

const HistoricalData = () => {
  const [selectedYear, setSelectedYear] = useState("2023");
  const [selectedGrade, setSelectedGrade] = useState("PP Homo");

  const years = ["2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023"];
  const polymers = ["PP", "HDPE", "LDPE", "LLDPE", "PVC"];
  const ppGrades = ["PP Homo", "PP Copo", "PP Random", "PP Impact"];

  const chartData = [
    { month: 'Jan', price: 1200, volume: 450 },
    { month: 'Feb', price: 1250, volume: 480 },
    { month: 'Mar', price: 1180, volume: 420 },
    { month: 'Apr', price: 1320, volume: 510 },
    { month: 'May', price: 1280, volume: 490 },
    { month: 'Jun', price: 1350, volume: 530 },
    { month: 'Jul', price: 1310, volume: 500 },
    { month: 'Aug', price: 1380, volume: 550 },
    { month: 'Sep', price: 1340, volume: 520 },
    { month: 'Oct', price: 1400, volume: 570 },
    { month: 'Nov', price: 1370, volume: 540 },
    { month: 'Dec', price: 1420, volume: 590 },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative h-80 bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${marketAnalysisImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-accent-orange/85" />
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
              <BarChart3 className="h-5 w-5 text-white" />
              <span className="text-sm font-semibold text-white tracking-wide">Historical Market Data</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4 drop-shadow-2xl">
              Historical Data
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Comprehensive historical polymer pricing trends and market analysis from 2016-2023
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="container max-w-7xl mx-auto px-4 py-12">
        {/* Year Filter */}
        <Card className="mb-8 border-2 border-primary/20 shadow-xl">
          <CardContent className="p-6">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <span className="font-semibold text-foreground">Select Year:</span>
              </div>
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="w-40 border-primary/30">
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
              <div className="ml-auto text-sm text-muted-foreground">
                Showing data for: <span className="font-bold text-primary">{selectedYear}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Polymer Tabs */}
        <Tabs defaultValue="PP" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 gap-2 bg-muted/50 p-2 h-auto">
            {polymers.map((polymer) => (
              <TabsTrigger
                key={polymer}
                value={polymer}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-semibold text-lg"
              >
                {polymer}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* PP Tab with Grade Selection */}
          <TabsContent value="PP">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Card className="mb-6 border-2 border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <span className="font-semibold text-foreground">Select PP Grade:</span>
                    <Select value={selectedGrade} onValueChange={setSelectedGrade}>
                      <SelectTrigger className="w-48 border-primary/30">
                        <SelectValue placeholder="Select grade" />
                      </SelectTrigger>
                      <SelectContent className="bg-background z-50">
                        {ppGrades.map((grade) => (
                          <SelectItem key={grade} value={grade}>
                            {grade}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              <Card 
                className="border-2 border-primary/20 shadow-2xl relative overflow-hidden"
                style={{
                  backgroundImage: `url(${refineryHeroImg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-background/98 to-background/95" />
                <CardHeader className="relative z-10">
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <TrendingUp className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">PP Price Trend - {selectedGrade}</h3>
                      <p className="text-sm text-muted-foreground font-normal">Year: {selectedYear}</p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis 
                        dataKey="month" 
                        stroke="hsl(var(--foreground))"
                        style={{ fontSize: '12px' }}
                      />
                      <YAxis 
                        stroke="hsl(var(--foreground))"
                        style={{ fontSize: '12px' }}
                      />
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: 'hsl(var(--card))',
                          border: '1px solid hsl(var(--border))',
                          borderRadius: '8px'
                        }}
                      />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="price" 
                        stroke="hsl(var(--primary))" 
                        strokeWidth={3}
                        name="Price (USD/MT)"
                        dot={{ fill: 'hsl(var(--primary))', r: 5 }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="volume" 
                        stroke="hsl(var(--accent-orange))" 
                        strokeWidth={3}
                        name="Volume (MT)"
                        dot={{ fill: 'hsl(var(--accent-orange))', r: 5 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>

                  <div className="mt-8 grid md:grid-cols-4 gap-4">
                    <Card className="bg-primary/5 border-primary/30">
                      <CardContent className="p-4">
                        <p className="text-sm text-muted-foreground mb-1">Avg Price</p>
                        <p className="text-2xl font-bold text-primary">$1,308</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-success/5 border-success/30">
                      <CardContent className="p-4">
                        <p className="text-sm text-muted-foreground mb-1">Year High</p>
                        <p className="text-2xl font-bold text-success">$1,420</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-destructive/5 border-destructive/30">
                      <CardContent className="p-4">
                        <p className="text-sm text-muted-foreground mb-1">Year Low</p>
                        <p className="text-2xl font-bold text-destructive">$1,180</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-accent-orange/5 border-accent-orange/30">
                      <CardContent className="p-4">
                        <p className="text-sm text-muted-foreground mb-1">Total Volume</p>
                        <p className="text-2xl font-bold text-accent-orange">6,150 MT</p>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Other Polymer Tabs */}
          {polymers.filter(p => p !== "PP").map((polymer) => (
            <TabsContent key={polymer} value={polymer}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Card 
                  className="border-2 border-primary/20 shadow-2xl relative overflow-hidden"
                  style={{
                    backgroundImage: `url(${refineryHeroImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-background/98 to-background/95" />
                  <CardHeader className="relative z-10">
                    <CardTitle className="flex items-center gap-3">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <TrendingUp className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{polymer} Price Trend</h3>
                        <p className="text-sm text-muted-foreground font-normal">Year: {selectedYear}</p>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <ResponsiveContainer width="100%" height={400}>
                      <LineChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                        <XAxis 
                          dataKey="month" 
                          stroke="hsl(var(--foreground))"
                          style={{ fontSize: '12px' }}
                        />
                        <YAxis 
                          stroke="hsl(var(--foreground))"
                          style={{ fontSize: '12px' }}
                        />
                        <Tooltip 
                          contentStyle={{
                            backgroundColor: 'hsl(var(--card))',
                            border: '1px solid hsl(var(--border))',
                            borderRadius: '8px'
                          }}
                        />
                        <Legend />
                        <Line 
                          type="monotone" 
                          dataKey="price" 
                          stroke="hsl(var(--primary))" 
                          strokeWidth={3}
                          name="Price (USD/MT)"
                          dot={{ fill: 'hsl(var(--primary))', r: 5 }}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="volume" 
                          stroke="hsl(var(--accent-orange))" 
                          strokeWidth={3}
                          name="Volume (MT)"
                          dot={{ fill: 'hsl(var(--accent-orange))', r: 5 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </section>
    </div>
  );
};

export default HistoricalData;
