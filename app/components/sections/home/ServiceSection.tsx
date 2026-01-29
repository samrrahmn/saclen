import Container from "../../ui/Container";
import { Check } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Website",
    desc: "A fast, modern website designed to convert visitors into customers.",
    price: "$499",
    suffix: "/ Project",
    label: "What's Included",
    features: [
      "1 – 5 page website",
      "Responsive design",
      "Basic SEO setup",
      "Contact form integration",
      "7 days delivery",
    ],
    buttonText: "Get Started",
    buttonLink: "/book-a-call",
  },
  {
    title: "Automation",
    desc: "Automate your business operations with custom AI-powered systems.",
    price: "$1499",
    suffix: "/ Project",
    label: "What's Included",
    features: [
      "Custom AI workflow automation",
      "Internal tools or dashboard",
      "CRM / API integration",
      "AI agents or assistants",
      "Deployment + documentation",
    ],
    buttonText: "Get Started",
    buttonLink: "/book-a-call",
  },
  {
    title: "Enterprise",
    desc: "For large or complex systems requiring full custom architecture.",
    price: "Custom",
    suffix: "/ Project",
    label: "What's Included",
    features: [
      "Website & internal system",
      "Custom software or SaaS",
      "AI automation",
      "Dashboard & analytics",
      "Ongoing support",
    ],
    buttonText: "Contact Us",
    buttonLink: "/contact",
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

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <div
              key={i}
              className={`rounded-xl border border-gray-200 p-8 flex flex-col ${
                i === 1 ? "bg-gray-50" : "bg-white"
              }`}
            >
              <h3 className="text-3xl font-medium text-gray-900 mb-2">
                {service.title}
              </h3>

              <p className="text-gray-600 my-3">{service.desc}</p>

              <div className="text-3xl font-semibold text-gray-900 mb-8">
                {service.price}{" "}
                <span className="text-base font-medium text-gray-500">
                  {service.suffix}
                </span>
              </div>

              <div className="text-gray-500 uppercase font-semibold text-sm mb-4">
                {service.label}
              </div>

              <ul className="space-y-4 text-gray-700 mb-10">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-gray-700" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={service.buttonLink}
                className={`mt-auto rounded-lg py-3 font-semibold transition text-center ${
                  i === 1
                    ? "bg-primary text-white hover:bg-primary/90"
                    : "border border-gray-400 text-black bg-white hover:bg-gray-50"
                }`}
              >
                {service.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
