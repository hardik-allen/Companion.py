import type { Metadata } from "next";
import { Footer, Header } from "./components/SiteChrome";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="content" className="flex flex-1 flex-col items-start justify-center px-6 pt-24 pb-20">
        <div className="mx-auto w-full max-w-xl">
          <p className="caption-3 text-[var(--gold)]">404</p>
          <h1 className="heading-2 mt-4">That page is not here.</h1>
          <p className="body-3 mt-4 text-[var(--muted)]">The address does not match a page on this site. Go back to Saarthi.</p>
          <a href="/" className="btn button-md mt-8">
            Back to Saarthi
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
