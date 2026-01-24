import HeroSection from "@/app/components/sections/home/HeroSection";
import FAQSection from "@/app/components/sections/shared/FAQSection";
import CTASection from "@/app/components/sections/shared/CTASection";
import TrustedSlider from "@/app/components/sections/shared/TrustedSlider";
import ServiceSection from "@/app/components/sections/home/ServiceSection";
import DemoOverlaySection from "@/app/components/sections/home/DemoOverlaySection";
import ProcessSection from "@/app/components/sections/home/ProcessSection";
import TestimonialsSection from "@/app/components/sections/home/TestimonialsSection";
import CompareSection from "@/app/components/sections/home/CompareSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustedSlider />
      <ServiceSection />
      <TestimonialsSection />
      <DemoOverlaySection />
      <CompareSection />
      <ProcessSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
