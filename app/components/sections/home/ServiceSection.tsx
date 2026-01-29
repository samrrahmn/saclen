import Container from "../../ui/Container";

const services = [
  {
    title: "Website Development",
    desc: "High-performance websites and web applications built for speed, conversion, and long-term scalability using modern technologies.",
    icon: <i className="fa-solid fa-code text-blue-600 text-[22px]"></i>,
  },
  {
    title: "AI Automation Systems",
    desc: "We automate your workflows, operations, and repetitive tasks using AI so your business runs faster with less manual work.",
    icon: <i className="fa-solid fa-robot text-blue-600 text-[22px]"></i>,
  },
  {
    title: "Custom Business Dashboards",
    desc: "Custom-built admin panels, analytics dashboards, and internal systems to manage your entire business from one place.",
    icon: <i className="fa-solid fa-chart-line text-blue-600 text-[22px]"></i>,
  },
  {
    title: "API & Tool Integrations",
    desc: "We connect your CRM, payment systems, marketing tools, and platforms into one smooth and fully automated workflow.",
    icon: <i className="fa-solid fa-plug text-blue-600 text-[22px]"></i>,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-28 bg-white scroll-mt-24">
      <Container>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-semibold leading-[1.1] text-gray-900">
            Build smarter digital systems for your business
          </h2>
          <p className="mt-4 text-[16px] sm:text-[18px] text-gray-600 leading-[1.7]">
            We design and build modern websites and automation systems to
            improve efficiency and help your business run smoothly.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="rounded-xl border border-gray-200  p-8 text-center bg-gray-50"
            >
              {/* Icon */}
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
                {service.icon}
              </div>

              <h3 className="text-[22px] font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>

              <p className="text-[15px] leading-[1.7] text-gray-600">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
