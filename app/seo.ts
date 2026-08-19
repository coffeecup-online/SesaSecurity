import type { Metadata } from "next";

export const siteUrl = new URL("https://sesa-security.nl");

export const socialImage = {
  url: "/og.png",
  width: 1024,
  height: 1024,
  alt: "Het gouden schildlogo van Sesa Security",
};

type PageMetadataOptions = {
  locale: "nl" | "en";
  title: string;
  socialTitle: string;
  description: string;
  path: string;
  nlPath: string;
  enPath: string;
};

export function createPageMetadata({
  locale,
  title,
  socialTitle,
  description,
  path,
  nlPath,
  enPath,
}: PageMetadataOptions): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: {
        "nl-NL": nlPath,
        en: enPath,
        "x-default": nlPath,
      },
    },
    openGraph: {
      type: "website",
      siteName: "Sesa Security",
      title: socialTitle,
      description,
      url: path,
      locale: locale === "nl" ? "nl_NL" : "en_GB",
      alternateLocale: locale === "nl" ? ["en_GB"] : ["nl_NL"],
      images: [socialImage],
    },
    twitter: {
      card: "summary",
      title: socialTitle,
      description,
      images: [
        {
          url: socialImage.url,
          alt: socialImage.alt,
        },
      ],
    },
  };
}
