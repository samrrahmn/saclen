"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type CookiePrefs = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("saclen-cookie-consent");
    if (!saved) {
      setVisible(true);
    }
  }, []);

  function acceptAll() {
    const all: CookiePrefs = {
      necessary: true,
      analytics: true,
      marketing: true,
    };

    localStorage.setItem("saclen-cookie-consent", JSON.stringify(all));
    setVisible(false);
  }

  function rejectAll() {
    const necessaryOnly: CookiePrefs = {
      necessary: true,
      analytics: false,
      marketing: false,
    };

    localStorage.setItem(
      "saclen-cookie-consent",
      JSON.stringify(necessaryOnly),
    );
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-[9999]">
      <div className="max-w-sm rounded-xl border border-gray-200 bg-white px-6 py-5">
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
            onClick={rejectAll}
            className="h-10 px-4 rounded-md border border-gray-400 text-gray-800 text-sm hover:bg-gray-50 transition"
          >
            Reject
          </button>

          <button
            onClick={acceptAll}
            className="h-10 px-5 rounded-md bg-black text-white hover:bg-primary text-sm hover:opacity-90 transition"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
