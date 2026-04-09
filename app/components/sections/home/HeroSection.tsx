"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="bg-gradient-to-b from-slate-50 via-blue-50/40 to-transparent"
    >
      {/* Top Content */}
      <div className="max-w-4xl mx-auto px-6 pt-[50px] pb-16 flex flex-col sm:items-center sm:text-center sm:pt-[80px] sm:max-w-3xl">
        <h1 className="text-4xl font-semibold font-inter leading-snug mt-4 sm:text-6xl">
          Building intelligent systems for businesses
        </h1>

        <p className="text-lg mt-4 sm:text-2xl sm:mt-8 text-gray-800">
          We help companies design and build websites, web applications, and
          automation systems to improve operations.
        </p>

        <div className="mt-12 flex gap-4 flex-col sm:flex-row sm:justify-center w-full">
          <Link href="/book-a-call" className="w-full sm:w-auto">
            <span className="block text-center px-8 py-3 font-semibold rounded-lg text-black bg-primary">
              Book a call
            </span>
          </Link>

          <Link href="/contact" className="w-full sm:w-auto">
            <span className="block text-center px-8 py-3 font-semibold rounded-lg bg-white border border-gray-400">
              Contact Us
            </span>
          </Link>
        </div>
      </div>

      {/* Video */}
      <div className="max-w-6xl mx-auto px-4 pb-24">
        <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/hero-video-poster.webp"
            className="w-full h-full object-cover"
          >
            <source
              src="https://res.cloudinary.com/dqdlakwqs/video/upload/f_auto,q_auto:best/v1775742376/video_kvymlx.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </section>
  );
}
