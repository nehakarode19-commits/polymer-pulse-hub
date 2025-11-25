import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, Search } from "lucide-react";

const AdminUsers = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">User Roles & Management</h1>
          <p className="text-muted-foreground mt-2">
            Manage user roles and permissions
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Assign Role
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>User Role Assignment</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <Label htmlFor="search">Search User</Label>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="search"
                  placeholder="Search by email or name..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="w-48">
              <Label htmlFor="role-filter">Filter by Role</Label>
              <Select>
                <SelectTrigger id="role-filter">
                  <SelectValue placeholder="All Roles" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Roles</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="editor">Editor</SelectItem>
                  <SelectItem value="analyst">Analyst</SelectItem>
                  <SelectItem value="viewer">Viewer</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="border rounded-lg">
            <div className="p-4 text-center text-muted-foreground">
              <p>No users found. User management interface will be implemented here.</p>
              <p className="text-sm mt-2">
                This module will display all users with their roles and allow role assignment.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Role Definitions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-semibold">Admin</h3>
              <p className="text-sm text-muted-foreground">
                Full access to all modules, can manage users and roles
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold">Editor</h3>
              <p className="text-sm text-muted-foreground">
                Can create, edit, and delete content across all modules
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold">Analyst</h3>
              <p className="text-sm text-muted-foreground">
                Can view and analyze data, create reports
              </p>
            </div>
            <div className="border-l-4 border-border pl-4">
              <h3 className="font-semibold">Viewer</h3>
              <p className="text-sm text-muted-foreground">
                Read-only access to content and reports
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminUsers;
