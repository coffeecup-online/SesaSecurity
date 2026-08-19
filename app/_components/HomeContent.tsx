import Image from "next/image";
import Link from "next/link";
import { Locale, siteContent } from "../content";

export function HomeContent({ locale }: { locale: Locale }) {
  const copy = siteContent[locale].home;
  const contact = locale === "nl" ? "/contact/" : "/en/contact/";

  return (
    <main lang={locale}>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">{copy.eyebrow}</p>
            <h1 id="hero-title">
              {copy.titleStart} <span>{copy.titleAccent}</span>
            </h1>
            <p className="hero-intro">{copy.intro}</p>
            <Link className="button button-gold" href={contact}>
              {copy.primaryCta} <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className="hero-mark" aria-hidden="true">
            <Image
              className="hero-emblem"
              src="/sesa-security-emblem-1024.png"
              alt=""
              width={1024}
              height={1024}
              sizes="(max-width: 900px) 320px, 28vw"
              priority
            />
            <p>SESA / SECURITY</p>
          </div>
        </div>
        <div className="hero-index" aria-hidden="true">
          <span>01</span>
          <span>{copy.scroll}</span>
        </div>
      </section>

      <section className="statement section-pad" aria-label={copy.statementKicker}>
        <p className="section-kicker">{copy.statementKicker}</p>
        <p className="statement-copy">{copy.statement}</p>
      </section>

      <section className="services section-pad" id="services">
        <div className="section-heading">
          <div>
            <p className="section-kicker">{copy.servicesKicker}</p>
            <h2>{copy.servicesTitle}</h2>
          </div>
          <p className="section-note">{copy.servicesNote}</p>
        </div>

        <div className="service-list">
          {copy.services.map((service) => (
            <article className="service-item" key={service.number}>
              <span className="service-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="service-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="about section-pad" id="about">
        <figure className="about-portrait">
          <Image
            src="/sarah-istrefi.webp"
            alt="Sara Istrefi"
            width={1080}
            height={1632}
            sizes="(max-width: 900px) 100vw, 42vw"
          />
        </figure>

        <div className="about-copy">
          <p className="section-kicker">{copy.aboutKicker}</p>
          <h2>{copy.aboutTitle}</h2>
          <p className="about-lead">{copy.aboutLead}</p>
          <p>{copy.aboutBody}</p>
          <ul className="profile-facts" aria-label={locale === "nl" ? "Praktische gegevens" : "Practical details"}>
            {copy.facts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
          <Link className="text-link" href={contact}>
            {copy.aboutCta} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="experience section-pad" id="experience">
        <div className="section-heading experience-heading">
          <div>
            <p className="section-kicker">{copy.experienceKicker}</p>
            <h2>{copy.experienceTitle}</h2>
          </div>
          <p className="section-note">{copy.experienceNote}</p>
        </div>

        <div className="timeline">
          {copy.experience.map((item) => (
            <article className="timeline-row" key={`${item.year}-${item.role}`}>
              <p className="timeline-year">{item.year}</p>
              <div>
                <h3>{item.role}</h3>
                <p>{item.company}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="skills-block">
          <h3>{copy.skillsTitle}</h3>
          <ul>
            {copy.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="cta section-pad">
        <p className="section-kicker">{copy.ctaKicker}</p>
        <h2>{copy.ctaTitle}</h2>
        <Link className="button button-dark" href={contact}>
          {copy.ctaButton} <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </main>
  );
}
