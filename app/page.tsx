import Link from "next/link";

const services = [
  {
    number: "01",
    title: "*Security consulting*",
    description:
      "*Practical guidance to identify risks, strengthen procedures, and make security part of everyday operations.*",
  },
  {
    number: "02",
    title: "*Risk assessments*",
    description:
      "*A clear view of vulnerabilities, priorities, and the steps needed to protect people, property, and information.*",
  },
  {
    number: "03",
    title: "*Training & awareness*",
    description:
      "*Engaging sessions that help teams recognise threats and respond with confidence when it matters most.*",
  },
];

const experience = [
  {
    year: "*20XX — PRESENT*",
    role: "*Founder & Security Advisor*",
    company: "Sesa Security",
  },
  {
    year: "*20XX — 20XX*",
    role: "*Senior Security Professional*",
    company: "*Previous organisation*",
  },
  {
    year: "*20XX — 20XX*",
    role: "*Security Specialist*",
    company: "*Previous organisation*",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">*Independent security expertise*</p>
            <h1 id="hero-title">
              *Protection built on <span>clarity.*</span>
            </h1>
            <p className="hero-intro">
              *Sesa Security helps organisations create safer environments
              through clear advice, thoughtful strategy, and hands-on
              expertise.*
            </p>
            <Link className="button button-gold" href="/contact">
              Start a conversation <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className="hero-mark" aria-hidden="true">
            <div className="mark-frame">
              <span className="mark-c">C</span>
              <span className="mark-s">S</span>
            </div>
            <p>SESA / SECURITY</p>
          </div>
        </div>
        <div className="hero-index" aria-hidden="true">
          <span>01</span>
          <span>SCROLL TO DISCOVER</span>
        </div>
      </section>

      <section className="statement section-pad" aria-label="Introduction">
        <p className="section-kicker">What we stand for</p>
        <p className="statement-copy">
          *Good security is not about creating fear. It is about creating the
          confidence to move forward.*
        </p>
      </section>

      <section className="services section-pad" id="services">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Our services</p>
            <h2>*Security, made practical.*</h2>
          </div>
          <p className="section-note">
            *Tailored support for organisations that take the safety of their
            people and operations seriously.*
          </p>
        </div>

        <div className="service-list">
          {services.map((service) => (
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
        <div className="about-portrait" aria-hidden="true">
          <div className="portrait-initials">SE</div>
          <p>*PORTRAIT PLACEHOLDER*</p>
        </div>

        <div className="about-copy">
          <p className="section-kicker">About Sarah</p>
          <h2>*Experience with a human perspective.*</h2>
          <p className="about-lead">
            *I am Sarah Istrefi, founder of Sesa Security and a security
            professional committed to making complex challenges understandable
            and manageable.*
          </p>
          <p>
            *My approach combines strategic thinking with practical experience.
            I work closely with each client to understand what really matters,
            then build solutions that fit their people, culture, and ambitions.*
          </p>
          <Link className="text-link" href="/contact">
            Work with Sarah <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="experience section-pad" id="experience">
        <div className="section-heading experience-heading">
          <div>
            <p className="section-kicker">Experience</p>
            <h2>*A career built on trust.*</h2>
          </div>
          <p className="section-note">
            *Add Sarah&apos;s professional background, qualifications, and key
            achievements here.*
          </p>
        </div>

        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-row" key={`${item.year}-${item.role}`}>
              <p className="timeline-year">{item.year}</p>
              <div>
                <h3>{item.role}</h3>
                <p>{item.company}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="cta section-pad">
        <p className="section-kicker">Let&apos;s talk</p>
        <h2>*Ready to make security feel simpler?*</h2>
        <Link className="button button-dark" href="/contact">
          Contact Sesa Security <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </main>
  );
}
