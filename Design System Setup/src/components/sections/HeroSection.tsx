import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function HeroSection() {
  return (
    <Section className="overflow-hidden">
      <Container className="grid items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-start gap-6"
        >
          <h1 className="text-4xl font-bold tracking-tight text-neutral-dark md:text-5xl">
            [CLIENT HEADLINE — your value proposition goes here]
          </h1>
          <p className="text-lg text-neutral-mid">
            [CLIENT SUPPORTING COPY — one or two sentences explaining what the
            company does, who it helps, and why it matters.]
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild variant="primary" size="lg">
              <a href="/contact">
                Get in touch
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="/services">Explore services</a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          aria-hidden="true"
          className="relative hidden h-80 rounded-lg bg-neutral-light shadow-sm md:block"
        >
          {/* Hero image placeholder — replace with client artwork */}
          <div className="absolute -left-8 top-8 size-40 rounded-lg bg-secondary/20" />
          <div className="absolute bottom-8 right-8 size-56 rounded-lg bg-primary/10" />
          <div className="absolute inset-0 grid place-items-center">
            <span className="text-sm font-medium text-neutral-mid">
              [HERO IMAGE / ILLUSTRATION]
            </span>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
