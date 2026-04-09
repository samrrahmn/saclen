"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="py-3 flex justify-between items-center">
          <Link href="/" className="flex gap-2 items-center flex-1">
            <Image
              src="/logo.webp"
              alt="Saclen"
              width={32}
              height={32}
              className="object-cover"
            />
            <span className="text-2xl font-medium font-display">Saclen</span>
          </Link>

          <div className="hidden lg:flex gap-10 items-center">
            <Link href="/" className="text-gray-700 hover:text-primary">
              Home
            </Link>
            <Link
              href="/#services"
              className="text-gray-700 hover:text-primary"
            >
              Services
            </Link>
            <Link href="/#process" className="text-gray-700 hover:text-primary">
              Process
            </Link>
            <Link
              href="/#case-studies"
              className="text-gray-700 hover:text-primary"
            >
              Case Studies
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-primary">
              Blog
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-3 flex-1 justify-end">
            <Link
              href="/contact"
              className="px-6 py-2.5 rounded-lg border border-gray-400 text-gray-800 text-sm font-medium hover:bg-gray-50 transition"
            >
              Contact Us
            </Link>

            <Link
              href="/book-a-call"
              className="px-6 py-2.5 rounded-lg bg-primary text-black text-sm font-medium hover:opacity-90 transition"
            >
              Book a Call
            </Link>
          </div>

          <button
            className="p-2 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <i
              className={`fa-solid ${
                open ? "fa-xmark" : "fa-bars"
              } text-2xl text-gray-700`}
            ></i>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="py-3 block text-gray-700 hover:text-primary"
            >
              Home
            </Link>
            <Link
              href="/#services"
              onClick={() => setOpen(false)}
              className="py-3 block text-gray-700 hover:text-primary"
            >
              Services
            </Link>
            <Link
              href="/#process"
              onClick={() => setOpen(false)}
              className="py-3 block text-gray-700 hover:text-primary"
            >
              Process
            </Link>
            <Link
              href="/#case-studies"
              onClick={() => setOpen(false)}
              className="py-3 block text-gray-700 hover:text-primary"
            >
              Case Studies
            </Link>
            <Link
              href="/blog"
              onClick={() => setOpen(false)}
              className="py-3 block text-gray-700 hover:text-primary"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="py-3 block text-gray-700 hover:text-primary"
            >
              Contact
            </Link>

            <div className="mt-4 flex flex-col gap-3">
              <Link
                href="/book-a-call"
                onClick={() => setOpen(false)}
                className="text-center px-8 py-3 font-medium rounded-lg text-black bg-primary"
              >
                Book a Call
              </Link>

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="text-center px-8 py-3 font-medium rounded-lg bg-white border border-gray-400"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
