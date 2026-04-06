import { LucideIcon } from "lucide-react";

export interface ServiceProcess {
  title: string;
  description: string;
  bullets: string[];
}

export interface ServiceDifferentiator {
  title: string;
  description: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  subtitle: string;
  seoTitle: string;
  seoDescription: string;
  heroIcon: LucideIcon;
  comparisonHeading: string;
  commonMistakes: { label: string }[];
  swatseoWay: { label: string }[];
  processHeading: string;
  process: ServiceProcess[];
  differentiatorHeading: string;
  differentiators: ServiceDifferentiator[];
  faq: { question: string; answer: string }[];
}
