import type { Metadata } from "next";
import Container from "@/app/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy Policy – Saclen",
  description:
    "Privacy Policy of Saclen. Learn how we collect, use, store, and protect your personal data when you use our website and services.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="py-28">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-14">
            <h1 className="text-[36px] sm:text-[44px] md:text-[52px] font-semibold leading-tight">
              Privacy Policy
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              Last updated: {new Date().getFullYear()}
            </p>
          </div>

          {/* Content */}
          <div className="space-y-10 text-gray-700 text-[17px] leading-relaxed">
            <section>
              <p>
                At Saclen, we take your privacy seriously. This Privacy Policy
                explains how we collect, use, store, and protect your personal
                information when you visit our website, contact us, subscribe to
                our newsletter, or use our web development, no-code development,
                and AI automation services.
              </p>
              <p className="mt-4">
                By using our website or services, you agree to the practices
                described in this policy.
              </p>
            </section>

            <section>
              <h2 className="text-[22px] font-semibold text-black mb-3">
                1. Information We Collect
              </h2>
              <p>
                We may collect different types of information depending on how
                you interact with us, including:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>
                  Personal information such as your name, email address, phone
                  number, and company name.
                </li>
                <li>
                  Business or project-related information that you submit
                  through contact forms, emails, or calls.
                </li>
                <li>
                  Messages, files, or documents you send to us for project
                  discussion or support.
                </li>
                <li>
                  Technical information such as browser type, device
                  information, pages visited, and approximate location (via
                  analytics and log files).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-[22px] font-semibold text-black mb-3">
                2. How We Use Your Information
              </h2>
              <p>Your information may be used for the following purposes:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>
                  To respond to your inquiries and communicate with you about
                  your project or request.
                </li>
                <li>To provide, operate, and improve our services.</li>
                <li>
                  To prepare proposals, contracts, and project documentation.
                </li>
                <li>
                  To send newsletters, updates, or marketing communications if
                  you have opted in.
                </li>
                <li>
                  To maintain internal records, accounting, and business
                  operations.
                </li>
                <li>To analyze website usage and improve user experience.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-[22px] font-semibold text-black mb-3">
                3. Legal Basis for Processing
              </h2>
              <p>
                We process your information based on one or more of the
                following:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Your consent (for example, when you subscribe).</li>
                <li>
                  The necessity to perform a contract or take steps before
                  entering a contract.
                </li>
                <li>Our legitimate business interests.</li>
                <li>Legal obligations.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-[22px] font-semibold text-black mb-3">
                4. Data Storage & Retention
              </h2>
              <p>
                We store your information only as long as necessary for business
                purposes, legal requirements, or to fulfill the purposes
                described in this policy. When data is no longer needed, we
                securely delete or anonymize it.
              </p>
            </section>

            <section>
              <h2 className="text-[22px] font-semibold text-black mb-3">
                5. Data Protection & Security
              </h2>
              <p>
                We implement reasonable technical and organizational security
                measures to protect your data against unauthorized access,
                alteration, disclosure, or destruction. However, no online
                system is 100% secure, and we cannot guarantee absolute
                security.
              </p>
            </section>

            <section>
              <h2 className="text-[22px] font-semibold text-black mb-3">
                6. Third-Party Services
              </h2>
              <p>
                We may use third-party tools and services such as hosting
                providers, analytics platforms, email services, form providers,
                automation tools, or CRM systems. These third parties may
                process limited data on our behalf strictly for operational
                purposes.
              </p>
              <p className="mt-3">
                We are not responsible for the privacy practices of third-party
                websites or services that you access through links on our site.
              </p>
            </section>

            <section>
              <h2 className="text-[22px] font-semibold text-black mb-3">
                7. Cookies & Tracking Technologies
              </h2>
              <p>
                We may use cookies or similar technologies to improve website
                functionality, analyze traffic, and understand user behavior.
                You can control or disable cookies through your browser
                settings, but some parts of the website may not function
                properly.
              </p>
            </section>

            <section>
              <h2 className="text-[22px] font-semibold text-black mb-3">
                8. Your Rights
              </h2>
              <p>Depending on your location, you may have rights including:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Request access to your personal data.</li>
                <li>Request correction or update of your data.</li>
                <li>Request deletion of your data.</li>
                <li>Withdraw consent at any time for marketing emails.</li>
              </ul>
              <p className="mt-3">
                You can exercise these rights by contacting us.
              </p>
            </section>

            <section>
              <h2 className="text-[22px] font-semibold text-black mb-3">
                9. International Data Transfers
              </h2>
              <p>
                Your information may be stored or processed in countries other
                than your own. We take steps to ensure appropriate safeguards
                are in place for such transfers.
              </p>
            </section>

            <section>
              <h2 className="text-[22px] font-semibold text-black mb-3">
                10. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with an updated date. Continued use
                of our website or services means you accept the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-[22px] font-semibold text-black mb-3">
                11. Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy or how we
                handle your data, please contact us at:
              </p>
              <p className="mt-2 font-medium text-black">contact@saclen.com</p>
            </section>
          </div>
        </div>
      </Container>
    </main>
  );
}
