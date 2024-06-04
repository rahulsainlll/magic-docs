"use client" 
import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white text-black flex items-center justify-between p-4">
      <div className="flex items-center">
        <Link href="/" passHref>
        
        </Link>
      </div>
      <div className="flex  self-center justify-center space-x-10">
        <a href="/store" className=" hover:underline mt-2 ">Store</a>
        <Link href="/pro" className=" hover:underline mt-2 mr-4 " >Pro</Link>
        <Link href="/teams" className=" hover:underline mt-2 mr-4">Teams</Link>
        <Link href="/developers" className=" hover:underline mt-2 mr-4">Developers</Link>
        <Link href="/changelog" className=" hover:underline mt-2 mr-4">Changelog</Link>
        <Link href="/blog" className=" hover:underline mt-2 mr-4">Blog</Link>
        <Link href="/pricing" className=" hover:underline mt-2 mr-4">Pricing</Link>
      </div>
      <div className="flex items-center space-x-5">
        <Link href="/login" className=" hover:underline mt-2 mr-4">Log in</Link>
        <Link href="/download" className='mt-2 mr-4' passHref>
          
            Download
          
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
