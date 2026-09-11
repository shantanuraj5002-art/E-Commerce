import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const CLIENTS = [
  "Acme Corp",
  "Northwind",
  "Globex",
  "Initech",
  "Umbrella Co",
  "Stark Ltd",
];

export function TrustSection() {
  return (
    <Section className="bg-neutral-light !py-12">
      <Container className="flex flex-col items-center gap-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm font-medium uppercase tracking-wider text-neutral-mid"
        >
          Trusted by leading companies
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
        >
          {CLIENTS.map((name) => (
            <div
              key={name}
              className="grid h-16 place-items-center rounded-lg bg-surface shadow-sm"
            >
              {/* Placeholder logo silhouette */}
              <span className="text-sm font-semibold text-neutral-mid">
                {name}
              </span>
            </div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
