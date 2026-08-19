import Image from "next/image";
import Link from "next/link";
import { Locale, siteContent } from "../content";

type Props = {
  locale: Locale;
  page: "home" | "contact";
};

export function SiteHeader({ locale, page }: Props) {
  const copy = siteContent[locale].nav;
  const home = locale === "nl" ? "/" : "/en/";
  const contact = locale === "nl" ? "/contact/" : "/en/contact/";
  const nlPath = page === "home" ? "/" : "/contact/";
  const enPath = page === "home" ? "/en/" : "/en/contact/";

  return (
    <header className="site-header">
      <Link className="brand" href={home} aria-label={copy.homeLabel}>
        <Image
          className="brand-logo"
          src="/sesa-security-emblem-512.png"
          alt=""
          width={512}
          height={768}
          priority
        />
        <span className="brand-name">SESA SECURITY</span>
      </Link>
      <nav aria-label={copy.label}>
        <Link className="nav-link" href={`${home}#services`}>
          {copy.services}
        </Link>
        <Link className="nav-link" href={`${home}#about`}>
          {copy.about}
        </Link>
        <Link className="nav-link" href={`${home}#experience`}>
          {copy.experience}
        </Link>
        <Link className="nav-contact" href={contact}>
          {copy.contact} <span aria-hidden="true">↗</span>
        </Link>
        <div className="language-switcher" aria-label="Language / Taal">
          <Link href={nlPath} lang="nl" aria-current={locale === "nl" ? "page" : undefined}>
            NL
          </Link>
          <span aria-hidden="true">/</span>
          <Link href={enPath} lang="en" aria-current={locale === "en" ? "page" : undefined}>
            EN
          </Link>
        </div>
      </nav>
    </header>
  );
}
