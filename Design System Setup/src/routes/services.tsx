import { createFileRoute } from "@tanstack/react-router";

import { ServicesHeader } from "@/components/sections/services/ServicesHeader";
import { ServicesList } from "@/components/sections/services/ServicesList";
import { CTASection } from "@/components/sections/CTASection";
import { services } from "@/lib/services";

const TITLE = "Consulting Services & Solutions | [Client Company Name]";
const DESCRIPTION =
  "Explore our consulting services: strategy, implementation, optimisation and ongoing support — each with clear deliverables and a dedicated team.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <ServicesHeader />
      <ServicesList services={services} />
      <CTASection />
    </>
  );
}
