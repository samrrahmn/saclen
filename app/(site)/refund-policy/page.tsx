import type { Metadata } from "next";
import Container from "@/app/components/ui/Container";

export const metadata: Metadata = {
  title: "Refund Policy – Saclen",
  description:
    "Refund Policy of Saclen. Learn how refunds, cancellations, and project terminations are handled for our services.",
};

export default function RefundPolicyPage() {
  return (
    <main className="py-28">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-14">
            <h1 className="text-[36px] sm:text-[44px] md:text-[52px] font-semibold leading-tight">
              Refund Policy
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              Last updated: {new Date().getFullYear()}
            </p>
          </div>

          {/* Content */}
          <div className="space-y-10 text-gray-700 text-[17px] leading-relaxed">
            <section>
              <p>
                Saclen provides custom web development, no-code solutions,
                custom software, and AI automation services. Because our work is
                customized and time-based, refunds are handled carefully and
                fairly according to the guidelines below.
              </p>
              <p className="mt-4">
                By working with us, you agree to this Refund Policy.
              </p>
            </section>

            <section>
              <h2 className="text-[22px] font-semibold text-black mb-3">
                1. General Policy
              </h2>
              <p>
                All payments are made for time, expertise, planning, and
                development work. Once work has started on a a project or a
                milestone, that payment is generally non-refundable.
              </p>
            </section>

            <section>
              <h2 className="text-[22px] font-semibold text-black mb-3">
                2. Before Work Starts
              </h2>
              <p>
                If you cancel the project before any work has started, you may
                be eligible for a full or partial refund. This depends on
                whether any planning, discovery, or preparation work has already
                been done.
              </p>
            </section>

            <section>
              <h2 className="text-[22px] font-semibold text-black mb-3">
                3. After Work Has Started
              </h2>
              <p>
                If the project or a milestone has already started, refunds are
                not guaranteed. In some cases, we may offer a partial refund
                based on how much work has already been completed.
              </p>
              <p className="mt-3">
                Any delivered work, drafts, designs, or code up to that point
                will remain the property of Saclen until full payment is made.
              </p>
            </section>

            <section>
              <h2 className="text-[22px] font-semibold text-black mb-3">
                4. Milestone-Based Projects
              </h2>
              <p>
                Most projects are divided into milestones. Each milestone is
                treated as a separate phase of work. Once a milestone has
                started or has been delivered, the payment for that milestone is
                non-refundable.
              </p>
            </section>

            <section>
              <h2 className="text-[22px] font-semibold text-black mb-3">
                5. Failure to Deliver
              </h2>
              <p>
                If we fail to deliver the agreed scope of work for a milestone
                or project without a valid reason, you may be eligible for a
                partial or full refund for that specific part. Each case will be
                reviewed individually and fairly.
              </p>
            </section>

            <section>
              <h2 className="text-[22px] font-semibold text-black mb-3">
                6. Cancellations by Client
              </h2>
              <p>
                You may request cancellation at any time. Any refunds, if
                applicable, will depend on the current stage of the project and
                the amount of work already completed.
              </p>
            </section>

            <section>
              <h2 className="text-[22px] font-semibold text-black mb-3">
                7. Delays Caused by Client
              </h2>
              <p>
                If a project is delayed due to missing information, late
                feedback, or lack of response from the client, payments already
                made are non-refundable.
              </p>
            </section>

            <section>
              <h2 className="text-[22px] font-semibold text-black mb-3">
                8. Third-Party Costs
              </h2>
              <p>
                Any costs paid to third-party services, tools, licenses, or
                subscriptions on your behalf are non-refundable.
              </p>
            </section>

            <section>
              <h2 className="text-[22px] font-semibold text-black mb-3">
                9. How to Request a Refund
              </h2>
              <p>
                To request a refund or discuss a billing issue, you must contact
                us in writing at:
              </p>
              <p className="mt-2 font-medium text-black">contact@saclen.com</p>
              <p className="mt-3">
                Please include your project details and reason for the request.
                We will review your case and respond within a reasonable time.
              </p>
            </section>

            <section>
              <h2 className="text-[22px] font-semibold text-black mb-3">
                10. Changes to This Policy
              </h2>
              <p>
                We may update this Refund Policy from time to time. Any changes
                will be posted on this page with an updated date.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </main>
  );
}
