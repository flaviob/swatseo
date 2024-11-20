import { Card, CardContent } from "@/components/ui/card";
import {
  BarChart2,
  FileText,
  LineChart,
  LucideIcon,
  Search,
  Settings,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { config } from "../../site-config";
import { Button } from "./ui/button";

export function HowItWorks() {
  const services: {
    title: string;
    description: string;
    link?: string;
    icon: LucideIcon;
  }[] = [
    {
      title: "SEO Audit",
      description:
        "An in-depth technical SEO audit for your website to uncover problems that may be hindering your growth.",
      icon: Search,
    },
    {
      title: "Tailored Strategy",
      description:
        "We'll make a strategy that makes sense for your business to help you increase traffic, rankings, and revenue.",
      icon: TrendingUp,
    },
    {
      title: "Website Optimization",
      description:
        "We'll reorganize your content architecture, build authoritative backlinks, and implement technical and on-page SEO and UX optimization.",
      icon: Settings,
    },
    {
      title: "Content Creation",
      description:
        "Our editors will create a topical map for better content organization. Our team will then create pillar pages and content clusters that drive traffic and target your ideal audience.",
      icon: FileText,
    },
    {
      title: "Ranking Enhancement",
      description:
        "Our editors will update and optimize your existing content and improve your internal links for better performance.",
      icon: BarChart2,
    },
    {
      title: "Continuous Evaluation",
      description:
        "Our team will evaluate data and KPIs to measure their effectiveness. We refine our strategy based on the insights we gain from analyzing these performance metrics.",
      icon: LineChart,
    },
  ];
  return (
    <section
      id="services"
      className="flex flex-col bg-dot-black/15 items-center bg-primary gap-6 py-12 xl:px-48 lg:px-24 sm:px-12 px-4 md:py-24 pb-24 sm:gap-7"
    >
      <div className="flex flex-col gap-3 items-center">
        <h2 className="text-center font-heading text-3xl text-white font-semibold sm:text-4xl">
          How it works
        </h2>
      </div>
      <p className="max-w-lg text-center text-lg text-white/80 text-balance font-medium">
        An easy, no-hassle way to grow your business. We deliver done-for-you, conversion-focused
        SEO and quality content. Here’s what we deliver for a fixed monthly rate:
      </p>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
        {services.map((service, index) => (
          <Card className="mt-7 inline-block break-inside-avoid" key={index}>
            <CardContent className="flex flex-col items-start gap-4 p-8 relative">
              <div className="absolute top-[-24px] border left-[-24px] w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <service.icon className="text-primary/80" />
              </div>
              <p className="text-primary font-semibold text-xl font-heading">{service.title}</p>
              <p className="text-foreground font-normal font-sans text-left">
                {service.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      <Button
        size="lg"
        className="h-12 mt-12 cursor-pointer bg-white hover:bg-slate-100 text-primary border-border md:text-2xl text-lg font-bold sm:h-14 sm:px-10"
      >
        <Link href={config.packageGetStartedLink}>Talk with us</Link>
      </Button>
    </section>
  );
}
