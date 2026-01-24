"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What services do you provide?",
    a: "We provide custom web development, SaaS development, and AI automation solutions tailored to your business needs.",
  },
  {
    q: "What type of projects do you usually work on?",
    a: "We work on custom websites, internal business systems, SaaS platforms, dashboards, and AI-powered automation tools.",
  },
  {
    q: "Do you build everything from scratch?",
    a: "Yes. Every project is designed and developed from scratch based on your requirements, goals, and workflows.",
  },
  {
    q: "Who are your services for?",
    a: "Our services are for startups, growing companies, and established businesses that want to build custom software or automate operations.",
  },
  {
    q: "Can you integrate with our existing tools and systems?",
    a: "Absolutely. We can integrate with your existing website, CRM, databases, and third-party tools without disrupting your current workflow.",
  },
  {
    q: "How do you use AI in your projects?",
    a: "We integrate AI models and automation systems to streamline processes, improve efficiency, and build smarter software solutions.",
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
