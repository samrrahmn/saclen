"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function HeroSection() {
  useEffect(() => {}, []);

  return (
    <section
      id="hero"
      className="bg-gradient-to-b from-slate-50 via-blue-50/40 to-transparent"
    >
      {/* Top Content */}
      <div className="max-w-4xl mx-auto px-6 pt-[50px] pb-16 flex flex-col sm:items-center sm:text-center sm:pt-[80px] sm:max-w-3xl">
        {/* Badge */}
        <div className="flex items-center my-6 gap-2 border border-yellow-300 bg-yellow-50 rounded-lg px-3 py-1 w-fit shadow-md hover:shadow-lg hover:-translate-y-1 transition group">
          <div className="w-2 h-2 bg-yellow-400 rounded-full border border-yellow-600" />
          <p className="font-medium text-yellow-600">
            <span className="text-yellow-800">
              Digital Systems & Automation
            </span>
          </p>
          <i className="fa-solid fa-arrow-right text-yellow-600 group-hover:translate-x-1 transition duration-300" />
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-semibold font-inter leading-snug mt-4 sm:text-6xl">
          Building <span className="text-primary">intelligent</span> systems for
          businesses
        </h1>

        <p className="text-lg mt-4 sm:text-2xl sm:mt-8 text-gray-800">
          We help companies design and build websites, web applications, and
          automation systems to improve operations.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex gap-4 flex-col sm:flex-row sm:justify-center w-full">
          <Link href="/book-a-call" className="w-full sm:w-auto">
            <span className="block text-center px-8 py-3 font-semibold rounded-lg text-white bg-primary hover:bg-black">
              Book a call
            </span>
          </Link>

          <Link href="/support#contact" className="w-full sm:w-auto">
            <span className="block text-center px-8 py-3 font-semibold rounded-lg bg-white border border-gray-400">
              Contact Us
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
