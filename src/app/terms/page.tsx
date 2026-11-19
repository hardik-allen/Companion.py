import type { Metadata } from "next";
import { Footer, Header } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms for the Saarthi landing page and the BharatBank demo.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main id="content" className="flex-1 px-6 pt-24 pb-20">
        <article className="mx-auto max-w-3xl">
          <p className="caption-2 text-[var(--muted)]">
            <a href="/" className="text-link">
              Back to Saarthi
            </a>
          </p>
          <h1 className="heading-2 mt-6">Terms</h1>
          <div className="mt-8 flex flex-col gap-6">
            <p className="body-3">
              Saarthi is a product demo from companion.py. BharatBank is a fictional bank used to show it. No real money moves there.
            </p>
            <p className="body-3">
              The demo is offered as it is, so you can see the mechanism. It is not a promise that the same flow is already live inside your product.
            </p>
            <p className="body-3">
              Do not type a real password, OTP, PAN, or account secret into the demo. Saarthi is built to refuse those, and you should not offer them.
            </p>
            <p className="body-3">
              A pilot on your own product is a separate conversation. Email hello@companion.py.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
