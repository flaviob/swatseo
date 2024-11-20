import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";

export function Testimonials() {
  return (
    <section className="bg-primary flex flex-col items-center gap-6 py-24 sm:gap-7">
      <div className="flex  flex-col gap-3">
        <h2 className="text-center font-heading text-3xl text-white font-semibold sm:text-4xl">
          What our clients say about us
        </h2>
      </div>
      <p className="max-w-lg container text-center text-white/90 text-lg">
        Here's what founders of top startups around the internet are saying about us.
      </p>
      <div className="container flex flex-col md:flex-row mt-1 gap-7">
        <Card className="mt-7 inline-block break-inside-avoid shadow-lg">
          <CardContent className="flex flex-col items-start gap-4 divide-y p-7">
            <p className="text-foreground text-left">
              “Very great experience overall. The communication is great and we feel you really care
              about our business, which is rare.”
            </p>
            <div className="flex w-full items-center gap-4 pt-4">
              <div className="relative size-10">
                <Image
                  src="/images/testimonial-tibo.webp"
                  alt="Picture"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold leading-none text-foreground">Tibo</p>
                <p className="mt-1 leading-none text-muted-foreground">
                  Co-Founder of tweethunter.io
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="mt-7 inline-block break-inside-avoid shadow-lg">
          <CardContent className="flex flex-col items-start gap-4 divide-y p-7">
            <p className="text-foreground text-left">
              “The team works hard to actively listen to our needs, achieve our agreed-upon goals
              and follow-up in a timely manner. We couldn't be more pleased.”
            </p>
            <div className="flex w-full items-center gap-4 pt-4">
              <div className="relative size-10">
                <Image
                  src="/images/testimonial-gabriella.webp"
                  alt="Picture"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold leading-none text-foreground">Gabriella Opaz</p>
                <p className="mt-1 leading-none text-muted-foreground">
                  Co-Founder of catavino.net
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
