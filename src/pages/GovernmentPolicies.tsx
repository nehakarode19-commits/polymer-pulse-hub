import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const GovernmentPolicies = () => {
  const [selectedMonth, setSelectedMonth] = useState("January");
  const [selectedYear, setSelectedYear] = useState("2024");

  const policyData = [
    {
      title: "Import Duty Revision on Polymers",
      description: "Government announces new import duty structure for polymer imports to support domestic manufacturing. This policy aims to boost local production and reduce dependency on imports.",
      date: "18-04-2025"
    },
    {
      title: "GST Rate Changes for Plastic Products",
      description: "Revised GST rates applicable on various polymer and plastic products effective from next month. New rates will impact pricing across the supply chain.",
      date: "15-04-2025"
    },
    {
      title: "Extended Producer Responsibility Guidelines",
      description: "New EPR guidelines for plastic packaging manufacturers to promote circular economy. Stricter compliance requirements for waste management.",
      date: "14-04-2025"
    },
    {
      title: "Quality Control Orders for Polymers",
      description: "BIS standards made mandatory for specific polymer grades to ensure quality compliance. All manufacturers must obtain necessary certifications.",
      date: "13-04-2025"
    },
    {
      title: "Plastic Waste Management Amendment",
      description: "Amendments to plastic waste management rules with stricter recycling targets. Focus on reducing single-use plastics and improving collection systems.",
      date: "12-04-2025"
    },
    {
      title: "Export Incentive Scheme for Polymers",
      description: "New export incentive scheme launched to boost polymer exports from India. Enhanced benefits for exporters meeting quality standards.",
      date: "11-04-2025"
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
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-primary">Indian Government Policies</h1>
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
                </SelectContent>
              </Select>

              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="w-28">
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
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
        <Card className="border-2 border-border shadow-xl">
          <CardContent className="p-0">
            <div className="bg-gradient-to-r from-primary via-primary to-primary/90 text-white px-6 py-4 rounded-t-lg">
              <h2 className="text-xl font-bold">Latest Government Policy Updates</h2>
            </div>

            <div className="divide-y divide-border">
              {policyData.map((policy, index) => (
                <div key={index} className="p-6 hover:bg-muted/30 transition-colors">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-foreground mb-2">{policy.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{policy.description}</p>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <span className="text-sm font-semibold bg-primary/10 text-primary px-4 py-1 rounded border border-primary/20">
                        {policy.date}
                      </span>
                      <Button 
                        size="icon" 
                        variant="outline"
                        className="h-9 w-9 border-primary/20 hover:bg-primary/10 hover:text-primary"
                        onClick={() => window.print()}
                      >
                        <FileDown className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GovernmentPolicies;
