import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User, FileText, CreditCard, Check, X, Clock } from "lucide-react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("All Status");
  
  const [profileData, setProfileData] = useState({
    name: "Hiren Shah",
    aadhar: "XXXX XXXX 1234",
    mobile: "+91 9374624365",
    city: "Ahmedabad",
    email: "hiren.shah@example.com",
  });

  const transactions = [
    { id: "TXN001", amount: "₹5,500", date: "01 Jun 2024", mode: "UPI", status: "Success" },
    { id: "TXN002", amount: "₹5,500", date: "01 Jun 2023", mode: "Credit Card", status: "Success" },
    { id: "TXN003", amount: "₹5,500", date: "15 May 2023", mode: "Net Banking", status: "Failed" },
    { id: "TXN004", amount: "₹2,500", date: "10 May 2023", mode: "Debit Card", status: "Pending" },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Success":
        return <Check className="h-4 w-4 text-green-600" />;
      case "Failed":
        return <X className="h-4 w-4 text-red-600" />;
      case "Pending":
        return <Clock className="h-4 w-4 text-warning" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Success":
        return "bg-green-100 text-green-800";
      case "Failed":
        return "bg-red-100 text-red-800";
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "";
    }
  };

  const filteredTransactions = selectedStatus === "All Status"
    ? transactions
    : transactions.filter(t => t.status === selectedStatus);

  return (
    <div className="min-h-screen py-12 px-4 bg-secondary">
      <div className="container max-w-6xl mx-auto">
        {/* Profile Header */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="h-10 w-10 text-primary" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">{profileData.name}</h1>
                <Badge className="mt-1">Premium Member</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="profile">My Profile</TabsTrigger>
            <TabsTrigger value="subscription">My Subscription</TabsTrigger>
            <TabsTrigger value="payment-history">Payment History</TabsTrigger>
          </TabsList>

          {/* My Profile Tab */}
          <TabsContent value="profile">
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold">Personal Information</h2>
                  <Button
                    variant={isEditing ? "outline" : "default"}
                    onClick={() => setIsEditing(!isEditing)}
                  >
                    {isEditing ? "Cancel" : "Edit"}
                  </Button>
                </div>

                {isEditing ? (
                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          value={profileData.name}
                          onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="aadhar">Aadhar Card</Label>
                        <Input
                          id="aadhar"
                          value={profileData.aadhar}
                          onChange={(e) => setProfileData({ ...profileData, aadhar: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="mobile">Mobile no</Label>
                        <Input
                          id="mobile"
                          type="tel"
                          value={profileData.mobile}
                          onChange={(e) => setProfileData({ ...profileData, mobile: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          value={profileData.city}
                          onChange={(e) => setProfileData({ ...profileData, city: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="email">Email id</Label>
                        <Input
                          id="email"
                          type="email"
                          value={profileData.email}
                          onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Button className="bg-primary hover:bg-primary-dark">Save Changes</Button>
                      <Button variant="outline" onClick={() => setIsEditing(false)}>Cancel</Button>
                    </div>
                  </form>
                ) : (
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label className="text-muted-foreground">Name</Label>
                      <p className="font-medium mt-1">{profileData.name}</p>
                    </div>
                    <div>
                      <Label className="text-muted-foreground">Mobile no</Label>
                      <p className="font-medium mt-1">{profileData.mobile}</p>
                    </div>
                    <div>
                      <Label className="text-muted-foreground">City</Label>
                      <p className="font-medium mt-1">{profileData.city}</p>
                    </div>
                    <div>
                      <Label className="text-muted-foreground">Email id</Label>
                      <p className="font-medium mt-1">{profileData.email}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* My Subscription Tab */}
          <TabsContent value="subscription">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Premium Plan</h2>
                    <p className="text-3xl font-bold text-primary">₹5,500 <span className="text-base font-normal text-muted-foreground">/ year</span></p>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Active</Badge>
                </div>

                <div className="bg-secondary p-4 rounded-lg mb-6">
                  <p className="text-sm text-muted-foreground mb-1">Active Period</p>
                  <p className="font-bold">01 Jun 2024 to 01 Jun 2025</p>
                  <p className="text-sm text-green-600 mt-2">Expires in 245 days</p>
                </div>

                <div className="mb-6">
                  <h3 className="font-bold mb-3">Plan Features</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>Unlimited Access to all polymer prices</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>Daily Market Reports via Email</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>Premium WhatsApp Notifications</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>Priority Customer Support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>Access to Historical Data</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>Future Trend Reports</span>
                    </li>
                  </ul>
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    View Invoice
                  </Button>
                  <Button className="bg-primary hover:bg-primary-dark">
                    Upgrade Plan
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Payment History Tab */}
          <TabsContent value="payment-history">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <Input placeholder="Search transactions..." className="md:w-64" />
                  <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                    <SelectTrigger className="md:w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="All Status">All Status</SelectItem>
                      <SelectItem value="Success">Success</SelectItem>
                      <SelectItem value="Pending">Pending</SelectItem>
                      <SelectItem value="Failed">Failed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Transaction Id</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Mode</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredTransactions.map((transaction) => (
                        <TableRow key={transaction.id}>
                          <TableCell className="font-medium">{transaction.id}</TableCell>
                          <TableCell>{transaction.amount}</TableCell>
                          <TableCell>{transaction.date}</TableCell>
                          <TableCell>{transaction.mode}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              {getStatusIcon(transaction.status)}
                              <Badge variant="outline" className={getStatusColor(transaction.status)}>
                                {transaction.status}
                              </Badge>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
