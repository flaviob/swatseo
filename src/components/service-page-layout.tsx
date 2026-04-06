import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SocialProof } from "@/components/social-proof";
import { Check, X } from "lucide-react";
import { config } from "../../site-config";
import type { ServiceData } from "@/lib/services";

export function ServicePageLayout({ service }: { service: ServiceData }) {
  return (
    <main>
      {/* Hero */}
      <div className="bg-[#effdfc] relative">
        <Header />
        <section className="container flex flex-col items-center gap-6 pb-16 pt-20 sm:pt-28">
          <div className="flex items-center justify-center rounded-full bg-primary/10 p-4">
            <service.heroIcon className="h-8 w-8 text-primary" />
          </div>
          <h1 className="max-w-4xl text-balance text-center font-heading text-4xl font-bold tracking-tight md:text-6xl">
            {service.title}
          </h1>
          <p className="max-w-2xl text-center text-lg text-primary/60 font-medium font-heading md:text-xl">
            {service.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <Button
              size="lg"
              asChild
              className="h-12 cursor-pointer md:text-xl text-lg font-bold sm:h-14 sm:px-10"
            >
              <Link href={config.packageGetStartedLink}>Book a Call</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="h-12 sm:h-14 sm:px-10">
              <Link href="/#pricing">See Pricing</Link>
            </Button>
          </div>
        </section>
      </div>

      {/* Social proof */}
      <SocialProof />

      {/* Comparison: Common Mistakes vs SWATSEO Way */}
      <section className="bg-primary bg-dot-black/15 py-16 md:py-24">
        <div className="container">
          <h2 className="text-center font-heading text-3xl font-semibold text-white sm:text-4xl mb-12">
            {service.comparisonHeading}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <h3 className="font-heading text-xl font-semibold text-destructive mb-6">
                  Common Mistakes
                </h3>
                <ul className="space-y-4">
                  {service.commonMistakes.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <X size={20} className="text-destructive mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{item.label}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary">
              <CardContent className="p-8">
                <h3 className="font-heading text-xl font-semibold text-primary mb-6">
                  The SWATSEO Way
                </h3>
                <ul className="space-y-4">
                  {service.swatseoWay.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check size={20} className="text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{item.label}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container py-16 md:py-24">
        <h2 className="text-center font-heading text-3xl font-semibold sm:text-4xl mb-4">
          {service.processHeading}
        </h2>
        <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
          A structured, data-driven approach that delivers measurable results.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {service.process.map((step, i) => (
            <Card key={i} className="relative pt-8">
              <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-heading font-bold text-lg">
                {i + 1}
              </div>
              <CardContent className="p-8 pt-4">
                <h3 className="font-heading text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{step.description}</p>
                <ul className="space-y-2">
                  {step.bullets.map((bullet, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <Check size={16} className="text-primary mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Mid CTA */}
      <section className="bg-[#effdfc] py-16">
        <div className="container text-center">
          <h2 className="font-heading text-2xl font-semibold sm:text-3xl max-w-3xl mx-auto mb-8">
            We analyze your current online presence to identify the fastest path to improved search
            visibility and new customer acquisition.
          </h2>
          <Button
            size="lg"
            asChild
            className="h-12 cursor-pointer md:text-xl text-lg font-bold sm:h-14 sm:px-10"
          >
            <Link href={config.packageGetStartedLink}>Book a Call</Link>
          </Button>
        </div>
      </section>

      {/* Differentiators */}
      <section className="container py-16 md:py-24">
        <h2 className="text-center font-heading text-3xl font-semibold sm:text-4xl mb-12">
          {service.differentiatorHeading}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {service.differentiators.map((diff, i) => (
            <Card key={i} className="relative pt-8">
              <div className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-heading font-bold text-sm">
                {i + 1}
              </div>
              <CardContent className="p-6 pt-2">
                <h3 className="font-heading text-lg font-semibold mb-2">{diff.title}</h3>
                <p className="text-sm text-muted-foreground">{diff.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ */}
      {service.faq.length > 0 && (
        <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
          <h2 className="text-center font-heading text-3xl font-semibold sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="mt-6 w-full max-w-3xl divide-y">
            {service.faq.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b-0">
                <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-lg text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      )}

      {/* Final CTA */}
      <div className="bg-primary">
        <section className="container py-24 text-center">
          <h2 className="font-heading text-3xl font-semibold text-primary-foreground sm:text-4xl mb-8">
            Ready to get started? Book your SEO roadmap call today.
          </h2>
          <Button
            size="lg"
            asChild
            className="h-12 cursor-pointer bg-white hover:bg-slate-100 text-primary md:text-xl text-lg font-bold sm:h-14 sm:px-10"
          >
            <Link href={config.packageGetStartedLink}>Book SEO Roadmap Call</Link>
          </Button>
        </section>
      </div>

      <Footer />
    </main>
  );
}
