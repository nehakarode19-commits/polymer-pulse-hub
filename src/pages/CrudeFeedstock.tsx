import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CrudeFeedstock = () => {
  const [selectedCountry, setSelectedCountry] = useState("China");
  const [timeframe, setTimeframe] = useState("ALL");

  const products = [
    "ACN - Acrylonitrile",
    "Butadine",
    "Crude",
    "EDC",
    "Ethylene",
    "MEG",
    "Naphtha",
    "PTA",
    "Propylene",
    "Styrene",
    "VCM",
    "Vinyl Acetate - VA"
  ];

  const chartData = [
    { date: "May 12", price: 70000 },
    { date: "May 16", price: 60000 },
    { date: "May 30", price: 10000 },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="gradient-hero text-white py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Crude & FeedStock</h1>
        </div>
      </section>

      <div className="container max-w-7xl mx-auto py-12 px-4">
        {/* Header with Tabs */}
        <div className="bg-maroon text-white p-4 mb-6 flex items-center">
          <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5z"/>
          </svg>
          <h2 className="text-xl font-bold">Crude & FeedStock</h2>
        </div>

        {/* Product Tabs */}
        <Tabs defaultValue="MEG" className="mb-6">
          <TabsList className="w-full justify-start overflow-x-auto flex-wrap h-auto">
            {products.map((product) => (
              <TabsTrigger key={product} value={product} className="whitespace-nowrap">
                {product}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="MEG">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-maroon">Performance Graph</h3>
                  <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="China">China</SelectItem>
                      <SelectItem value="India">India</SelectItem>
                      <SelectItem value="USA">USA</SelectItem>
                      <SelectItem value="Europe">Europe</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="h-96 mb-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Line 
                        type="monotone" 
                        dataKey="price" 
                        stroke="#8B0000" 
                        strokeWidth={2}
                        dot={{ fill: "#8B0000", r: 5 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                <div className="flex justify-center gap-2">
                  {["1M", "1Y", "ALL"].map((tf) => (
                    <Button
                      key={tf}
                      variant={timeframe === tf ? "default" : "outline"}
                      size="sm"
                      onClick={() => setTimeframe(tf)}
                      className={timeframe === tf ? "bg-maroon hover:bg-maroon/90" : "border-maroon text-maroon"}
                    >
                      {tf}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CrudeFeedstock;
