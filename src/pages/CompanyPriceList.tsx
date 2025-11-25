import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Building2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CompanyPriceList = () => {
  const [selectedMonth, setSelectedMonth] = useState("June");
  const [selectedYear, setSelectedYear] = useState("2025");

  const companyData = [
    {
      company: "test-rfl",
      products: [
        { name: "BOPP Film", date: "30-06-2025" },
        { name: "Chunk", date: "24-10-2025" },
      ]
    },
    {
      company: "calycrat",
      products: [
        { name: "BOPP Film", date: "30-06-2025" },
        { name: "Chunk", date: "24-10-2025" },
      ]
    },
    {
      company: "Reliance Industries",
      products: [
        { name: "PP Film", date: "15-06-2025" },
        { name: "HDPE Blow", date: "15-06-2025" },
      ]
    },
    {
      company: "IOCL",
      products: [
        { name: "PP IM-HMEL", date: "20-06-2025" },
        { name: "LDPE Film", date: "20-06-2025" },
      ]
    },
    {
      company: "Haldia Petrochemicals",
      products: [
        { name: "PVC Resin", date: "18-06-2025" },
        { name: "Engineering Plastics", date: "18-06-2025" },
      ]
    },
    {
      company: "Gail India",
      products: [
        { name: "LLDPE", date: "22-06-2025" },
        { name: "HDPE", date: "22-06-2025" },
      ]
    },
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
        <div className="space-y-12">
          {companyData.map((company, companyIndex) => (
            <div key={companyIndex} className="space-y-6">
              {/* Company Name */}
              <div className="text-center">
                <h2 className="text-2xl font-bold text-primary">{company.company}</h2>
              </div>

              {/* Product Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {company.products.map((product, productIndex) => (
                  <Card key={productIndex} className="border-2 border-border shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        {/* Product */}
                        <div>
                          <p className="text-xs uppercase text-muted-foreground font-semibold mb-2">PRODUCT</p>
                          <p className="text-base font-semibold text-foreground">{product.name}</p>
                        </div>

                        {/* Date */}
                        <div>
                          <p className="text-xs uppercase text-muted-foreground font-semibold mb-2">DATE</p>
                          <p className="text-base text-foreground">{product.date}</p>
                        </div>

                        {/* Price List Link Button */}
                        <div className="pt-2">
                          <Button 
                            className="w-full bg-primary hover:bg-primary/90 text-white font-semibold"
                            size="lg"
                          >
                            Price list link
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyPriceList;
