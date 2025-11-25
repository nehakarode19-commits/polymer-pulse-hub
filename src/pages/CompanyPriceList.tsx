import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Building2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const CompanyPriceList = () => {
  const [selectedMonth, setSelectedMonth] = useState("May");
  const [selectedYear, setSelectedYear] = useState("2025");

  const priceListData = [
    { product: "BOPP Film", date: "30-05-2025" },
    { product: "PVC", date: "30-05-2025" },
    { product: "PP (Polypropylene)", date: "30-05-2025" },
    { product: "HDPE", date: "30-05-2025" },
    { product: "LDPE", date: "30-05-2025" },
    { product: "LLDPE", date: "30-05-2025" },
    { product: "PET", date: "30-05-2025" },
    { product: "PS (Polystyrene)", date: "30-05-2025" },
    { product: "ABS", date: "30-05-2025" },
    { product: "Engineering Plastics", date: "30-05-2025" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <div className="bg-white border-b border-border">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-primary">Company Price List</h1>
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
        {/* Title Section */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-foreground">
            Company Price List - {selectedMonth} {selectedYear}
          </h2>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow-md border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-border bg-muted/30">
                  <th className="text-left px-6 py-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    PRODUCT
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    DATE
                  </th>
                  <th className="text-right px-6 py-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    
                  </th>
                </tr>
              </thead>
              <tbody>
                {priceListData.map((item, index) => (
                  <tr 
                    key={index} 
                    className="border-b border-border hover:bg-muted/20 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <span className="text-sm font-medium text-foreground">{item.product}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-foreground">{item.date}</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-primary text-primary hover:bg-primary hover:text-white transition-all"
                      >
                        Price list link
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyPriceList;
