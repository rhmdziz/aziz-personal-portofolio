"use client";

import Navbar from "@/components/cv/navbar";
import AppSidebar from "@/components/cv/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function CvLayout({ children }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />

        <div className="flex flex-1 flex-col ">
          <Navbar />
          <div className="flex-1 p-8 flex justify-center">
            <div className="w-full max-w-4xl">{children}</div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
