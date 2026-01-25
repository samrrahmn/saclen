import type { Metadata } from "next";
import Container from "@/app/components/ui/Container";

export const metadata: Metadata = {
  title: "Terms & Conditions – Saclen Atlas",
  description:
    "Terms and Conditions of Saclen Atlas. Please read these terms carefully before using our services.",
};

export default function TermsPage() {
  return (
    <main className="py-28">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-14">
            <h1 className="text-[36px] sm:text-[44px] md:text-[52px] font-semibold leading-tight">
              Terms & Conditions
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              Last updated: {new Date().getFullYear()}
            </p>
          </div>

          {/* Content */}
          <div className="space-y-10 text-gray-700 text-[17px] leading-relaxed">
            <section>
              <p>
                These Terms & Conditions govern your use of Saclen Atlas and our
                services. By accessing our website, contacting us, or working
                with us, you agree to be bound by these terms.
              </p>
              <p className="mt-4">
                If you do not agree with any part of these terms, you should not
                use our services.
              </p>
            </section>

            <section>
              <h2 className="text-[22px] font-semibold text-black mb-3">
                1. Services
              </h2>
              <p>
                Saclen Atlas provides web development, no-code development,
                custom software development, and AI automation services. The
                exact scope, features, timeline, and deliverables are defined in
                a written proposal, agreement, or contract for each project.
              </p>
            </section>

            <section>
              <h2 className="text-[22px] font-semibold text-black mb-3">
                2. Project Scope & Revisions
              </h2>
              <p>
                Each project is delivered based on an agreed scope of work.
                Requests that go beyond the original scope may require
                additional time and cost. We reserve the right to adjust
                timelines and pricing if the scope changes.
              </p>
              <p className="mt-3">
                Minor revisions are usually included, but major changes or new
                features will be treated as a new or extended scope.
              </p>
            </section>

            <section>
              <h2 className="text-[22px] font-semibold text-black mb-3">
                3. Client Responsibilities
              </h2>
              <p>
                You agree to provide accurate information, timely feedback, and
                any required materials (such as content, access, or assets) to
                avoid project delays. We are not responsible for delays caused
                by missing information or late feedback.
              </p>
            </section>

            <section>
              <h2 className="text-[22px] font-semibold text-black mb-3">
                4. Payments & Billing
              </h2>
              <p>
                Payment terms, milestones, and amounts are agreed upon before
                the project starts. Payments must be made on time according to
                the agreed schedule. Failure to make payments may result in
                suspension or termination of work.
              </p>
            </section>

            <section>
              <h2 className="text-[22px] font-semibold text-black mb-3">
                5. Intellectual Property
              </h2>
              <p>
                Once full payment is received, you own the final delivered
                project unless otherwise stated in a separate agreement. We may
                retain the right to showcase the work in our portfolio unless
                otherwise agreed.
              </p>
            </section>

            <section>
              <h2 className="text-[22px] font-semibold text-black mb-3">
                6. Confidentiality
              </h2>
              <p>
                We agree to keep your confidential information private and not
                disclose it to third parties, except when required by law or
                with your written permission.
              </p>
            </section>

            <section>
              <h2 className="text-[22px] font-semibold text-black mb-3">
                7. Warranties & Disclaimer
              </h2>
              <p>
                We strive to deliver high-quality work, but we do not guarantee
                that the delivered product will be completely error-free or
                uninterrupted. All services are provided “as is” unless
                otherwise stated in writing.
              </p>
            </section>

            <section>
              <h2 className="text-[22px] font-semibold text-black mb-3">
                8. Limitation of Liability
              </h2>
              <p>
                Saclen Atlas shall not be liable for any indirect, incidental,
                special, or consequential damages, including loss of profits,
                business interruption, or data loss, arising from the use of our
                services or delivered products.
              </p>
            </section>

            <section>
              <h2 className="text-[22px] font-semibold text-black mb-3">
                9. Termination
              </h2>
              <p>
                Either party may terminate the project if the other party
                breaches these terms. In such cases, any completed work up to
                the termination date must be paid for.
              </p>
            </section>

            <section>
              <h2 className="text-[22px] font-semibold text-black mb-3">
                10. Third-Party Services
              </h2>
              <p>
                Some projects may rely on third-party tools, platforms, or
                services. We are not responsible for outages, changes, or
                failures caused by those third-party providers.
              </p>
            </section>

            <section>
              <h2 className="text-[22px] font-semibold text-black mb-3">
                11. Changes to These Terms
              </h2>
              <p>
                We may update these Terms & Conditions from time to time.
                Continued use of our services means you accept the updated
                terms.
              </p>
            </section>

            <section>
              <h2 className="text-[22px] font-semibold text-black mb-3">
                12. Governing Law
              </h2>
              <p>
                These terms shall be governed and interpreted according to
                applicable laws.
              </p>
            </section>

            <section>
              <h2 className="text-[22px] font-semibold text-black mb-3">
                13. Contact Us
              </h2>
              <p>
                If you have any questions about these Terms & Conditions, please
                contact us at:
              </p>
              <p className="mt-2 font-medium text-black">contact@saclen.com</p>
            </section>
          </div>
        </div>
      </Container>
    </main>
  );
}
