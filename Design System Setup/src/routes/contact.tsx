import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

import { ContactHeader } from "@/components/sections/contact/ContactHeader";
import { ContactForm } from "@/components/sections/ContactForm";
import { ContactInfo } from "@/components/sections/contact/ContactInfo";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const TITLE = "Contact Us — Get a Free Consultation | [Client Company Name]";
const DESCRIPTION =
  "Contact [Client Company Name] by phone, email or the enquiry form. Tell us about your project and we'll reply within one business day.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <ContactHeader />
      <Section>
        <Container className="grid items-start gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <ContactForm />
          </motion.div>
          <div className="lg:col-span-2">
            <ContactInfo />
          </div>
        </Container>
      </Section>
    </>
  );
}
