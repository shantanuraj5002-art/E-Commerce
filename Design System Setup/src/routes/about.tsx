import { createFileRoute } from "@tanstack/react-router";

import { AboutHeader } from "@/components/sections/about/AboutHeader";
import { StorySection } from "@/components/sections/about/StorySection";
import { ValuesSection } from "@/components/sections/about/ValuesSection";
import { StatsBand } from "@/components/sections/about/StatsBand";
import { TeamSection } from "@/components/sections/about/TeamSection";

const TITLE = "About Our Team & Company Story | [Client Company Name]";
const DESCRIPTION =
  "Meet the team behind [Client Company Name]: 10+ years of experience, 200+ clients served, and the values that guide how we work with every business.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <AboutHeader />
      <StorySection />
      <ValuesSection />
      <StatsBand />
      <TeamSection />
    </>
  );
}
