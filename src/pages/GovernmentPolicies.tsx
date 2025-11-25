import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const GovernmentPolicies = () => {
  const navigate = useNavigate();
  const [selectedMonth, setSelectedMonth] = useState("January");
  const [selectedYear, setSelectedYear] = useState("2024");

  const policyData = [
    {
      date: "Mon 18-04-2025",
      title: "Import Duty Revision on Polymers",
      category: "Trade Policy",
      description: "Government announces new import duty structure for polymer imports to support domestic manufacturing.",
      impact: "High"
    },
    {
      date: "Fri 15-04-2025",
      title: "GST Rate Changes for Plastic Products",
      category: "Tax Policy",
      description: "Revised GST rates applicable on various polymer and plastic products effective from next month.",
      impact: "Medium"
    },
    {
      date: "Thu 14-04-2025",
      title: "Extended Producer Responsibility Guidelines",
      category: "Environmental Policy",
      description: "New EPR guidelines for plastic packaging manufacturers to promote circular economy.",
      impact: "High"
    },
    {
      date: "Wed 13-04-2025",
      title: "Quality Control Orders for Polymers",
      category: "Quality Standards",
      description: "BIS standards made mandatory for specific polymer grades to ensure quality compliance.",
      impact: "Medium"
    },
    {
      date: "Tue 12-04-2025",
      title: "Plastic Waste Management Amendment",
      category: "Environmental Policy",
      description: "Amendments to plastic waste management rules with stricter recycling targets.",
      impact: "High"
    },
    {
      date: "Mon 11-04-2025",
      title: "Export Incentive Scheme for Polymers",
      category: "Trade Policy",
      description: "New export incentive scheme launched to boost polymer exports from India.",
      impact: "Medium"
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
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
                  Indian Bazaar
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-white z-50">
                  <DropdownMenuItem onClick={() => navigate('/indian-bazaar')} className="cursor-pointer">
                    City Wise
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate('/rate-revision')} className="cursor-pointer">
                    Rate Revision
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate('/price-prediction')} className="cursor-pointer">
                    Price Prediction
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate('/company-price-list')} className="cursor-pointer">
                    Company Price List
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate('/exchange-rate')} className="cursor-pointer">
                    US$-INR Custom Exchange Rate
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate('/bopp-film')} className="cursor-pointer">
                    BOPP Film (TT & NTT)
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate('/government-policies')} className="cursor-pointer">
                    Indian Government Policies
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

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
        <div className="mb-10">
          <div className="flex items-center gap-4 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent backdrop-blur-sm border border-primary/20 rounded-2xl p-6 shadow-xl">
            <div className="p-3 bg-primary/20 backdrop-blur-md rounded-xl border border-primary/30 shadow-lg">
              <FileText className="h-7 w-7 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Latest Policy Updates
              </h2>
              <p className="text-sm text-muted-foreground mt-1">Government regulations affecting polymer industry</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {policyData.map((policy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="border-2 border-border/50 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="bg-gradient-to-r from-primary via-primary to-primary/90 text-white p-4 md:w-48 flex flex-col justify-center items-center text-center">
                      <p className="text-xs font-semibold mb-1">DATE</p>
                      <p className="text-sm font-bold">{policy.date}</p>
                      <div className="mt-3 pt-3 border-t border-white/30 w-full">
                        <p className="text-xs font-semibold mb-1">IMPACT</p>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                          policy.impact === 'High' ? 'bg-red-500' : 'bg-yellow-500'
                        }`}>
                          {policy.impact}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex-1 p-6 bg-gradient-to-b from-background to-muted/5">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-bold text-lg text-foreground flex-1">{policy.title}</h3>
                        <span className="ml-4 px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full whitespace-nowrap">
                          {policy.category}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{policy.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GovernmentPolicies;
