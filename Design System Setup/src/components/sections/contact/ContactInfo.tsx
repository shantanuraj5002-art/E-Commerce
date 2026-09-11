import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

const INFO = [
  {
    icon: MapPin,
    label: "Address",
    lines: ["[Street Address]", "[City, Postcode, Country]"],
  },
  {
    icon: Phone,
    label: "Phone",
    lines: ["[+00 0000 000 000]"],
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["[hello@clientcompany.com]"],
  },
];

export function ContactInfo() {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="flex flex-col gap-6"
    >
      <div className="flex flex-col gap-6 rounded-lg bg-surface p-8 shadow-sm">
        {INFO.map((item) => (
          <div key={item.label} className="flex items-start gap-4">
            <div className="grid size-11 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
              <item.icon className="size-5" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-neutral-dark">
                {item.label}
              </h3>
              {item.lines.map((line) => (
                <p key={line} className="text-sm text-neutral-mid">
                  {line}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Map placeholder — replace with an embedded map when available */}
      <div
        aria-hidden="true"
        className="grid min-h-56 flex-1 place-items-center rounded-lg bg-neutral-light shadow-sm"
      >
        <span className="text-sm font-medium text-neutral-mid">[MAP]</span>
      </div>
    </motion.aside>
  );
}
