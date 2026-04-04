"use client";

import Link from "next/link";
import Image from "next/image";

const avatarColors = [
  "bg-[#5a3fd0]",
  "bg-[#03897b]",
  "bg-[#1a73e8]",
  "bg-[#d93025]",
  "bg-[#f29900]",
  "bg-[#8e24aa]",
  "bg-[#00897b]",
  "bg-[#3949ab]",
];

const testimonials = [
  {
    name: "Prosper Kuduagbe",
    date: "Dec 22, 2025",
    text: "We worked with this team on a custom internal web platform and the overall experience was excellent. They understood our requirements clearly, suggested better technical solutions, and delivered a stable system. Communication was consistent and the final output matched our expectations perfectly.",
  },
  {
    name: "James Miller",
    date: "Jan 03, 2026",
    text: "The automation they built saved us several hours every week. Everything was implemented cleanly and integrated well with our existing tools.",
  },
  {
    name: "Oliver Bennett",
    date: "Nov 29, 2025",
    text: "Very smooth collaboration from start to finish. They handled both frontend and backend development efficiently and delivered the project on time.",
  },
  {
    name: "Lucas Martin",
    date: "Dec 14, 2025",
    text: "We hired them for AI-based workflow automation and system integration. They analyzed our existing process carefully and proposed a solution that actually made sense for our business. Performance has been reliable and the automation reduced a lot of manual work.",
  },
  {
    name: "Daniel Wright",
    date: "Jan 11, 2026",
    text: "Professional team with strong technical knowledge. They helped us plan the architecture and choose the right tech stack for a scalable web application.",
  },
  {
    name: "Ethan Walker",
    date: "Dec 05, 2025",
    text: "Impressed by the quality of work and attention to detail. The automation system improved our internal operations significantly.",
  },
];

function Column({ speed }: { speed: number }) {
  const items = [...testimonials, ...testimonials];

  return (
    <div
      className="relative flex flex-col gap-6 animate-scroll"
      style={{ animationDuration: `${speed}s` }}
    >
      {items.map((item, i) => {
        const color = avatarColors[i % avatarColors.length];

        return (
          <div
            key={i}
            className="rounded-2xl border border-gray-200 bg-white p-6 h-[280px] flex flex-col"
          >
            <div className="flex items-center gap-3">
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-full text-white text-lg ${color}`}
              >
                {item.name.charAt(0)}
              </div>

              <div>
                <div className="text-md font-medium text-gray-900">
                  {item.name}
                </div>
                <div className="text-sm text-gray-500">{item.date}</div>
              </div>
            </div>

            <p className="mt-4 text-[16px] leading-[1.65] text-gray-800 line-clamp-6">
              {item.text}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-25 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
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
              width={100}
              height={24}
              className="object-contain"
            />

            <Link
              href="/upwork"
              className="text-black font-medium underline underline-offset-4 decoration-green-500"
            >
              View all reviews on Upwork
            </Link>
          </div>
        </div>

        <div className="relative h-[700px] overflow-hidden">
          <div className="pointer-events-none absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent z-10" />
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Column speed={30} />
            <Column speed={40} />
            <Column speed={30} />
          </div>
        </div>
      </div>

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
