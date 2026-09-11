import { motion } from "framer-motion";
import { Award, Handshake, Lightbulb, ShieldCheck } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const VALUES = [
  {
    icon: Award,
    title: "Excellence",
    description:
      "We hold ourselves to the highest standard in everything we deliver.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description:
      "We work alongside our clients as long-term partners, not vendors.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We continuously look for better, smarter ways to solve problems.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We do what we say, and we're transparent even when it's hard.",
  },
];

export function ValuesSection() {
  return (
    <Section className="bg-neutral-light">
      <Container className="flex flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-neutral-dark md:text-4xl">
            Our values
          </h2>
          <p className="mt-4 text-lg text-neutral-mid">
            [VALUES INTRO — one sentence about the principles that guide the
            company's work.]
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col gap-3 rounded-lg bg-surface p-6 shadow-sm"
            >
              <div className="grid size-12 place-items-center rounded-lg bg-primary/10 text-primary">
                <value.icon className="size-6" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-dark">
                {value.title}
              </h3>
              <p className="text-sm text-neutral-mid">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
