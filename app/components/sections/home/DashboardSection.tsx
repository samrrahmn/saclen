import Container from "../../ui/Container";
import DemoDashboard from "./Dashboard";

export default function DemoDashboardSection() {
  return (
    <section className="py-20 md:py-25">
      <Container>
        <div>
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-[28px] sm:text-[36px] font-semibold leading-[1.1] text-gray-900">
              See What Happens After AI Automation
            </h2>
            <p className="mt-4 text-[16px] text-gray-600 leading-[1.7]">
              This is a real system built from your business processes. Every
              workflow is designed to remove a specific inefficiency.
            </p>
          </div>

          {/* Demo Card */}
          <div>
            <DemoDashboard />
          </div>
        </div>
      </Container>
    </section>
  );
}
