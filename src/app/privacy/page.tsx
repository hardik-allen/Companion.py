import type { Metadata } from "next";
import { Footer, Header } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How the Saarthi landing page handles information.",
};

export default function PrivacyPage() {
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
          <h1 className="heading-2 mt-6">Privacy</h1>
          <div className="mt-8 flex flex-col gap-6">
            <p className="body-3">
              This page is the marketing site for Saarthi. It does not ask you to create an account, and it does not set a tracking cookie.
            </p>
            <p className="body-3">
              If you choose light or dark, that choice is stored in this browser only, so the next visit can match it.
            </p>
            <p className="body-3">
              The live demo is a separate site, BharatBank. What happens there is not collected by this landing page.
            </p>
            <p className="body-3">
              If you email hello@companion.py, that message is read by the companion.py team so they can reply. Do not send a password, an OTP, or an account number.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
