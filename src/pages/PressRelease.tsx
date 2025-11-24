import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText } from "lucide-react";
import { motion } from "framer-motion";

const PressRelease = () => {
  const [selectedMonth, setSelectedMonth] = useState("November");
  const [selectedYear, setSelectedYear] = useState("2025");

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const years = ["2024", "2025"];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative h-72 bg-cover bg-center bg-no-repeat flex items-center justify-start"
        style={{
          backgroundImage: "linear-gradient(rgba(60, 60, 60, 0.7), rgba(60, 60, 60, 0.7)), url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1600&q=80')"
        }}
      >
        <div className="container relative z-10 px-8">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-6xl font-black text-white drop-shadow-2xl"
          >
            Press Release
          </motion.h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="container px-8 py-12">
        {/* Header with Icon and Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-primary/10 rounded-lg">
              <FileText className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-primary">Press Release</h2>
          </div>

          {/* Filters */}
          <div className="flex gap-4">
            <Select value={selectedMonth} onValueChange={setSelectedMonth}>
              <SelectTrigger className="w-40 bg-background border-border">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-background border-border z-50">
                {months.map((month) => (
                  <SelectItem key={month} value={month}>
                    {month}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger className="w-32 bg-background border-border">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-background border-border z-50">
                {years.map((year) => (
                  <SelectItem key={year} value={year}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Press Releases List Placeholder */}
        <div className="text-center py-16 text-muted-foreground">
          <div className="inline-block p-6 bg-muted/30 rounded-lg">
            <FileText className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-lg">No press releases available for {selectedMonth} {selectedYear}</p>
            <p className="text-sm mt-2">Check back later for updates</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PressRelease;
