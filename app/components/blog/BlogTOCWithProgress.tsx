"use client";

import { useEffect, useRef, useState } from "react";

type Heading = {
  id: string;
  text: string;
  level: "h2" | "h3";
};

function calculateReadingTime(): number {
  const article = document.querySelector("article");
  if (!article) return 1;

  const text = article.innerText || "";
  const words = text.trim().split(/\s+/).length;

  const minutes = Math.ceil(words / 200);
  return Math.max(1, minutes);
}

export default function BlogTOCWithProgress({
  headings,
}: {
  headings: Heading[];
}) {
  const progressRef = useRef<HTMLDivElement>(null);
  const tocScrollRef = useRef<HTMLDivElement>(null);
  const activeItemRef = useRef<HTMLAnchorElement | null>(null);

  const [activeId, setActiveId] = useState<string | null>(
    headings[0]?.id || null,
  );
  const [readingTime, setReadingTime] = useState<number>(1);

  function handleTocWheel(e: React.WheelEvent<HTMLDivElement>) {
    const el = tocScrollRef.current;
    if (!el) return;

    const atTop = el.scrollTop === 0;
    const atBottom = el.scrollHeight - el.scrollTop === el.clientHeight;

    if (!(atTop && e.deltaY < 0) && !(atBottom && e.deltaY > 0)) {
      e.stopPropagation();
    }
  }

  useEffect(() => {
    const article = document.querySelector("article");
    if (!article) return;

    setReadingTime(calculateReadingTime());

    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const articleTop = article.getBoundingClientRect().top + window.scrollY;
        const articleHeight = article.offsetHeight;
        const viewportHeight = window.innerHeight;

        const scrollTop = window.scrollY;

        const totalScrollable = articleHeight - viewportHeight;
        const currentScroll = scrollTop - articleTop;

        let percent = (currentScroll / totalScrollable) * 100;
        percent = Math.max(0, Math.min(100, percent));

        if (progressRef.current) {
          progressRef.current.style.width = `${percent}%`;
        }

        // ===== Active heading detect =====
        let current: string | null = activeId;

        for (const h of headings) {
          const el = document.getElementById(h.id);
          if (!el) continue;

          const rect = el.getBoundingClientRect();
          if (rect.top <= 160) {
            current = h.id;
          } else {
            break;
          }
        }

        if (current !== activeId) {
          setActiveId(current);
        }

        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [headings, activeId]);

  // Auto scroll TOC when active changes
  useEffect(() => {
    if (!activeItemRef.current || !tocScrollRef.current) return;

    activeItemRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }, [activeId]);

  if (!headings.length) return null;

  return (
    <div className="max-h-[60vh] flex flex-col rounded-xl border border-gray-200 bg-white p-5">
      {/* Header */}
      <div className="shrink-0">
        <div className="text-md font-medium text-gray-900 mb-3">
          {readingTime} min read
        </div>

        <div className="mb-5">
          <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
            <div
              ref={progressRef}
              className="h-full bg-blue-600 transition-[width] duration-150 ease-out"
              style={{ width: "0%" }}
            />
          </div>
        </div>
      </div>

      {/* TOC */}
      <div
        ref={tocScrollRef}
        onWheel={handleTocWheel}
        className="flex-1 overflow-y-auto pr-1"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <nav className="space-y-2">
          {headings
            .filter((h) => h.level === "h2")
            .map((h) => {
              const isActive = activeId === h.id;

              return (
                <a
                  key={h.id}
                  href={`#${h.id}`}
                  ref={isActive ? activeItemRef : null}
                  className={`block text-sm leading-snug transition-all border-l-2 pl-3 ${
                    isActive
                      ? "text-blue-600 border-blue-600 font-medium"
                      : "text-gray-600 border-transparent hover:text-gray-900"
                  }`}
                >
                  {h.text}
                </a>
              );
            })}
        </nav>
      </div>
    </div>
  );
}
