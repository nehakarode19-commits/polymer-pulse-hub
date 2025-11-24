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
  const [selectedYear, setSelectedYear] = useState("2025");
  const [selectedGrade, setSelectedGrade] = useState("PP film");

  const years = ["2025", "2024", "2023", "2022", "2021"];
  const polymers = ["HDPE", "LDPE", "LLDPE", "PP", "PVC"];
  const ppGrades = ["PP film", "PP icp", "PP InjMldg", "PP Raffia", "PP RandomCp"];

  return (
    <div className="min-h-screen">
      <section className="gradient-hero text-white py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Historical Data</h1>
        </div>
      </section>

      <div className="container max-w-7xl mx-auto py-12 px-4">
        {/* Header */}
        <div className="bg-maroon text-white p-4 mb-6 flex items-center justify-between">
          <div className="flex items-center">
            <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5z"/>
            </svg>
            <h2 className="text-xl font-bold">Historical Data</h2>
          </div>
          <Select value={selectedYear} onValueChange={setSelectedYear}>
            <SelectTrigger className="w-28 bg-white text-foreground">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {years.map((year) => (
                <SelectItem key={year} value={year}>{year}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Tabs defaultValue="PP" className="space-y-6">
          <TabsList className="w-full justify-start">
            {polymers.map((polymer) => (
              <TabsTrigger key={polymer} value={polymer}>
                {polymer}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="PP">
            <Card>
              <CardContent className="p-6">
                <div className="mb-6">
                  <Select value={selectedGrade} onValueChange={setSelectedGrade}>
                    <SelectTrigger className="w-64">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {ppGrades.map((grade) => (
                        <SelectItem key={grade} value={grade}>{grade}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="bg-secondary/20 h-96 flex items-center justify-center rounded-lg border">
                  <p className="text-muted-foreground">Chart displaying {selectedGrade} historical data for {selectedYear}</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {["HDPE", "LDPE", "LLDPE", "PVC"].map((polymer) => (
            <TabsContent key={polymer} value={polymer}>
              <Card>
                <CardContent className="p-6">
                  <div className="bg-secondary/20 h-96 flex items-center justify-center rounded-lg border">
                    <p className="text-muted-foreground">Chart displaying {polymer} historical data for {selectedYear}</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default HistoricalData;
