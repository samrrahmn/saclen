import Image from "next/image";

export default function DemoOverlaySection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-semibold leading-[1.1] text-gray-900">
            Run your business from one intelligent system.
          </h2>
          <p className="mt-4 text-[16px] sm:text-[18px] text-gray-600 leading-[1.7]">
            Track revenue, orders, users, and performance from a single
            dashboard. Real-time insights, clear numbers, and full control over
            your operations.
          </p>
        </div>

        {/* Demo Card */}
        <div className="rounded-md md:rounded-xl overflow-hidden border border-gray-200">
          {/* Background Image */}
          <Image
            src="/assets/dashboard.png"
            alt="Dashboard preview"
            width={1600}
            height={900}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
