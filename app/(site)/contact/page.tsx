"use client";

import { useState } from "react";
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
    formData.append("subject", "New Project Inquiry - Saclen Atlas");

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
    } catch (err) {
      setStatus("error");
    }

    setTimeout(() => {
      setStatus("idle");
    }, 3000);
  }

  function getButtonText() {
    if (status === "loading") return "Sending...";
    if (status === "success") return "Success";
    if (status === "error") return "Failed";
    return "Send Message";
  }

  return (
    <main className="py-32 bg-gradient-to-b from-slate-50 via-blue-50/40 to-transparent">
      <Container>
        {/* Heading */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-[28px] sm:text-[36px] md:text-[44px] font-semibold leading-[1.1] text-gray-900">
            Send Us Your Project Details
          </h1>
          <p className="mt-4 text-[16px] sm:text-[18px] text-gray-600 leading-[1.7]">
            Fill out the form and tell us about your project. We’ll review it
            and get back to you to discuss the best next steps.
          </p>
        </div>

        {/* Form */}
        <div className="max-w-3xl mx-auto">
          <div className="rounded-lg border bg-white p-8 md:p-12 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="Full Name"
                  required
                  className="w-full h-12 px-4 rounded-lg border focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="John Doe"
                />
              </div>

              {/* Email + WhatsApp */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="Email"
                    required
                    className="w-full h-12 px-4 rounded-lg border focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="name@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Whatsapp Number
                  </label>
                  <input
                    type="text"
                    name="Whatsapp"
                    required
                    className="w-full h-12 px-4 rounded-lg border focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="+1 202-555-0123"
                  />
                </div>
              </div>

              {/* Budget */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Project Budget
                </label>
                <select
                  name="Budget"
                  required
                  className="w-full h-12 px-4 rounded-lg border focus:outline-none focus:ring-1 focus:ring-primary"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select your budget range
                  </option>
                  <option value="$500 - $1,000">$500 - $1,000</option>
                  <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                  <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                  <option value="$5,000+">$5,000+</option>
                </select>
              </div>

              {/* Details */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Project Details
                </label>
                <textarea
                  name="Project Details"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Describe your project..."
                />
              </div>

              {/* Button */}
              <div className="flex">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="h-[52px] px-10 w-full md:w-auto rounded-lg font-medium transition bg-primary text-white hover:opacity-90"
                >
                  {getButtonText()}
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </main>
  );
}
