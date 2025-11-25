import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TrendingUp } from "lucide-react";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const PricePrediction = () => {
  const [selectedMonth, setSelectedMonth] = useState("June");
  const [selectedYear, setSelectedYear] = useState("2025");

  const predictions = [
    { polymer: "PP", prediction: "Most Likely to be Rolled Over or Up by Rs.1-2/Kg", trend: "stable" },
    { polymer: "HDPE & LLDPE", prediction: "Mostly Stable to Up by Rs.1-2/Kg", trend: "up" },
    { polymer: "LDPE FC & Heavy Duty", prediction: "Most likely Up by Rs.2-4/Kg", trend: "up" },
    { polymer: "Other LDPE", prediction: "Mostly Up by Rs.1-2/Kg", trend: "up" },
    { polymer: "PVC", prediction: "Most likely Stable to Down by Rs.1-2/Kg", trend: "down" },
    { polymer: "PET", prediction: "Most likely To be Up by Rs.1-2/Kg", trend: "up" },
    { polymer: "GPPS & HIPS", prediction: "Most likely To be Up by Rs.1-3/Kg", trend: "up" },
    { polymer: "ABS", prediction: "Most likely To be Up by Rs.2-4/Kg", trend: "up" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <div className="bg-white border-b border-border">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-primary">Price Prediction</h1>
            </div>
            
            <div className="flex items-center gap-3">
              <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Month" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="January">January</SelectItem>
                  <SelectItem value="February">February</SelectItem>
                  <SelectItem value="March">March</SelectItem>
                  <SelectItem value="April">April</SelectItem>
                  <SelectItem value="May">May</SelectItem>
                  <SelectItem value="June">June</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="w-28">
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2025">2025</SelectItem>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Date Header */}
        <div className="flex justify-end mb-6">
          <div className="bg-primary text-white px-6 py-2 rounded-full">
            <span className="text-sm font-semibold">08-06-2025</span>
          </div>
        </div>

        {/* Main Content Card */}
        <Card className="border-2 border-border shadow-xl">
          <CardContent className="p-8">
            {/* Introduction */}
            <div className="mb-8">
              <p className="text-sm text-foreground leading-relaxed mb-6">
                Our comprehensive examination of bazaar and pricing factors have led us to conclude that Indian producers could implement the following price revisions on 1 {selectedMonth} {selectedYear}:
              </p>

              {/* Predictions List */}
              <div className="space-y-3 mb-6">
                {predictions.map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="font-bold text-primary min-w-[200px]">{item.polymer}:</span>
                    <span className="text-sm text-foreground">{item.prediction}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Please Note Section */}
            <div className="border-t-2 border-border pt-6">
              <h3 className="font-bold text-primary mb-4 text-base">Please note</h3>
              
              <div className="space-y-4 text-sm text-foreground leading-relaxed">
                <p>
                  The above assessment is arrived at based on withdrawals from May list. If Indian producers choose to roll over any of the above polymer prices, there is a possibility that offer revising demand strength and lifting patterns during 1 Wk, they may reintroduce lifting-based discount schemes or offer price cuts in the days ahead.
                </p>

                <p className="font-semibold">Our detailed assessment is as follows</p>

                <div className="space-y-3">
                  <p>
                    <span className="font-semibold">PP:</span> The demand dynamics have not met expectations, and lackluster demand has dampened enthusiasm in the bazaar. With the exception of BC and Lamination grades, demand for other grades has remained subdued, largely due to stagnant sales of finished products. Despite this, domestic producers are consistently raising open bazaar prices resulting from limited availability caused by restricted supplies. The upward trend appears to be driven more by supply constraints than by robust demand fundamentals.
                  </p>

                  <p>
                    <span className="font-semibold">PE:</span> HDPE and LLDPE experienced a cooling effect at the start of the month due to pressure from cheaper imports or fall and a fall in international prices. However, this gradually reversed towards the end as spot availability grew tighter. In contrast, demand for LDPE has created pressure at a discounted open bazaar prices at a trigger where. Additionally, the announcement of a discount scheme has further contributed to pulling down open bazaar prices.
                  </p>

                  <p>
                    <span className="font-semibold">PVC:</span> With the summer effect had driven Lift demand, with US polymer makers being fairly busy. However, the recent rains have resulted in some cooling down of demand which reduces their spot availability. Producers are considering pricing strategies to maintain volume throughput during the monsoon season.
                  </p>

                  <p>
                    <span className="font-semibold">PET:</span> Demand has continued to stay soft due to poor end product sales. During the summer season, the use of cold drink and beverage bottles increases, leading to heightened demand for raw materials. With increased manufacturing of bottles, the demand for raw material could rise accordingly. In such a scenario, domestic producers may consider raising their ex-works prices.
                  </p>

                  <p>
                    <span className="font-semibold">GPPS & HIPS:</span> During the month, the bazaar saw limited lifting. However, there is a likelihood of demand gaining strength in the succeeding days. If so, domestic producers could raise their ex-works prices.
                  </p>

                  <p>
                    <span className="font-semibold">ABS:</span> In addition to the global bazaar effect, improving the current SM prices, possible changes in the demand circuit could be influencing factors for an upheaval in pricing dynamics during the summer season. During the month, demand remained moderate. However, there is a possibility of demand strengthening with significant improvements in consumer sentiment.
                  </p>
                </div>

                <p className="italic text-muted-foreground mt-6">
                  In conclusion, producers should adopt a balanced strategy, monitoring market dynamics and adjusting pricing accordingly to ensure optimal throughput without disrupting the market equilibrium.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PricePrediction;
