"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";

export default function Navbar() {
  return (
    <header className="flex items-center gap-4 border-b bg-white px-6 py-3">
      <SidebarTrigger className="hover:cursor-pointer" />
      <h1 className="text-lg font-medium">See my CV</h1>
    </header>
  );
}
