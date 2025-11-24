import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown } from "lucide-react";

const IndianBazaar = () => {
  const [selectedMonth, setSelectedMonth] = useState("March");
  const [selectedYear, setSelectedYear] = useState("2024");

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const years = ["2024", "2023", "2022"];

  return (
    <div className="min-h-screen">
      <section className="gradient-hero text-white py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Indian Bazaar</h1>
          <p className="text-xl text-white/90">
            Comprehensive Indian polymer market intelligence and pricing
          </p>
        </div>
      </section>

      <div className="container max-w-7xl mx-auto py-12 px-4">
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex gap-4">
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
          </CardContent>
        </Card>

        <Tabs defaultValue="city-wise" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
            <TabsTrigger value="city-wise">City Wise</TabsTrigger>
            <TabsTrigger value="rate-revision">Rate Revision</TabsTrigger>
            <TabsTrigger value="price-prediction">Price Prediction</TabsTrigger>
            <TabsTrigger value="company-price">Company Price List</TabsTrigger>
            <TabsTrigger value="exchange-rate">US$-INR Rate</TabsTrigger>
            <TabsTrigger value="bopp-film">BOPP Film</TabsTrigger>
            <TabsTrigger value="govt-policies">Govt Policies</TabsTrigger>
          </TabsList>

          <TabsContent value="city-wise">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">City Wise Rates - Ahmedabad</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Company</TableHead>
                      <TableHead>Product/Grade</TableHead>
                      <TableHead>Rate (₹/Kg)</TableHead>
                      <TableHead>Change</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">IOCL</TableCell>
                      <TableCell>PP Film 94.5</TableCell>
                      <TableCell>94.50</TableCell>
                      <TableCell className="text-green-600">+2.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">RIL</TableCell>
                      <TableCell>HDPE Injection</TableCell>
                      <TableCell>92.00</TableCell>
                      <TableCell className="text-red-600">-1.50</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">GAIL</TableCell>
                      <TableCell>LLDPE Film</TableCell>
                      <TableCell>88.50</TableCell>
                      <TableCell className="text-green-600">+1.00</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="rate-revision">
            <div className="space-y-4">
              <Card className="border-l-4 border-l-green-500">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-lg mb-1">Jindal - BOPP TT</h3>
                      <p className="text-sm text-muted-foreground">Effective: WEF 15th March 2024</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800 flex items-center gap-1">
                      <TrendingUp className="h-3 w-3" />
                      +2 ₹/Kg
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-red-500">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-lg mb-1">Jindal - BOPP NTT</h3>
                      <p className="text-sm text-muted-foreground">Effective: WEF 15th March 2024</p>
                    </div>
                    <Badge className="bg-red-100 text-red-800 flex items-center gap-1">
                      <TrendingDown className="h-3 w-3" />
                      -6 ₹/Kg
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="price-prediction">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Price Prediction - 19 Dec 2024</h3>
                <p className="text-muted-foreground mb-6">
                  Basis in-depth study, here is the indication for price by Polymer Bazaar:
                </p>
                <div className="space-y-4">
                  <div className="bg-secondary p-4 rounded-lg">
                    <h4 className="font-bold mb-2">PP (Polypropylene)</h4>
                    <p className="text-sm text-muted-foreground">
                      Likely to remain stable to firm. Supply constraints from maintenance activities 
                      and healthy downstream demand expected to support prices.
                    </p>
                  </div>
                  <div className="bg-secondary p-4 rounded-lg">
                    <h4 className="font-bold mb-2">HDPE</h4>
                    <p className="text-sm text-muted-foreground">
                      May see modest increases of ₹1-2/kg on raw material cost push and improved demand 
                      from pipe and film sectors.
                    </p>
                  </div>
                  <div className="bg-secondary p-4 rounded-lg">
                    <h4 className="font-bold mb-2">PVC</h4>
                    <p className="text-sm text-muted-foreground">
                      Expected to remain under pressure from import competition. Domestic producers 
                      may offer discounts to maintain market share.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="company-price">
            <div className="space-y-4">
              {["Jindal", "RIL", "IOCL"].map((company) => (
                <Card key={company}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-bold text-lg">{company}</h3>
                        <p className="text-sm text-muted-foreground">March 1, 2025 - PP, PE, PVC</p>
                      </div>
                      <a href="#" className="text-primary hover:underline">Price list link →</a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="exchange-rate">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4">Import of Goods</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Exchange Rate (1$)</span>
                      <span className="font-bold">₹83.25</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Change</span>
                      <span className="text-green-600">+0.35</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">WEF</span>
                      <span>15 Mar 2024</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4">Export of Goods</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Exchange Rate (1$)</span>
                      <span className="font-bold">₹83.10</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Change</span>
                      <span className="text-green-600">+0.28</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">WEF</span>
                      <span>15 Mar 2024</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="bopp-film">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">BOPP Film Rates</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Company</TableHead>
                      <TableHead>Grade</TableHead>
                      <TableHead>Rate (₹/Kg)</TableHead>
                      <TableHead>Change</TableHead>
                      <TableHead>WEF</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Jindal</TableCell>
                      <TableCell>BOPP TT</TableCell>
                      <TableCell>125.00</TableCell>
                      <TableCell className="text-green-600">+2.00</TableCell>
                      <TableCell>15 Mar 2024</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Jindal</TableCell>
                      <TableCell>BOPP NTT</TableCell>
                      <TableCell>118.00</TableCell>
                      <TableCell className="text-red-600">-6.00</TableCell>
                      <TableCell>15 Mar 2024</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="govt-policies">
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-2">March 18, 2024</p>
                  <h3 className="font-bold text-lg mb-3">
                    Government Announces New Plastic Waste Management Rules
                  </h3>
                  <p className="text-muted-foreground">
                    The Ministry of Environment has issued updated guidelines for plastic waste management,
                    including new extended producer responsibility (EPR) targets and recycling mandates
                    for polymer manufacturers and processors.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-2">March 10, 2024</p>
                  <h3 className="font-bold text-lg mb-3">
                    GST Rate Changes for Select Polymer Products
                  </h3>
                  <p className="text-muted-foreground">
                    The GST Council has revised tax rates for certain polymer products. LDPE film grades
                    will see a reduction from 18% to 12%, effective from April 1, 2024.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default IndianBazaar;
