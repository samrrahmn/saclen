"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("saclen-cookie-consent");
    if (!saved) {
      setVisible(true);
    }
  }, []);

  function acceptCookies() {
    localStorage.setItem(
      "saclen-cookie-consent",
      JSON.stringify({ accepted: true }),
    );
    setVisible(false);
  }

  function cancelCookies() {
    localStorage.setItem(
      "saclen-cookie-consent",
      JSON.stringify({ accepted: false }),
    );
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <div className="max-w-sm rounded-xl border border-gray-200 bg-white px-6 py-5 shadow-lg">
        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
          We use cookies to improve your experience. Read our{" "}
          <Link
            href="/privacy-policy"
            className="text-gray-900 underline hover:opacity-80"
          >
            Cookie Policy
          </Link>
          .
        </p>

        <div className="flex gap-3 justify-end">
          <button
            onClick={cancelCookies}
            className="h-10 px-4 rounded-md border border-gray-300 text-gray-800 text-sm hover:bg-gray-50 transition"
          >
            Cancel
          </button>

          <button
            onClick={acceptCookies}
            className="h-10 px-5 rounded-md bg-primary text-white text-sm font-medium hover:opacity-90 transition"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}