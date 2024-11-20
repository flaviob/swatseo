import { Check, FileTextIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { config } from "../../site-config";

export function FeatureWithImageRight() {
  return (
    <section className="container flex flex-col gap-10 py-24 md:flex-row md:items-center md:gap-24">
      <div className="flex flex-1 flex-col items-start gap-5 relative">
        <div className="flex flex-col gap-3">
          <span className="text-left font-bold uppercase text-primary">
            <FileTextIcon className="size-10 text-primary" />
          </span>
          <h2 className="text-left font-heading text-3xl font-semibold sm:text-4xl">
            Managed-For-You Content System
          </h2>
        </div>
        <p className="max-w-lg text-left text-lg text-muted-foreground">
          It takes hours of work to find the right keywords and publish quality content
          consistently. Our team can manage the entire process for you so you can scale smoothly.
        </p>
        <ul className="mt-4 space-y-3">
          <li className="flex items-center gap-2">
            <Check className="size-5 text-primary" />
            <span className="text-muted-foreground">
              Finding the right keywords + publishing quality content takes hours of work.
            </span>
          </li>
          <li className="flex items-center gap-2">
            <Check className="size-5 text-primary" />
            <span className="text-muted-foreground">
              We scale the entire process smoothly for you.
            </span>
          </li>
          <li className="flex items-center gap-2">
            <Check className="size-5 text-primary" />
            <span className="text-muted-foreground">
              Our team of experts manage the entire process for you.
            </span>
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
      <div className="relative flex-1">
        <div className="md:perspective-1600 md:scale-150">
          <div className="md:transform md:-rotate-y-30">
            <Image
              src="/images/feature-3.webp"
              alt="SaaS Dashboard"
              width={713}
              height={497.7}
              className="rounded-xl border border-border shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
