"use client";

import Container from "../ui/Container";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setStatus("idle");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <footer className="border-t border-gray-200 bg-white">
      <Container>
        <div className="py-20">
          <div className="flex flex-col gap-10 md:flex-row justify-between">
            <div className="flex flex-col gap-5 max-w-md" id="newsletter">
              <h1 className="text-[26px] font-semibold text-black">
                Join Our Newsletter
              </h1>

              <form
                onSubmit={handleSubmit}
                className="border border-gray-200 w-full rounded-lg flex gap-3 items-center p-1 bg-white"
              >
                <input
                  type="email"
                  placeholder="Email address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent focus:outline-none px-3 text-[16px] text-black placeholder:text-gray-400"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-primary text-white hover:bg-black px-5 h-[44px] rounded-md text-[15px] font-medium disabled:opacity-60"
                >
                  {loading
                    ? "Subscribing..."
                    : status === "success"
                      ? "Subscribed"
                      : status === "error"
                        ? "Failed"
                        : "Subscribe"}
                </button>
              </form>
            </div>

            <div>
              <h4 className="text-[17px] font-medium mb-4 text-black">
                Explore
              </h4>
              <ul className="space-y-3 text-[16px] text-gray-600">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/#services">Services</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[17px] font-medium mb-4 text-black">
                Resources
              </h4>
              <ul className="space-y-3 text-[16px] text-gray-600">
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/guides">Guides</Link>
                </li>
                <li>
                  <Link href="/#faqs">FAQs</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[17px] font-medium mb-4 text-black">
                Policies
              </h4>
              <ul className="space-y-3 text-[16px] text-gray-600">
                <li>
                  <Link href="/privacy-policy">Privacy</Link>
                </li>
                <li>
                  <Link href="/terms-and-conditions">Terms</Link>
                </li>
                <li>
                  <Link href="/refund-policy">Refund</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="h-px w-full bg-gray-200 my-10"></div>

          <div className="flex flex-wrap md:flex-row gap-8 justify-between items-center">
            <p className="text-[15px] text-gray-600">
              © 2026, Saclen LLC, All Rights Reserved.
            </p>

            <div className="flex gap-6 text-black text-[22px]">
              <a
                href="mailto:hello@saclen.com"
                className="hover:opacity-70 transition"
              >
                <i className="fa-solid fa-envelope"></i>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://facebook.com/thesaclen"
                className="hover:opacity-70 transition"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://x.com/saclen_dev"
                className="hover:opacity-70 transition"
              >
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/company/saclen"
                className="hover:opacity-70 transition"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
