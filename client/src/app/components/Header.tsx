"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Upload } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="m-auto flex items-center justify-around gap-4 rounded-xl border-b-2 bg-white p-2 pt-4 text-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] mb-6">
      <div className="hover:text-shadow cursor-pointer rounded-lg p-2 font-semibold text-indigo-500 hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.25)]">
        <Link href="/">
        PDFTalks
        </Link>
      </div>
      <div className="flex items-center justify-around gap-4 text-lg text-neutral-700">
        <div>
          <Link href="/pricing">
            <Button variant={"outline"}>Upgrade </Button>
          </Link>
        </div>
        <div>
          <Link href="/dashboard/id">
            <Button variant={"outline"}>documents</Button>
          </Link>
        </div>
        <div>
          <Link href="/pricing">
            <Button variant="outline" size="icon">
              <Upload />
            </Button>
          </Link>
        </div>
        <div className="cursor-pointer rounded-full border-2 px-2 pt-2">
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton />
          </SignedOut>
        </div>
      </div>
      <div className="border-b-2 border-black" />
    </header>
  );
};
export default Header;
