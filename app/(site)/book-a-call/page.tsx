"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

export default function BookACallPage() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "schedule" });

      cal("ui", {
        theme: "light",
        layout: "month_view",
        hideEventTypeDetails: false,
      });
    })();
  }, []);

  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-slate-50 via-green-50/40 to-transparent">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Heading */}
        <div className="max-w-2xl mx-auto text-center my-12">
          <h1 className="text-[28px] sm:text-[36px] md:text-[44px] font-semibold leading-[1.1] text-gray-900">
            Book a Free Strategy Call
          </h1>
          <p className="mt-4 text-[16px] sm:text-[18px] text-gray-600 leading-[1.7]">
            Choose a time that works for you and let’s discuss how we can build
            your website, automation system, or custom software.
          </p>
        </div>

        {/* Calendar */}
        <div className="w-full rounded-2xl overflow-hidden">
          <Cal
            namespace="schedule"
            calLink="sameerrahman/schedule"
            style={{
              width: "100%",
              minHeight: "600px",
              overflow: "auto",
            }}
            config={{
              layout: "month_view",
              theme: "light",
            }}
          />
        </div>
      </div>
    </main>
  );
}
