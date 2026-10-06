import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader } from "../_components/SiteHeader";
import { SiteFooter } from "../_components/SiteFooter";
import articles from "./regeling.json";

export const metadata: Metadata = {
  title: "Klachtenregeling | Sesa-Security",
  description: "Klachtenregeling van Sesa-Security voor de behandeling van klachten over de dienstverlening.",
  alternates: { canonical: "/klachtenregeling/" },
};

function ArticleBody({ number, body }: { number: number; body: string }) {
  if (![1, 3, 8, 9, 13, 15].includes(number)) return <p>{body}</p>;
  const preface = number === 1 ? "Deze regeling verstaat onder: " : "";
  const text = preface ? body.slice(preface.length) : body;
  const items = text.split(/(?=\b[1-7]\. )/).filter(Boolean);
  return <>
    {preface && <p>{preface}</p>}
    <ol>
      {items.map((item, index) => {
        const content = item.replace(/^[1-7]\. /, "");
        const parts = (number === 3 || number === 13) && index === 1 ? content.split(/ -\s+/) : [content];
        return <li key={index}>{parts[0]}{parts.length > 1 && <ul>{parts.slice(1).map((part, bullet) => <li key={bullet}>{part}</li>)}</ul>}</li>;
      })}
    </ol>
  </>;
}

export default function KlachtenregelingPage() {
  return <>
    <SiteHeader locale="nl" page="complaints" />
    <main className="complaints-page">
      <header className="complaints-hero section-pad">
        <p className="section-kicker">Sesa-Security</p>
        <h1>Klachtenregeling</h1>
        <p>Deze regeling beschrijft hoe klachten over gedragingen van Sesa-Security worden ingediend en behandeld.</p>
      </header>
      <div className="complaints-content section-pad">
        <p className="complaints-intro">Deze regeling is gebaseerd op de aangeleverde standaard klachtenregeling voor particuliere beveiligingsorganisaties en recherchebureaus van Justis. Stuur een ondertekend klaagschrift aan de directeur van Sesa-Security via <a href="mailto:info@sesa-security.nl">info@sesa-security.nl</a> of per post naar Krugerstraat 88, 3531 AS Utrecht. Vermeld de gegevens uit artikel 3. Bent u niet tevreden over de afhandeling? Laat dat dan via hetzelfde e-mailadres of postadres weten. Zie ook de <Link href="/contact/">contactpagina</Link>.</p>
        {articles.map(article => <section key={article.number} aria-labelledby={`artikel-${article.number}`}>
          <h2 id={`artikel-${article.number}`}>{article.title}</h2>
          <ArticleBody number={article.number} body={article.body} />
        </section>)}
      </div>
    </main>
    <SiteFooter locale="nl" />
  </>;
}
