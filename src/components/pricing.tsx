import { Check } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { config } from "../../site-config";

export function Pricing() {
  return (
    <section id="pricing" className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
      <div className="flex flex-col gap-3">
        <h2 className="text-center font-heading text-3xl font-semibold sm:text-4xl">
          Simple pricing
        </h2>
      </div>
      <p className="max-w-lg text-center text-lg text-muted-foreground">
        Affordable, Conversion-Focused SEO Packages
      </p>
      <div className="mt-7 grid w-full grid-cols-1 gap-7 lg:grid-cols-3">
        <Card className="relative shadow-lg">
          <CardContent className="divide-y p-0">
            <CardContent className="flex flex-col items-center px-7 py-10">
              <h4 className="font-heading text-2xl font-semibold text-foreground">Basic</h4>
              <p className="mt-2 text-muted-foreground">🚀 Starter SEO Sprint</p>
              <div className="mt-5">
                <span className="font-heading text-5xl font-semibold">€3,000</span>
                <span className="text-sm"> /month</span>
              </div>
              <Button size="lg" asChild className="mt-10 w-full text-lg font-bold">
                <Link href={config.packageGetStartedLink}>Get started</Link>
              </Button>
            </CardContent>
            <ul className="space-y-2 px-7 py-10">
              <li className="flex items-center gap-3">
                <Check size={24} className="text-primary" />
                <span className="text-muted-foreground">Technical Audit</span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={24} className="text-primary" />
                <span className="text-muted-foreground">Topical Map</span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={24} className="text-primary" />
                <span className="text-muted-foreground">Editorial Calendar</span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={24} className="text-primary" />
                <span className="text-muted-foreground">10,000 words (10-15 articles)</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card className="relative border-2 border-primary shadow-lg">
          <CardContent className="divide-y p-0">
            <CardContent className="flex flex-col items-center px-7 py-10">
              <span className="absolute inset-x-0 -top-5 mx-auto w-32 rounded-full bg-primary px-3 py-2 text-center text-sm font-semibold text-primary-foreground shadow-md">
                Most popular
              </span>
              <h4 className="font-heading text-2xl font-semibold text-foreground">Pro</h4>
              <p className="mt-2 text-muted-foreground">🌱 For Growing Startups</p>
              <div className="mt-5">
                <span className="font-heading text-5xl font-semibold">€5,000</span>
                <span className="text-sm"> /month</span>
              </div>
              <Button size="lg" asChild className="mt-10 w-full text-lg font-bold">
                <Link href={config.packageGetStartedLink}>Get started</Link>
              </Button>
            </CardContent>
            <ul className="space-y-2 px-7 py-10">
              <li className="flex items-center gap-3">
                <Check size={24} className="text-primary" />
                <span className="text-muted-foreground">Technical Audit</span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={24} className="text-primary" />
                <span className="text-muted-foreground">Topical Map</span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={24} className="text-primary" />
                <span className="text-muted-foreground">Content Rewriting</span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={24} className="text-primary" />
                <span className="text-muted-foreground">Editorial Calendar</span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={24} className="text-primary" />
                <span className="text-muted-foreground">20,000 words (20-30 articles)</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card className="relative shadow-lg">
          <CardContent className="divide-y p-0">
            <CardContent className="flex flex-col items-center px-7 py-10">
              <h4 className="font-heading text-2xl font-semibold text-foreground">Enterprise</h4>
              <p className="mt-2 text-muted-foreground">💥 For Exploding Startups</p>
              <div className="mt-5">
                <span className="font-heading text-5xl font-semibold">€10,000</span>
                <span className="text-sm"> /month</span>
              </div>
              <Button size="lg" asChild className="mt-10 w-full text-lg font-bold">
                <Link href={config.packageGetStartedLink}>Get started</Link>
              </Button>
            </CardContent>
            <ul className="space-y-2 px-7 py-10">
              <li className="flex items-center gap-3">
                <Check size={24} className="text-primary" />
                <span className="text-muted-foreground">Technical Audit</span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={24} className="text-primary" />
                <span className="text-muted-foreground">Topical Map</span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={24} className="text-primary" />
                <span className="text-muted-foreground">Content Rewriting</span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={24} className="text-primary" />
                <span className="text-muted-foreground">Editorial Calendar</span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={24} className="text-primary" />
                <span className="text-muted-foreground">30,000 words (30-40 articles)</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
