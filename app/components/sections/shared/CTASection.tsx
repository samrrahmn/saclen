import Container from "../../ui/Container";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-32">
      <Container>
        <div className="rounded-xl border border-blue-200 bg-blue-50 px-6 py-20 md:px-12 text-center">
          {/* Title */}
          <h2 className="text-[32px] sm:text-[42px] md:text-[52px] leading-[1.1] font-semibold text-black max-w-4xl mx-auto">
            90 Days or Less to the Last Tool You'll Ever Need
          </h2>

          {/* Subtitle */}
          <p className="text-[16px] sm:text-[18px] text-gray-600 mt-6 max-w-2xl mx-auto">
            Let's replace your stack and launch your AI-powered system.
          </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <Link href="/contact" className="w-full sm:w-auto">
            <button className="h-[52px] w-full sm:w-auto px-8 rounded-lg bg-primary text-white text-[16px] font-medium hover:opacity-90 transition">
             Book Your Discovery Call
            </button>
            </Link>

            <Link href="/demo" className="w-full sm:w-auto">
            <button className="h-[52px] w-full sm:w-auto px-8 rounded-lg bg-gray-900 text-white text-[16px] font-medium hover:opacity-90 transition">
            Try the Demo
            </button>
            </Link>
            </div>
        </div>
      </Container>
    </section>
  );
}