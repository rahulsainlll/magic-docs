"use client" 
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/Icons';
import { Github } from "lucide-react";


const Navbar: React.FC = () => {
  return (
    <nav className=" sticky inset-x-0 top-0 z-30 text-black flex items-center justify-between p-4 max-w-lg lg:max-w-6xl md:max-w-2xl mx-auto transition-all border-gray-200 bg-white/75 backdrop-blur-lg">
      <div className="flex items-center">
        <Link
          href="/"
          className="font-mono text-lg flex gap-2 items-center"
          passHref
        >
          <Icons.Sparkles className="h-6 w-6" />
          <div> MagicDocs</div>
        </Link>
      </div>

      {/* <div className="flex  self-center justify-center space-x-10">
        <a href="/store" className=" hover:underline mt-2 ">
          Store
        </a>
        <Link href="/pro" className=" hover:underline mt-2 mr-4 ">
          Pro
        </Link>
        <Link href="/teams" className=" hover:underline mt-2 mr-4">Teams</Link>
        <Link href="/developers" className=" hover:underline mt-2 mr-4">Developers</Link>
        <Link href="/changelog" className=" hover:underline mt-2 mr-4">Changelog</Link>
        <Link href="/blog" className=" hover:underline mt-2 mr-4">Blog</Link>
        <Link href="/pricing" className=" hover:underline mt-2 mr-4">
          Pricing
        </Link>
      </div> */}

      <div className="flex items-center space-x-5">
        {/* <Link href="/login" className=" hover:underline mt-2 mr-4">
          Log in
        </Link> */}
        <Link
          href="https://github.com/rahulsainlll/magic-docs"
          className="mt-2 mr-4"
          passHref
        >
          <Button variant="outline" className="font-mono gap-2">
            Github{" "}
            <Github className="h-4 w-4 text-gray-600 transition-colors group-hover:text-black" />
          </Button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
