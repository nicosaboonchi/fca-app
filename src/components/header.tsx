import React from "react";
import { Bell, Settings } from "lucide-react";
import { Button } from "@/components/button";
import { Input } from "@/components/input";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      {/* Left side - Title/Breadcrumbs */}
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      </div>

      {/* Center - Search */}
      <div className="flex-1 max-w-md mx-8">
        <Input type="text" placeholder="Search..." className="w-full" />
      </div>

      {/* Right side - Actions */}
      <div className="flex items-center gap-2">
        <Button size="icon" variant="ghost">
          <Bell className=" text-gray-600" />
        </Button>
        <Button size="icon" variant="ghost">
          <Settings className=" text-gray-600" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
