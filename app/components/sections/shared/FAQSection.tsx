"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How much does a project usually cost?",
    a: "Project cost depends on scope, features, and complexity. Most custom projects start from a few thousand dollars and increase based on design, integrations, and automation requirements. After reviewing your needs, we provide a clear fixed or milestone-based quote.",
  },
  {
    q: "How long does a project take?",
    a: "Timelines depend on scope, but most projects take between 2 to 8 weeks. Larger SaaS platforms or automation-heavy systems may take longer depending on complexity and feedback cycles.",
  },
  {
    q: "What tech stack do you use?",
    a: "We use modern stacks like Next.js, React, Node.js, Tailwind, and cloud platforms. For no-code projects, we use tools like Webflow, Framer, Airtable, and automation platforms depending on what fits your use case best.",
  },
  {
    q: "Should we use no-code or custom development?",
    a: "It depends on your goals, budget, and scale. We often start with no-code for speed and cost efficiency, and use custom development when you need more control, performance, or long-term scalability.",
  },
  {
    q: "Do you provide support after launch?",
    a: "Yes. We provide ongoing support, maintenance, and improvements after launch to ensure your system stays stable, secure, and up to date.",
  },
  {
    q: "How do we get started?",
    a: "Simply book a call or send us a message with your idea or problem. We’ll review it, ask a few questions, and suggest the best next steps.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="container py-24">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-semibold leading-[1.1] text-gray-900">
          Frequently asked questions
        </h2>
        <p className="mt-4 text-[16px] sm:text-[18px] text-gray-600 leading-[1.7]">
          Everything you need to know about our web development and AI
          automation services before getting started.
        </p>
      </div>

      {/* FAQ Grid */}
      <div className="mt-6 columns-1 lg:columns-2 gap-6">
        {faqs.map((faq, i) => {
          const open = openIndex === i;

          return (
            <div
              key={i}
              className="rounded-xl border border-gray-200 bg-gray-50 p-5 break-inside-avoid mb-6"
            >
              <button
                onClick={() => setOpenIndex(open ? null : i)}
                className="w-full flex justify-between items-center text-left"
              >
                <p className="font-semibold text-lg text-gray-900">{faq.q}</p>
                <i
                  className={`fa-solid fa-chevron-up transition-transform ${
                    open ? "" : "-rotate-180"
                  }`}
                />
              </button>

              {open && (
                <div className="text-md font-normal mt-6 text-gray-700 leading-[1.7]">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
