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
            <span className="text-2xl font-medium font-display">Atlas</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-12">
            <Link href="/" className="font-medium hover:text-primary">
              Home
            </Link>
            <Link href="#services" className="font-medium hover:text-primary">
              Services
            </Link>
            <Link href="/blog" className="font-medium hover:text-primary">
              Blog
            </Link>
            <Link
              href="https://www.saclen.com/support"
              target="_blank"
              className="font-medium hover:text-primary"
            >
              Support
            </Link>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex flex-1 justify-end items-center gap-3">
            {/* Contact Button */}
            <Link
              href="/contact"
              className="flex items-center border border-gray-300 px-5 py-2 rounded-md font-display font-medium text-gray-900"
            >
              Contact
            </Link>

            {/* Book a Call Button */}
            <Link
              href="/book-a-call"
              className="flex items-center bg-primary hover:opacity-90 px-6 py-2 rounded-md font-display font-medium"
            >
              <span className="font-display font-medium text-white">
                Book a call
              </span>
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
              href="#services"
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
              href="https://www.saclen.com/support"
              target="_blank"
              onClick={() => setOpen(false)}
              className="font-medium py-3 block hover:text-primary"
            >
              Support
            </Link>

            {/* Mobile Buttons */}
            <div className="mt-4 flex flex-col gap-3">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex justify-center border border-gray-300 px-5 py-2 rounded-md font-medium text-gray-900"
              >
                Contact
              </Link>
              <Link
                href="/book-a-call"
                onClick={() => setOpen(false)}
                className="flex justify-center bg-primary px-6 py-2 rounded-md font-medium text-white"
              >
                Book a call
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
