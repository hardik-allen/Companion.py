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

export default function Home() {
  return (
    <div className="flex flex-col min-h-full">
      <header className="w-full border-b" style={{ borderColor: "rgba(74,21,39,0.12)" }}>
        <div className="mx-auto max-w-5xl px-6 py-5 flex items-center justify-between">
          <span className="text-lg font-extrabold tracking-tight" style={{ color: "var(--maroon)" }}>
            companion<span style={{ color: "var(--gold-dark)" }}>.py</span>
          </span>
          <span
            className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full"
            style={{ background: "var(--maroon)", color: "var(--gold-light)" }}
          >
            Saarthi
          </span>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto max-w-5xl px-6 pt-16 pb-14 text-center">
          <p
            className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6"
            style={{ background: "rgba(234,179,8,0.14)", color: "var(--gold-dark)" }}
          >
            Perplexity Desktop, for business — with voice
          </p>
          <h1
            className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-5"
            style={{ color: "var(--maroon)" }}
          >
            An AI agent that acts inside your product,
            <br className="hidden sm:block" /> instead of describing where to click.
          </h1>
          <p
            className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: "var(--maroon)", opacity: 0.85 }}
          >
            Saarthi reads a structured map of a business&apos;s own screens and controls, then
            operates them directly — no screenshots, no visual guessing — with a voice layer
            built in from the start.
          </p>
        </section>

        {/* Problem */}
        <section className="mx-auto max-w-5xl px-6 py-14">
          <h2 className="text-2xl font-extrabold mb-2" style={{ color: "var(--maroon)" }}>
            The problem
          </h2>
          <p className="max-w-2xl mb-10" style={{ color: "var(--maroon)", opacity: 0.8 }}>
            Every digital product — an internal dashboard or a public website — pays a hidden
            tax on complexity. Chatbots and tooltips only describe where to go; the user still
            has to find the control and operate it themselves. One cost, three moments:
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {PROBLEM_MOMENTS.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl p-6 border"
                style={{ borderColor: "rgba(74,21,39,0.14)", background: "#fff" }}
              >
                <Icon className="w-7 h-7 mb-4" style={{ color: "var(--gold-dark)" }} />
                <h3 className="font-bold mb-1.5" style={{ color: "var(--maroon)" }}>
                  {title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--maroon)", opacity: 0.75 }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="py-14" style={{ background: "var(--maroon)" }}>
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-2xl font-extrabold mb-10" style={{ color: "#fff" }}>
              How Saarthi is different
            </h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {HOW_IT_WORKS.map(({ icon: Icon, title, body }) => (
                <div key={title} className="rounded-2xl p-6" style={{ background: "var(--maroon-dark)" }}>
                  <Icon className="w-7 h-7 mb-4" style={{ color: "var(--gold)" }} />
                  <h3 className="font-bold mb-1.5" style={{ color: "#fff" }}>
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#f8e9d8", opacity: 0.85 }}>
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Voice Tank */}
        <section className="mx-auto max-w-5xl px-6 py-14">
          <h2 className="text-2xl font-extrabold mb-6" style={{ color: "var(--maroon)" }}>
            Why Voice Tank
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl p-6 border" style={{ borderColor: "rgba(74,21,39,0.14)", background: "#fff" }}>
              <IconMic2 className="w-7 h-7 mb-4" style={{ color: "var(--gold-dark)" }} />
              <h3 className="font-bold mb-1.5" style={{ color: "var(--maroon)" }}>
                The pitch is the demo
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--maroon)", opacity: 0.78 }}>
                An unaided 5-minute investor pitch, carried by Saarthi with no one at the mic,
                is exactly the task it&apos;s built for — proving itself live, in front of the
                people whose judgment matters most.
              </p>
            </div>
            <div className="rounded-2xl p-6 border" style={{ borderColor: "rgba(74,21,39,0.14)", background: "#fff" }}>
              <IconCursorClick className="w-7 h-7 mb-4" style={{ color: "var(--gold-dark)" }} />
              <h3 className="font-bold mb-1.5" style={{ color: "var(--maroon)" }}>
                Already in motion
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--maroon)", opacity: 0.78 }}>
                Researched cold outreach is out right now to B2B SaaS companies. Voice Tank
                isn&apos;t a first step for us — it&apos;s the accelerant that turns early
                replies into paying pilots, fast.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-8" style={{ borderColor: "rgba(74,21,39,0.12)" }}>
        <div className="mx-auto max-w-5xl px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-sm font-bold" style={{ color: "var(--maroon)" }}>
            companion.py
          </span>
          <span className="text-xs" style={{ color: "var(--maroon)", opacity: 0.6 }}>
            Saarthi — built natively on Bolna voice infrastructure
          </span>
        </div>
      </footer>
    </div>
  );
}
