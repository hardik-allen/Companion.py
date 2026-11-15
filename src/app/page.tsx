import type { CSSProperties } from "react";

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

function IconCursorClick({ className, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style}>
      <path className="icon-line" d="M6 3l12 8-5 1.5L11 18 6 3z" />
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

function IconEye({ className, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style}>
      <path className="icon-line" d="M2 12s3.8-7 10-7 10 7 10 7-3.8 7-10 7-10-7-10-7z" />
      <circle className="icon-line" cx="12" cy="12" r="3" />
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

function IconSparkle({ className, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style}>
      <path className="icon-line" d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" />
    </svg>
  );
}

function IconGrid({ className, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style}>
      <rect className="icon-line" x="3" y="3" width="8" height="8" rx="1.5" />
      <rect className="icon-line" x="13" y="3" width="8" height="8" rx="1.5" />
      <rect className="icon-line" x="3" y="13" width="8" height="8" rx="1.5" />
      <rect className="icon-line" x="13" y="13" width="8" height="8" rx="1.5" />
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

function IconHelpCircle({ className, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style}>
      <circle className="icon-line" cx="12" cy="12" r="9" />
      <path className="icon-line" d="M9.6 9.2a2.4 2.4 0 1 1 3.4 2.2c-.9.5-1.4 1-1.4 2" />
      <circle cx="12" cy="16.6" r="0.9" fill="currentColor" stroke="none" />
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

const ARCS = [150, 230, 310, 390];
const SHARDS = [
  { x: 110, y: 120, w: 46, h: 10, rot: -28 },
  { x: 1020, y: 90, w: 40, h: 9, rot: 22 },
  { x: 940, y: 210, w: 30, h: 7, rot: -40 },
  { x: 160, y: 260, w: 34, h: 8, rot: 50 },
  { x: 90, y: 400, w: 50, h: 11, rot: 12 },
  { x: 1080, y: 340, w: 38, h: 9, rot: -18 },
  { x: 260, y: 90, w: 26, h: 6, rot: 70 },
  { x: 980, y: 460, w: 42, h: 9, rot: 35 },
];
const DOTS = [
  { cx: 220, cy: 180, r: 4 },
  { cx: 1000, cy: 150, r: 5 },
  { cx: 150, cy: 340, r: 3 },
  { cx: 1060, cy: 250, r: 4 },
  { cx: 340, cy: 130, r: 3 },
  { cx: 870, cy: 110, r: 3 },
];

function HeroArt() {
  return (
    <svg
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMax slice"
      className="absolute inset-0 w-full h-full"
      aria-hidden
    >
      <defs>
        <radialGradient id="glow" cx="50%" cy="78%" r="55%">
          <stop offset="0%" stopColor="#eab308" stopOpacity="0.22" />
          <stop offset="45%" stopColor="#4a1527" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#0b060a" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="arcStroke" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#4a1527" stopOpacity="0" />
          <stop offset="50%" stopColor="#fbbf24" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#4a1527" stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="1200" height="600" fill="url(#glow)" />

      {ARCS.map((r) => (
        <path
          key={r}
          d={`M ${600 - r} 460 A ${r} ${r} 0 0 1 ${600 + r} 460`}
          stroke="url(#arcStroke)"
          strokeWidth="1.5"
          fill="none"
        />
      ))}

      <g stroke="#eab308" strokeOpacity="0.14">
        {[520, 545, 572, 600].map((y) => (
          <line key={y} x1={0} y1={y} x2={1200} y2={y} />
        ))}
        {[40, 260, 480, 720, 940, 1160].map((x) => (
          <line key={x} x1={x} y1={600} x2={600} y2={460} />
        ))}
      </g>

      {SHARDS.map((s, i) => (
        <rect
          key={i}
          x={s.x}
          y={s.y}
          width={s.w}
          height={s.h}
          rx="2"
          fill="none"
          stroke="#eab308"
          strokeOpacity="0.4"
          transform={`rotate(${s.rot} ${s.x + s.w / 2} ${s.y + s.h / 2})`}
        />
      ))}

      {DOTS.map((d, i) => (
        <circle key={i} cx={d.cx} cy={d.cy} r={d.r} fill="#fbbf24" fillOpacity="0.5" />
      ))}

      <g transform="translate(150 150)" stroke="#fbbf24" strokeOpacity="0.5" strokeWidth="1.6" fill="none">
        <rect x="0" y="0" width="16" height="28" rx="8" />
        <path d="M-8 20a16 16 0 0 0 32 0" />
        <path d="M8 36v8" />
      </g>
      <g transform="translate(1000 420) rotate(-8)" stroke="#fbbf24" strokeOpacity="0.5" strokeWidth="1.6" fill="none">
        <rect x="0" y="0" width="34" height="50" rx="4" />
        <line x1="0" y1="40" x2="34" y2="40" />
      </g>
      <g transform="translate(300 420)" stroke="#fbbf24" strokeOpacity="0.5" strokeWidth="1.6" fill="none">
        <path d="M0 0l22 15-9 3-4 11z" />
      </g>
    </svg>
  );
}

function Marquee({ items }: { items: string[] }) {
  const line = Array(3).fill(items.join("   ·   ") + "   ·   ").join("");
  return (
    <div className="marquee-viewport py-4" style={{ background: "var(--dark-panel)" }}>
      <div className="marquee-track">
        {[0, 1].map((rep) => (
          <span
            key={rep}
            className="text-xs sm:text-sm font-bold uppercase tracking-widest whitespace-nowrap px-4"
            style={{ color: "var(--gold)" }}
          >
            {line}
          </span>
        ))}
      </div>
    </div>
  );
}

function CrossMarquee({ topItems, bottomItems }: { topItems: string[]; bottomItems: string[] }) {
  const topLine = Array(4).fill(topItems.join("   •   ") + "   •   ").join("");
  const bottomLine = Array(4).fill(bottomItems.join("   •   ") + "   •   ").join("");
  return (
    <div className="relative overflow-hidden" style={{ height: 240, background: "var(--background)" }}>
      <div className="absolute left-1/2 top-1/2 w-[160vw] -translate-x-1/2 -translate-y-1/2 -rotate-6">
        <div className="marquee-viewport py-3" style={{ background: "var(--dark-panel)" }}>
          <div className="marquee-track">
            {[0, 1].map((rep) => (
              <span
                key={rep}
                className="text-sm font-bold uppercase tracking-widest whitespace-nowrap px-4"
                style={{ color: "var(--gold)" }}
              >
                {topLine}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute left-1/2 top-1/2 w-[160vw] -translate-x-1/2 -translate-y-1/2 rotate-6">
        <div className="marquee-viewport py-3" style={{ background: "var(--gold-light)" }}>
          <div className="marquee-track" style={{ animationDirection: "reverse" }}>
            {[0, 1].map((rep) => (
              <span
                key={rep}
                className="text-sm font-bold uppercase tracking-widest whitespace-nowrap px-4"
                style={{ color: "var(--maroon-dark)" }}
              >
                {bottomLine}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        <div
          className="w-28 h-28 sm:w-32 sm:h-32 rounded-full flex items-center justify-center border-4 shadow-xl"
          style={{ background: "var(--cream-card)", borderColor: "var(--gold)" }}
        >
          <IconMic2 className="w-10 h-10" style={{ color: "var(--maroon-dark)" }} />
        </div>
      </div>
    </div>
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

const TRACKS = [
  {
    icon: IconEye,
    title: "Explains any screen",
    example: "“Where do I see my FD maturity date?”",
    unlocks: "No menu-hunting, ever",
  },
  {
    icon: IconCursorClick,
    title: "Clicks, scrolls, navigates",
    example: "Opens the loans page itself, mid-conversation",
    unlocks: "Zero drop-off mid-task",
  },
  {
    icon: IconResume,
    title: "Resumes mid-flow",
    example: "Picks up a half-filled EMI form",
    unlocks: "No restarts, no frustration",
  },
  {
    icon: IconSparkle,
    title: "Surfaces features you missed",
    example: "Points out a tool you never knew existed",
    unlocks: "Discoverability, by default",
  },
];

const DEMO_STEPS = [
  {
    icon: IconGrid,
    tag: "SCREEN",
    title: "Lands on a cluttered dashboard",
    body: "A first-time user opens the app — four products, a dozen possible next steps.",
  },
  {
    icon: IconMic2,
    tag: "VOICE",
    title: "Asks, out loud",
    body: "Taps “Talk to Saarthi”: “How do I apply for a personal loan?”",
  },
  {
    icon: IconArrowOpen,
    tag: "ACTION",
    title: "Opens it, doesn't just point",
    body: "Saarthi knows the current screen and opens the loans page itself — the user doesn't tap anything.",
  },
  {
    icon: IconHelpCircle,
    tag: "HELP",
    title: "Helps mid-form, not just at the start",
    body: "Stuck on an EMI field? Saarthi explains it in place — no restart, no drop-off.",
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
    a: "Navigate, click, scroll, explain any screen, and resume a flow mid-way — proven on BharatBank, a fictional digital bank we built to demo it.",
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

const NAV_LINKS = [
  { href: "#problem", label: "Problem" },
  { href: "#features", label: "Features" },
  { href: "#demo", label: "Demo" },
  { href: "#faq", label: "FAQ" },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-full">
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden" style={{ background: "var(--dark-panel)" }}>
          <HeroArt />

          <nav className="relative z-10 mx-auto max-w-6xl flex items-center justify-between px-6 sm:px-10 py-6">
            <span className="flex items-center gap-2 text-base font-bold tracking-tight" style={{ color: "#fff" }}>
              <span
                className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-extrabold"
                style={{ background: "var(--gold)", color: "var(--maroon-dark)" }}
              >
                S
              </span>
              Saarthi
            </span>
            <div className="hidden sm:flex items-center gap-8 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="hover:text-white transition-colors">
                  {l.label}
                </a>
              ))}
            </div>
            <a
              href="#pilot"
              className="text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 rounded-full border"
              style={{ borderColor: "rgba(255,255,255,0.25)", color: "#fff" }}
            >
              Get in touch
            </a>
          </nav>

          <div className="relative z-10 mx-auto max-w-6xl text-center px-6 pb-20 sm:pb-28 pt-6 sm:pt-12">
            <p
              className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-7"
              style={{ background: "rgba(234,179,8,0.14)", color: "var(--gold-light)" }}
            >
              Perplexity Desktop, for business — with voice
            </p>
            <h1 className="font-display text-4xl sm:text-6xl leading-[1.08] mb-6" style={{ color: "#fff" }}>
              Acts Inside Your Product,
              <br className="hidden sm:block" /> Not Just Around It
            </h1>
            <p
              className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-9"
              style={{ color: "rgba(255,255,255,0.68)" }}
            >
              Saarthi reads a structured map of a business&apos;s own screens and controls, then
              operates them directly — no screenshots, no visual guessing — with a voice layer
              built in from the start.
            </p>
            <div className="flex justify-center mb-9">
              <div
                className="inline-flex items-center gap-3 rounded-full border px-5 py-2.5 text-left"
                style={{ borderColor: "rgba(255,255,255,0.18)", background: "rgba(255,255,255,0.05)" }}
              >
                <EqualizerBars />
                <p className="text-xs sm:text-sm" style={{ color: "rgba(255,255,255,0.85)" }}>
                  &ldquo;How do I apply for a personal loan?&rdquo;{" "}
                  <span style={{ color: "var(--gold)" }}>→ opening Loans…</span>
                </p>
              </div>
            </div>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full border"
              style={{ borderColor: "rgba(255,255,255,0.3)", color: "#fff" }}
            >
              See the demo
              <IconArrowOpen className="w-4 h-4" />
            </a>
          </div>
        </section>

        <Marquee
          items={[
            "SAARTHI — VOICE-NATIVE NAVIGATION",
            "NO SCREENSHOTS, EVER",
            "BUILT NATIVELY ON BOLNA",
            "ACTS, DOESN'T JUST POINT",
          ]}
        />

        {/* Problem */}
        <section id="problem" className="mx-auto max-w-6xl px-6 sm:px-10 py-20 sm:py-28">
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "var(--gold-dark)" }}>
            Problem
          </p>
          <h2 className="font-display text-3xl sm:text-4xl mb-3" style={{ color: "var(--foreground)" }}>
            The problem
          </h2>
          <p className="max-w-2xl mb-10" style={{ color: "var(--ink-muted)" }}>
            Every digital product — an internal dashboard or a public website — pays a hidden
            tax on complexity. Chatbots and tooltips only describe where to go; the user still
            has to find the control and operate it themselves. One cost, three moments:
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {PROBLEM_MOMENTS.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl p-6 border"
                style={{ borderColor: "var(--border-ink)", background: "var(--cream-card)" }}
              >
                <Icon className="w-7 h-7 mb-4" style={{ color: "var(--gold-dark)" }} />
                <h3 className="font-bold mb-1.5" style={{ color: "var(--foreground)" }}>
                  {title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--ink-muted)" }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="w-full" style={{ background: "rgba(234,179,8,0.06)" }}>
          <div className="mx-auto max-w-6xl px-6 sm:px-10 py-20 sm:py-28">
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "var(--gold-dark)" }}>
              Approach
            </p>
            <h2 className="font-display text-3xl sm:text-4xl mb-10" style={{ color: "var(--foreground)" }}>
              How Saarthi is different
            </h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {HOW_IT_WORKS.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="rounded-2xl p-6 border"
                  style={{ borderColor: "var(--border-ink)", background: "var(--cream-card)" }}
                >
                  <Icon className="w-7 h-7 mb-4" style={{ color: "var(--gold-dark)" }} />
                  <h3 className="font-bold mb-1.5" style={{ color: "var(--foreground)" }}>
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--ink-muted)" }}>
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features as numbered tracks */}
        <section id="features" className="mx-auto max-w-6xl px-6 sm:px-10 py-20 sm:py-28">
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "var(--gold-dark)" }}>
            Features
          </p>
          <h2 className="font-display text-3xl sm:text-4xl mb-3" style={{ color: "var(--foreground)" }}>
            What Saarthi already does
          </h2>
          <p className="max-w-2xl mb-10" style={{ color: "var(--ink-muted)" }}>
            Proven on a live demo, not a slide — BharatBank, a fictional digital bank built to
            show the mechanism working end to end.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {TRACKS.map(({ icon: Icon, title, example, unlocks }, i) => (
              <div
                key={title}
                className="rounded-2xl p-6 border relative overflow-hidden"
                style={{ borderColor: "var(--border-ink)", background: "var(--cream-card)" }}
              >
                <span
                  className="font-display absolute -top-3 right-4 text-6xl select-none"
                  style={{ color: "transparent", WebkitTextStroke: "1.5px var(--border-ink)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Icon className="w-7 h-7 mb-4" style={{ color: "var(--gold-dark)" }} />
                <h3 className="font-bold mb-1" style={{ color: "var(--foreground)" }}>
                  {title}
                </h3>
                <p className="text-sm italic mb-3" style={{ color: "var(--ink-muted)" }}>
                  e.g. {example}
                </p>
                <p
                  className="text-xs font-bold uppercase tracking-widest mb-1"
                  style={{ color: "var(--gold-dark)" }}
                >
                  Unlocks
                </p>
                <p className="text-sm" style={{ color: "var(--foreground)" }}>
                  {unlocks}
                </p>
              </div>
            ))}
          </div>
          <div
            className="mt-6 rounded-2xl p-5 flex items-start gap-3 border"
            style={{ background: "rgba(234,179,8,0.1)", borderColor: "var(--border-gold)" }}
          >
            <IconShield className="w-6 h-6 shrink-0 mt-0.5" style={{ color: "var(--gold-dark)" }} />
            <p className="text-sm leading-relaxed" style={{ color: "var(--foreground)" }}>
              Guardrailed by design: Saarthi can click, scroll and navigate for a user — but it
              will never read or act on their balance, OTP, or account secrets.
            </p>
          </div>
        </section>

        {/* Demo as rounds */}
        <section id="demo" className="w-full" style={{ background: "rgba(74,21,39,0.05)" }}>
          <div className="mx-auto max-w-6xl px-6 sm:px-10 py-20 sm:py-28">
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "var(--gold-dark)" }}>
              Demo
            </p>
            <h2 className="font-display text-3xl sm:text-4xl mb-3" style={{ color: "var(--foreground)" }}>
              The demo we built
            </h2>
            <p className="max-w-2xl mb-10" style={{ color: "var(--ink-muted)" }}>
              Demoed live on BharatBank, a fictional digital bank — the same mechanism drops
              into any cluttered product.
            </p>
            <div className="grid sm:grid-cols-4 gap-5">
              {DEMO_STEPS.map(({ icon: Icon, tag, title, body }, i) => (
                <div
                  key={title}
                  className="relative rounded-2xl p-5"
                  style={{ background: "var(--dark-panel)" }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="w-7 h-7 rounded-full text-xs font-extrabold flex items-center justify-center"
                      style={{ background: "var(--gold)", color: "var(--maroon-dark)" }}
                    >
                      {i + 1}
                    </span>
                    <span
                      className="text-[10px] font-bold uppercase tracking-widest"
                      style={{ color: "rgba(255,255,255,0.45)" }}
                    >
                      {tag}
                    </span>
                  </div>
                  {tag === "VOICE" ? (
                    <div className="h-6 mb-3 flex items-end">
                      <EqualizerBars />
                    </div>
                  ) : (
                    <Icon className="w-6 h-6 mb-3" style={{ color: "var(--gold)" }} />
                  )}
                  <h3 className="font-bold text-sm mb-1.5" style={{ color: "#fff" }}>
                    {title}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                    {body}
                  </p>
                </div>
              ))}
            </div>
            <a
              href="https://bharat-bank.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 text-sm font-semibold px-6 py-3 rounded-full"
              style={{ background: "var(--gold)", color: "var(--maroon-dark)" }}
            >
              Try the live demo
              <IconArrowOpen className="w-4 h-4" />
            </a>
          </div>
        </section>

        <CrossMarquee
          topItems={["VOICE-NATIVE NAVIGATION", "ZERO SCREENSHOTS", "BUILT ON BOLNA"]}
          bottomItems={["ACTS, DOESN'T JUST POINT", "BUILD FOR A BILLION SCREENS", "NO MENU-HUNTING"]}
        />

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-4xl px-6 sm:px-10 py-20 sm:py-28">
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "var(--gold-dark)" }}>
            FAQ
          </p>
          <h2 className="font-display text-3xl sm:text-4xl mb-10" style={{ color: "var(--foreground)" }}>
            A few answers, before you ask.
          </h2>
          <div className="flex flex-col">
            {FAQS.map(({ q, a }) => (
              <details key={q} className="faq-item border-b py-5" style={{ borderColor: "var(--border-ink)" }}>
                <summary className="flex items-center justify-between gap-4 font-bold" style={{ color: "var(--foreground)" }}>
                  {q}
                  <span className="faq-icon shrink-0 text-xl leading-none" style={{ color: "var(--gold-dark)" }}>
                    +
                  </span>
                </summary>
                <p className="text-sm leading-relaxed mt-3" style={{ color: "var(--ink-muted)" }}>
                  {a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* Pilot pass CTA */}
        <section id="pilot" className="px-3 sm:px-6 pb-16">
          <div
            className="mx-auto max-w-6xl rounded-[28px] p-8 sm:p-14 grid sm:grid-cols-[1fr_auto] gap-8 items-center"
            style={{ background: "var(--dark-panel)" }}
          >
            <div>
              <p
                className="text-xs font-bold uppercase tracking-widest mb-3"
                style={{ color: "var(--gold)" }}
              >
                Saarthi × companion.py
              </p>
              <h2 className="font-display text-3xl sm:text-4xl mb-4" style={{ color: "#fff" }}>
                Bring Saarthi to your product.
              </h2>
              <p className="text-sm sm:text-base mb-6 max-w-md" style={{ color: "rgba(255,255,255,0.68)" }}>
                Hand us a map of your screens — we&apos;ll show you a voice agent that acts on
                them, not just talks about them.
              </p>
              <a
                href="mailto:hello@companion.py?subject=Saarthi%20pilot"
                className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full"
                style={{ background: "var(--gold)", color: "var(--maroon-dark)" }}
              >
                Request a pilot
                <IconArrowOpen className="w-4 h-4" />
              </a>
            </div>
            <div
              className="rounded-2xl px-7 py-6 text-center border-2 border-dashed"
              style={{ borderColor: "rgba(234,179,8,0.4)" }}
            >
              <p className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>
                Pilot pass
              </p>
              <p className="font-display text-2xl mb-1" style={{ color: "#fff" }}>
                Early Access
              </p>
              <p className="text-xs uppercase tracking-widest" style={{ color: "var(--gold)" }}>
                Status: Open
              </p>
            </div>
          </div>
        </section>

      </main>

      <footer className="pt-16 pb-8" style={{ background: "var(--dark-panel)" }}>
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <p className="font-display italic text-2xl sm:text-3xl mb-12 max-w-xl" style={{ color: "var(--gold)" }}>
            Built for Bharat&apos;s next billion screens.
          </p>

          <div className="grid sm:grid-cols-[2fr_1fr_1fr] gap-10 pb-10 border-b" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
            <div>
              <span className="flex items-center gap-2 text-base font-bold tracking-tight mb-3" style={{ color: "#fff" }}>
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
              <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.45)" }}>
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
              <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.45)" }}>
                Contact
              </p>
              <ul className="flex flex-col gap-2 text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
                <li>
                  <a href="#pilot" className="hover:text-white transition-colors">
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
