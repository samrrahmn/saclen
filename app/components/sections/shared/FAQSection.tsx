"use client";

import { useState } from "react";
import Container from "../../ui/Container";

const faqs = [
  {
    question: "What services do you provide?",
    answer:
      "We build high-performance websites, custom software, and AI-powered automation systems tailored to your business needs.",
  },
  {
    question: "How long does it take to build a website or system?",
    answer:
      "A website usually takes 1–2 weeks. Automation systems or custom software depend on complexity and scope, which we define after a strategy call.",
  },
  {
    question: "Can you work with our existing tools and software?",
    answer:
      "Yes. We integrate with your current website, CRM, databases, and third-party tools without disrupting your operations.",
  },
  {
    question: "Do we need technical knowledge to use the system?",
    answer:
      "No. We design simple dashboards and workflows that your team can use easily. We also provide full guidance and documentation.",
  },
  {
    question: "Do you provide support after the project is completed?",
    answer:
      "Yes. We offer ongoing support, maintenance, improvements, and scaling as your business grows.",
  },
  {
    question: "How do we get started?",
    answer:
      "You can book a free strategy call, and we’ll review your needs, suggest the best solution, and plan the project together.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24">
      <Container>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-semibold leading-[1.1] text-gray-900">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-[16px] sm:text-[18px] text-gray-600 leading-[1.7]">
            Everything you need to know before building your website, <br /> automation
            system, or custom software with us.
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="overflow-hidden rounded-xl border border-gray-200 bg-white"
              >
                <button
                  className="w-full flex items-center justify-between gap-6 px-6 py-5 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="text-[20px] leading-[1.4] text-black font-medium">
                    {faq.question}
                  </span>

                  <span
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-[300px]" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-6 text-[17px] leading-[1.7] text-gray-600">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}