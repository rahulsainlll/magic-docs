import NavBar from "@/components/NavBar";
import React from "react";

export default function Backend() {
  return (
    <>
      <div className="mx-auto max-w-5xl px-6 pb-24  sm:pb-32 lg:flex gap-16 lg:px-8 lg:py-5">
        <NavBar />
      </div>
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
      </div>
    </>
  );
}
