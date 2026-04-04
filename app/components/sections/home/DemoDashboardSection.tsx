import Container from "../../ui/Container";
import DemoDashboard from "./DemoDashboard";

export default function DemoDashboardSection() {
  return (
    <section className="py-20 md:py-25">
      <Container>
        <div>
          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-semibold leading-[1.1] text-gray-900">
              Manage your business from one smart platform
            </h2>
            <p className="mt-4 text-[16px] sm:text-[18px] text-gray-600 leading-[1.7]">
              Track revenue, orders, users, and performance from a single
              dashboard. Real-time insights, clear numbers, and full control
              over your operations.
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
