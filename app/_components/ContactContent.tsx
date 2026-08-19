"use client";

import { FormEvent, useState } from "react";
import { Locale, siteContent } from "../content";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY = "f4edd7b3-907b-43b8-90f6-8868396370a6";

export function ContactContent({ locale }: { locale: Locale }) {
  const copy = siteContent[locale].contact;
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("submitting");

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
      });
      const result = (await response.json()) as {
        success?: boolean;
        message?: string;
      };

      if (!response.ok || !result.success) {
        throw new Error(result.message ?? "Submission failed");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="contact-page" lang={locale}>
      <section className="contact-hero section-pad">
        <p className="section-kicker">{copy.kicker}</p>
        <h1>{copy.title}</h1>
        <p>{copy.intro}</p>
      </section>

      <section className="contact-grid section-pad">
        <div className="contact-details">
          <p className="section-kicker">{copy.detailsKicker}</p>
          {copy.details.map((detail) => (
            <div className="contact-detail" key={detail.label}>
              <span>{detail.label}</span>
              <p>{detail.value}</p>
            </div>
          ))}
          <p className="contact-note">{copy.note}</p>
        </div>

        <div className="form-wrap">
          {status === "success" ? (
            <div className="success-message" role="status">
              <span aria-hidden="true">✓</span>
              <h2>{copy.successTitle}</h2>
              <p>{copy.successText}</p>
              <button className="text-link" onClick={() => setStatus("idle")}>
                {copy.another}
              </button>
            </div>
          ) : (
            <form action={WEB3FORMS_ENDPOINT} method="POST" onSubmit={handleSubmit}>
              <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
              <input type="hidden" name="subject" value={copy.subject} />
              <input type="hidden" name="from_name" value="Sesa Security" />
              <input
                className="botcheck"
                type="checkbox"
                name="botcheck"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />
              <div className="form-row">
                <label>
                  {copy.fields.name}
                  <input name="name" type="text" placeholder={copy.fields.namePlaceholder} required />
                </label>
                <label>
                  {copy.fields.email}
                  <input name="email" type="email" placeholder={copy.fields.emailPlaceholder} required />
                </label>
              </div>
              <label>
                {copy.fields.organisation}
                <input name="organisation" type="text" placeholder={copy.fields.organisationPlaceholder} />
              </label>
              <label>
                {copy.fields.message}
                <textarea name="message" rows={6} placeholder={copy.fields.messagePlaceholder} required />
              </label>
              {status === "error" && (
                <p className="form-error" role="alert">
                  {copy.error}
                </p>
              )}
              <button
                className="button button-gold submit-button"
                type="submit"
                disabled={status === "submitting"}
                aria-busy={status === "submitting"}
              >
                {status === "submitting" ? copy.sending : copy.send}
                <span aria-hidden="true">↗</span>
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
