import Container from "../../ui/Container";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 md:py-24">
      <Container>
        <div className="rounded-2xl border border-[#a3bae7] bg-[#dce7f6] px-6 py-16 md:px-12 md:py-20 text-center">
          {/* Heading */}
          <h2 className="text-[28px] sm:text-[36px] md:text-[48px] leading-[1.1] font-semibold text-black max-w-4xl mx-auto">
            Your Business Is Wasting Time Every Day. Let’s Automate It.
          </h2>

          {/* Subtext */}
          <p className="text-[15px] sm:text-[17px] text-black/70 mt-6 max-w-2xl mx-auto leading-relaxed">
            Book a free 30-minute strategy call. We’ll analyze your workflows,
            identify repetitive tasks, and show you how AI agents and automation
            can save you hours every week and reduce operational costs.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <Link href="/book-a-call" className="w-full sm:w-auto">
              <button className="h-[52px] w-full sm:w-auto px-8 rounded-lg bg-primary text-white text-[16px] font-medium">
                Book Your Free Strategy Call
              </button>
            </Link>

            <Link href="/case-studies" className="w-full sm:w-auto">
              <button className="h-[52px] w-full sm:w-auto px-8 text-[16px] font-medium bg-black text-white rounded-lg hover:opacity-90 transition">
                See Automation Systems
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
