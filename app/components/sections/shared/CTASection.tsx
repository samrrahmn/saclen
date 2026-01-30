import Container from "../../ui/Container";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 md:py-25">
      <Container>
        <div className="rounded-xl border bg-primary px-6 py-20 md:px-12 text-center">
          {/* Title */}
          <h2 className="text-[32px] sm:text-[42px] md:text-[52px] leading-[1.1] font-semibold text-white max-w-4xl mx-auto">
            Build Your Custom System. Automate Your Business.
          </h2>

          {/* Subtitle */}
          <p className="text-[16px] sm:text-[18px] text-white opacity-80 mt-6 max-w-2xl mx-auto">
            From custom websites to full AI automation systems, we build
            software that saves time and scales with you.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <Link href="/contact" className="w-full sm:w-auto">
              <button className="h-[52px] w-full sm:w-auto px-8 rounded-lg bg-white text-black text-[16px] font-medium">
                Start Your Project
              </button>
            </Link>

            <Link href="/book-a-call" className="w-full sm:w-auto">
              <button className="h-[52px] w-full sm:w-auto px-8 text-[16px] font-medium bg-black text-white rounded-lg">
                Book a Call
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
