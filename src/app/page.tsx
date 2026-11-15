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

      {/* floor */}
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

      {/* thematic glyphs: mic, screen, cursor */}
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

const FEATURES = [
  {
    icon: IconEye,
    title: "Explains any screen",
    body: "Ask “where do I see my FD maturity date?” — no menu-hunting required.",
  },
  {
    icon: IconCursorClick,
    title: "Clicks, scrolls, navigates",
    body: "Taps, scrolls, opens the page directly on the user's own screen, in real time.",
  },
  {
    icon: IconResume,
    title: "Resumes mid-flow",
    body: "Stuck halfway through a form? Saarthi picks up exactly where the user left off.",
  },
  {
    icon: IconSparkle,
    title: "Surfaces features you missed",
    body: "Points out the product's own capabilities the user never knew to look for.",
  },
];

const DEMO_STEPS = [
  {
    icon: IconGrid,
    title: "Lands on a cluttered dashboard",
    body: "A first-time user opens the app — four products, a dozen possible next steps.",
  },
  {
    icon: IconMic2,
    title: "Asks, out loud",
    body: "Taps “Talk to Saarthi”: “How do I apply for a personal loan?”",
  },
  {
    icon: IconArrowOpen,
    title: "Opens it, doesn't just point",
    body: "Saarthi knows the current screen and opens the loans page itself — the user doesn't tap anything.",
  },
  {
    icon: IconHelpCircle,
    title: "Helps mid-form, not just at the start",
    body: "Stuck on an EMI field? Saarthi explains it in place — no restart, no drop-off.",
  },
];

const NAV_LINKS = [
  { href: "#problem", label: "Problem" },
  { href: "#features", label: "Features" },
  { href: "#demo", label: "Demo" },
  { href: "#why", label: "Why Us" },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-full" style={{ background: "var(--background)" }}>
      <main className="flex-1">
        {/* Hero */}
        <section className="px-3 sm:px-6 pt-4 sm:pt-6">
          <div
            className="relative mx-auto max-w-6xl rounded-[28px] overflow-hidden border"
            style={{
              borderColor: "var(--border-gold)",
              background: "linear-gradient(180deg, #170b12 0%, #0b060a 70%)",
            }}
          >
            <HeroArt />

            <nav className="relative z-10 flex items-center justify-between px-6 sm:px-10 py-6">
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
                href="#why"
                className="text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 rounded-full border"
                style={{ borderColor: "rgba(255,255,255,0.25)", color: "#fff" }}
              >
                Get in touch
              </a>
            </nav>

            <div className="relative z-10 text-center px-6 pb-20 sm:pb-28 pt-6 sm:pt-12">
              <p
                className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-7"
                style={{ background: "rgba(234,179,8,0.14)", color: "var(--gold-light)" }}
              >
                Perplexity Desktop, for business — with voice
              </p>
              <h1
                className="font-display text-4xl sm:text-6xl leading-[1.08] mb-6"
                style={{ color: "#fff" }}
              >
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
              <a
                href="#demo"
                className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full border"
                style={{ borderColor: "rgba(255,255,255,0.3)", color: "#fff" }}
              >
                See the demo
                <IconArrowOpen className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section id="problem" className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="font-display text-3xl mb-3" style={{ color: "#fff" }}>
            The problem
          </h2>
          <p className="max-w-2xl mb-10" style={{ color: "var(--text-muted)" }}>
            Every digital product — an internal dashboard or a public website — pays a hidden
            tax on complexity. Chatbots and tooltips only describe where to go; the user still
            has to find the control and operate it themselves. One cost, three moments:
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {PROBLEM_MOMENTS.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl p-6 border"
                style={{ borderColor: "var(--border-soft)", background: "var(--surface)" }}
              >
                <Icon className="w-7 h-7 mb-4" style={{ color: "var(--gold)" }} />
                <h3 className="font-bold mb-1.5" style={{ color: "#fff" }}>
                  {title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="py-20" style={{ background: "var(--surface-2)" }}>
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="font-display text-3xl mb-10" style={{ color: "#fff" }}>
              How Saarthi is different
            </h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {HOW_IT_WORKS.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="rounded-2xl p-6 border"
                  style={{ borderColor: "var(--border-soft)", background: "var(--surface)" }}
                >
                  <Icon className="w-7 h-7 mb-4" style={{ color: "var(--gold)" }} />
                  <h3 className="font-bold mb-1.5" style={{ color: "#fff" }}>
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="font-display text-3xl mb-3" style={{ color: "#fff" }}>
            What Saarthi already does
          </h2>
          <p className="max-w-2xl mb-10" style={{ color: "var(--text-muted)" }}>
            Proven on a live demo, not a slide — a fictional digital bank, built to show the
            mechanism working end to end.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {FEATURES.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl p-6 border flex gap-4"
                style={{ borderColor: "var(--border-soft)", background: "var(--surface)" }}
              >
                <Icon className="w-7 h-7 shrink-0" style={{ color: "var(--gold)" }} />
                <div>
                  <h3 className="font-bold mb-1" style={{ color: "#fff" }}>
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div
            className="mt-6 rounded-2xl p-5 flex items-start gap-3 border"
            style={{ background: "rgba(234,179,8,0.08)", borderColor: "var(--border-gold)" }}
          >
            <IconShield className="w-6 h-6 shrink-0 mt-0.5" style={{ color: "var(--gold)" }} />
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Guardrailed by design: Saarthi can click, scroll and navigate for a user — but it
              will never read or act on their balance, OTP, or account secrets.
            </p>
          </div>
        </section>

        {/* Demo */}
        <section id="demo" className="py-20" style={{ background: "var(--surface-2)" }}>
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="font-display text-3xl mb-3" style={{ color: "#fff" }}>
              The demo we built
            </h2>
            <p className="max-w-2xl mb-10" style={{ color: "var(--text-muted)" }}>
              Demoed live on a fictional digital bank — the same mechanism drops into any
              cluttered product.
            </p>
            <div className="grid sm:grid-cols-4 gap-5">
              {DEMO_STEPS.map(({ icon: Icon, title, body }, i) => (
                <div
                  key={title}
                  className="relative rounded-2xl p-5 border"
                  style={{ borderColor: "var(--border-soft)", background: "var(--surface)" }}
                >
                  <span
                    className="absolute -top-3 -left-3 w-7 h-7 rounded-full text-xs font-extrabold flex items-center justify-center"
                    style={{ background: "var(--gold)", color: "var(--maroon-dark)" }}
                  >
                    {i + 1}
                  </span>
                  <Icon className="w-6 h-6 mb-3" style={{ color: "var(--gold)" }} />
                  <h3 className="font-bold text-sm mb-1.5" style={{ color: "#fff" }}>
                    {title}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Voice Tank */}
        <section id="why" className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="font-display text-3xl mb-6" style={{ color: "#fff" }}>
            Why Voice Tank
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div
              className="rounded-2xl p-6 border"
              style={{ borderColor: "var(--border-soft)", background: "var(--surface)" }}
            >
              <IconMic2 className="w-7 h-7 mb-4" style={{ color: "var(--gold)" }} />
              <h3 className="font-bold mb-1.5" style={{ color: "#fff" }}>
                The pitch is the demo
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                An unaided 5-minute investor pitch, carried by Saarthi with no one at the mic,
                is exactly the task it&apos;s built for — proving itself live, in front of the
                people whose judgment matters most.
              </p>
            </div>
            <div
              className="rounded-2xl p-6 border"
              style={{ borderColor: "var(--border-soft)", background: "var(--surface)" }}
            >
              <IconCursorClick className="w-7 h-7 mb-4" style={{ color: "var(--gold)" }} />
              <h3 className="font-bold mb-1.5" style={{ color: "#fff" }}>
                Already in motion
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                Researched cold outreach is out right now to B2B SaaS companies. Voice Tank
                isn&apos;t a first step for us — it&apos;s the accelerant that turns early
                replies into paying pilots, fast.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-8" style={{ borderColor: "var(--border-soft)" }}>
        <div className="mx-auto max-w-5xl px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-sm font-bold" style={{ color: "#fff" }}>
            companion.py
          </span>
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>
            Saarthi — built natively on Bolna voice infrastructure
          </span>
        </div>
      </footer>
    </div>
  );
}
