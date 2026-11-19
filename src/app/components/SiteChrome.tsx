"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Moon, Sun } from "@phosphor-icons/react";

const LINKS = [
  { href: "/#how", label: "How it works" },
  { href: "/#proof", label: "Proof" },
  { href: "/#faq", label: "FAQ" },
];

const DEMO = "https://bharat-bank.onrender.com";

export function DemoLink({ size = "md" }: { size?: "md" | "sm" }) {
  return (
    <a href={DEMO} target="_blank" rel="noopener noreferrer" className={`btn ${size === "md" ? "button-md" : "button-sm"}`}>
      Try the live demo
      <span className="sr-only">, opens in a new tab</span>
    </a>
  );
}

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = document.documentElement.classList.toggle("dark");
    localStorage.setItem("saarthi-theme", next ? "dark" : "light");
    setDark(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={dark}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex h-8 w-8 items-center justify-center rounded-full text-[var(--foreground)]"
    >
      <Moon size={16} className="dark:hidden" />
      <Sun size={16} className="hidden dark:block" />
    </button>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const home = pathname === "/";

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav className="nav-bar pointer-events-auto relative z-50 flex items-center gap-3 rounded-full py-2 pr-2 pl-4" aria-label="Primary">
        <a href="/" className="title-4 text-[var(--foreground)] no-underline" aria-current={home ? "page" : undefined}>
          Saarthi
        </a>
        <div className="hidden items-center gap-4 md:flex">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-link title-4 text-[var(--muted)]">
              {link.label}
            </a>
          ))}
        </div>
        <ThemeToggle />
        <span className="hidden md:inline-flex">
          <DemoLink size="sm" />
        </span>
        <button
          type="button"
          className={`nav-toggle inline-flex h-8 w-8 flex-col items-center justify-center gap-1 text-[var(--foreground)] md:hidden ${open ? "is-open" : ""}`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="nav-line" />
          <span className="nav-line" />
          <span className="nav-line" />
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </nav>
      {open && (
        <div id="mobile-menu" className="nav-panel pointer-events-auto fixed inset-0 z-40 flex flex-col gap-6 px-6 pt-24">
          <a href="/" className="nav-link-in title-1 text-[var(--foreground)] no-underline" style={{ animationDelay: "0ms" }} aria-current={home ? "page" : undefined}>
            Home
          </a>
          {LINKS.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link-in title-1 text-[var(--foreground)] no-underline"
              style={{ animationDelay: `${(index + 1) * 60}ms` }}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <span className="nav-link-in" style={{ animationDelay: "240ms" }}>
            <DemoLink size="md" />
          </span>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="px-6 py-16" style={{ background: "var(--footer)", color: "var(--footer-text)" }}>
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <p className="title-3">Saarthi</p>
          <p className="body-6 mt-3 max-w-sm" style={{ color: "var(--footer-muted)" }}>
            A voice agent by companion.py. It reads a map of a product and presses the real controls. Voice runs on Bolna.
          </p>
        </div>
        <div>
          <p className="caption-3" style={{ color: "var(--footer-muted)" }}>
            On this page
          </p>
          <ul className="mt-4 flex flex-col gap-3">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="footer-link body-6">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href={DEMO} target="_blank" rel="noopener noreferrer" className="footer-link body-6">
                Live demo
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="caption-3" style={{ color: "var(--footer-muted)" }}>
            Contact
          </p>
          <ul className="mt-4 flex flex-col gap-3">
            <li>
              <a href="mailto:hello@companion.py" className="footer-link body-6">
                hello@companion.py
              </a>
            </li>
            <li>
              <a href="/privacy" className="footer-link body-6">
                Privacy
              </a>
            </li>
            <li>
              <a href="/terms" className="footer-link body-6">
                Terms
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="caption-5 mx-auto mt-10 max-w-6xl" style={{ color: "var(--footer-muted)" }}>
        © 2026 companion.py. All rights reserved.
      </p>
    </footer>
  );
}
