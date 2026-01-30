"use client";

import { useState } from "react";
import Container from "../../ui/Container";

const faqs = [
  {
    q: "What tools and technologies do you use?",
    a: "We primarily use WordPress, WooCommerce, and Elementor for website and eCommerce development. For AI and business automation, we use n8n to connect different tools, automate workflows, and integrate AI features such as lead handling, email automation, and data synchronization.",
  },
  {
    q: "How much does a project usually cost?",
    a: "Project cost depends on the scope, features, and level of automation required. Simple websites cost less, while WooCommerce stores and automation-heavy projects cost more. After understanding your requirements, we provide a clear fixed or milestone-based quote.",
  },
  {
    q: "How long does a project take?",
    a: "Timelines depend on the project size and complexity. Most WordPress websites take 1–3 weeks, while WooCommerce and AI automation projects usually take 3–6 weeks, depending on integrations and feedback.",
  },
  {
    q: "Is no-code automation secure and scalable?",
    a: "Yes. When built properly, no-code automation using tools like n8n is secure, reliable, and scalable. We follow best practices to ensure long-term stability and performance.",
  },
  {
    q: "Do you provide support after the project is completed?",
    a: "Yes. We offer ongoing support, maintenance, and improvements to keep your website and automation systems running smoothly after launch.",
  },
  {
    q: "How do we get started?",
    a: "Simply contact us with your idea or requirements. We’ll review your needs, ask a few questions, and suggest the best solution and next steps.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faqs" className="py-20 md:py-25">
      <Container>
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
      </Container>
    </section>
  );
}
