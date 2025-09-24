"use client"
import { CircleArrowDown, RocketIcon } from "lucide-react";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const FileUploader = () => {
 const onDrop = useCallback((acceptedFiles: File[]) => {
   // Do something with the files
   console.log(acceptedFiles);
 }, []);
 const { getRootProps, getInputProps, isDragActive ,isFocused } = useDropzone({ onDrop });

  return (
    <div className={`border-2 border-indigo-600 border-dashed rounded-lg h-96 flex justify-center items-center bg-sky-100 m-6 ${isDragActive || isFocused ? "bg-indigo-300":"bg-indigo-50"} `}>
      <div {...getRootProps()} className="flex flex-col gap-2 items-center justify-center">
        <input {...getInputProps()} />
        {isDragActive ? (
            <>
            <RocketIcon className="animate-ping w-20 h-20"/>
          <p >Drop the files here ...</p>
            </>
        ) : (
            <>
       <CircleArrowDown className="animate-bounce h-16 w-16" />
          <p>Drag and drop some files here, or click to select files</p>
            </>
        )}
      </div>
    </div>
  );
};

export default FileUploader;
