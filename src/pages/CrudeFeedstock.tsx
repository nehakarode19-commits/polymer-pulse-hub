import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const CrudeFeedstock = () => {
  const [selectedProduct, setSelectedProduct] = useState("CRUDE");
  const [timeframe, setTimeframe] = useState("1M");

  const products = [
    "CRUDE", "Naphtha", "Propylene", "Ethylene", "Styrene", 
    "EDC", "VCM", "PTA", "MEG", "ACN", "VA"
  ];

  const timeframes = ["1W", "1M", "1Y"];

  // Sample data for the chart
  const chartData = [
    { month: "Apr", price: 580 },
    { month: "May", price: 600 },
    { month: "Jun", price: 625 },
    { month: "Jul", price: 610 },
    { month: "Aug", price: 595 },
    { month: "Sep", price: 615 },
    { month: "Oct", price: 625 },
    { month: "Nov", price: 640 },
    { month: "Dec", price: 630 },
    { month: "Jan", price: 620 },
    { month: "Feb", price: 635 },
    { month: "Mar", price: 645 },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="gradient-hero text-white py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Crude & Feedstock</h1>
          <p className="text-xl text-white/90">
            Real-time pricing and market intelligence for crude oil and petrochemical feedstocks
          </p>
        </div>
      </section>

      <div className="container max-w-7xl mx-auto py-12 px-4">
        {/* Product Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {products.map((product) => (
              <Button
                key={product}
                variant={selectedProduct === product ? "default" : "outline"}
                onClick={() => setSelectedProduct(product)}
                className={selectedProduct === product ? "bg-primary" : ""}
              >
                {product}
              </Button>
            ))}
          </div>
        </div>

        {/* Chart Section */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">
                  Performance Graph - {selectedProduct}
                </h2>
                <p className="text-muted-foreground">C&F Japan</p>
              </div>
              <div className="flex gap-2 mt-4 md:mt-0">
                {timeframes.map((tf) => (
                  <Button
                    key={tf}
                    variant={timeframe === tf ? "default" : "outline"}
                    size="sm"
                    onClick={() => setTimeframe(tf)}
                    className={timeframe === tf ? "bg-primary" : ""}
                  >
                    {tf}
                  </Button>
                ))}
              </div>
            </div>

            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="price" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={2}
                    dot={{ fill: "hsl(var(--primary))", r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <Badge variant="secondary" className="text-sm">
                Latest: 4th Oct - C&F Japan: $625/mt
              </Badge>
              <p className="text-sm text-muted-foreground">
                Last updated: 2 hours ago
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Market Commentary */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Market Overview</h3>
              <p className="text-muted-foreground mb-4">
                {selectedProduct} prices have shown moderate volatility in recent weeks, 
                influenced by global supply dynamics and downstream demand patterns.
              </p>
              <p className="text-muted-foreground">
                Key factors affecting current pricing include refinery maintenance schedules,
                geopolitical developments, and seasonal demand variations across major consuming regions.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Price Drivers</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Crude oil price fluctuations and OPEC+ production decisions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Naphtha cracker margins and operating rates in Asia</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Seasonal demand patterns from downstream polymer producers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Regional supply-demand balances and inventory levels</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Regional Pricing */}
        <Card className="mt-6">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4">Regional Pricing</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">Asia Pacific</p>
                <p className="text-2xl font-bold text-primary">$625/mt</p>
                <p className="text-xs text-green-600 mt-1">+2.5% vs last week</p>
              </div>
              <div className="p-4 border rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">Europe</p>
                <p className="text-2xl font-bold text-primary">€580/mt</p>
                <p className="text-xs text-red-600 mt-1">-1.2% vs last week</p>
              </div>
              <div className="p-4 border rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">USA</p>
                <p className="text-2xl font-bold text-primary">$640/mt</p>
                <p className="text-xs text-green-600 mt-1">+0.8% vs last week</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CrudeFeedstock;
