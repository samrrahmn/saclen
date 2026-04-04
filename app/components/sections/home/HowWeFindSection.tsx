"use client";

import Container from "../../ui/Container";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HowWeFindSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 30%"],
  });

  const text = `Every business wastes time and money in ways the founder can’t see anymore. You’ve been too close to it for too long. In our AI Automation Audit, we map your workflows across acquisition, onboarding, operations, and retention. Then we identify repetitive tasks, bottlenecks, and missed automation opportunities. The result is a clear roadmap showing exactly what to automate, what to eliminate, and how AI agents can reduce cost while increasing output.`;

  const words = text.split(" ");

  return (
    <section ref={ref} className="py-20 md:py-28">
      <Container>
        <div className="max-w-6xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-[24px] sm:text-[27px] md:text-[32px] font-semibold text-black leading-tight">
            How We Find Your Hidden Waste
          </h2>

          {/* Subheading */}
          <p className="mt-4 text-[17px] sm:text-[19px] text-black/60 max-w-3xl mx-auto">
            A forensic look at your operations that uncovers waste you didn’t
            know existed
          </p>

          {/* Animated Paragraph (LEFT aligned) */}
          <p className="mt-12 text-left text-[18px] sm:text-[20px] md:text-[22px] leading-relaxed max-w-6xl mx-auto">
            {words.map((word, i) => {
              const start = i / words.length;
              const end = start + 0.02;

              const opacity = useTransform(
                scrollYProgress,
                [start, end],
                [0.15, 1],
              );

              return (
                <motion.span
                  key={i}
                  style={{ opacity }}
                  className="inline-block text-black mr-1"
                >
                  {word}
                </motion.span>
              );
            })}
          </p>
        </div>
      </Container>
    </section>
  );
}
