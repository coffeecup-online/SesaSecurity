import { HomeContent } from "../_components/HomeContent";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  locale: "en",
  title: "Professional security services",
  socialTitle: "Sesa Security — Professional security services",
  description:
    "Sesa Security provides professional independent guarding, site security, and safety expertise throughout the Netherlands.",
  path: "/en/",
  nlPath: "/",
  enPath: "/en/",
});

export default function EnglishHomePage() {
  return (
    <div lang="en">
      <SiteHeader locale="en" page="home" />
      <HomeContent locale="en" />
      <SiteFooter locale="en" />
    </div>
  );
}
