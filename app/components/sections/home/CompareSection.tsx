export default function CompareSection() {
  const others = [
    "Generic templates and reused components",
    "Slow delivery and unclear timelines",
    "Hidden costs and monthly retainers",
    "Limited post-launch support",
    "No real automation or AI integration",
    "One-size-fits-all solutions",
  ];

  const saclen = [
    "Fully custom-built systems for your business",
    "Clear timeline and fast execution",
    "One-time project cost, you own everything",
    "Long-term support and continuous improvements",
    "AI and automation built into your workflows",
    "Solutions designed to scale with your company",
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-semibold leading-[1.1] text-gray-900">
            Why Saclen Atlas?
          </h2>
          <p className="mt-4 text-[16px] sm:text-[18px] text-gray-600 leading-[1.7]">
            See the difference between working with a typical agency and
            building your system with Saclen Atlas.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Other Agencies */}
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-8">
            <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
              Other agencies
            </div>
            <h3 className="mt-2 text-[22px] font-semibold text-gray-900">
              The usual experience
            </h3>

            <ul className="mt-6 space-y-4">
              {others.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  {/* Check icon (gray) */}
                  <span className="mt-[4px] flex-shrink-0 text-gray-400">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>

                  <span className="text-gray-700 leading-[1.6]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Saclen Atlas */}
          <div className="rounded-xl bg-primary p-8 text-white relative overflow-hidden">
            {/* Top brand */}
            <div className="text-[13px] font-semibold uppercase tracking-widest text-white/80">
              Saclen Atlas
            </div>

            <h3 className="mt-2 text-[28px] font-semibold text-white">
              Why it’s better
            </h3>

            <ul className="mt-6 space-y-4 relative z-10">
              {saclen.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  {/* Check icon (white) */}
                  <span className="mt-[4px] flex-shrink-0">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>

                  <span className="text-white/95 leading-[1.6]">{item}</span>
                </li>
              ))}
            </ul>

            {/* Subtle glow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
