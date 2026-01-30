import Script from "next/script";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import CookieConsent from "@/app/components/ui/CookieConsent";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Tidio Live Chat */}
      <Script
        src="https://code.tidio.co/9iql3s7f85ha3tyt7dxoj3dws9fv2skn.js"
        strategy="afterInteractive"
      />

      <Header />
      <div className="pt-[65px] overflow-visible">
        {children}
        <CookieConsent />
      </div>
      <Footer />
    </>
  );
}
