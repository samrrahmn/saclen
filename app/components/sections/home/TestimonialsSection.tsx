"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const testimonials = [
  {
    rating: 5,
    text: "They built a custom CRM-style system for us very quickly and it turned out excellent. The team was extremely knowledgeable and easy to work with.",
    title: "Client Review",
    subtitle: "Custom CRM Development",
  },
  {
    rating: 5,
    text: "Easy to work with and delivered everything exactly as requested. Communication was smooth and professional throughout.",
    title: "Client Review",
    subtitle: "Invoice Automation System",
  },
  {
    rating: 5,
    text: "Project ran very well with great communication and we were very satisfied with the final product and delivery timeline.",
    title: "Client Review",
    subtitle: "B2B SaaS Platform",
  },
  {
    rating: 5,
    text: "The team was incredibly helpful in finding the right technical solution for our business. Highly recommended.",
    title: "Client Review",
    subtitle: "Platform Development",
  },
  {
    rating: 5,
    text: "I couldn't be happier with their work. True professionals across the board with great attention to detail.",
    title: "Client Review",
    subtitle: "App Consulting",
  },
  {
    rating: 4.8,
    text: "Great communicator and skilled developer. They helped design the system architecture and delivered a great prototype.",
    title: "Client Review",
    subtitle: "Product Prototype",
  },
  {
    rating: 5,
    text: "The team was highly responsive and proactive during the project. Very flexible with changes and improvements.",
    title: "Client Review",
    subtitle: "MVP Development",
  },
  {
    rating: 5,
    text: "Fantastic to work with. Clear communication and very high quality work. We will continue working with them.",
    title: "Client Review",
    subtitle: "AI Automation System",
  },
  {
    rating: 5,
    text: "Great experience overall. Fast delivery, great communication, and excellent technical execution.",
    title: "Client Review",
    subtitle: "Web App Development",
  },
];

function Stars({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  return (
    <div className="flex items-center gap-1 text-yellow-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={i < fullStars ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
        </svg>
      ))}
      <span className="ml-1 text-sm text-gray-500">{rating}</span>
    </div>
  );
}

function Column({ speed }: { speed: number }) {
  const items = [...testimonials, ...testimonials];

  return (
    <div
      className="relative flex flex-col gap-6 animate-scroll"
      style={{
        animationDuration: `${speed}s`,
      }}
    >
      {items.map((item, i) => (
        <div
          key={i}
          className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm"
        >
          <Stars rating={item.rating} />

          <p className="mt-4 text-[15px] leading-[1.7] text-gray-700">
            {item.text}
          </p>

          <div className="mt-6">
            <div className="font-medium text-gray-900">{item.title}</div>
            <div className="text-sm text-gray-500">{item.subtitle}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[44px] font-semibold text-gray-900">
            What our clients say
          </h2>
          <p className="mt-4 text-[16px] md:text-[18px] text-gray-600">
            See what our customers have to say about working with us.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3 text-sm">
            <Image
              src="/logos/upwork.png"
              alt="Upwork"
              width={70}
              height={24}
              className="object-contain"
            />

            <Link
              href="#"
              className="text-black font-medium text-base underline underline-offset-4 decoration-green-500"
            >
              View all reviews on Upwork
            </Link>
          </div>
        </div>

        {/* Animated wall */}
        <div className="relative h-[700px] overflow-hidden">
          {/* Fade masks */}
          <div className="pointer-events-none absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent z-10" />
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left: fast */}
            <Column speed={30} />

            {/* Middle: slow */}
            <Column speed={40} />

            {/* Right: fast */}
            <Column speed={30} />
          </div>
        </div>
      </div>

      {/* CSS animation */}
      <style jsx global>{`
        @keyframes scrollY {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-50%);
          }
        }

        .animate-scroll {
          animation-name: scrollY;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </section>
  );
}
