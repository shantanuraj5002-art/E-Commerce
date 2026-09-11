import type { LucideIcon } from "lucide-react";
import { BarChart3, Cog, Users, LineChart } from "lucide-react";

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  includes: string[];
}

export const services: Service[] = [
  {
    id: "service-one",
    icon: BarChart3,
    title: "[Service One]",
    description:
      "[SERVICE DESCRIPTION — two or three sentences explaining what this service is, who it's for, and the outcome it delivers.]",
    includes: [
      "[Included deliverable or feature one]",
      "[Included deliverable or feature two]",
      "[Included deliverable or feature three]",
      "[Included deliverable or feature four]",
    ],
  },
  {
    id: "service-two",
    icon: Users,
    title: "[Service Two]",
    description:
      "[SERVICE DESCRIPTION — two or three sentences explaining what this service is, who it's for, and the outcome it delivers.]",
    includes: [
      "[Included deliverable or feature one]",
      "[Included deliverable or feature two]",
      "[Included deliverable or feature three]",
      "[Included deliverable or feature four]",
    ],
  },
  {
    id: "service-three",
    icon: Cog,
    title: "[Service Three]",
    description:
      "[SERVICE DESCRIPTION — two or three sentences explaining what this service is, who it's for, and the outcome it delivers.]",
    includes: [
      "[Included deliverable or feature one]",
      "[Included deliverable or feature two]",
      "[Included deliverable or feature three]",
      "[Included deliverable or feature four]",
    ],
  },
  {
    id: "service-four",
    icon: LineChart,
    title: "[Service Four]",
    description:
      "[SERVICE DESCRIPTION — two or three sentences explaining what this service is, who it's for, and the outcome it delivers.]",
    includes: [
      "[Included deliverable or feature one]",
      "[Included deliverable or feature two]",
      "[Included deliverable or feature three]",
      "[Included deliverable or feature four]",
    ],
  },
];
