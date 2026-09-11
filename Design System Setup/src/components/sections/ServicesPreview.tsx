import { motion } from "framer-motion";
import { BarChart3, Cog, Users } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const SERVICES = [
  {
    icon: BarChart3,
    title: "[Service One]",
    description:
      "One-line description of the first core service offering goes here.",
  },
  {
    icon: Users,
    title: "[Service Two]",
    description:
      "One-line description of the second core service offering goes here.",
  },
  {
    icon: Cog,
    title: "[Service Three]",
    description:
      "One-line description of the third core service offering goes here.",
  },
];

export function ServicesPreview() {
  return (
    <Section>
      <Container className="flex flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-neutral-dark md:text-4xl">
            What we do
          </h2>
          <p className="mt-4 text-lg text-neutral-mid">
            [SECTION INTRO — a sentence summarizing the company's service
            areas.]
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {SERVICES.map((service, index) => (
            <motion.a
              key={service.title}
              href="/services"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col gap-4 rounded-lg bg-surface p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="grid size-12 place-items-center rounded-lg bg-primary/10 text-primary">
                <service.icon className="size-6" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-dark">
                {service.title}
              </h3>
              <p className="text-base text-neutral-mid">
                {service.description}
              </p>
              <span className="mt-auto text-sm font-medium text-secondary">
                Learn more →
              </span>
            </motion.a>
          ))}
        </div>
      </Container>
    </Section>
  );
}
