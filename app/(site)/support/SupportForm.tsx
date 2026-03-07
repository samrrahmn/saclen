"use client";

import { useState } from "react";

export default function SupportForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
      <input
        type="hidden"
        name="access_key"
        value="f26eb6cf-dde8-428f-8a55-6fc4b7ab1eb4"
      />
      <input
        type="hidden"
        name="subject"
        value="New Support Request - Saclen"
      />
      <input type="hidden" name="from_name" value="Saclen Support" />
      <input type="checkbox" name="botcheck" className="hidden" />

      <div>
        <label className="block text-md font-medium text-gray-900 mb-2">
          Your name
        </label>
        <input
          type="text"
          name="name"
          required
          className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-900"
          placeholder="John Doe"
        />
      </div>

      <div>
        <label className="block text-md font-medium text-gray-900 mb-2">
          Email address
        </label>
        <input
          type="email"
          name="email"
          required
          className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-900"
          placeholder="name@example.com"
        />
      </div>

      <div>
        <label className="block text-md font-medium text-gray-900 mb-2">
          What can we help you with?
        </label>
        <textarea
          name="message"
          rows={5}
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-900 resize-none"
          placeholder="Describe your issue..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="h-12 px-6 rounded-lg text-white font-medium bg-black transition w-fit"
      >
        {status === "idle" && "Send message"}
        {status === "sending" && "Sending..."}
        {status === "success" && "Success"}
        {status === "error" && "Failed, try again"}
      </button>
    </form>
  );
}
