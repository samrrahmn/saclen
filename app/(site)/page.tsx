import HeroSection from "@/app/components/sections/home/HeroSection";
import FAQSection from "@/app/components/sections/shared/FAQSection";
import CTASection from "@/app/components/sections/shared/CTASection";
import TrustedSlider from "@/app/components/sections/shared/TrustedSlider";
import DemoOverlaySection from "@/app/components/sections/home/DemoOverlaySection";
import ServiceSection from "@/app/components/sections/home/ServiceSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustedSlider />
      <DemoOverlaySection />
      <ServiceSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
