"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function AISummarizeCard() {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  if (!url) return null;

  const encodedUrl = encodeURIComponent(url);

  const tools = [
    {
      name: "ChatGPT",
      href: `https://chat.openai.com/?q=Summarize this article: ${encodedUrl}`,
      icon: "/ai/chatgpt.svg",
    },
    {
      name: "Gemini",
      href: `https://gemini.google.com/?q=Summarize this article: ${encodedUrl}`,
      icon: "/ai/gemini.png",
    },
    {
      name: "Claude",
      href: `https://claude.ai/new?q=Summarize this article: ${encodedUrl}`,
      icon: "/ai/claude.svg",
    },
    {
      name: "Grok",
      href: `https://x.ai/?q=Summarize this article: ${encodedUrl}`,
      icon: "/ai/grok.svg",
    },
    {
      name: "Perplexity",
      href: `https://www.perplexity.ai/?q=Summarize this article: ${encodedUrl}`,
      icon: "/ai/perplexity.svg",
    },
  ];

  return (
    <div className="mb-10">
      <div className="rounded-xl border border-gray-200 bg-gray-50 px-7 py-6">
        <h3 className="text-2xl font-medium text-gray-900 mb-8">
          Use AI to summarize this article
        </h3>

        <div className="flex flex-wrap items-center gap-10">
          {tools.map((tool) => (
            <a
              key={tool.name}
              href={tool.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-700 hover:text-black transition"
            >
              <div className="relative w-6 h-6">
                <Image
                  src={tool.icon}
                  alt={tool.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-base font-medium">{tool.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
