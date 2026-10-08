import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader } from "../_components/SiteHeader";
import { SiteFooter } from "../_components/SiteFooter";
import articles from "./regeling.json";

export const metadata: Metadata = {
  title: "Klachtenregeling",
  description: "Klachtenregeling van Sesa-Security voor de behandeling van klachten over de dienstverlening.",
  alternates: { canonical: "/klachtenregeling/" },
};

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
        <p className="complaints-intro">Een schriftelijke klacht kunt u sturen naar <a href="mailto:info@sesa-security.nl">info@sesa-security.nl</a> of per post naar Sesa-Security, Krugerstraat 88, 3531 AS Utrecht. Zie ook de <Link href="/contact/">contactpagina</Link>.</p>
        {articles.map(article => <section key={article.number} aria-labelledby={`onderdeel-${article.number}`}>
          <h2 id={`onderdeel-${article.number}`}>{article.number}. {article.title}</h2>
          <p>{article.body}</p>
          {article.requirements.length > 0 && <ol>
            {article.requirements.map(requirement => <li key={requirement}>{requirement}</li>)}
          </ol>}
          {article.closing && <p>{article.closing}</p>}
        </section>)}
      </div>
    </main>
    <SiteFooter locale="nl" />
  </>;
}
