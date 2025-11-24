import { ReactNode } from "react";
import { AdminSidebar } from "./AdminSidebar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home, LogOut } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

interface AdminLayoutProps {
  children: ReactNode;
}

export const AdminLayout = ({ children }: AdminLayoutProps) => {
  const { signOut } = useAuth();

  return (
    <div className="flex min-h-screen w-full">
      <AdminSidebar />
      
      <div className="flex-1 flex flex-col">
        {/* Admin Header */}
        <header className="border-b bg-background sticky top-0 z-10">
          <div className="flex items-center justify-between h-16 px-6">
            <h1 className="text-xl font-semibold">Polymer Bazaar CMS</h1>
            
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" asChild>
                <Link to="/">
                  <Home className="h-4 w-4 mr-2" />
                  View Site
                </Link>
              </Button>
              
              <Button variant="ghost" size="sm" onClick={signOut}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </header>

        {/* Admin Content */}
        <main className="flex-1 p-6 bg-background">
          {children}
        </main>
      </div>
    </div>
  );
};
