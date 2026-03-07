import Link from "next/link";
import SupportForm from "./SupportForm";
import LiveChatCard from "./LiveChatCard";

export const metadata = {
  title: "Support",
  description:
    "Contact Saclen support for customer service, technical help, live chat support, and product assistance. Get help with Saclen products and services.",
};

export default function SupportPage() {
  return (
    <main className="pt-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* ===== HERO ===== */}
        <div className="max-w-2xl mx-auto text-center mb-24">
          <h1 className="text-[42px] md:text-[56px] font-semibold text-gray-900 tracking-tight mb-6 leading-[1.05]">
            How can we help you?
          </h1>

          <p className="text-gray-600 text-xl leading-relaxed">
            Get support for Saclen products, services, and systems. Our team is
            here to help you resolve issues and move faster.
          </p>
        </div>

        {/* ===== SUPPORT OPTIONS ===== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-28">
          {/* Email */}
          <div className="rounded-xl border border-gray-200 p-8">
            <div className="text-md text-gray-500 mb-3">Contact</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Email Support
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Send us an email and our support team will get back to you.
            </p>

            <a
              href="mailto:support@saclen.com"
              className="text-md font-medium text-primary hover:underline"
            >
              support@saclen.com
            </a>
          </div>

          {/* Live Chat */}
          <div>
            <LiveChatCard />
          </div>

          {/* Docs */}
          <div className="rounded-xl border border-gray-200 p-8">
            <div className="text-md text-gray-500 mb-3">Self Service</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Documentation
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Browse guides and tutorials.
            </p>

            <Link
              href="/docs"
              className="text-md font-medium text-primary hover:underline"
            >
              Go to documentation
            </Link>
          </div>
        </div>

        {/* ===== CONTACT FORM ===== */}
        <div className="max-w-3xl mx-auto mb-32" id="contact">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Contact Support
            </h2>
            <p className="text-gray-600 text-lg">
              Describe your issue and our team will get back to you.
            </p>
          </div>

          <SupportForm />
        </div>
      </div>
    </main>
  );
}
