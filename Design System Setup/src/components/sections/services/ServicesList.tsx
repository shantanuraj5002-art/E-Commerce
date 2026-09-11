import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import type { Service } from "@/lib/services";
import { cn } from "@/lib/utils";

function ServiceBlock({ service, index }: { service: Service; index: number }) {
  const reversed = index % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="grid items-center gap-12 md:grid-cols-2"
    >
      {/* Visual — icon panel placeholder, replace with service imagery */}
      <div
        aria-hidden="true"
        className={cn(
          "grid h-72 place-items-center rounded-lg bg-neutral-light shadow-sm",
          reversed && "md:order-2"
        )}
      >
        <div className="grid size-20 place-items-center rounded-lg bg-primary/10 text-primary">
          <service.icon className="size-10" />
        </div>
      </div>

      <div className={cn("flex flex-col items-start gap-4", reversed && "md:order-1")}>
        <h2 className="text-3xl font-bold tracking-tight text-neutral-dark">
          {service.title}
        </h2>
        <p className="text-base text-neutral-mid">{service.description}</p>
        <ul className="flex flex-col gap-2">
          {service.includes.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-base text-neutral-dark"
            >
              <Check className="mt-1 size-4 shrink-0 text-secondary" />
              {item}
            </li>
          ))}
        </ul>
        <Button asChild variant="primary" size="md" className="mt-2">
          <a href="/contact">
            Get started
            <ArrowRight className="size-4" />
          </a>
        </Button>
      </div>
    </motion.div>
  );
}

export function ServicesList({ services }: { services: Service[] }) {
  return (
    <Section>
      <Container className="flex flex-col gap-20 md:gap-24">
        {services.map((service, index) => (
          <ServiceBlock key={service.id} service={service} index={index} />
        ))}
      </Container>
    </Section>
  );
}
