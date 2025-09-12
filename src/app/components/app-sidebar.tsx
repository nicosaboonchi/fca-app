import Image from "next/image";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "./ui/sidebar";
import {
  LayoutDashboard,
  Users,
  FileText,
  Building2,
  FileChartPie,
  User2,
  ChevronUp,
  LogOut,
  Settings,
  Bell,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

const items = [
  { title: "Dashboard", url: "/home", icon: LayoutDashboard },
  { title: "Clients", url: "/clients", icon: Users },
  { title: "Contracts", url: "/contracts", icon: FileText },
  { title: "Buildings", url: "/buildings", icon: Building2 },
  { title: "Reports", url: "/reports", icon: FileChartPie },
];

export const AppSidebar = () => {
  return (
    <Sidebar collapsible="icon" className="group/sidebar">
      <SidebarHeader className="flex flex-row items-center justify-between group">
        <Button asChild size="icon" variant="ghost" className="relative">
          <span>
            <FileText className="absolute transition-opacity duration-200 opacity-0 group-hover:opacity-100 " />
            <SidebarTrigger className="transition-opacity duration-200 opacity-100 group-hover:opacity-0" />
          </span>
        </Button>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> Username
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[var(--radix-popper-anchor-width)]"
              >
                <DropdownMenuItem>
                  <User2 />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Bell />
                  <span>Notifications</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LogOut />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};
