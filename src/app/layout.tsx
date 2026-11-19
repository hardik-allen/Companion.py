import type { Metadata } from "next";
import Script from "next/script";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const description =
  "Saarthi is a voice agent that reads a map of your product and presses the real controls. Try it on BharatBank, a fictional bank.";

export const metadata: Metadata = {
  title: {
    default: "Saarthi by companion.py",
    template: "%s · Saarthi",
  },
  description,
  robots: { index: true, follow: true },
  openGraph: {
    title: "Saarthi by companion.py",
    description,
    type: "website",
    images: [
      {
        url: "/media/demo-poster.jpg",
        alt: "Saarthi driving the BharatBank demo on a phone",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saarthi by companion.py",
    description,
    images: ["/media/demo-poster.jpg"],
  },
};

const themeScript = `
try {
  var stored = localStorage.getItem("saarthi-theme");
  var dark = stored === "dark" || (!stored && matchMedia("(prefers-color-scheme: dark)").matches);
  if (dark) document.documentElement.classList.add("dark");
} catch (e) {}
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="flex min-h-full flex-col">
        <Script id="theme-init" strategy="beforeInteractive">
          {themeScript}
        </Script>
        <a className="skip-link button-sm" href="#content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
