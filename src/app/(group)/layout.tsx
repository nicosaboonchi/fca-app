import React from "react";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "../components/ui/sidebar";
import { AppSidebar } from "../components/app-sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <main className="w-full flex-1 flex flex-col">
          <header className="flex items-center h-16 shrink-0 transition-[width, height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
            <div className="flex items-center px-4 gap-2">
              <SidebarTrigger />
            </div>
          </header>
          <div className="p-4 pt-0">{children}</div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Layout;
