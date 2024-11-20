import { Check, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { config } from "../../site-config";

export function FeatureWithImageLeft() {
  return (
    <section className="container flex flex-col gap-10 py-24 md:flex-row md:items-center md:gap-24">
      <div className="relative flex-1">
        <div className="md:perspective-1600 md:scale-150">
          <div className="md:transform md:rotate-y-30">
            <Image
              src="/images/feature-2.webp"
              alt="SaaS Dashboard"
              width={713}
              height={497.7}
              className="rounded-xl border border-border shadow-lg"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col items-start gap-5 relative">
        <div className="flex flex-col gap-3">
          <span className="text-left font-bold uppercase text-primary">
            <Users className="size-10 text-primary" />
          </span>
          <h2 className="text-left font-heading text-3xl font-semibold sm:text-4xl">
            Access to an Entire Team for the Cost of One Full-Time Hire
          </h2>
        </div>
        <p className="max-w-lg text-left text-lg text-muted-foreground">
          Hiring in-house SEO strategists, editors, and content writers can take a huge chunk off of
          your profits. When you hire us, you get immediate access to an entire team of talented
          individuals for a fraction of the cost.
        </p>
        <ul className="mt-4 space-y-3">
          <li className="flex items-center gap-2">
            <Check className="size-5 text-primary" />
            <span className="text-muted-foreground">Hiring in-house SEO team can be expensive</span>
          </li>
          <li className="flex items-center gap-2">
            <Check className="size-5 text-primary" />
            <span className="text-muted-foreground">
              Hire us and get access to an entire team of talented individuals{" "}
            </span>
          </li>
          <li className="flex items-center gap-2">
            <Check className="size-5 text-primary" />
            <span className="text-muted-foreground">All for a fraction of the cost</span>
          </li>
        </ul>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <Button size="lg" variant="outline" asChild>
            <Link
              href="#faq"
              className="h-12 cursor-pointer md:text-xl text-base border-border md:px-9"
            >
              Learn More
            </Link>
          </Button>
          <Button size="lg" asChild>
            <Link
              href={config.packageGetStartedLink}
              className="h-12 cursor-pointer md:text-xl text-base md:px-9"
            >
              Book a call
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
