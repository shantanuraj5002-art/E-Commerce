import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const STATS = [
  { value: 10, suffix: "+", label: "Years in business" },
  { value: 200, suffix: "+", label: "Clients served" },
  { value: 500, suffix: "+", label: "Projects delivered" },
  { value: 98, suffix: "%", label: "Client satisfaction" },
];

function Stat({
  value,
  suffix,
  label,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.5,
      delay,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <div className="text-4xl font-bold text-white md:text-5xl">
        {display}
        {suffix}
      </div>
      <div className="mt-2 text-sm font-medium text-white/80">{label}</div>
    </motion.div>
  );
}

export function StatsBand() {
  return (
    <Section className="bg-primary !py-16">
      <Container className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {STATS.map((stat, index) => (
          <Stat key={stat.label} {...stat} delay={index * 0.1} />
        ))}
      </Container>
    </Section>
  );
}
