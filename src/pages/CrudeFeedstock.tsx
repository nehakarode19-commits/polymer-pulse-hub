import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Factory, TrendingUp, Globe } from "lucide-react";
import { motion } from "framer-motion";
import refineryHeroImg from "@/assets/refinery-hero.jpg";
import chemicalPlantImg from "@/assets/chemical-plant.jpg";

const CrudeFeedstock = () => {
  const [selectedCountry, setSelectedCountry] = useState("USA");
  const [timeframe, setTimeframe] = useState("1M");

  const countries = ["USA", "Europe", "China", "Middle East", "India"];
  const products = ["CRUDE", "Naphtha", "Propylene", "Ethylene", "Styrene", "EDC", "VCM", "PTA", "MEG", "ACN", "VA"];

  const chartData = [
    { date: 'Week 1', price: 1200 },
    { date: 'Week 2', price: 1250 },
    { date: 'Week 3', price: 1180 },
    { date: 'Week 4', price: 1320 },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative h-80 bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${refineryHeroImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-accent-orange/85" />
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
              <Factory className="h-5 w-5 text-white" />
              <span className="text-sm font-semibold text-white tracking-wide">Feedstock Intelligence</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4 drop-shadow-2xl">
              Crude & Feedstock
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Real-time crude oil and feedstock pricing with performance tracking across global markets
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="container max-w-7xl mx-auto px-4 py-12">
        {/* Product Tabs */}
        <Tabs defaultValue="CRUDE" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 bg-muted/50 p-2 h-auto">
            {products.map((product) => (
              <TabsTrigger
                key={product}
                value={product}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-semibold"
              >
                {product}
              </TabsTrigger>
            ))}
          </TabsList>

          {products.map((product) => (
            <TabsContent key={product} value={product}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Card 
                  className="border-2 border-primary/20 shadow-2xl relative overflow-hidden"
                  style={{
                    backgroundImage: `url(${chemicalPlantImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-background/98 via-background/95 to-background/98" />
                  
                  <CardHeader className="relative z-10 border-b border-border">
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-3">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Factory className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold">{product} Performance Graph</h3>
                          <p className="text-sm text-muted-foreground font-normal">Track price movements and trends</p>
                        </div>
                      </CardTitle>
                      <div className="flex items-center gap-2">
                        <Globe className="h-5 w-5 text-primary" />
                        <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                          <SelectTrigger className="w-48 border-primary/30">
                            <SelectValue placeholder="Select country" />
                          </SelectTrigger>
                          <SelectContent className="bg-background z-50">
                            {countries.map((country) => (
                              <SelectItem key={country} value={country}>
                                {country}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="relative z-10 pt-6">
                    {/* Chart */}
                    <div className="mb-6">
                      <ResponsiveContainer width="100%" height={400}>
                        <LineChart data={chartData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                          <XAxis 
                            dataKey="date" 
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
                          <Line 
                            type="monotone" 
                            dataKey="price" 
                            stroke="hsl(var(--primary))" 
                            strokeWidth={3}
                            dot={{ fill: 'hsl(var(--primary))', r: 6 }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>

                    {/* Timeframe Buttons */}
                    <div className="flex gap-2 justify-center mb-8">
                      {["1W", "1M", "1Y", "ALL"].map((period) => (
                        <Button
                          key={period}
                          variant={timeframe === period ? "default" : "outline"}
                          onClick={() => setTimeframe(period)}
                          className={timeframe === period ? "bg-primary" : "border-primary/30 hover:border-primary"}
                        >
                          {period}
                        </Button>
                      ))}
                    </div>

                    {/* Stats Grid */}
                    <div className="grid md:grid-cols-4 gap-4">
                      <Card className="bg-primary/5 border-primary/30">
                        <CardContent className="p-4">
                          <p className="text-sm text-muted-foreground mb-1">Current Price</p>
                          <p className="text-2xl font-bold text-primary">$1,320/bbl</p>
                        </CardContent>
                      </Card>
                      <Card className="bg-success/5 border-success/30">
                        <CardContent className="p-4">
                          <p className="text-sm text-muted-foreground mb-1">24h Change</p>
                          <div className="flex items-center gap-2">
                            <TrendingUp className="h-5 w-5 text-success" />
                            <p className="text-2xl font-bold text-success">+3.2%</p>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="bg-card border-border">
                        <CardContent className="p-4">
                          <p className="text-sm text-muted-foreground mb-1">Week High</p>
                          <p className="text-2xl font-bold text-foreground">$1,350</p>
                        </CardContent>
                      </Card>
                      <Card className="bg-card border-border">
                        <CardContent className="p-4">
                          <p className="text-sm text-muted-foreground mb-1">Week Low</p>
                          <p className="text-2xl font-bold text-foreground">$1,180</p>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Market Insights */}
                    <div className="mt-8 p-6 bg-muted/50 rounded-lg border border-border">
                      <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-primary" />
                        Market Insights - {selectedCountry}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {product} prices in {selectedCountry} show positive momentum with steady demand from downstream 
                        polymer manufacturers. Supply dynamics remain balanced with moderate inventory levels supporting 
                        current price levels. Technical indicators suggest continued upward trend in the short term.
                      </p>
                    </div>
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

export default CrudeFeedstock;
