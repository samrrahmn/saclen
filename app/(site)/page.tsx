import HeroSection from "@/app/components/sections/home/HeroSection";
import FAQSection from "@/app/components/sections/shared/FAQSection";
import TrustedSlider from "@/app/components/sections/shared/TrustedSlider";
import ServiceSection from "@/app/components/sections/home/ServiceSection";
import DemoDashboardSection from "@/app/components/sections/home/DashboardSection";
import TestimonialsSection from "@/app/components/sections/home/TestimonialsSection";
import HowWeFindSection from "@/app/components/sections/home/HowWeFindSection";
import WhoThisIsFor from "@/app/components/sections/home/WhoThisIsFor";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustedSlider />
      <WhoThisIsFor />
      <TestimonialsSection />
      <HowWeFindSection />
      <DemoDashboardSection />
      <ServiceSection />
      <FAQSection />
    </main>
  );
}
