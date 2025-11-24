import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Events = () => {
  const [selectedMonth, setSelectedMonth] = useState("November");
  const [selectedYear, setSelectedYear] = useState("2025");
  const [activeTab, setActiveTab] = useState("Upcoming");

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const years = ["2024", "2025", "2026"];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative h-72 bg-cover bg-center bg-no-repeat flex items-center justify-start"
        style={{
          backgroundImage: "linear-gradient(rgba(128, 0, 0, 0.7), rgba(128, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=80')"
        }}
      >
        <div className="container relative z-10 px-8">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-6xl font-black text-white drop-shadow-2xl"
          >
            Events
          </motion.h1>
        </div>
      </section>

      {/* Connect, Engage, Learn Section */}
      <section className="bg-background py-8 border-b border-border">
        <div className="container px-8">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-primary">
              <span className="text-2xl">✱</span>
              <span className="text-xl font-bold">Connect</span>
            </div>
            <div className="flex items-center gap-2 text-primary">
              <span className="text-2xl">🤝</span>
              <span className="text-xl font-bold">Engage</span>
            </div>
            <div className="flex items-center gap-2 text-primary">
              <span className="text-2xl">📚</span>
              <span className="text-xl font-bold">Learn</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="container px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80"
              alt="Events Conference"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </motion.div>

          {/* Right Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              <span className="font-bold">POLYMERBAZAAR</span> conferences and events bring together communities from across the value chain within the chemical and energy sectors. 
              Through our virtual, hybrid and face-to-face events, we aim to create a space to support, inspire and interact with our community networks.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With the safety and welfare of our customers and colleagues our utmost priority, we are gradually re-introducing face-to-face events towards the end of 2021 in a hybrid format, enabling local audiences to meet in-person while providing an 
              interactive virtual event experience for those unable to travel or with safety concerns. <span className="font-bold">POLYMERBAZAAR</span> is proud to have supported our communities through the pandemic by providing a space to connect, engage and learn.
            </p>
          </motion.div>
        </div>

        {/* Events Section */}
        <div className="mt-12">
          <h2 className="text-4xl font-bold text-primary mb-8">Events</h2>

          {/* Tabs and Filters */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            {/* Tabs */}
            <div className="flex gap-2">
              <Button
                variant={activeTab === "Upcoming" ? "default" : "outline"}
                onClick={() => setActiveTab("Upcoming")}
                className={activeTab === "Upcoming" ? "bg-primary" : ""}
              >
                Upcoming
              </Button>
              <Button
                variant={activeTab === "Past" ? "default" : "outline"}
                onClick={() => setActiveTab("Past")}
                className={activeTab === "Past" ? "bg-primary" : ""}
              >
                Past
              </Button>
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

          {/* Events List Placeholder */}
          <div className="text-center py-16 text-muted-foreground">
            <p className="text-lg">No {activeTab.toLowerCase()} events for {selectedMonth} {selectedYear}</p>
            <p className="text-sm mt-2">Check back later for upcoming events</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
