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
        <div className="relative rounded-xl overflow-hidden border border-gray-200">
          {/* Background Image */}
          <Image
            src="/assets/dashboard.png"
            alt="Dashboard preview"
            width={1600}
            height={900}
            className="w-full h-auto object-cover"
            priority
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Center Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black/80 backdrop-blur-md p-4 sm:p-8 rounded-lg">
              <button className="px-5 py-3 sm:px-10 sm:py-4 rounded-lg bg-primary text-white font-semibold text-sm sm:text-lg shadow-lg shadow-blue-500/30 hover:opacity-90 transition">
                Book a free call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}