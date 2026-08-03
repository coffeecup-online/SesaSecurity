"use client";

import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="contact-page">
      <section className="contact-hero section-pad">
        <p className="section-kicker">Contact</p>
        <h1>*Let&apos;s make security feel simpler.*</h1>
        <p>
          *Tell us what you are working on, where you need support, or simply
          start with a question. Sarah will get back to you soon.*
        </p>
      </section>

      <section className="contact-grid section-pad">
        <div className="contact-details">
          <p className="section-kicker">Get in touch</p>
          <div className="contact-detail">
            <span>Email</span>
            <a href="mailto:hello@sesasecurity.example">
              *hello@sesasecurity.com*
            </a>
          </div>
          <div className="contact-detail">
            <span>Phone</span>
            <a href="tel:+31000000000">*+31 (0) 00 000 00 00*</a>
          </div>
          <div className="contact-detail">
            <span>Location</span>
            <p>*The Netherlands*</p>
          </div>
          <p className="contact-note">
            *Available for consulting, training, and selected partnerships.*
          </p>
        </div>

        <div className="form-wrap">
          {submitted ? (
            <div className="success-message" role="status">
              <span aria-hidden="true">✓</span>
              <h2>*Thank you for your message.*</h2>
              <p>
                *This is a placeholder confirmation. Connect the form to your
                preferred email service before publishing.*
              </p>
              <button className="text-link" onClick={() => setSubmitted(false)}>
                Send another message →
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <label>
                  Name
                  <input name="name" type="text" placeholder="*Your name*" required />
                </label>
                <label>
                  Email
                  <input name="email" type="email" placeholder="*you@company.com*" required />
                </label>
              </div>
              <label>
                Organisation
                <input name="organisation" type="text" placeholder="*Company or organisation*" />
              </label>
              <label>
                Message
                <textarea
                  name="message"
                  rows={6}
                  placeholder="*How can Sesa Security help?*"
                  required
                />
              </label>
              <button className="button button-gold submit-button" type="submit">
                Send message <span aria-hidden="true">↗</span>
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
