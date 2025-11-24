import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const IndianBazaar = () => {
  const [selectedMonth, setSelectedMonth] = useState("November");
  const [selectedYear, setSelectedYear] = useState("2025");
  const [selectedCity, setSelectedCity] = useState("Ahmedabad");

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const years = ["2025", "2024", "2023"];
  const cities = ["Ahmedabad", "Mumbai", "Delhi", "Bangalore", "Chennai"];

  return (
    <div className="min-h-screen">
      <section className="gradient-hero text-white py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Indian Bazaar</h1>
        </div>
      </section>

      <div className="container max-w-7xl mx-auto py-12 px-4">
        {/* Header */}
        <div className="bg-maroon text-white p-4 mb-6 flex items-center justify-between">
          <div className="flex items-center">
            <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5z"/>
            </svg>
            <h2 className="text-xl font-bold">Indian Bazaar</h2>
          </div>
          <div className="flex gap-3">
            <Select value={selectedMonth} onValueChange={setSelectedMonth}>
              <SelectTrigger className="w-36 bg-white text-foreground">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {months.map((month) => (
                  <SelectItem key={month} value={month}>{month}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger className="w-28 bg-white text-foreground">
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

        <Tabs defaultValue="city-wise" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
            <TabsTrigger value="city-wise">City Wise</TabsTrigger>
            <TabsTrigger value="rate-revision">Rate Revision</TabsTrigger>
            <TabsTrigger value="price-prediction">Price Prediction</TabsTrigger>
            <TabsTrigger value="company-price">Company Price List</TabsTrigger>
            <TabsTrigger value="exchange-rate">US$-INR Custom Exchange Rate</TabsTrigger>
            <TabsTrigger value="bopp-film">BOPP Film (TT & NTT)</TabsTrigger>
            <TabsTrigger value="govt-policies">Indian Government Policies</TabsTrigger>
          </TabsList>

          <TabsContent value="city-wise">
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-end mb-4">
                  <Select value={selectedCity} onValueChange={setSelectedCity}>
                    <SelectTrigger className="w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {cities.map((city) => (
                        <SelectItem key={city} value={city}>{city}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-maroon">LDPE</TableHead>
                      <TableHead></TableHead>
                      <TableHead className="text-maroon">LDPE</TableHead>
                      <TableHead></TableHead>
                      <TableHead className="text-maroon">LDPE</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>24FS040</TableCell>
                      <TableCell className="text-center">₹112.5</TableCell>
                      <TableCell>16MA400</TableCell>
                      <TableCell className="text-center">₹122</TableCell>
                      <TableCell>16MA400</TableCell>
                      <TableCell className="text-center">₹122</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>16MA400</TableCell>
                      <TableCell className="text-center">₹122</TableCell>
                      <TableCell>24FS040</TableCell>
                      <TableCell className="text-center">₹122</TableCell>
                      <TableCell>24FS040</TableCell>
                      <TableCell className="text-center">₹122</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>

                <div className="mt-6">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-maroon">Crude</TableHead>
                        <TableHead></TableHead>
                        <TableHead className="text-maroon">EDC</TableHead>
                        <TableHead></TableHead>
                        <TableHead className="text-maroon">Ethylene</TableHead>
                        <TableHead></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Blow Mld</TableCell>
                        <TableCell className="text-center">₹500</TableCell>
                        <TableCell>Brent</TableCell>
                        <TableCell className="text-center">₹500</TableCell>
                        <TableCell>C and F Japan</TableCell>
                        <TableCell className="text-center">₹500</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="rate-revision">
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground">Latest rate revisions from major producers will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="price-prediction">
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground">Market price predictions and forecasts will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="company-price">
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground">Company wise price lists will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="exchange-rate">
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground">US$ to INR exchange rate information will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="bopp-film">
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground">BOPP Film (TT & NTT) pricing and information will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="govt-policies">
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground">Indian government policies affecting polymer industry will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default IndianBazaar;
