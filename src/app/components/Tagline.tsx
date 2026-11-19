"use client";

import { useEffect, useRef } from "react";

const LINES = ["It does not point.", "It does the step."];

export default function Tagline() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      root.querySelectorAll(".tag-word").forEach((word) => word.classList.add("is-on"));
      return;
    }

    const words = [...root.querySelectorAll<HTMLElement>(".tag-word")];
    let frame = 0;
    let running = false;

    const tick = () => {
      const line = window.innerHeight * 0.62;
      let pending = false;
      words.forEach((word, index) => {
        if (word.classList.contains("is-on")) return;
        const threshold = line - index * 36;
        if (word.getBoundingClientRect().top < threshold) word.classList.add("is-on");
        else pending = true;
      });
      frame = pending ? requestAnimationFrame(tick) : 0;
      if (!pending) running = false;
    };

    const start = () => {
      if (running) return;
      running = true;
      frame = requestAnimationFrame(tick);
    };
    const stop = () => {
      running = false;
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) start();
      else stop();
    });
    observer.observe(root);
    return () => {
      observer.disconnect();
      stop();
    };
  }, []);

  return (
    <section ref={rootRef} className="bg-[var(--surface)] px-6 py-24" aria-label="Tagline">
      <h2 className="heading-1 measure mx-auto">
        {LINES.map((line) => (
          <span key={line} className="block">
            {line.split(" ").map((word, index) => (
              <span key={`${line}-${index}`} className="tag-word inline">
                {word}
                {index < line.split(" ").length - 1 ? " " : ""}
              </span>
            ))}
          </span>
        ))}
      </h2>
    </section>
  );
}
