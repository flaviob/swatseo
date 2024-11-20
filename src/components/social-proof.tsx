import { InfiniteMovingCards } from "./infinite-moving-cards";

const logos = [
  {
    image: "/images/customer-logo-1.webp",
  },
  {
    image: "/images/customer-logo-2.svg",
  },
  {
    image: "/images/customer-logo-3.webp",
  },
  {
    image: "/images/customer-logo-4.svg",
  },
  {
    image: "/images/customer-logo-5.svg",
  },
  {
    image: "/images/customer-logo-6.svg",
  },
  {
    image: "/images/customer-logo-7.svg",
  },
  {
    image: "/images/customer-logo-8.svg",
  },
];

export function SocialProof() {
  return (
    <section className="container flex flex-col items-center gap-10 py-12">
      <h2 className="text-center text-lg md:text-4xl font-semibold leading-8">
        Trusted by the best startups
      </h2>
      <InfiniteMovingCards items={logos} direction="right" speed="fast" />
    </section>
  );
}
