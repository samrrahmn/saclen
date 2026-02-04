"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Container from "@/app/components/ui/Container";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", "62c534bd-f5db-4ac9-906e-26ed9d42edda");
    formData.append("subject", "New Contact Request - Saclen Atlas");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setStatus(data.success ? "success" : "error");
      if (data.success) form.reset();
    } catch {
      setStatus("error");
    }

    setTimeout(() => setStatus("idle"), 3000);
  }

  return (
    <main className="py-24 bg-gradient-to-b from-slate-50 via-blue-50/40 to-transparent">
      <Container>
        <div className="max-w-[920px] mx-auto">
          {/* Heading */}
          <div className="max-w-xl mx-auto text-center my-12">
            <h1 className="text-[28px] sm:text-[36px] md:text-[44px] font-semibold leading-[1.1] text-gray-900">
              Start Your Project
            </h1>
            <p className="mt-4 text-[16px] sm:text-[18px] text-gray-600 leading-[1.7]">
              Fill out the form and tell us about your project. We’ll review it
              and get back to you to discuss the best next steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.25fr] border border-gray-200 rounded-lg bg-white overflow-hidden">
            {/* LEFT PANEL */}
            <div className="p-6">
              <div className="flex items-center gap-3">
                <Image
                  src="/logo.png"
                  alt="Saclen Atlas"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <span className="text-sm font-medium text-gray-900">
                  Saclen Atlas
                </span>
              </div>

              <h1 className="mt-4 mb-3 text-[22px] font-semibold text-gray-900">
                Contact Us
              </h1>

              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <i className="fa-regular fa-calendar text-gray-500"></i>
                  <span>Project discussion</span>
                </div>

                <div className="flex items-center gap-2">
                  <i className="fa-regular fa-clock text-gray-500"></i>
                  <span>Response within 24 hours</span>
                </div>

                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-video text-gray-500"></i>
                  <span>Zoom / Google Meet</span>
                </div>

                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-earth-asia text-gray-500"></i>
                  <span>Asia/Dhaka</span>
                </div>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="p-6 md:border-l md:border-gray-200">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1">
                    Your name *
                  </label>
                  <input
                    name="Full Name"
                    required
                    className="w-full h-[44px] px-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1">
                    Email address *
                  </label>
                  <input
                    type="email"
                    name="Email"
                    required
                    className="w-full h-[44px] px-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1">
                    Service *
                  </label>
                  <select
                    name="Service"
                    required
                    className="w-full h-[44px] px-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  >
                    <option value="">Select service</option>
                    <option>Web Development</option>
                    <option>AI Automation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1">
                    Budget *
                  </label>
                  <select
                    name="Budget"
                    required
                    className="w-full h-[44px] px-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  >
                    <option value="">Select budget</option>
                    <option>$500 – $1,000</option>
                    <option>$1,000 – $3,000</option>
                    <option>$3,000 – $5,000</option>
                    <option>$5,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1">
                    Project details *
                  </label>
                  <textarea
                    name="Project Details"
                    rows={3}
                    required
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  />
                </div>

                <p className="text-xs text-gray-500 leading-snug">
                  By proceeding, you agree to our{" "}
                  <a
                    href="/terms-and-conditions"
                    rel="noopener noreferrer"
                    className="cursor-pointer text-black"
                  >
                    Terms
                  </a>{" "}
                  and{" "}
                  <a
                    href="/privacy-policy"
                    rel="noopener noreferrer"
                    className="cursor-pointer text-black"
                  >
                    Privacy Policy
                  </a>
                  .
                </p>

                <div className="flex justify-end pt-1">
                  <button
                    type="submit"
                    className="py-2 px-4 rounded-xl text-white text-sm font-medium bg-primary border border-[#6596ff]"
                  >
                    Confirm
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
