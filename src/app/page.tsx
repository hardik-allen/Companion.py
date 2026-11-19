import Image from "next/image";
import {
  Compass,
  Eye,
  Lightning,
  MagnifyingGlass,
  MapTrifold,
  Microphone,
  ShieldCheck,
  SignOut,
} from "@phosphor-icons/react/ssr";
import DemoVideo from "./components/DemoVideo";
import Reveal from "./components/Reveal";
import { DemoLink, Footer, Header } from "./components/SiteChrome";
import Tagline from "./components/Tagline";

const DEMO = "https://bharat-bank.onrender.com";

const PROBLEMS = [
  {
    icon: MagnifyingGlass,
    title: "They cannot find it",
    body: "Before the task starts, the control is buried and they never reach it.",
  },
  {
    icon: Compass,
    title: "They get lost",
    body: "Halfway through, the product is deep and they stop looking.",
  },
  {
    icon: SignOut,
    title: "They leave",
    body: "At the last step, the flow is still unfinished and they go.",
  },
];

const BENEFITS = [
  {
    title: "The right screen opens",
    body: "They ask, and Saarthi opens it. They do not search the menu.",
  },
  {
    title: "A stalled task continues",
    body: "It fills the biller, the consumer number, and the amount where they stopped.",
  },
  {
    title: "No pixel guessing",
    body: "It reads a map of controls, so it does not decide from a screenshot.",
  },
  {
    title: "Secrets stay with the person",
    body: "Balance, OTP, PAN, and account secrets are refused.",
  },
];

const STEPS = [
  {
    icon: MapTrifold,
    title: "Map the product",
    body: "You give Saarthi the screens and the controls on them.",
  },
  {
    icon: Lightning,
    title: "It acts on those controls",
    body: "Navigate, fill, and press happen on the real page.",
  },
  {
    icon: Microphone,
    title: "They confirm the last step",
    body: "Voice runs on Bolna. Money movement and secrets stay with them.",
  },
];

const PROOF = [
  {
    icon: Eye,
    tag: "Home",
    title: "Explains the screen they are on",
    body: "Ask where the account balance is. Saarthi answers on that screen.",
    shot: "/screenshots/bharatbank-dashboard.jpg",
    alt: "BharatBank home screen with the account balance",
  },
  {
    icon: Compass,
    tag: "Loans",
    title: "Opens the page itself",
    body: "Ask how to apply for a personal loan. Saarthi opens the loans page.",
    shot: "/screenshots/bharatbank-loans.jpg",
    alt: "BharatBank loans screen",
  },
  {
    icon: Lightning,
    tag: "Bill pay",
    title: "Continues a payment in place",
    body: "Halfway through a bill, it fills the biller, the consumer number, and the amount.",
    shot: "/screenshots/bharatbank-bills.jpg",
    alt: "BharatBank bill payment screen",
  },
  {
    icon: Microphone,
    tag: "UPI",
    title: "Fills the transfer",
    body: "The same path runs UPI and scan and pay. Saarthi fills the form and hands back the last confirmation.",
    shot: "/screenshots/bharatbank-upi.jpg",
    alt: "BharatBank UPI payment screen",
  },
];

const FAQS = [
  {
    q: "What is Saarthi?",
    a: "Saarthi is a voice agent from companion.py. It reads a map of a product's screens and controls, then acts on them. Voice runs on Bolna.",
  },
  {
    q: "Does it take screenshots?",
    a: "No. It reads a structured map of controls, not pixels.",
  },
  {
    q: "What can it do today?",
    a: "It can navigate, press, scroll, explain a screen, and resume a flow partway through. That is shown on BharatBank, a fictional bank, in the recording and screens above.",
  },
  {
    q: "Will it touch a balance or an OTP?",
    a: "No. Balance, OTP, PAN, and account secrets are refused, even if the rest of the task is allowed.",
  },
  {
    q: "How is this different from a chatbot?",
    a: "A chatbot tells someone where to go. Saarthi opens the screen and does the step.",
  },
  {
    q: "Is this live with real customers?",
    a: "The public proof is BharatBank, a fictional bank you can try. Pilots with other companies are still early conversations.",
  },
  {
    q: "What do you need for a pilot on my product?",
    a: "A map of your screens and controls. The public demo does not require that. Write to hello@companion.py if you want to talk about a pilot.",
  },
  {
    q: "Is BharatBank a real bank?",
    a: "No. It is a fictional demo. No real money moves.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function Home() {
  return (
    <>
      <Header />
      <main id="content" className="flex-1">
        <section className="px-6 pt-24 pb-16 text-center">
          <h1 className="heading-1 heading-gradient measure mx-auto">
            Acts in the product
            <br />
            not beside it
          </h1>
          <p className="body-2 measure mx-auto mt-6 text-[var(--muted)]">
            Saarthi is a voice agent for product teams.
            <br />
            It reads a map of your screens and presses the real controls.
          </p>
          <div className="mt-6">
            <DemoLink size="md" />
          </div>
          <p className="caption-2 mx-auto mt-4 max-w-sm text-[var(--muted)]">
            Shown on BharatBank, a fictional bank built to prove the mechanism.
          </p>
        </section>

        <section className="overflow-x-clip bg-[var(--surface)] px-6 pb-16">
          <div className="mx-auto flex max-w-4xl items-end justify-center pt-16">
            <Image
              src="/screenshots/bharatbank-loans.jpg"
              alt=""
              width={780}
              height={1688}
              priority
              className="phone-frame mb-10 hidden h-auto w-52 -mr-8 md:block"
              style={{ transform: "rotate(-6deg)" }}
            />
            <DemoVideo src="/media/saarthi-demo.mp4" poster="/media/demo-poster.jpg" className="z-10 w-56" />
            <Image
              src="/screenshots/bharatbank-dashboard.jpg"
              alt=""
              width={780}
              height={1688}
              className="phone-frame mb-10 hidden h-auto w-52 -ml-8 md:block"
              style={{ transform: "rotate(6deg)" }}
            />
          </div>
          <p className="caption-2 mx-auto mt-6 max-w-md text-center text-[var(--muted)]">
            A real recording of Saarthi driving BharatBank. The side images are real screens from that demo.
          </p>
        </section>

        <section className="section-anchor px-6 py-20" id="problem">
          <Reveal>
            <div className="mx-auto max-w-5xl">
              <h2 className="heading-4 measure">
                Keep 9 in 10 people at each of six steps, and about 53 in 100 finish.
              </h2>
              <p className="caption-2 mt-4 max-w-xl text-[var(--muted)]">
                That is the math of nine tenths, six times in a row. It is not a measured customer result, and it is not one broken button.
              </p>
              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {PROBLEMS.map(({ icon: Icon, title, body }) => (
                  <article key={title} className="card p-6">
                    <Icon size={24} color="var(--accent)" />
                    <h3 className="title-3 mt-4">{title}</h3>
                    <p className="body-6 mt-2 text-[var(--muted)]">{body}</p>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <section className="bg-[var(--surface)] px-6 py-20">
          <Reveal>
            <div className="mx-auto max-w-5xl">
              <h2 className="heading-2">What changes for the person in the app</h2>
              <div className="mt-10 grid gap-6 md:grid-cols-2">
                {BENEFITS.map((item) => (
                  <article key={item.title} className="card bg-[var(--background)] p-6">
                    <h3 className="title-1">{item.title}</h3>
                    <p className="body-3 mt-3 text-[var(--muted)]">{item.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <Tagline />

        <section className="section-anchor px-6 py-20" id="how">
          <Reveal>
            <div className="mx-auto max-w-5xl">
              <h2 className="heading-2">How it works</h2>
              <ol className="mt-10 grid gap-6 md:grid-cols-3">
                {STEPS.map(({ icon: Icon, title, body }, index) => (
                  <li key={title} className="card p-6">
                    <p className="caption-3 text-[var(--gold)]">Step {index + 1}</p>
                    <Icon size={24} color="var(--accent)" className="mt-4" />
                    <h3 className="title-3 mt-4">{title}</h3>
                    <p className="body-6 mt-2 text-[var(--muted)]">{body}</p>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </section>

        <section className="section-anchor bg-[var(--surface)] px-6 py-20" id="proof">
          <Reveal>
            <div className="mx-auto max-w-5xl">
              <h2 className="heading-2">Seen on BharatBank</h2>
              <p className="body-3 mt-4 max-w-xl text-[var(--muted)]">
                Not a mockup. These are real screens and a real recording from the fictional bank.
              </p>
              <div className="mt-6">
                <DemoLink size="md" />
              </div>
              <div className="mt-16 flex flex-col gap-16">
                {PROOF.map(({ icon: Icon, tag, title, body, shot, alt }, index) => (
                  <article key={title} className="grid items-center gap-8 md:grid-cols-2">
                    <div className={index % 2 === 1 ? "md:order-2" : ""}>
                      <p className="caption-3 text-[var(--gold)]">{tag}</p>
                      <Icon size={24} color="var(--accent)" className="mt-4" />
                      <h3 className="heading-5 mt-4">{title}</h3>
                      <p className="body-3 mt-3 text-[var(--muted)]">{body}</p>
                    </div>
                    <Image
                      src={shot}
                      alt={alt}
                      width={780}
                      height={1688}
                      className="phone-frame mx-auto h-auto w-full max-w-60"
                    />
                  </article>
                ))}
              </div>
              <aside className="card mt-16 flex items-start gap-4 p-6">
                <ShieldCheck size={24} color="var(--gold)" className="shrink-0" />
                <p className="body-6">
                  Saarthi can move through the app. It will not read or submit a balance, an OTP, a PAN, or an account secret.
                </p>
              </aside>
            </div>
          </Reveal>
        </section>

        <section className="section-anchor px-6 py-20" id="faq">
          <div className="mx-auto max-w-3xl">
            <h2 className="heading-2">Questions</h2>
            <div className="mt-10 flex flex-col gap-3">
              {FAQS.map((item) => (
                <details key={item.q} className="card px-4 py-4">
                  <summary className="title-3 flex items-center justify-between gap-4">
                    {item.q}
                    <span className="faq-icon caption-3 text-[var(--accent)]" aria-hidden>
                      +
                    </span>
                  </summary>
                  <p className="body-6 mt-3 text-[var(--muted)]">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="mx-auto max-w-5xl rounded-3xl px-6 py-16 text-center" style={{ background: "var(--panel)", color: "var(--panel-text)" }}>
            <p className="caption-3" style={{ color: "var(--gold)" }}>
              Saarthi by companion.py
            </p>
            <h2 className="heading-3 mt-4">
              See it run
              <br />
              on a full bank app
            </h2>
            <p className="body-3 mx-auto mt-4 max-w-md" style={{ color: "var(--panel-muted)" }}>
              BharatBank is fictional. You can open it and watch Saarthi operate the screens.
            </p>
            <div className="mt-8">
              <DemoLink size="md" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
