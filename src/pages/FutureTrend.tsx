import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Download } from "lucide-react";

const FutureTrend = () => {
  const [selectedPolymer, setSelectedPolymer] = useState("PP");
  const [selectedMonth, setSelectedMonth] = useState("March");
  const [selectedYear, setSelectedYear] = useState("2024");

  const polymers = ["PP", "PE", "PVC", "PET", "PS"];
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const years = ["2024", "2023"];

  const reports = [
    {
      title: "Weekly Report & Future Trend - 30th January 2025",
      date: "January 30, 2025",
      sections: [
        {
          title: "USA Bazar",
          content: "US PP markets showing stability amid balanced supply-demand conditions. Downstream demand remains steady with no major disruptions anticipated."
        },
        {
          title: "European Bazar",
          content: "European markets consolidating recent gains. Import competition continues to weigh on domestic pricing power."
        },
        {
          title: "Turkey Bazar",
          content: "Turkish PP showing resilience with improving local demand fundamentals and stable import flows."
        },
        {
          title: "Indian Bazar",
          content: "Indian domestic PP likely to see modest gains on feedstock cost support. Downstream demand improving across sectors."
        },
        {
          title: "Latest Overseas Offers",
          content: "Latest CFR offers: PP Film $1,180-1,200/mt, PP Injection $1,160-1,180/mt, PP Raffia $1,150-1,170/mt."
        },
        {
          title: "Last Rate Revision",
          content: "Major producers announced $20-30/mt increase effective from February 1st across most grades."
        },
        {
          title: "Bazaar Pulse",
          content: "Overall market sentiment cautiously optimistic. Supply-demand balance remains supportive for stable to firm pricing."
        },
        {
          title: "Procurement Opinion",
          content: "Recommended to cover near-term requirements. Maintain flexibility for spot purchases based on market movements."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="gradient-hero text-white py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Future Trend</h1>
        </div>
      </section>

      <div className="container max-w-7xl mx-auto py-12 px-4">
        {/* Header */}
        <div className="bg-maroon text-white p-4 mb-6 flex items-center">
          <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5z"/>
          </svg>
          <h2 className="text-xl font-bold">Future Trend</h2>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="flex gap-2 flex-wrap">
                  {polymers.map((polymer) => (
                    <Button
                      key={polymer}
                      variant={selectedPolymer === polymer ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedPolymer(polymer)}
                      className={selectedPolymer === polymer ? "bg-maroon hover:bg-maroon/90" : "border-maroon text-maroon"}
                    >
                      {polymer}
                    </Button>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                  <SelectTrigger className="w-36">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {months.map((month) => (
                      <SelectItem key={month} value={month}>{month}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={selectedYear} onValueChange={setSelectedYear}>
                  <SelectTrigger className="w-28">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map((year) => (
                      <SelectItem key={year} value={year}>{year}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Reports */}
        <div className="space-y-6">
          {reports.map((report, index) => (
            <Card key={index} className="border-2 border-maroon">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-maroon mb-2">{report.title}</h2>
                    <p className="text-sm text-muted-foreground">{report.date}</p>
                  </div>
                  <Button variant="outline" size="sm" className="border-maroon text-maroon">
                    <Download className="h-4 w-4 mr-2" />
                    PDF
                  </Button>
                </div>

                <div className="grid gap-4">
                  {report.sections.map((section, idx) => (
                    <div key={idx} className="border-l-4 border-maroon pl-4 py-2">
                      <h3 className="font-bold text-lg text-maroon mb-1">{section.title}</h3>
                      <p className="text-sm text-muted-foreground">{section.content}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FutureTrend;
