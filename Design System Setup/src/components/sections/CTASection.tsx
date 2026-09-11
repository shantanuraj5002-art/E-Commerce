import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function CTASection() {
  return (
    <Section className="bg-primary text-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            [CTA HEADLINE — ready to work together?]
          </h2>
          <p className="text-lg text-white/80">
            [CTA SUPPORTING COPY — one sentence inviting visitors to start a
            conversation.]
          </p>
          <Button asChild variant="secondary" size="lg">
            <a href="/contact">
              Contact us
              <ArrowRight className="size-4" />
            </a>
          </Button>
        </motion.div>
      </Container>
    </Section>
  );
}
