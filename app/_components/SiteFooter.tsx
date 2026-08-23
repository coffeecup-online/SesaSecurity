import Image from "next/image";
import Link from "next/link";
import { Locale, siteContent } from "../content";

export function SiteFooter({ locale }: { locale: Locale }) {
  const copy = siteContent[locale].footer;
  const home = locale === "nl" ? "/" : "/en/";
  const contact = locale === "nl" ? "/contact/" : "/en/contact/";

  return (
    <footer className="site-footer">
      <div className="footer-intro">
        <Link className="brand footer-brand" href={home} aria-label={copy.home}>
          <Image
            className="brand-logo"
            src="/sesa-security-emblem-512.png"
            alt=""
            width={512}
            height={768}
          />
          <span className="brand-name">SESA SECURITY</span>
        </Link>
        <p>{copy.text}</p>
      </div>
      <div className="footer-nav-column">
        <h2 className="footer-column-title">{copy.navigationTitle}</h2>
        <div className="footer-links">
          <Link href={home}>{copy.home}</Link>
          <Link href={`${home}#services`}>{copy.services}</Link>
          <Link href={contact}>{copy.contact}</Link>
        </div>
      </div>
      <address className="footer-contact">
        <h2 className="footer-column-title">{copy.contactTitle}</h2>
        <div>
          <span>{copy.email}</span>
          <a href="mailto:info@sesa-security.nl">info@sesa-security.nl</a>
        </div>
        <div>
          <span>{copy.phone}</span>
          <a href="tel:+31626535692">06 26 53 56 92</a>
        </div>
        <div>
          <span>{copy.kvk}</span>
          <p>40094373</p>
        </div>
      </address>
      <div className="footer-social-column">
        <h2 className="footer-column-title">Social</h2>
        <a
          className="footer-social-link"
          href="https://www.linkedin.com/in/sara-istrefi-a1b551213/"
          target="_blank"
          rel="noreferrer"
          aria-label={
            locale === "nl"
              ? "LinkedIn-profiel van Sara Istrefi"
              : "Sara Istrefi's LinkedIn profile"
          }
        >
          <span className="linkedin-icon" aria-hidden="true">in</span>
          LinkedIn
        </a>
      </div>
      <p className="copyright">© {new Date().getFullYear()} Sesa Security</p>
    </footer>
  );
}
