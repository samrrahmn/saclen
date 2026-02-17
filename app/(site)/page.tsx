import HeroSection from "@/app/components/sections/home/HeroSection";
import FAQSection from "@/app/components/sections/shared/FAQSection";
import CTASection from "@/app/components/sections/shared/CTASection";
import TrustedSlider from "@/app/components/sections/shared/TrustedSlider";
import ServiceSection from "@/app/components/sections/home/ServiceSection";
import DemoDashboardSection from "@/app/components/sections/home/DemoDashboardSection";
import CompareSection from "@/app/components/sections/home/CompareSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustedSlider />
      <ServiceSection />
      <DemoDashboardSection />
      <CompareSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
