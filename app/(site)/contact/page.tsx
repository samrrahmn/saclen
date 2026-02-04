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
      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
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

          {/* SUCCESS STATE */}
          {status === "success" ? (
            <div className="border border-gray-200 rounded-lg bg-white p-10 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <i className="fa-solid fa-check text-green-600"></i>
                </div>
              </div>

              <h2 className="text-xl font-semibold text-gray-900">
                Message sent successfully
              </h2>

              <p className="mt-2 text-sm text-gray-600 max-w-md mx-auto">
                Thanks for reaching out. We’ve received your message and will
                get back to you within 24 hours.
              </p>

              <button
                onClick={() => setStatus("idle")}
                className="mt-6 text-sm text-blue-600 hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            /* FORM STATE */
            <div className="grid grid-cols-1 md:grid-cols-[0.75fr_1.5fr] border border-gray-200 rounded-lg bg-white overflow-hidden">
              {/* LEFT PANEL */}
              <div className="p-6 flex flex-col justify-between">
                {/* Top content */}
                <div>
                  {/* Brand */}
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center">
                      <Image
                        src="/logo.png"
                        alt="Saclen Atlas"
                        width={30}
                        height={30}
                      />
                    </div>
                    <span className="text-lg font-semibold text-gray-900">
                      Saclen Atlas
                    </span>
                  </div>

                  {/* Headline */}
                  <h2 className="mt-8 text-[24px] font-semibold text-gray-900 leading-tight">
                    Get in touch
                  </h2>

                  <p className="mt-3 text-sm text-gray-600 max-w-xs">
                    Tell us about your project or inquiry and we’ll respond
                    within 24 hours.
                  </p>

                  {/* Features */}
                  <div className="mt-8 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                        <i className="fa-regular fa-comments text-gray-600 text-sm"></i>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          Project consultation
                        </p>
                        <p className="text-xs text-gray-500">
                          Discuss goals, scope, and ideas
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                        <i className="fa-regular fa-clock text-gray-600 text-sm"></i>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          Fast response
                        </p>
                        <p className="text-xs text-gray-500">
                          We usually reply within 24 hours
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                        <i className="fa-solid fa-video text-gray-600 text-sm"></i>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          Remote collaboration
                        </p>
                        <p className="text-xs text-gray-500">
                          Zoom or Google Meet calls
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom meta */}
                <div className="mt-10 text-xs text-gray-500 flex items-center gap-2">
                  <i className="fa-solid fa-earth-asia"></i>
                  <span>Timezone · Asia / Dhaka</span>
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
                    <Link href="/terms-and-conditions" className="text-black">
                      Terms
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy-policy" className="text-black">
                      Privacy Policy
                    </Link>
                    .
                  </p>

                  <div className="flex justify-end pt-1">
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="py-2 px-4 rounded-xl text-white text-sm font-medium bg-primary border border-[#6596ff]"
                    >
                      {status === "loading" ? "Sending..." : "Confirm"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </Container>
    </main>
  );
}
