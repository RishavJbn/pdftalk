"use client"
import FileUploader from '@/components/FileUploader'
import React from 'react'

const page = () => {
  return (
    <div>
        <h1 className='text-purple-400 font-medium text-xl p-4' >Upload Your Document</h1>
      <FileUploader/>  
    </div>
  )
}

export default page