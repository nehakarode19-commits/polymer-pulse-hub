import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  CreditCard, 
  TrendingUp, 
  Calendar, 
  Bell,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  BarChart3,
  Upload,
  PlusCircle,
  Edit,
  Settings
} from "lucide-react";
import { Link } from "react-router-dom";
import { 
  LineChart, 
  Line, 
  BarChart,
  Bar,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend 
} from "recharts";

const AdminDashboard = () => {
  // Mock data for pricing trends
  const pricingData = [
    { month: "Jan", PP: 1200, HDPE: 1100, LDPE: 1050, PVC: 980 },
    { month: "Feb", PP: 1250, HDPE: 1150, LDPE: 1080, PVC: 1000 },
    { month: "Mar", PP: 1180, HDPE: 1120, LDPE: 1060, PVC: 970 },
    { month: "Apr", PP: 1300, HDPE: 1200, LDPE: 1100, PVC: 1020 },
    { month: "May", PP: 1280, HDPE: 1180, LDPE: 1090, PVC: 1010 },
    { month: "Jun", PP: 1350, HDPE: 1250, LDPE: 1150, PVC: 1050 },
  ];

  const statsCards = [
    {
      title: "Total Users",
      value: "2,543",
      change: "+12.5%",
      trend: "up",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "Active Subscribers",
      value: "1,847",
      change: "+8.2%",
      trend: "up",
      icon: CreditCard,
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      title: "Today's Price Updates",
      value: "127",
      change: "+23%",
      trend: "up",
      icon: TrendingUp,
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      title: "Upcoming Events",
      value: "14",
      change: "-2",
      trend: "down",
      icon: Calendar,
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      title: "Active Alerts",
      value: "89",
      change: "+5",
      trend: "up",
      icon: Bell,
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      title: "Monthly Revenue",
      value: "₹4.2L",
      change: "+15.3%",
      trend: "up",
      icon: DollarSign,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50"
    }
  ];

  const quickActions = [
    { title: "Manage Prices", icon: Edit, path: "/admin/global-bazaar", color: "bg-primary hover:bg-primary/90" },
    { title: "Add Events", icon: PlusCircle, path: "/admin/events", color: "bg-green-600 hover:bg-green-700" },
    { title: "Upload Data", icon: Upload, path: "/admin/historical-data", color: "bg-blue-600 hover:bg-blue-700" },
    { title: "Manage Subscriptions", icon: CreditCard, path: "/admin/subscriptions", color: "bg-purple-600 hover:bg-purple-700" },
    { title: "Analytics", icon: BarChart3, path: "/admin/future-trend", color: "bg-orange-600 hover:bg-orange-700" },
    { title: "Settings", icon: Settings, path: "/admin/settings", color: "bg-slate-600 hover:bg-slate-700" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-muted-foreground mt-2">
          Welcome to the Polymer Bazaar CMS & Data Management System
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {statsCards.map((stat, index) => {
          const Icon = stat.icon;
          const TrendIcon = stat.trend === "up" ? ArrowUpRight : ArrowDownRight;
          
          return (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <div className={`${stat.bgColor} p-2 rounded-lg`}>
                  <Icon className={`h-4 w-4 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="flex items-center mt-1">
                  <TrendIcon className={`h-3 w-3 mr-1 ${stat.trend === "up" ? "text-green-600" : "text-red-600"}`} />
                  <p className={`text-xs ${stat.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                    {stat.change} from last month
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Pricing Trends Charts */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Polymer Price Trends (6 Months)</CardTitle>
            <p className="text-sm text-muted-foreground">Monthly average prices in USD/MT</p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={pricingData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="PP" stroke="#e53935" strokeWidth={2} />
                <Line type="monotone" dataKey="HDPE" stroke="#3b82f6" strokeWidth={2} />
                <Line type="monotone" dataKey="LDPE" stroke="#10b981" strokeWidth={2} />
                <Line type="monotone" dataKey="PVC" stroke="#f59e0b" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Price Comparison by Polymer Type</CardTitle>
            <p className="text-sm text-muted-foreground">Current month comparison</p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={pricingData.slice(-1)}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="PP" fill="#e53935" />
                <Bar dataKey="HDPE" fill="#3b82f6" />
                <Bar dataKey="LDPE" fill="#10b981" />
                <Bar dataKey="PVC" fill="#f59e0b" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <p className="text-sm text-muted-foreground">Access frequently used modules</p>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <Link key={index} to={action.path}>
                  <Button 
                    className={`w-full h-24 ${action.color} text-white flex flex-col items-center justify-center gap-2`}
                    size="lg"
                  >
                    <Icon className="h-6 w-6" />
                    <span className="font-semibold">{action.title}</span>
                  </Button>
                </Link>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <p className="text-sm text-muted-foreground">Latest actions across all modules</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between border-l-4 border-primary pl-4 py-2">
              <div>
                <p className="font-medium">Price update - PP Grade</p>
                <p className="text-sm text-muted-foreground">Global Bazaar • 2 hours ago</p>
              </div>
              <Badge className="bg-primary/10 text-primary">Updated</Badge>
            </div>
            <div className="flex items-center justify-between border-l-4 border-green-600 pl-4 py-2">
              <div>
                <p className="font-medium">New event published</p>
                <p className="text-sm text-muted-foreground">Events • 5 hours ago</p>
              </div>
              <Badge className="bg-green-100 text-green-800">Published</Badge>
            </div>
            <div className="flex items-center justify-between border-l-4 border-blue-600 pl-4 py-2">
              <div>
                <p className="font-medium">Historical data uploaded</p>
                <p className="text-sm text-muted-foreground">Historical Data • 1 day ago</p>
              </div>
              <Badge className="bg-blue-100 text-blue-800">Completed</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Badge component for activity items
const Badge = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <span className={`px-2 py-1 text-xs font-medium rounded-full ${className}`}>
    {children}
  </span>
);

export default AdminDashboard;
