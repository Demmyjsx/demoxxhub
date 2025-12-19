"use client";

import Link from "next/link";
import { useState } from "react";
import { siteInfo } from "@/constants/siteData";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const desktopLink =
    "text-white font-semibold tracking-wide transition hover:text-orange-400";

  const mobileLink =
    "block w-full text-left text-white text-lg px-6 py-3 rounded-md transition hover:bg-gray-800";

  return (
    <header className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/demmoxxx.png"
              alt={`${siteInfo.name} Logo`}
              width={110}
              height={40}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <Link href="/" className={desktopLink}>Home</Link>
            <Link href="/about" className={desktopLink}>About</Link>
            <Link href="/services" className={desktopLink}>Services</Link>
         
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <nav className="flex flex-col py-4">
            <Link href="/" onClick={() => setOpen(false)} className={mobileLink}>
              Home
            </Link>
            <Link href="/about" onClick={() => setOpen(false)} className={mobileLink}>
              About
            </Link>
            <Link href="/services" onClick={() => setOpen(false)} className={mobileLink}>
              Services
            </Link>
           
          </nav>
        </div>
      )}
    </header>
  );
}
