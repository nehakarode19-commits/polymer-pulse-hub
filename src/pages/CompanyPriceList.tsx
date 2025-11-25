import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Building2, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const CompanyPriceList = () => {
  const navigate = useNavigate();
  const [selectedMonth, setSelectedMonth] = useState("January");
  const [selectedYear, setSelectedYear] = useState("2024");

  const companyData = [
    {
      company: "IOCL",
      products: [
        { name: "PP FILM", price: "94.5" },
        { name: "PP IM-HMEL M 12 RR", price: "93.5" },
        { name: "HI110 MG", price: "93.25" },
      ]
    },
    {
      company: "Reliance Industries",
      products: [
        { name: "HDPE BLOW", price: "92.0" },
        { name: "LLDPE INJ.MLDG", price: "91.5" },
        { name: "LDPE LAMI", price: "95.0" },
      ]
    },
    {
      company: "Haldia Petrochemicals",
      products: [
        { name: "PP FILM", price: "94.0" },
        { name: "Engineering Material", price: "96.0" },
        { name: "PVC", price: "88.5" },
      ]
    },
    {
      company: "Gail India",
      products: [
        { name: "PP IM-HMEL", price: "93.5" },
        { name: "HDPE", price: "92.5" },
        { name: "LLDPE", price: "91.0" },
      ]
    },
    {
      company: "ONGC Petro",
      products: [
        { name: "LDPE LAMI", price: "95.0" },
        { name: "PP", price: "94.5" },
        { name: "HDPE", price: "92.0" },
      ]
    },
    {
      company: "Bharat Petroleum",
      products: [
        { name: "Engineering Material", price: "96.0" },
        { name: "PVC", price: "89.0" },
        { name: "PET", price: "97.5" },
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
              <Building2 className="h-7 w-7 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Company-Wise Price Lists
              </h2>
              <p className="text-sm text-muted-foreground mt-1">Current polymer prices by major companies</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {companyData.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="border-2 border-primary/10 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-primary via-primary to-primary/90 text-white px-5 py-4 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                    <h3 className="font-bold text-lg relative z-10 tracking-wide">{company.company}</h3>
                  </div>
                  
                  <div className="p-5 space-y-3 bg-gradient-to-b from-background to-muted/5">
                    {company.products.map((product, idx) => (
                      <div 
                        key={idx} 
                        className="flex justify-between items-center py-3 px-2 rounded-md hover:bg-primary/5 transition-colors border-b border-border/50 last:border-0"
                      >
                        <span className="text-sm font-medium text-foreground">{product.name}</span>
                        <span className="text-base font-bold text-primary">₹{product.price}</span>
                      </div>
                    ))}
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

export default CompanyPriceList;
