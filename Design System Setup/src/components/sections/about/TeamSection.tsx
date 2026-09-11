import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const TEAM = [
  { name: "[Full Name]", role: "Founder & CEO" },
  { name: "[Full Name]", role: "Head of Operations" },
  { name: "[Full Name]", role: "Head of Delivery" },
  { name: "[Full Name]", role: "Head of Client Success" },
];

export function TeamSection() {
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
            Meet the team
          </h2>
          <p className="mt-4 text-lg text-neutral-mid">
            [TEAM INTRO — one sentence about the people behind the company.]
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center gap-3 rounded-lg bg-surface p-6 text-center shadow-sm"
            >
              {/* Photo placeholder — replace with team headshots */}
              <div className="grid size-24 place-items-center rounded-lg bg-neutral-light">
                <span className="text-xs font-medium text-neutral-mid">
                  [PHOTO]
                </span>
              </div>
              <h3 className="text-lg font-semibold text-neutral-dark">
                {member.name}
              </h3>
              <p className="text-sm text-neutral-mid">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
