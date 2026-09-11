import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function AboutHeader() {
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
            About [CLIENT COMPANY NAME]
          </h1>
          <p className="mt-6 text-lg text-neutral-mid">
            [PAGE INTRO — two or three sentences introducing the company, its
            mission, and what sets it apart.]
          </p>
        </motion.div>
      </Container>
    </Section>
  );
}
