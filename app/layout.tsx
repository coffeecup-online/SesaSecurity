import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sesasecurity.example"),
  title: {
    default: "Sesa Security — Independent Security Expertise",
    template: "%s | Sesa Security",
  },
  description:
    "Sesa Security provides independent security consulting, risk assessments, and training.",
  openGraph: {
    type: "website",
    title: "Sesa Security — Protection built on clarity.",
    description: "Independent security expertise for modern organisations.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Sesa Security" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sesa Security — Protection built on clarity.",
    description: "Independent security expertise for modern organisations.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <Link className="brand" href="/" aria-label="Sesa Security home">
            <span className="brand-monogram">CS</span>
            <span className="brand-name">SESA SECURITY</span>
          </Link>
          <nav aria-label="Main navigation">
            <Link href="/#services">Services</Link>
            <Link href="/#about">About</Link>
            <Link href="/#experience">Experience</Link>
            <Link className="nav-contact" href="/contact">
              Contact <span aria-hidden="true">↗</span>
            </Link>
          </nav>
        </header>

        {children}

        <footer className="site-footer">
          <div>
            <Link className="brand footer-brand" href="/">
              <span className="brand-monogram">CS</span>
              <span className="brand-name">SESA SECURITY</span>
            </Link>
            <p>*Independent security expertise for modern organisations.*</p>
          </div>
          <div className="footer-links">
            <Link href="/">Home</Link>
            <Link href="/#services">Services</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <p className="copyright">© {new Date().getFullYear()} Sesa Security</p>
        </footer>
      </body>
    </html>
  );
}
