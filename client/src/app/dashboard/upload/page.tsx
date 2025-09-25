"use client";
import FileUploader from "@/app/components/FileUploader";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="p-4 text-xl font-medium text-purple-400">
        Upload Your Document
      </h1>
      <FileUploader />
    </div>
  );
};

export default page;
