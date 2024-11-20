import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ArrowUp, MousePointer, Search, TrendingUp } from "lucide-react";
import { config } from "../../site-config";
import { ContainerScroll } from "./container-scroll-animation";

const Chip: React.FC<{ icon: React.ReactNode; text: string; style: React.CSSProperties }> = ({
  icon,
  text,
  style,
}) => (
  <div
    className="hidden md:flex border items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm"
    style={style}
  >
    {icon}
    <span>{text}</span>
  </div>
);

export function Hero() {
  return (
    <section className="bg-dot-black/[0.2] w-screen flex flex-col items-center gap-8 pt-20 sm:gap-10 relative">
      {/* Chips */}
      <div className="absolute inset-0 text-muted-foreground font-normal overflow-hidden pointer-events-none">
        <Chip
          icon={<Search className="w-4 h-4 text-blue-400" />}
          text="Top 10 search rankings"
          style={{ position: "absolute", top: "5%", left: "6%" }}
        />
        <Chip
          icon={<ArrowUp className="w-4 h-4 text-green-400" />}
          text="255% increase in traffic "
          style={{ position: "absolute", top: "35%", right: "6%" }}
        />
        <Chip
          icon={<TrendingUp className="w-4 h-4 text-green-400" />}
          text="75% increase in keywords on top 10"
          style={{ position: "absolute", top: "5%", right: "8%" }}
        />
        <Chip
          icon={<MousePointer className="w-4 h-4 text-purple-400" />}
          text="52% more clicks"
          style={{ position: "absolute", top: "35%", left: "6%" }}
        />
      </div>

      <h1 className="container max-w-5xl md:pt-24 pt-12 text-balance text-center font-heading text-4xl font-bold md:text-6xl sm:leading-none tracking-[0.4px]">
        <div>
          <div>
            Grow traffic and <span className="text-background bg-primary px-2">revenue</span> with
            SEO Content&nbsp;
          </div>
        </div>
      </h1>
      <p className="container max-w-3xl text-center font-medium font-heading text-primary/60 text-base sm:text-lg md:text-2xl">
        Increasing your traffic and revenue through data-driven SEO is easy with our tailored
        conversion-focused strategy.
      </p>
      <div>
        <Button
          size="lg"
          asChild
          className="h-12 cursor-pointer border-border md:text-2xl text-lg font-bold sm:h-14 sm:px-10"
        >
          <Link href={config.packageGetStartedLink}>Book a Call</Link>
        </Button>
      </div>
      <div className="flex flex-col overflow-hidden w-full">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="md:text-4xl text-lg font-semibold">Our client results</h1>
            </>
          }
        >
          <Image
            src={`/images/seo-results.webp`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-contain h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>
    </section>
  );
}
