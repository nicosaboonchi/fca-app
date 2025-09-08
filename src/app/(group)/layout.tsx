import React from "react";
import { SidebarProvider, SidebarTrigger } from "../components/ui/sidebar";
import { AppSidebar } from "../components/app-sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <header className="flex items-center h-16 shrink-0">
          <div className="flex items-center px-4 gap-2">
            <SidebarTrigger />
            <h1 className="text-md font-semibold">Dashboard</h1>
          </div>
        </header>
        {children}
      </main>
    </SidebarProvider>
  );
};

export default Layout;
