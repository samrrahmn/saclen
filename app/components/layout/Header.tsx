"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      {/* ===== CONTAINER ===== */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="py-3 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex gap-2 items-center flex-1">
            <Image
              src="/logo.png"
              alt="Saclen"
              width={32}
              height={32}
              className="object-cover"
            />
            <span className="text-2xl font-medium font-display">Saclen</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-12">
            <Link href="/" className="font-medium hover:text-primary">
              Home
            </Link>
            <Link href="/#services" className="font-medium hover:text-primary">
              Services
            </Link>
            <Link href="/blog" className="font-medium hover:text-primary">
              Blog
            </Link>
            <Link href="/contact" className="font-medium hover:text-primary">
              Contact
            </Link>
          </div>

          {/* Desktop Contact Button */}
          <div className="hidden lg:flex flex-1 justify-end">
            <Link
              href="/get-started"
              className="flex gap-2 items-center border border-gray-400 px-4 py-2 rounded-lg bg-white"
            >
              <span className="font-display font-medium">Get Started</span>
              <i className="fa-solid fa-angle-right"></i>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="p-2 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <i
              className={`fa-solid ${
                open ? "fa-xmark" : "fa-bars"
              } text-2xl text-gray-600`}
            ></i>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="font-medium py-3 block hover:text-primary"
            >
              Home
            </Link>
            <Link
              href="/#services"
              onClick={() => setOpen(false)}
              className="font-medium py-3 block hover:text-primary"
            >
              Services
            </Link>
            <Link
              href="/blog"
              onClick={() => setOpen(false)}
              className="font-medium py-3 block hover:text-primary"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="font-medium py-3 block hover:text-primary"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
