"use client";

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
  useSidebar,
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
const BrandMark = () => (
  <Image
    src="/logo.svg"
    alt="FCA logo"
    width={32}
    height={32}
    className="h-8 w-auto"
  />
);

const items = [
  { title: "Dashboard", url: "/home", icon: LayoutDashboard },
  { title: "Clients", url: "/clients", icon: Users },
  { title: "Contracts", url: "/contracts", icon: FileText },
  { title: "Buildings", url: "/buildings", icon: Building2 },
  { title: "Reports", url: "/reports", icon: FileChartPie },
];

export const AppSidebar = () => {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon" className="group/sidebar">
      <SidebarHeader className="p-2">
        {isCollapsed ? (
          <div className="relative flex h-9 w-full items-center justify-center">
            <Link
              href="/"
              className="flex h-9 w-full items-center justify-center rounded-md transition-opacity duration-200 group-hover/sidebar:pointer-events-none group-hover/sidebar:opacity-0"
            >
              <BrandMark />
            </Link>
            <SidebarTrigger
              className="absolute inset-0 m-auto size-9 pointer-events-none opacity-0 transition-opacity duration-200 group-hover/sidebar:pointer-events-auto group-hover/sidebar:opacity-100 focus-visible:pointer-events-auto focus-visible:opacity-100"
              aria-label="Expand sidebar"
            />
          </div>
        ) : (
          <div className="flex items-center justify-between gap-2">
            <Link
              href="/"
              className="flex items-center gap-2 rounded-md px-2 py-1.5 text-base font-semibold leading-none"
            >
              <BrandMark />
              <span className="truncate">FCA</span>
            </Link>
            <SidebarTrigger className="shrink-0" />
          </div>
        )}
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    tooltip={item.title}
                    className="group-data-[collapsible=icon]/sidebar:justify-center group-data-[collapsible=icon]/sidebar:gap-0"
                  >
                    <Link href={item.url}>
                      <item.icon className="size-5" />
                      <span className="group-data-[collapsible=icon]/sidebar:hidden">
                        {item.title}
                      </span>
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
                <SidebarMenuButton className="group-data-[collapsible=icon]/sidebar:justify-center group-data-[collapsible=icon]/sidebar:gap-0">
                  <User2 className="size-5" />
                  <span className="group-data-[collapsible=icon]/sidebar:hidden">
                    Username
                  </span>
                  <ChevronUp className="ml-auto group-data-[collapsible=icon]/sidebar:hidden" />
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
