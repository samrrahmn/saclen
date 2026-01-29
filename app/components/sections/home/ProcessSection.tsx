import Container from "../../ui/Container";

export default function ProcessSection() {
  const steps = [
    {
      icon: "📞",
      title: "Discovery Call",
      desc: "Understand your business, goals, and system requirements",
      step: 1,
    },
    {
      icon: "🧠",
      title: "Scope & Prototype",
      desc: "Plan the system and build an interactive prototype",
      step: 2,
    },
    {
      icon: "🛠️",
      title: "Develop",
      desc: "Build your web app, SaaS, or AI automation platform",
      step: 3,
    },
    {
      icon: "🔁",
      title: "Scale",
      desc: "Improve, optimize, and expand with AI automations",
      step: 4,
    },
  ];

  return (
    <section className="py-24 px-4">
      <Container>
        <div className="max-w-7xl mx-auto bg-gray-50 border rounded-xl py-20 px-6 md:px-12">
          <h2 className="text-center text-[40px] md:text-[48px] font-semibold text-black mb-16">
            Simple Process. Serious Results.
          </h2>

          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Desktop horizontal line */}
              <div className="hidden md:block absolute top-[62px] left-[12.5%] right-[12.5%] h-[3px] bg-gray-200 z-0" />

              {/* Mobile vertical line (only for small screens) */}
              <div className="md:hidden absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[3px] bg-gray-200 z-0" />

              {/* Grid */}
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
                {steps.map((item) => (
                  <div
                    key={item.step}
                    className="flex flex-col items-center relative"
                  >
                    {/* Card */}
                    <div
                      className="
                      bg-white border border-gray-200 rounded-xl px-6 pt-8 pb-10 text-center w-full max-w-[220px]
                      md:h-[260px] flex flex-col
                    "
                    >
                      <div className="w-14 h-14 mx-auto rounded-full bg-blue-100 flex items-center justify-center text-2xl mb-5">
                        {item.icon}
                      </div>

                      <h3 className="text-[18px] font-semibold mb-2">
                        {item.title}
                      </h3>

                      <p className="text-[15px] text-gray-600 leading-relaxed flex-1">
                        {item.desc}
                      </p>
                    </div>

                    {/* Step number */}
                    <div className="-mt-4 w-9 h-9 rounded-full bg-white border border-gray-300 flex items-center justify-center text-sm font-medium shadow-sm z-10">
                      {item.step}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
