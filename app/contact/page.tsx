import { ContactContent } from "../_components/ContactContent";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  locale: "nl",
  title: "Contact",
  socialTitle: "Contact opnemen met Sesa Security",
  description:
    "Neem contact op met Sesa Security voor professionele ZZP-beveiliging in heel Nederland.",
  path: "/contact/",
  nlPath: "/contact/",
  enPath: "/en/contact/",
});

export default function ContactPage() {
  return (
    <>
      <SiteHeader locale="nl" page="contact" />
      <ContactContent locale="nl" />
      <SiteFooter locale="nl" />
    </>
  );
}
