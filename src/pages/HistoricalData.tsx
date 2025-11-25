import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Calendar, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import marketAnalysisImg from "@/assets/market-analysis.jpg";
import refineryHeroImg from "@/assets/refinery-hero.jpg";

const HistoricalData = () => {
  const [selectedYear, setSelectedYear] = useState("2023");
  const [timeFrame1, setTimeFrame1] = useState("Yearly");
  const [timeFrame2, setTimeFrame2] = useState("Yearly");

  const years = ["2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023"];
  const polymers = ["PP", "HDPE", "LDPE", "LLDPE", "PVC"];

  const yearlyChartData = [
    { year: '2016', value: 12 },
    { year: '2017', value: 18 },
    { year: '2018', value: 22 },
    { year: '2019', value: 19 },
    { year: '2020', value: 15 },
    { year: '2021', value: 24 },
    { year: '2022', value: 28 },
    { year: '2023', value: 26 },
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

          {/* PP Tab */}
          <TabsContent value="PP">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                {/* First Chart */}
                <Card className="border-2 border-primary/20 shadow-xl bg-card">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg font-semibold">CIF NS, MUMBAI</CardTitle>
                      <Select value={timeFrame1} onValueChange={setTimeFrame1}>
                        <SelectTrigger className="w-28 h-8 border-primary/30">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-background z-50">
                          <SelectItem value="Yearly">Yearly</SelectItem>
                          <SelectItem value="Monthly">Monthly</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <AreaChart data={yearlyChartData}>
                        <defs>
                          <linearGradient id="colorValue1" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.05}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                        <XAxis 
                          dataKey="year" 
                          stroke="hsl(var(--muted-foreground))"
                          style={{ fontSize: '11px' }}
                          tickLine={false}
                        />
                        <YAxis 
                          stroke="hsl(var(--muted-foreground))"
                          style={{ fontSize: '11px' }}
                          tickLine={false}
                          axisLine={false}
                        />
                        <Tooltip 
                          contentStyle={{
                            backgroundColor: 'hsl(var(--card))',
                            border: '1px solid hsl(var(--border))',
                            borderRadius: '8px'
                          }}
                        />
                        <Area 
                          type="monotone" 
                          dataKey="value" 
                          stroke="hsl(var(--primary))" 
                          strokeWidth={2}
                          fill="url(#colorValue1)"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* Second Chart */}
                <Card className="border-2 border-primary/20 shadow-xl bg-card">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg font-semibold">CIF NS, MUMBAI</CardTitle>
                      <Select value={timeFrame2} onValueChange={setTimeFrame2}>
                        <SelectTrigger className="w-28 h-8 border-primary/30">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-background z-50">
                          <SelectItem value="Yearly">Yearly</SelectItem>
                          <SelectItem value="Monthly">Monthly</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <AreaChart data={yearlyChartData}>
                        <defs>
                          <linearGradient id="colorValue2" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.05}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                        <XAxis 
                          dataKey="year" 
                          stroke="hsl(var(--muted-foreground))"
                          style={{ fontSize: '11px' }}
                          tickLine={false}
                        />
                        <YAxis 
                          stroke="hsl(var(--muted-foreground))"
                          style={{ fontSize: '11px' }}
                          tickLine={false}
                          axisLine={false}
                        />
                        <Tooltip 
                          contentStyle={{
                            backgroundColor: 'hsl(var(--card))',
                            border: '1px solid hsl(var(--border))',
                            borderRadius: '8px'
                          }}
                        />
                        <Area 
                          type="monotone" 
                          dataKey="value" 
                          stroke="hsl(var(--primary))" 
                          strokeWidth={2}
                          fill="url(#colorValue2)"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>
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
                <div className="grid md:grid-cols-2 gap-6">
                  {/* First Chart */}
                  <Card className="border-2 border-primary/20 shadow-xl bg-card">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg font-semibold">CIF NS, MUMBAI</CardTitle>
                        <Select value={timeFrame1} onValueChange={setTimeFrame1}>
                          <SelectTrigger className="w-28 h-8 border-primary/30">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-background z-50">
                            <SelectItem value="Yearly">Yearly</SelectItem>
                            <SelectItem value="Monthly">Monthly</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <AreaChart data={yearlyChartData}>
                          <defs>
                            <linearGradient id={`colorValue1-${polymer}`} x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                              <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.05}/>
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                          <XAxis 
                            dataKey="year" 
                            stroke="hsl(var(--muted-foreground))"
                            style={{ fontSize: '11px' }}
                            tickLine={false}
                          />
                          <YAxis 
                            stroke="hsl(var(--muted-foreground))"
                            style={{ fontSize: '11px' }}
                            tickLine={false}
                            axisLine={false}
                          />
                          <Tooltip 
                            contentStyle={{
                              backgroundColor: 'hsl(var(--card))',
                              border: '1px solid hsl(var(--border))',
                              borderRadius: '8px'
                            }}
                          />
                          <Area 
                            type="monotone" 
                            dataKey="value" 
                            stroke="hsl(var(--primary))" 
                            strokeWidth={2}
                            fill={`url(#colorValue1-${polymer})`}
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>

                  {/* Second Chart */}
                  <Card className="border-2 border-primary/20 shadow-xl bg-card">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg font-semibold">CIF NS, MUMBAI</CardTitle>
                        <Select value={timeFrame2} onValueChange={setTimeFrame2}>
                          <SelectTrigger className="w-28 h-8 border-primary/30">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-background z-50">
                            <SelectItem value="Yearly">Yearly</SelectItem>
                            <SelectItem value="Monthly">Monthly</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <AreaChart data={yearlyChartData}>
                          <defs>
                            <linearGradient id={`colorValue2-${polymer}`} x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                              <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.05}/>
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                          <XAxis 
                            dataKey="year" 
                            stroke="hsl(var(--muted-foreground))"
                            style={{ fontSize: '11px' }}
                            tickLine={false}
                          />
                          <YAxis 
                            stroke="hsl(var(--muted-foreground))"
                            style={{ fontSize: '11px' }}
                            tickLine={false}
                            axisLine={false}
                          />
                          <Tooltip 
                            contentStyle={{
                              backgroundColor: 'hsl(var(--card))',
                              border: '1px solid hsl(var(--border))',
                              borderRadius: '8px'
                            }}
                          />
                          <Area 
                            type="monotone" 
                            dataKey="value" 
                            stroke="hsl(var(--primary))" 
                            strokeWidth={2}
                            fill={`url(#colorValue2-${polymer})`}
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </section>
    </div>
  );
};

export default HistoricalData;
