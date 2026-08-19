import type { Metadata } from "next";
import { siteUrl, socialImage } from "./seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Sesa Security — Professionele beveiliging",
    template: "%s | Sesa Security",
  },
  description:
    "Professionele ZZP-beveiliging, luchtvaartbeveiliging en veiligheidsexpertise door Sara Istrefi.",
  applicationName: "Sesa Security",
  creator: "Sesa Security",
  publisher: "Sesa Security",
  keywords: [
    "Sesa Security",
    "ZZP beveiliger",
    "objectbeveiliging",
    "luchtvaartbeveiliging",
    "veiligheidsspecialist",
  ],
  icons: {
    icon: [{ url: "/icon.png", type: "image/png", sizes: "512x512" }],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "512x512" }],
  },
  openGraph: {
    type: "website",
    siteName: "Sesa Security",
    title: "Sesa Security — Professionele beveiliging",
    description:
      "Professionele beveiliging en veiligheidsexpertise door Sara Istrefi.",
    url: "/",
    locale: "nl_NL",
    alternateLocale: ["en_GB"],
    images: [socialImage],
  },
  twitter: {
    card: "summary",
    title: "Sesa Security — Professionele beveiliging",
    description:
      "Professionele beveiliging en veiligheidsexpertise door Sara Istrefi.",
    images: [{ url: socialImage.url, alt: socialImage.alt }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
