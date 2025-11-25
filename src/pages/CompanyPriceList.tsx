import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Building2 } from "lucide-react";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const CompanyPriceList = () => {
  const [selectedMonth, setSelectedMonth] = useState("April");
  const [selectedYear, setSelectedYear] = useState("2025");

  const companyData = [
    {
      date: "Tues 19-04-2025",
      company: "Supreme",
      grades: [
        { name: "C exsf Japan", priceChange: "-0.50" },
        { name: "Blow Mid", priceChange: "Down by Rs.2/kg" },
        { name: "Brent", priceChange: "Down by Rs.1/kg" },
        { name: "Brent", priceChange: "+0.50" },
        { name: "Brent", priceChange: "Up by Rs.2/Kg" },
      ]
    },
    {
      date: "Mon 18-04-2025",
      company: "IOCL",
      grades: [
        { name: "PP FILM", priceChange: "+2.5" },
        { name: "PP IM-HMEL M 12 RR", priceChange: "Up by Rs.1/kg" },
        { name: "HI110 MG", priceChange: "-1.0" },
      ]
    },
    {
      date: "Fri 15-04-2025",
      company: "Reliance Industries",
      grades: [
        { name: "HDPE BLOW", priceChange: "Down by Rs.3/kg" },
        { name: "LLDPE INJ.MLDG", priceChange: "+3.0" },
        { name: "LDPE LAMI", priceChange: "-0.5" },
      ]
    },
    {
      date: "Thu 14-04-2025",
      company: "Haldia Petrochemicals",
      grades: [
        { name: "PP FILM", priceChange: "+1.5" },
        { name: "Engineering Material", priceChange: "Up by Rs.2.5/kg" },
      ]
    },
    {
      date: "Wed 13-04-2025",
      company: "Gail India",
      grades: [
        { name: "PP IM-HMEL", priceChange: "+1.5" },
        { name: "HDPE", priceChange: "Down by Rs.1.5/kg" },
        { name: "LLDPE", priceChange: "+2.0" },
      ]
    },
    {
      date: "Tue 12-04-2025",
      company: "ONGC Petro",
      grades: [
        { name: "LDPE LAMI", priceChange: "-0.5" },
        { name: "PP", priceChange: "Up by Rs.1/kg" },
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
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {companyData.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="border-2 border-border/50 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  {/* Date Header - Red */}
                  <div className="bg-gradient-to-r from-primary via-primary to-primary/90 text-white px-5 py-3 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                    <p className="font-bold text-sm relative z-10 tracking-wide">{company.date}</p>
                  </div>

                  {/* Company Header */}
                  <div className="bg-muted/30 px-5 py-3 border-b border-border">
                    <div className="text-center">
                      <p className="text-xs uppercase text-muted-foreground mb-1">COMPANY</p>
                      <h3 className="font-bold text-base text-foreground">{company.company}</h3>
                    </div>
                  </div>
                  
                  {/* Grades List */}
                  <div className="p-5 space-y-3 bg-gradient-to-b from-background to-muted/5">
                    {company.grades.map((grade, idx) => (
                      <div 
                        key={idx} 
                        className="flex justify-between items-start py-2 px-3 rounded-md hover:bg-primary/5 transition-colors border-b border-border/30 last:border-0"
                      >
                        <div className="flex-1">
                          <p className="text-xs uppercase text-muted-foreground mb-1">GRADE</p>
                          <p className="text-sm font-medium text-foreground">{grade.name}</p>
                        </div>
                        <div className="text-right ml-4">
                          <p className="text-xs uppercase text-muted-foreground mb-1">PRICE CHANGE</p>
                          <span className={`text-sm font-bold flex items-center justify-end gap-1 ${
                            grade.priceChange.startsWith('+') || grade.priceChange.toLowerCase().includes('up') 
                              ? 'text-green-600' 
                              : 'text-red-600'
                          }`}>
                            {(grade.priceChange.startsWith('+') || grade.priceChange.toLowerCase().includes('up')) && (
                              <TrendingUp className="h-3 w-3" />
                            )}
                            {(grade.priceChange.startsWith('-') || grade.priceChange.toLowerCase().includes('down')) && (
                              <TrendingUp className="h-3 w-3 rotate-180" />
                            )}
                            {grade.priceChange}
                          </span>
                        </div>
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
