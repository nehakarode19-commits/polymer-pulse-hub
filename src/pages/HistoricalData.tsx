import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const HistoricalData = () => {
  const [selectedYear, setSelectedYear] = useState("2023");
  const [selectedPolymer, setSelectedPolymer] = useState("PP");

  const years = ["2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023"];
  const polymers = ["PP", "HDPE", "LLDPE", "LDPE", "PVC"];

  // Sample historical data
  const historicalData = [
    { year: "2016", price: 850 },
    { year: "2017", price: 920 },
    { year: "2018", price: 1050 },
    { year: "2019", price: 980 },
    { year: "2020", price: 850 },
    { year: "2021", price: 1200 },
    { year: "2022", price: 1350 },
    { year: "2023", price: 1180 },
  ];

  const monthlyData = [
    { month: "Jan", price: 1150 },
    { month: "Feb", price: 1165 },
    { month: "Mar", price: 1180 },
    { month: "Apr", price: 1195 },
    { month: "May", price: 1170 },
    { month: "Jun", price: 1185 },
    { month: "Jul", price: 1200 },
    { month: "Aug", price: 1175 },
    { month: "Sep", price: 1160 },
    { month: "Oct", price: 1145 },
    { month: "Nov", price: 1155 },
    { month: "Dec", price: 1170 },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="gradient-hero text-white py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Historical Data</h1>
          <p className="text-xl text-white/90">
            Comprehensive historical pricing trends and analytics for polymer markets
          </p>
        </div>
      </section>

      <div className="container max-w-7xl mx-auto py-12 px-4">
        {/* Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4 items-end">
              <div className="flex-1">
                <label className="text-sm font-medium mb-2 block">Select Year</label>
                <Select value={selectedYear} onValueChange={setSelectedYear}>
                  <SelectTrigger>
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

              <div className="flex-1">
                <label className="text-sm font-medium mb-2 block">Select Polymer</label>
                <div className="flex gap-2">
                  {polymers.map((polymer) => (
                    <Button
                      key={polymer}
                      variant={selectedPolymer === polymer ? "default" : "outline"}
                      onClick={() => setSelectedPolymer(polymer)}
                      className={selectedPolymer === polymer ? "bg-primary" : ""}
                    >
                      {polymer}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Yearly Trend Chart */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-6">
              {selectedPolymer} - Yearly Price Trend (CIF NS, MUMBAI)
            </h2>
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={historicalData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis 
                    label={{ value: 'Price ($/MT)', angle: -90, position: 'insideLeft' }}
                  />
                  <Tooltip />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="price" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={3}
                    name={`${selectedPolymer} Price`}
                    dot={{ fill: "hsl(var(--primary))", r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Monthly Breakdown Chart */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-6">
              {selectedPolymer} - Monthly Breakdown {selectedYear}
            </h2>
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis 
                    label={{ value: 'Price ($/MT)', angle: -90, position: 'insideLeft' }}
                  />
                  <Tooltip />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="price" 
                    stroke="hsl(var(--primary-light))" 
                    strokeWidth={2}
                    name={`Monthly Price`}
                    dot={{ fill: "hsl(var(--primary-light))", r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Summary Statistics */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <p className="text-sm text-muted-foreground mb-2">Average Price</p>
              <p className="text-3xl font-bold text-primary">$1,170</p>
              <p className="text-xs text-muted-foreground mt-1">{selectedYear}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <p className="text-sm text-muted-foreground mb-2">Highest Price</p>
              <p className="text-3xl font-bold text-green-600">$1,200</p>
              <p className="text-xs text-muted-foreground mt-1">July {selectedYear}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <p className="text-sm text-muted-foreground mb-2">Lowest Price</p>
              <p className="text-3xl font-bold text-red-600">$1,145</p>
              <p className="text-xs text-muted-foreground mt-1">October {selectedYear}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <p className="text-sm text-muted-foreground mb-2">Volatility</p>
              <p className="text-3xl font-bold text-primary">4.7%</p>
              <p className="text-xs text-muted-foreground mt-1">Std Deviation</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HistoricalData;
