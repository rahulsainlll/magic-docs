import { Icons } from '@/components/Icons';
import SearchBar from '@/components/SearchBar';
import { ArrowUpRight } from 'lucide-react';
import React from 'react'

export default function Home() {

     const Backend = () => {
    //    navigate("/backend");

     };

  return (
    <div className="relative min-h-screen isolate overflow-hidden border-b border-gray-200 bg-white text-slate-900">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
        />
      </svg>

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex gap-16 lg:px-8 lg:py-24">
        <div className="h-full w-full flex flex-col items-center gap-4">
          <Icons.Sparkles className="h-16 w-16" />
          {/* <Icons.Magic className="h-24 w-36 sm:h-32 sm:w-40" /> */}

          <h1 className="tracking-tight text-4xl sm:text-6xl font-bold">
            MagicDocs
          </h1>

          <p className="max-w-xl text-center text-lg text-slate-600">
            Build boldly, browse easily: Your quick-reference guide to seamless,
            versatile software development strategies and solutions.
          </p>

          <div className="mt-12 flex gap-2">
            <button
            //   onClick={Backend}
              className="text-sm py-1 px-2 border border-[#e4e4e7] hover:border-[#000000] rounded-3xl shadow flex gap-1"
            >
              Backend <ArrowUpRight className="h-5" />
            </button>
            <button className="text-sm py-1 px-2 border border-[#e4e4e7] hover:border-[#000000] rounded-3xl shadow flex gap-1">
              Frontend <ArrowUpRight className="h-5" />
            </button>
            <button className="text-sm py-1 px-2 border border-[#e4e4e7] hover:border-[#000000] rounded-3xl shadow flex gap-1">
              Fullstack <ArrowUpRight className="h-5" />
            </button>
            <button className="text-sm py-1 px-2 border border-[#e4e4e7] hover:border-[#000000] rounded-3xl shadow flex gap-1">
              Database <ArrowUpRight className="h-5" />
            </button>
          </div>

          <div className="flex gap-2  ">
            <button className="text-[#70a3f3] text-xs py-1 px-2 border border-[#70a3f3] hover:border-white hover:bg-[#70a3f3] hover:text-white rounded-3xl shadow flex gap-1">
              Write a documentaion and get paid
            </button>
            <button className="text-[#70a3f3] text-xs py-1 px-2 border border-[#70a3f3] hover:border-white hover:bg-[#70a3f3] hover:text-white rounded-3xl shadow flex gap-1">
              Request a documentaion for free
            </button>
          </div>

          <div className="mx-auto mt-5 w-full max-w-2xl flex flex-col">
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  );
}
