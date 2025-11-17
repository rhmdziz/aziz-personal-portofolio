"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarFooter,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

import { MenuSquare, Edit3, Layers, Download, User } from "lucide-react";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function AppSidebar() {
  const pathname = usePathname();

  const menu = [
    { href: "/cv/aziz", label: "Dashboard", icon: MenuSquare },
    { href: "/cv/download", label: "Download", icon: Download },
  ];

  const settings = [
    { href: "/cv/settings/account", label: "Account", icon: User },
  ];

  return (
    <Sidebar>
      <SidebarHeader className="border-b px-4 py-3 bg-[#f6f6f6]">
        <h2 className="text-xl font-semibold">My CV</h2>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menu.map((item, i) => (
                <SidebarMenuItem key={i}>
                  <SidebarMenuButton asChild className="hover:bg-gray-100 text-sm">
                    <Link
                      href={item.href}
                      className={cn(
                        "flex w-full items-center rounded-md px-3 py-2 text-sm transition-all",
                        pathname === item.href ? "bg-gray-100" : ""
                      )}
                    >
                      <item.icon className="h-4 w-4" />
                      {item.label}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t p-4">
        <SidebarMenu>
          {settings.map((item, i) => (
            <SidebarMenuItem key={i}>
              <SidebarMenuButton asChild>
                <Link
                  href={item.href}
                  className={cn(
                    "flex w-full items-center rounded-md px-3 py-2 text-sm transition-all",
                    pathname === item.href
                      ? "bg-blue-500 text-white font-semibold shadow"
                      : "text-gray-700 hover:bg-gray-100"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
