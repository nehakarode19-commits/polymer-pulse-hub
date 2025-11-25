import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { FileDown, FileText } from "lucide-react";
import { motion } from "framer-motion";

const PressRelease = () => {
  const [selectedMonth, setSelectedMonth] = useState("January");
  const [selectedYear, setSelectedYear] = useState("2024");

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const years = ["2024", "2025"];

  const pressReleases = [
    {
      title: "Week Closed January 18th - 24th of Jan, 2024",
      date: "January 24, 2024",
      content: [
        {
          polymer: "PP (Polypropylene)",
          description: "Polymer Bazaar announces expanded coverage of polypropylene markets across Middle East and Asia Pacific regions. New real-time price tracking system launched to provide instant market updates to subscribers."
        },
        {
          polymer: "HDPE (High-Density Polyethylene)",
          description: "Strategic partnership announced with major HDPE producers to enhance data accuracy and market intelligence delivery. Platform now covers 15+ countries with dedicated regional analysts."
        },
        {
          polymer: "LLDPE (Linear Low-Density Polyethylene)",
          description: "New mobile application features released for LLDPE traders, enabling instant price alerts and market trend notifications. Enhanced analytics dashboard provides deeper market insights."
        },
        {
          polymer: "PVC (Polyvinyl Chloride)",
          description: "Polymer Bazaar launches comprehensive PVC market report series covering global construction and infrastructure trends. Partnership with industry associations strengthens market data validation."
        }
      ]
    },
    {
      title: "Week Closed January 11th - 17th of Jan, 2024",
      date: "January 17, 2024",
      content: [
        {
          polymer: "LDPE (Low-Density Polyethylene)",
          description: "Enhanced LDPE pricing methodology introduced with multi-source validation protocol. Platform expands coverage to include recycled LDPE market intelligence and sustainability metrics."
        },
        {
          polymer: "PET (Polyethylene Terephthalate)",
          description: "Polymer Bazaar introduces dedicated PET recycling market tracker, responding to growing demand for circular economy insights. New features include virgin vs. recycled price comparisons."
        },
        {
          polymer: "PS (Polystyrene)",
          description: "Strategic expansion into polystyrene markets completed with dedicated analyst team covering Asian and European regions. Real-time styrene monomer tracking integrated into platform."
        }
      ]
    },
    {
      title: "Week Closed January 4th - 10th of Jan, 2024",
      date: "January 10, 2024",
      content: [
        {
          polymer: "ABS (Acrylonitrile Butadiene Styrene)",
          description: "Platform launches ABS market intelligence service targeting automotive and electronics industries. New partnership with manufacturers enhances data collection and market validation."
        },
        {
          polymer: "Engineering Polymers",
          description: "Polymer Bazaar announces comprehensive coverage of specialty engineering polymers including PA, PC, and POM. Premium tier subscribers gain access to detailed technical grade pricing."
        },
        {
          polymer: "EVA & PC",
          description: "New features released for EVA and polycarbonate market tracking, including solar panel and electronics industry demand forecasting. Enhanced visualization tools for price trend analysis."
        }
      ]
    }
  ];

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

      {/* Filter Section */}
      <section className="container max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <h2 className="text-2xl font-bold text-foreground">Press Releases</h2>
          <div className="flex gap-3">
            <Select value={selectedMonth} onValueChange={setSelectedMonth}>
              <SelectTrigger className="w-36 h-9 border-border bg-background">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-card border-border z-[100]">
                {months.map((month) => (
                  <SelectItem 
                    key={month} 
                    value={month}
                    className="hover:bg-accent focus:bg-accent cursor-pointer"
                  >
                    {month}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger className="w-24 h-9 border-border bg-background">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-card border-border z-[100]">
                {years.map((year) => (
                  <SelectItem 
                    key={year} 
                    value={year}
                    className="hover:bg-accent focus:bg-accent cursor-pointer"
                  >
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Press Releases Section */}
      <section className="container max-w-7xl mx-auto px-4 pb-12">
        <div className="space-y-6">
          {pressReleases.map((release, releaseIndex) => (
            <motion.div
              key={releaseIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: releaseIndex * 0.1 }}
            >
              <Card className="border border-border overflow-hidden shadow-md">
                {/* Red Header */}
                <div className="bg-primary px-6 py-4 flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">
                    {release.title}
                  </h3>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="bg-white hover:bg-white/90 text-primary gap-2"
                    onClick={() => window.print()}
                  >
                    <FileDown className="h-4 w-4" />
                    Get More Info
                  </Button>
                </div>

                {/* Content */}
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {release.content.map((item, itemIndex) => (
                      <div key={itemIndex} className="pb-4 border-b border-border last:border-b-0 last:pb-0">
                        <h4 className="font-bold text-foreground mb-2">
                          {item.polymer}:
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-4 pt-4 border-t border-border">
                    Release Date: {release.date}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PressRelease;
