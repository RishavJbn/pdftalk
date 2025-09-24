"use client";
import { Uploadui } from "@/components/Uploadui";
import Image from "next/image";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  const features = [
    {
      id: 1,
      title: "Smart Q&A",
      description:
        "Ask any question about your PDF content and get instant, accurate answers powered by advanced AI.",
      gradientFrom: "from-purple-500",
      gradientTo: "to-pink-500",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      ),
    },
    {
      id: 2,
      title: "Document Summaries",
      description:
        "Get concise summaries of lengthy documents in seconds. Perfect for research and quick overviews.",
      gradientFrom: "from-blue-500",
      gradientTo: "to-cyan-500",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      ),
    },
    {
      id: 3,
      title: "Multi-format Support",
      description:
        "Support for various document formats including PDF, DOCX, and more. Upload any document with ease.",
      gradientFrom: "from-green-500",
      gradientTo: "to-teal-500",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      ),
    },
    {
      id: 4,
      title: "Lightning Fast",
      description:
        "Process documents and get responses in seconds. Our optimized AI ensures quick turnaround times.",
      gradientFrom: "from-orange-500",
      gradientTo: "to-red-500",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      ),
    },
    {
      id: 5,
      title: "Secure & Private",
      description:
        "Your documents are processed securely with enterprise-grade encryption. Privacy guaranteed.",
      gradientFrom: "from-indigo-500",
      gradientTo: "to-purple-500",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      ),
    },
    {
      id: 6,
      title: "Export & Share",
      description:
        "Export summaries and insights in multiple formats. Share findings with your team effortlessly.",
      gradientFrom: "from-pink-500",
      gradientTo: "to-rose-500",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      ),
    },
  ];

  return (
    <div className="relative w-full bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Simple gradient background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(168, 85, 247, 0.1) 50%, rgba(236, 72, 153, 0.1) 100%)
      `,
        }}
      />
      <header className="relative z-10 m-auto flex max-w-3xl items-center justify-between gap-4 rounded-lg p-4 pt-4 text-xl">
        <div className="hover:text-shadow cursor-pointer rounded-2xl p-2 font-mono text-2xl font-semibold tracking-tight text-neutral-900 shadow-sm">
          PDFTalks
        </div>
        <div className="flex items-center justify-around gap-4 text-lg text-neutral-700">
          <div className="cursor-pointer rounded-2xl px-3 py-1 ring-indigo-200 hover:bg-white/30 hover:text-black hover:ring-1">
            <Link href="/pricing">Pricing</Link>
          </div>
          <div className="cursor-pointer rounded-2xl px-3 py-1 ring-indigo-200 hover:bg-white/30 hover:text-black hover:ring-1">
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton />
            </SignedOut>
          </div>
        </div>
      </header>
      {/* heroSection  */}
      <div className="relative z-10 m-auto mt-13 max-w-5xl text-center">
        <h1 className="p-4 text-4xl font-bold text-neutral-950">
          “Turn Your PDFs into Conversations.”
        </h1>
        <p className="m-auto max-w-[600px] p-2 text-center text-xl text-neutral-600">
          Upload any PDF and get instant answers, summaries, and insights
          powered by AI.
        </p>
        <div className="m-auto mt-4 flex max-w-[250px] items-center justify-between text-lg">
          <button className="cursor-pointer rounded-xl border border-neutral-600 bg-white bg-gradient-to-bl from-blue-100 to-pink-100 px-4 py-2 font-medium text-black shadow-[0_3px_10px_rgb(0,0,0,0.2)] ring-blue-500 hover:bg-gray-600/10 hover:ring-1">
            <Link href="/dashboard"> Start free</Link>
          </button>
          <button className="cursor-pointer rounded-xl border border-neutral-600 bg-white bg-gradient-to-bl from-blue-100 to-pink-100 px-4 py-2 font-medium text-black shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] ring-blue-500 hover:bg-gray-600/10 hover:ring-1">
            <Link href="/pricing">See Pricing</Link>
          </button>
        </div>
        <div className="relative z-10 m-auto min-w-full pt-10">
          <Image
            alt="App screenshot"
            src="https://i.imgur.com/VciRSTI.jpeg"
            width={2432}
            height={1442}
            className="relative z-10 mb-[-0%] rounded-xl shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] ring-1 ring-gray-900/10"
          />
        </div>
        <div className="m-auto mt-14 min-w-3xl text-center">
          <h1 className="p-2 text-3xl font-semibold text-indigo-500">
            “Stop Skimming. Start Asking.”
          </h1>
          <p className="text-lg font-medium text-neutral-700">
            Reading 100+ page PDFs is overwhelming.
          </p>
          <p className="text-lg font-medium text-neutral-700">
            With our AI, you can chat with your documents — saving hours of
            scrolling and searching.
          </p>
        </div>
      </div>
      {/* features */}
      <div className="relative z-10 m-auto max-w-6xl px-4 py-16">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-neutral-900">
            Powerful Features
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-neutral-600">
            Transform the way you interact with documents using cutting-edge AI
            technology
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="rounded-xl border border-white/20 bg-white/20 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/30"
            >
              <div
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r ${feature.gradientFrom} ${feature.gradientTo}`}
              >
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {feature.icon}
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-neutral-900">
                {feature.title}
              </h3>
              <p className="text-neutral-700">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Call to action in features section */}
        <div className="mt-16 text-center">
          <h3 className="mb-4 text-2xl font-semibold text-neutral-900">
            Ready to transform your document workflow?
          </h3>
          <button className="rounded-xl bg-gradient-to-bl from-red-600 to-blue-600 px-8 py-3 font-medium text-white shadow-lg transition-all duration-300 hover:from-purple-700 hover:to-pink-700 hover:shadow-xl">
            <Link href="/dashboard">Try PDFTalks Now</Link>
          </button>
        </div>
      </div>
      <footer className="relative z-10 w-full border-t border-white/10 bg-black/70 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4 py-4">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-2 md:mb-0">
              <h3 className="text-xl font-bold text-white">PDFTalks</h3>
              <p className="text-sm text-gray-300">
                Transform PDFs into conversations
              </p>
            </div>

            <div className="flex space-x-6 text-sm text-gray-300">
              <a href="#" className="transition-colors hover:text-white">
                Privacy
              </a>
              <a href="#" className="transition-colors hover:text-white">
                Terms
              </a>
              <a href="#" className="transition-colors hover:text-white">
                Contact
              </a>
            </div>
          </div>

          <div className="mt-6 border-t border-white/10 pt-4 text-center text-sm text-gray-400">
            © 2025 PDFTalks. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
