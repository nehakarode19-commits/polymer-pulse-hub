import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  ShoppingCart,
  Droplet,
  Globe2,
  MapPin,
  TrendingUp,
  BarChart3,
  Factory,
  Plane,
  FileText,
  Calendar,
  MessageCircle,
  CreditCard,
  Users,
  ImageIcon,
  FileCode,
  Bell,
  Settings,
  Shield,
  Briefcase,
} from "lucide-react";
import { cn } from "@/lib/utils";

const adminMenuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/admin" },
  { icon: Shield, label: "Roles & Users", path: "/admin/users" },
  { icon: ShoppingCart, label: "Buy & Sell", path: "/admin/buy-sell" },
  { icon: Droplet, label: "Crude & Feedstock", path: "/admin/crude-feedstock" },
  { icon: Globe2, label: "Global Bazaar", path: "/admin/global-bazaar" },
  { icon: MapPin, label: "Indian Bazaar", path: "/admin/indian-bazaar" },
  { icon: BarChart3, label: "Historical Data", path: "/admin/historical-data" },
  { icon: TrendingUp, label: "Future Trend", path: "/admin/future-trend" },
  { icon: Factory, label: "Plant News", path: "/admin/plant-news" },
  { icon: Plane, label: "Delegations", path: "/admin/vip-delegation" },
  { icon: FileText, label: "Press Release", path: "/admin/press-release" },
  { icon: Calendar, label: "Events", path: "/admin/events" },
  { icon: Briefcase, label: "Careers", path: "/admin/careers" },
  { icon: CreditCard, label: "Payments", path: "/admin/subscriptions" },
  { icon: MessageCircle, label: "WhatsApp Bot", path: "/admin/whatsapp-bot" },
  { icon: Users, label: "User Management", path: "/admin/user-management" },
  { icon: ImageIcon, label: "Media Library", path: "/admin/media" },
  { icon: FileCode, label: "CMS Pages", path: "/admin/cms-pages" },
  { icon: Bell, label: "Notifications", path: "/admin/notifications" },
  { icon: Settings, label: "Settings", path: "/admin/settings" },
];

export const AdminSidebar = () => {
  const location = useLocation();

  return (
    <aside className="w-64 border-r bg-muted/40 min-h-screen flex flex-col">
      <div className="p-6 border-b">
        <h2 className="text-lg font-bold text-primary">Admin Panel</h2>
        <p className="text-xs text-muted-foreground mt-1">Content Management System</p>
      </div>
      
      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
        {adminMenuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center space-x-3 px-3 py-2.5 rounded-md text-sm font-medium transition-all",
                isActive
                  ? "bg-primary text-white shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              <Icon className="h-4 w-4 flex-shrink-0" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};
