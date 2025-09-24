"use client"
import { Upload } from 'lucide-react'
import React from 'react'

export const Uploadui = () => {
  return (
    <div className="h-full w-full p-4 bg-slate-600">
      <span className='min-w-full'>
        <Upload />
      </span>
    </div>
  );
}
