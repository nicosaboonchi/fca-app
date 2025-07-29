"use client";
import React, { useState } from "react";
import { PanelLeft, LayoutDashboard, Users, FileText } from "lucide-react";
import { Button } from "@/components/button";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={`${
        isCollapsed ? "w-[56px] px-2" : "w-[240px] px-4"
      } min-h-svh bg-primary py-4 gap-6 flex flex-col justify-between transition-all duration-300 ease-out`}
    >
      <div className="flex flex-col gap-4">
        <div
          className={`flex ${
            isCollapsed ? "justify-center" : "justify-between"
          } pb-4`}
        >
          <img
            width={26}
            height={26}
            src="Vector.svg"
            alt="Vector"
            className={isCollapsed ? "hidden" : "block"}
          />
          <Button size="icon" onClick={() => setIsCollapsed(!isCollapsed)}>
            <PanelLeft width={18} height={18} className="text-white" />
          </Button>
        </div>
        <Button variant="ghost" size={isCollapsed ? "icon" : "md"}>
          <LayoutDashboard className="text-white" />
          <span className={`text-white ${isCollapsed ? "hidden" : "block"}`}>
            Dashboard
          </span>
        </Button>
        <Button variant="ghost" size={isCollapsed ? "icon" : "md"}>
          <Users className="text-white" />
          <span className={`text-white ${isCollapsed ? "hidden" : "block"}`}>
            Clients
          </span>
        </Button>
        <Button variant="ghost" size={isCollapsed ? "icon" : "md"}>
          <FileText className="text-white" />
          <span className={`text-white ${isCollapsed ? "hidden" : "block"}`}>
            Contracts
          </span>
        </Button>
      </div>
      <div className="bg-gray-300">profile</div>
    </div>
  );
};

export default Layout;
