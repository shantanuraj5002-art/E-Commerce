import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function StorySection() {
  return (
    <Section>
      <Container className="grid items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4"
        >
          <h2 className="text-3xl font-bold tracking-tight text-neutral-dark">
            Our story
          </h2>
          <p className="text-base text-neutral-mid">
            [COMPANY STORY — paragraph one: how the company was founded, by
            whom, and the problem it set out to solve.]
          </p>
          <p className="text-base text-neutral-mid">
            [COMPANY STORY — paragraph two: how the company has grown, key
            milestones, and where it's headed next.]
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          aria-hidden="true"
          className="grid h-80 place-items-center rounded-lg bg-neutral-light shadow-sm"
        >
          {/* Story image placeholder — replace with client photo */}
          <span className="text-sm font-medium text-neutral-mid">
            [COMPANY STORY IMAGE]
          </span>
        </motion.div>
      </Container>
    </Section>
  );
}
