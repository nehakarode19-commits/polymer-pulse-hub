import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const IndianBazaar = () => {
  const [selectedCity, setSelectedCity] = useState("Ahem");
  const [selectedMonth, setSelectedMonth] = useState("January");
  const [selectedYear, setSelectedYear] = useState("2024");
  const [selectedCompany, setSelectedCompany] = useState("All Companies");

  const polymerData = [
    {
      title: "IOCL - PP",
      items: [
        { name: "PP FILM", price: "94.5" },
        { name: "PP IM-HMEL M 12 RR", price: "93.5" },
        { name: "HI110 MG", price: "93.25" },
      ]
    },
    {
      title: "H.D.P.E. BLOW",
      items: [
        { name: "PP FILM", price: "94.5" },
        { name: "PP IM-HMEL M 12 RR", price: "93.5" },
        { name: "HI110 MG", price: "93.25" },
      ]
    },
    {
      title: "LLDPE INJ.MLDG",
      items: [
        { name: "PP FILM", price: "94.5" },
        { name: "PP IM-HMEL M 12 RR", price: "93.5" },
        { name: "HI110 MG", price: "93.25" },
      ]
    },
    {
      title: "Engineering Material",
      items: [
        { name: "PP FILM", price: "94.5" },
        { name: "PP IM-HMEL M 12 RR", price: "93.5" },
        { name: "HI110 MG", price: "93.25" },
      ]
    },
    {
      title: "PP",
      items: [
        { name: "PP FILM", price: "94.5" },
        { name: "PP IM-HMEL M 12 RR", price: "93.5" },
        { name: "HI110 MG", price: "93.25" },
      ]
    },
    {
      title: "LDPE LAMI. (7 M.F.I.)",
      items: [
        { name: "PP FILM", price: "94.5" },
        { name: "PP IM-HMEL M 12 RR", price: "93.5" },
        { name: "HI110 MG", price: "93.25" },
      ]
    },
  ];

  const rateRevisionData = [
    {
      company: "Reliance Industries",
      items: [
        { grade: "PP Raffia H110MA", priceChange: "+₹2.5", trend: "up" },
        { grade: "HDPE Injection HM 9450F", priceChange: "+₹3.0", trend: "up" },
        { grade: "LLDPE Film LLDPE-FD", priceChange: "-₹1.5", trend: "down" },
      ]
    },
    {
      company: "IOCL",
      items: [
        { grade: "PP Film PP-F5", priceChange: "+₹2.0", trend: "up" },
        { grade: "HDPE Blow HB-5502", priceChange: "0", trend: "stable" },
        { grade: "LDPE Film LD2420D", priceChange: "+₹1.0", trend: "up" },
      ]
    },
    {
      company: "GAIL",
      items: [
        { grade: "PP Injection 1120MN", priceChange: "-₹2.0", trend: "down" },
        { grade: "HDPE Film HD-50MA", priceChange: "+₹1.5", trend: "up" },
        { grade: "LLDPE Rotomoulding LR220", priceChange: "+₹3.5", trend: "up" },
      ]
    },
    {
      company: "Haldia Petrochemicals",
      items: [
        { grade: "PP Homo H030SG", priceChange: "+₹4.0", trend: "up" },
        { grade: "HDPE Pipe PE-80", priceChange: "-₹1.0", trend: "down" },
        { grade: "LLDPE Film LL-218", priceChange: "+₹2.5", trend: "up" },
      ]
    },
    {
      company: "Bongaigaon Refinery",
      items: [
        { grade: "PP Copolymer C300", priceChange: "0", trend: "stable" },
        { grade: "HDPE Blow BL-3", priceChange: "+₹1.5", trend: "up" },
        { grade: "LDPE Injection LI-450", priceChange: "-₹2.5", trend: "down" },
      ]
    },
    {
      company: "Chennai Petroleum",
      items: [
        { grade: "PP Raffia H110", priceChange: "+₹3.0", trend: "up" },
        { grade: "HDPE Film HF-4760", priceChange: "+₹2.0", trend: "up" },
        { grade: "LLDPE Film LF-220", priceChange: "-₹1.0", trend: "down" },
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
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-primary">Indian Bazaar</h1>
            </div>
            
            {/* Month and Year Selectors */}
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
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2022">2022</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {/* Rate Revision Section */}
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Glass Morphism Header with Filters */}
        <div className="mb-10">
          <div className="flex items-center justify-between flex-wrap gap-6 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent backdrop-blur-sm border border-primary/20 rounded-2xl p-6 shadow-xl">
            {/* Modern Glass Heading */}
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/20 backdrop-blur-md rounded-xl border border-primary/30 shadow-lg">
                <FileText className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Rate Revision
                </h2>
                <p className="text-sm text-muted-foreground mt-1">Latest price changes by company</p>
              </div>
            </div>
            
            {/* Company Filter with glass effect */}
            <Select value={selectedCompany} onValueChange={setSelectedCompany}>
              <SelectTrigger className="w-52 h-12 bg-background/50 backdrop-blur-sm border-2 border-primary/30 hover:border-primary/50 transition-all shadow-md">
                <SelectValue placeholder="Select Company" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All Companies">All Companies</SelectItem>
                <SelectItem value="Reliance Industries">Reliance Industries</SelectItem>
                <SelectItem value="IOCL">IOCL</SelectItem>
                <SelectItem value="GAIL">GAIL</SelectItem>
                <SelectItem value="Haldia Petrochemicals">Haldia Petrochemicals</SelectItem>
                <SelectItem value="Bongaigaon Refinery">Bongaigaon Refinery</SelectItem>
                <SelectItem value="Chennai Petroleum">Chennai Petroleum</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Rate Revision Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rateRevisionData.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="border-2 border-primary/10 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300 overflow-hidden cursor-pointer group">
                <CardContent className="p-0">
                  {/* Card Header with vibrant red gradient */}
                  <div className="bg-gradient-to-r from-primary via-primary to-primary/90 text-white px-5 py-4 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                    <h3 className="font-bold text-lg relative z-10 tracking-wide">{company.company}</h3>
                  </div>
                  
                  {/* Card Body with enhanced styling */}
                  <div className="p-5 space-y-3 bg-gradient-to-b from-background to-muted/5">
                    {company.items.map((item, idx) => (
                      <div 
                        key={idx} 
                        className="flex justify-between items-center py-3 px-2 rounded-md hover:bg-primary/5 transition-colors border-b border-border/50 last:border-0"
                      >
                        <span className="text-sm font-medium text-foreground">{item.grade}</span>
                        <span className={`text-base font-bold ${
                          item.trend === 'up' ? 'text-green-600' : 
                          item.trend === 'down' ? 'text-red-600' : 
                          'text-muted-foreground'
                        }`}>
                          {item.priceChange}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* City Wise Section */}
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Glass Morphism Header with Filters */}
        <div className="mb-10">
          <div className="flex items-center justify-between flex-wrap gap-6 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent backdrop-blur-sm border border-primary/20 rounded-2xl p-6 shadow-xl">
            {/* Modern Glass Heading */}
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/20 backdrop-blur-md rounded-xl border border-primary/30 shadow-lg">
                <FileText className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  City Wise Data
                </h2>
                <p className="text-sm text-muted-foreground mt-1">Select city to view polymer prices</p>
              </div>
            </div>
            
            {/* City Filter with glass effect */}
            <Select value={selectedCity} onValueChange={setSelectedCity}>
              <SelectTrigger className="w-52 h-12 bg-background/50 backdrop-blur-sm border-2 border-primary/30 hover:border-primary/50 transition-all shadow-md">
                <SelectValue placeholder="Select City" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Ahem">Ahem</SelectItem>
                <SelectItem value="Mumbai">Mumbai</SelectItem>
                <SelectItem value="Delhi">Delhi</SelectItem>
                <SelectItem value="Bangalore">Bangalore</SelectItem>
                <SelectItem value="Chennai">Chennai</SelectItem>
                <SelectItem value="Kolkata">Kolkata</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Polymer Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {polymerData.map((polymer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="border-2 border-primary/10 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  {/* Card Header with vibrant red gradient */}
                  <div className="bg-gradient-to-r from-primary via-primary to-primary/90 text-white px-5 py-4 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                    <h3 className="font-bold text-lg relative z-10 tracking-wide">{polymer.title}</h3>
                  </div>
                  
                  {/* Card Body with enhanced styling */}
                  <div className="p-5 space-y-3 bg-gradient-to-b from-background to-muted/5">
                    {polymer.items.map((item, idx) => (
                      <div 
                        key={idx} 
                        className="flex justify-between items-center py-3 px-2 rounded-md hover:bg-primary/5 transition-colors border-b border-border/50 last:border-0"
                      >
                        <span className="text-sm font-medium text-foreground">{item.name}</span>
                        <span className="text-base font-bold text-primary">{item.price}</span>
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

export default IndianBazaar;
