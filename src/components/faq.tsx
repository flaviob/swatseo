import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Faq() {
  return (
    <section id="faq" className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
      <div className="flex flex-col gap-3">
        <h2 className="text-center font-heading text-3xl font-semibold sm:text-4xl">
          Frequently Asked Questions
        </h2>
      </div>
      <p className="max-w-lg text-center text-lg text-muted-foreground">
        For any other questions, please feel free to contact us.
      </p>
      <Accordion type="single" collapsible className="mt-6 w-full max-w-3xl divide-y">
        <AccordionItem value="item-0" className="border-b-0">
          <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
            How does SEO content contribute to traffic growth and conversions?
          </AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground">
            Yes, a high-quality SEO strategy that’s tailored to your business’s unique needs can
            help you rank for critical keywords on the first page of SERPs.
            <br />
            <br />
            With more eyes on your website and product, SEO can help you connect with your ideal
            customers and convert them into paying clients.
            <br />
            <br />
            More importantly, a tailored SEO strategy paired with authoritative content creation can
            position you as a leader in your industry. This makes it easier to ensure you get a
            steady stream of high-quality leads for your business.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-1" className="border-b-0">
          <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
            What makes SWAT SEO better than other SEO agencies?
          </AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground">
            While there are dozens of SEO agencies out there, most of these focus on technical SEO
            and often use techniques like link buying and keyword stuffing that can hurt your
            business eventually rather than help it.
            <br />
            <br />
            Most of these agencies have no idea what your readers want and are ill-equipped to
            create high-quality content for your business.
            <br />
            <br />
            SWAT SEO combines quality content that readers love with tailored strategy, technical
            SEO, and optimization techniques that help you grow your traffic and make more money.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="border-b-0">
          <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
            How long does it take to see results from SEO?
          </AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground">
            There’s no one-size-fits-all answer when it comes to SEO. The timeline for successful
            results varies based on many factors, such as the nature of your business, your
            industry, your current SEO efforts, and more.
            <br />
            <br />
            While you’ll start seeing results from some strategies, other strategies may need more
            time and effort. SEO is not a one-off, quick process. It involves ongoing optimization
            but delivers substantial results in the long-term.
            <br />
            <br />
            Don’t expect easy and quick wins, but the impact of your SEO efforts will compound over
            time, and the long-term results will exceed your expectations.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="border-b-0">
          <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
            Why should I hire SWAT SEO instead of an in-house team?
          </AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground">
            To execute a seamless SEO strategy and content creation, you’ll need to find, train, and
            hire a team of SEO strategists, project managers, editors, and writers. The expense and
            the time involved can be quite staggering.
            <br />
            <br />
            With SWAT SEO, you can get access to the entire team at the cost of one hire. You can
            start publishing and seeing results in a simpler and more cost-effective way with SWAT
            SEO.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4" className="border-b-0">
          <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
            How does SWAT SEO combine quality content with SEO strategy?
          </AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground">
            SWAT SEO combines quality content that readers love with tailored strategy, technical
            SEO, and optimization techniques that help you grow your traffic and make more money.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
