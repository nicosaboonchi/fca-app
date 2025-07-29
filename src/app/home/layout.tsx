"use client";
import React, { useState } from "react";
import {
  PanelLeft,
  LayoutDashboard,
  Users,
  FileText,
  Building2,
  FileChartPie,
} from "lucide-react";
import { Button } from "@/components/button";
import Image from "next/image";

const links = [
  {
    name: "Dashboard",
    icon: <LayoutDashboard className="text-white" />,
  },
  {
    name: "Clients",
    icon: <Users className="text-white" />,
  },
  {
    name: "Contracts",
    icon: <FileText className="text-white" />,
  },
  {
    name: "Buildings",
    icon: <Building2 className="text-white" />,
  },
  {
    name: "Reports",
    icon: <FileChartPie className="text-white" />,
  },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex h-screen">
      <div
        className={`${
          isCollapsed ? "w-[56px] px-2" : "w-[240px] px-4"
        } min-h-svh bg-primary py-4 gap-6 flex flex-col justify-between transition-all duration-300 ease-in-out`}
      >
        <div className="flex flex-col gap-4">
          <div
            className={`flex ${
              isCollapsed ? "justify-center" : "justify-between"
            } pb-4`}
          >
            <Image
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
          {links.map((link, index) => (
            <Button
              key={index}
              variant="sidebar"
              size={isCollapsed ? "icon" : "md"}
            >
              {link.icon}
              <span
                className={`text-white ${isCollapsed ? "hidden" : "block"}`}
              >
                {link.name}
              </span>
            </Button>
          ))}
        </div>

        <div className="flex items-center gap-3 h-10 w-full">
          <div className="h-full aspect-square">
            <Image
              src="/avatar.png"
              alt="profile"
              width={40}
              height={40}
              className="w-full h-full rounded-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center min-w-0 flex-1">
            <span
              className={`text-white leading-tight truncate ${isCollapsed ? "hidden" : "block"}`}
            >
              Nico Saboonchi
            </span>
            <span
              className={`${isCollapsed ? "hidden" : "block"} text-gray-400 text-sm leading-tight truncate`}
            >
              Application Developer
            </span>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
            <p className="text-sm text-gray-500">Welcome back, Nico</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline">Settings</Button>
            <Button>New Project</Button>
          </div>
        </header>

        <main className="flex-1 bg-gray-50 overflow-auto p-6">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
