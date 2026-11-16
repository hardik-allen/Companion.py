import type { CSSProperties } from "react";
import Image from "next/image";
import DemoVideo from "./components/DemoVideo";

type IconProps = { className?: string; style?: CSSProperties };

function IconSearch({ className, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style}>
      <circle className="icon-line" cx="10.5" cy="10.5" r="6.5" />
      <path className="icon-line" d="M20 20l-4.8-4.8" />
    </svg>
  );
}

function IconCompass({ className, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style}>
      <circle className="icon-line" cx="12" cy="12" r="9" />
      <path className="icon-line" d="M15.5 8.5l-2.2 5.3-5.3 2.2 2.2-5.3 5.3-2.2z" />
    </svg>
  );
}

function IconDoorExit({ className, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style}>
      <path className="icon-line" d="M9 4H6a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3" />
      <path className="icon-line" d="M13 12H21" />
      <path className="icon-line" d="M17.5 8.5L21 12l-3.5 3.5" />
      <path className="icon-line" d="M9 4h8a1 1 0 0 1 1 1v3" />
      <path className="icon-line" d="M18 16v3a1 1 0 0 1-1 1H9" />
    </svg>
  );
}

function IconMap({ className, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style}>
      <path className="icon-line" d="M9 4l-5 2v14l5-2 6 2 5-2V4l-5 2-6-2z" />
      <path className="icon-line" d="M9 4v14" />
      <path className="icon-line" d="M15 6v14" />
    </svg>
  );
}

function IconBolt({ className, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style}>
      <path className="icon-line" d="M13 3L6 14h5l-1 7 7-11h-5l1-7z" />
    </svg>
  );
}

function IconMic({ className, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style}>
      <rect className="icon-line" x="9" y="3" width="6" height="11" rx="3" />
      <path className="icon-line" d="M5 11a7 7 0 0 0 14 0" />
      <path className="icon-line" d="M12 18v3" />
      <path className="icon-line" d="M9 21h6" />
    </svg>
  );
}

function IconEye({ className, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style}>
      <path className="icon-line" d="M2 12s3.8-7 10-7 10 7 10 7-3.8 7-10 7-10-7-10-7z" />
      <circle className="icon-line" cx="12" cy="12" r="3" />
    </svg>
  );
}

function IconArrowOpen({ className, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style}>
      <path className="icon-line" d="M4 12h15" />
      <path className="icon-line" d="M13.5 6.5L19 12l-5.5 5.5" />
    </svg>
  );
}

function IconResume({ className, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style}>
      <circle className="icon-line" cx="12" cy="12" r="9" />
      <path className="icon-line" d="M10 8.5l6 3.5-6 3.5v-7z" />
    </svg>
  );
}

function IconMic2({ className, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style}>
      <path className="icon-line" d="M4 14c3 3 13 3 16 0" />
      <path className="icon-line" d="M12 3v15" />
      <circle className="icon-line" cx="12" cy="3" r="2" />
    </svg>
  );
}

function IconShield({ className, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style}>
      <path className="icon-line" d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
      <path className="icon-line" d="M9 12l2 2 4-4" />
    </svg>
  );
}

function EqualizerBars({ className }: { className?: string }) {
  return (
    <span className={`eq-bars${className ? ` ${className}` : ""}`} aria-hidden>
      {[0, 1, 2, 3, 4].map((i) => (
        <span key={i} />
      ))}
    </span>
  );
}

const NAV_LINKS = [
  { href: "#problem", label: "Problem" },
  { href: "#demo", label: "See it in action" },
  { href: "#faq", label: "FAQ" },
];

const PROBLEM_MOMENTS = [
  {
    icon: IconSearch,
    title: "Discoverability",
    body: "Before someone even starts, they can't find what they need.",
  },
  {
    icon: IconCompass,
    title: "Navigation",
    body: "Mid-task, they get lost in a complex product and give up.",
  },
  {
    icon: IconDoorExit,
    title: "Drop-off",
    body: "Right at the moment they'd convert or complete, they bail.",
  },
];

const HOW_IT_WORKS = [
  {
    icon: IconMap,
    title: "A structured map, not a screenshot",
    body: "A business hands Saarthi a map of its own screens and controls up front. No pixel-guessing, no visual-parsing round trips.",
  },
  {
    icon: IconBolt,
    title: "Reads and acts directly",
    body: "The agent reads the map and acts on real controls — faster and cheaper by architecture, not just by claim.",
  },
  {
    icon: IconMic,
    title: "Voice, built in natively",
    body: "Built on Bolna's voice infrastructure from day one, not bolted onto a generic model after the fact.",
  },
];

const SHOWCASE = [
  {
    icon: IconEye,
    tag: "Home",
    title: "Explains any screen",
    body: "Ask “where do I see my account balance?” and Saarthi answers in place, on the screen the user is already looking at — no menu-hunting required.",
    shot: "/screenshots/bharatbank-dashboard.jpg",
  },
  {
    icon: IconArrowOpen,
    tag: "Loans",
    title: "Opens it, doesn't just point",
    body: "Ask how to apply for a personal loan, and Saarthi opens the Loans page itself — the user doesn't tap anything.",
    shot: "/screenshots/bharatbank-loans.jpg",
  },
  {
    icon: IconResume,
    title: "Resumes mid-flow",
    tag: "Bill pay",
    body: "Stuck halfway through a bill payment? Saarthi fills the biller, the consumer number and the amount in place — no restart, no drop-off.",
    shot: "/screenshots/bharatbank-bills.jpg",
  },
  {
    icon: IconMic2,
    tag: "UPI",
    title: "Pays and transfers by voice",
    body: "The same mechanism drives UPI and scan-and-pay — Saarthi fills the form and hands control back for the final confirmation.",
    shot: "/screenshots/bharatbank-upi.jpg",
  },
];

const FAQS = [
  {
    q: "What is Saarthi?",
    a: "Saarthi is companion.py's voice agent — it reads a business's own screens and controls, then acts on them directly, built natively on Bolna's voice infrastructure.",
  },
  {
    q: "Does it take screenshots?",
    a: "No. It reads a structured map of the screen's controls, not pixels — that's what makes it faster and cheaper by architecture, not just by claim.",
  },
  {
    q: "What can it actually do today?",
    a: "Navigate, click, scroll, explain any screen, and resume a flow mid-way — proven on BharatBank, a fictional digital bank we built to demo it, and shown above with real screenshots and a real recording.",
  },
  {
    q: "Will it ever touch my balance or OTP?",
    a: "Never. Guardrailed by design — balance, OTP, PAN and account secrets are off-limits, no matter how far execution grows.",
  },
  {
    q: "How is this different from a chatbot?",
    a: "A chatbot answers where to go. Saarthi goes there itself — it taps, scrolls and opens the right screen on the user's behalf.",
  },
  {
    q: "Is this live anywhere yet?",
    a: "It's proven on BharatBank, our live fictional-bank demo, and we're in early conversations with B2B SaaS companies about running real pilots.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-full">
      <header className="border-b" style={{ borderColor: "var(--border)" }}>
        <nav className="mx-auto max-w-6xl flex items-center justify-between px-6 py-5">
          <span className="flex items-center gap-2 text-base font-bold tracking-tight">
            <span
              className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-extrabold text-white"
              style={{ background: "var(--maroon)" }}
            >
              S
            </span>
            Saarthi
          </span>
          <div className="hidden sm:flex items-center gap-8 text-sm" style={{ color: "var(--muted)" }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:opacity-70 transition-opacity">
                {l.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="text-sm font-semibold px-5 py-2.5 rounded-full text-white"
            style={{ background: "var(--maroon)" }}
          >
            Get in touch
          </a>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="px-6 pt-16 sm:pt-20 pb-10 text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.08] max-w-3xl mx-auto">
            <span style={{ color: "var(--foreground)" }}>Acts inside your product,</span>
            <br />
            <span style={{ color: "var(--muted)" }}>not just around it.</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed max-w-xl mx-auto" style={{ color: "var(--muted)" }}>
            Saarthi reads a business&apos;s own screens and controls, then operates them
            directly — no screenshots, no visual guessing, with voice built in natively on
            Bolna.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="px-6 py-3 rounded-full font-semibold text-white"
              style={{ background: "var(--maroon)" }}
            >
              Get in touch
            </a>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold border"
              style={{ borderColor: "var(--border)", color: "var(--foreground)" }}
            >
              Watch the demo
              <IconArrowOpen className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* Hero showcase: real demo video flanked by real screenshots */}
        <section className="px-6 pb-20" style={{ background: "var(--surface)" }}>
          <div className="mx-auto max-w-4xl pt-14 flex items-end justify-center">
            <Image
              src="/screenshots/bharatbank-loans.jpg"
              alt="BharatBank loans screen"
              width={780}
              height={1688}
              className="phone-frame w-[150px] sm:w-[210px] h-auto -mr-6 sm:-mr-10 mb-10 hidden sm:block"
              style={{ transform: "rotate(-6deg)" }}
            />
            <DemoVideo
              src="/media/saarthi-demo.mp4"
              poster="/media/demo-poster.jpg"
              className="w-[220px] sm:w-[280px] z-10"
            />
            <Image
              src="/screenshots/bharatbank-dashboard.jpg"
              alt="BharatBank dashboard screen"
              width={780}
              height={1688}
              className="phone-frame w-[150px] sm:w-[210px] h-auto -ml-6 sm:-ml-10 mb-10 hidden sm:block"
              style={{ transform: "rotate(6deg)" }}
            />
          </div>
          <p className="text-center text-sm mt-4" style={{ color: "var(--muted)" }}>
            A real recording of Saarthi driving{" "}
            <a
              href="https://bharat-bank.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline"
              style={{ color: "var(--maroon)" }}
            >
              BharatBank
            </a>
            , a fictional digital bank — try it yourself.
          </p>
        </section>

        {/* The real problem */}
        <section className="py-12 border-b" style={{ borderColor: "var(--border)" }}>
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: "var(--gold-dark)" }}
            >
              The real problem
            </p>
            <p className="text-xl sm:text-2xl font-semibold leading-snug" style={{ color: "var(--foreground)" }}>
              A 6-step flow that keeps 90% of users at every step finishes at only{" "}
              <span style={{ color: "var(--maroon)" }}>≈53%</span> — not because any single
              step is broken.
            </p>
          </div>
        </section>

        {/* Problem moments */}
        <section id="problem" className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-3xl font-extrabold mb-3" style={{ color: "var(--foreground)" }}>
            One cost, paid three times
          </h2>
          <p className="max-w-2xl mb-10" style={{ color: "var(--muted)" }}>
            Every digital product — an internal dashboard or a public website — pays a hidden
            tax on complexity. Chatbots and tooltips only describe where to go; the user still
            has to find the control and operate it themselves.
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {PROBLEM_MOMENTS.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl p-6 border"
                style={{ borderColor: "var(--border)", background: "var(--surface)" }}
              >
                <Icon className="w-7 h-7 mb-4" style={{ color: "var(--maroon)" }} />
                <h3 className="font-bold mb-1.5" style={{ color: "var(--foreground)" }}>
                  {title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="py-20" style={{ background: "var(--surface)" }}>
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-3xl font-extrabold mb-10" style={{ color: "var(--foreground)" }}>
              How Saarthi is different
            </h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {HOW_IT_WORKS.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="rounded-2xl p-6 border"
                  style={{ borderColor: "var(--border)", background: "var(--background)" }}
                >
                  <Icon className="w-7 h-7 mb-4" style={{ color: "var(--maroon)" }} />
                  <h3 className="font-bold mb-1.5" style={{ color: "var(--foreground)" }}>
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* See it in action: real screenshots, alternating */}
        <section id="demo" className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-3xl font-extrabold mb-3" style={{ color: "var(--foreground)" }}>
            See it in action
          </h2>
          <p className="max-w-2xl mb-6" style={{ color: "var(--muted)" }}>
            Not a mockup — this is Saarthi running on BharatBank, a fictional digital bank we
            built to prove the mechanism end to end.
          </p>
          <a
            href="https://bharat-bank.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mb-10 text-sm font-semibold px-5 py-2.5 rounded-full text-white"
            style={{ background: "var(--maroon)" }}
          >
            Try the live demo
            <IconArrowOpen className="w-4 h-4" />
          </a>

          <div className="flex flex-col gap-16 sm:gap-20">
            {SHOWCASE.map(({ icon: Icon, tag, title, body, shot }, i) => (
              <div key={title} className="grid sm:grid-cols-2 gap-10 items-center">
                <div className={i % 2 === 1 ? "sm:order-2" : ""}>
                  <p
                    className="text-xs font-bold uppercase tracking-widest mb-3"
                    style={{ color: "var(--gold-dark)" }}
                  >
                    {tag}
                  </p>
                  <Icon className="w-7 h-7 mb-4" style={{ color: "var(--maroon)" }} />
                  <h3 className="text-2xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
                    {title}
                  </h3>
                  <p className="leading-relaxed" style={{ color: "var(--muted)" }}>
                    {body}
                  </p>
                </div>
                <Image
                  src={shot}
                  alt={`BharatBank — ${title}`}
                  width={780}
                  height={1688}
                  className="phone-frame w-full h-auto max-w-[260px] mx-auto"
                />
              </div>
            ))}
          </div>

          <div
            className="mt-16 rounded-2xl p-5 flex items-start gap-3 border"
            style={{ background: "rgba(234,179,8,0.08)", borderColor: "rgba(234,179,8,0.3)" }}
          >
            <IconShield className="w-6 h-6 shrink-0 mt-0.5" style={{ color: "var(--gold-dark)" }} />
            <p className="text-sm leading-relaxed" style={{ color: "var(--foreground)" }}>
              Guardrailed by design: Saarthi can click, scroll and navigate for a user — but it
              will never read or act on their balance, OTP, or account secrets.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20" style={{ background: "var(--surface)" }}>
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-3xl font-extrabold mb-10" style={{ color: "var(--foreground)" }}>
              A few answers, before you ask
            </h2>
            <div className="flex flex-col">
              {FAQS.map(({ q, a }) => (
                <details key={q} className="faq-item border-b py-5" style={{ borderColor: "var(--border)" }}>
                  <summary
                    className="flex items-center justify-between gap-4 font-bold"
                    style={{ color: "var(--foreground)" }}
                  >
                    {q}
                    <span className="faq-icon shrink-0 text-xl leading-none" style={{ color: "var(--maroon)" }}>
                      +
                    </span>
                  </summary>
                  <p className="text-sm leading-relaxed mt-3" style={{ color: "var(--muted)" }}>
                    {a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="px-3 sm:px-6 py-16">
          <div
            className="mx-auto max-w-5xl rounded-[28px] p-10 sm:p-14 text-center"
            style={{ background: "var(--dark-panel)" }}
          >
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "var(--gold)" }}>
              Saarthi × companion.py
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-white">
              Bring Saarthi to your product.
            </h2>
            <p className="text-base mb-8 max-w-md mx-auto" style={{ color: "rgba(255,255,255,0.68)" }}>
              Hand us a map of your screens — we&apos;ll show you a voice agent that acts on
              them, not just talks about them.
            </p>
            <div className="flex items-center justify-center gap-3 mb-6">
              <EqualizerBars className="text-[var(--gold)]" />
              <span className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                Now accepting early pilots
              </span>
            </div>
            <a
              href="mailto:hello@companion.py?subject=Saarthi%20pilot"
              className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full"
              style={{ background: "var(--gold)", color: "var(--maroon-dark)" }}
            >
              Request a pilot
              <IconArrowOpen className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>

      <footer className="pt-16 pb-8" style={{ background: "var(--dark-panel)" }}>
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <p className="text-xl sm:text-2xl font-semibold mb-12 max-w-xl" style={{ color: "var(--gold)" }}>
            Built for Bharat&apos;s next billion screens.
          </p>

          <div
            className="grid sm:grid-cols-[2fr_1fr_1fr] gap-10 pb-10 border-b"
            style={{ borderColor: "rgba(255,255,255,0.1)" }}
          >
            <div>
              <span className="flex items-center gap-2 text-base font-bold tracking-tight mb-3 text-white">
                <span
                  className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-extrabold"
                  style={{ background: "var(--gold)", color: "var(--maroon-dark)" }}
                >
                  S
                </span>
                Saarthi
              </span>
              <p className="text-sm leading-relaxed max-w-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                A voice agent by companion.py that reads a business&apos;s own screens and acts
                on them directly — built natively on Bolna&apos;s voice infrastructure.
              </p>
            </div>

            <div>
              <p
                className="text-xs font-bold uppercase tracking-widest mb-4"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                Product
              </p>
              <ul className="flex flex-col gap-2 text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="hover:text-white transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="https://bharat-bank.onrender.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Live demo
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p
                className="text-xs font-bold uppercase tracking-widest mb-4"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                Contact
              </p>
              <ul className="flex flex-col gap-2 text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    Request a pilot
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@companion.py" className="hover:text-white transition-colors">
                    hello@companion.py
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6">
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
              © 2026 companion.py. All rights reserved.
            </span>
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
              Saarthi — built natively on Bolna voice infrastructure
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
