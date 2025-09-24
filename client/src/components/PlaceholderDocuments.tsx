"use client"
import { PlusCircleIcon, UploadCloud } from "lucide-react"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"


const PlaceholderDocuments = () => {
    const router = useRouter();
    const handleClick =()=>{
        //user is paid or limit hit or not that the shit i am talking about
    router.push("/dashboard/upload");
    }
  return (
    <Button onClick={handleClick} className="flex flex-col h-96 min-h-96 text-md bg-gray-300 drop-shadow-md text-gray-400 border-2 border-neutral-600 w-64">
        <PlusCircleIcon className="!h-16 !w-16 " />
        <p>Upload Your documents here..</p>
    </Button>
  )
}

export default PlaceholderDocuments