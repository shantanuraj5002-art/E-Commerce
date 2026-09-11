import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function ContactHeader() {
  return (
    <Section className="bg-neutral-light">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-neutral-dark md:text-5xl">
            Contact us
          </h1>
          <p className="mt-6 text-lg text-neutral-mid">
            [PAGE INTRO — one or two sentences inviting visitors to get in
            touch and setting expectations for a response.]
          </p>
        </motion.div>
      </Container>
    </Section>
  );
}
