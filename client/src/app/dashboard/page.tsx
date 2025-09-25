"use client";

import Documents from "@/app/components/Documents";
import { UploadCloudIcon } from "lucide-react";
import React from "react";

export const DashboardPage = () => {
  return (
    <div className="mx-auto h-full max-w-7xl">
      <h1 className="m-2 text-3xl font-thin tracking-tighter text-neutral-800">
        My Documents
      </h1>
      <Documents />
    </div>
  );
};
export default DashboardPage;
