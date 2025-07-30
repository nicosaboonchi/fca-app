"use client";
import React from "react";
import {
  LayoutDashboard,
  Users,
  FileText,
  Building2,
  FileChartPie,
} from "lucide-react";
import Header from "@/components/header";
import SideBar from "@/components/SideBar";

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
  return (
    <div className="flex min-h-screen bg-gray-50">
      <SideBar links={links} />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
