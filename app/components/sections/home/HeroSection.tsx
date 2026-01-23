"use client";

import { useEffect } from "react";

export default function HeroSection() {
  useEffect(() => {}, []);

  return (
    <section
      id="hero"
      className="bg-gradient-to-b from-slate-50 via-blue-50/40 to-transparent"
    >
      {/* Hero */}
      <div className="mx-auto max-w-7xl px-6 pt-24 pb-28 flex flex-col items-center text-center">
        {/* Small Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700">
          <span className="h-2 w-2 rounded-full bg-blue-500" />
          Modern Web & AI Automation
        </div>

        {/* Heading */}
        <h1 className="text-[40px] sm:text-[50px] md:text-[56px] lg:text-[64px] font-semibold leading-[1.05] max-w-4xl tracking-tight">
          Building the systems that{" "}
          <br className="hidden sm:block" /> run your business
        </h1>

        {/* Sub heading */}
        <p className="text-[18px] sm:text-[20px] md:text-[22px] mt-6 text-gray-700 max-w-3xl leading-[1.7]">
          Saclen Atlas builds modern websites and AI automation systems that
          streamline your operations and scale your business.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex gap-4 flex-col sm:flex-row w-full sm:w-auto justify-center">
          <button className="h-[50px] w-full sm:w-auto px-8  rounded-lg text-white bg-primary hover:opacity-90 transition">
            Book a call
          </button>
          <button className="h-[50px] w-full sm:w-auto px-8 rounded-lg bg-white border border-gray-300 shadow-sm hover:bg-gray-50 transition">
            Contact Us
          </button>
        </div>

        {/* Video */}
        <div className="mt-20 w-full flex justify-center">
          <div className="rounded-2xl overflow-hidden border border-gray-200 bg-gray-100">
            <video
              src="https://cdn.sanity.io/files/eqofnbwr/production/4dd06707b237dada9fa3af370db8901a50dd1133.mov"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              controls={false}
              controlsList="nodownload nofullscreen noremoteplayback"
              disablePictureInPicture
              onContextMenu={(e) => e.preventDefault()}
              className="w-full max-w-6xl h-auto select-none pointer-events-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}