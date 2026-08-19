import { ContactContent } from "../../_components/ContactContent";
import { SiteFooter } from "../../_components/SiteFooter";
import { SiteHeader } from "../../_components/SiteHeader";
import { createPageMetadata } from "../../seo";

export const metadata = createPageMetadata({
  locale: "en",
  title: "Contact",
  socialTitle: "Contact Sesa Security",
  description:
    "Contact Sesa Security for professional independent security support throughout the Netherlands.",
  path: "/en/contact/",
  nlPath: "/contact/",
  enPath: "/en/contact/",
});

export default function EnglishContactPage() {
  return (
    <div lang="en">
      <SiteHeader locale="en" page="contact" />
      <ContactContent locale="en" />
      <SiteFooter locale="en" />
    </div>
  );
}
