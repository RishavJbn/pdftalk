"use client";

import Header from "@/components/Header";
import { ClerkLoaded } from "@clerk/nextjs";
import { ReactNode } from "react";

const Dashboardlayout = ({ children }: { children: ReactNode }) => {
  return (
    <ClerkLoaded>
      <div className="relative min-h-screen w-full">
        {/* Purple Radial Bloom Light Gradient */}
        <div className="absolute inset-0 -z-1" />
        {/* Your Content Here */}
        <div className="h-screen flex-1 flex-col">
          <Header />
          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
      </div>
    </ClerkLoaded>
  );
};
export default Dashboardlayout;
