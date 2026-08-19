import { HomeContent } from "./_components/HomeContent";
import { SiteFooter } from "./_components/SiteFooter";
import { SiteHeader } from "./_components/SiteHeader";
import { createPageMetadata } from "./seo";

export const metadata = createPageMetadata({
  locale: "nl",
  title: "Professionele beveiliging",
  socialTitle: "Sesa Security — Professionele beveiliging",
  description:
    "Sesa Security biedt professionele ZZP-beveiliging, objectbeveiliging en veiligheidsexpertise in heel Nederland.",
  path: "/",
  nlPath: "/",
  enPath: "/en/",
});

export default function HomePage() {
  return (
    <>
      <SiteHeader locale="nl" page="home" />
      <HomeContent locale="nl" />
      <SiteFooter locale="nl" />
    </>
  );
}
