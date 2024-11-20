import { CtaSection } from "@/components/cta-section";
import { Faq } from "@/components/faq";
import { FeatureWithImageLeft } from "@/components/feature-image-left";
import { FeatureWithImageLeft2 } from "@/components/feature-image-left-2";
import { FeatureWithImageRight } from "@/components/feature-image-right";
import { FeaturesIntro } from "@/components/features-intro";
import { FeaturesSection } from "@/components/features-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Pricing } from "@/components/pricing";
import { SocialProof } from "@/components/social-proof";
import { Testimonials } from "@/components/testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grow traffic and revenue with SEO Content | SwatSEO",
  description:
    "Increasing your traffic and revenue through data-driven SEO is easy with SwatSEO's our tailored conversion-focused strategy.",
  openGraph: {
    title: "Grow traffic and revenue with SEO Content | SwatSEO",
    description:
      "Increasing your traffic and revenue through data-driven SEO is easy with SwatSEO's our tailored conversion-focused strategy.",
    images: ["https://swatseo.net/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://swatseo.net",
  },
};

export default function Home() {
  return (
    <main>
      <div className="bg-[#effdfc] relative">
        <Header />
        <Hero />
      </div>
      <SocialProof />
      <HowItWorks />
      <div className="bg-[#effdfc] bg-opacity-50">
        <FeaturesIntro />
        <FeaturesSection />
        <FeatureWithImageLeft />
        <FeatureWithImageRight />
        <FeatureWithImageLeft2 />
      </div>
      <Testimonials />
      <div className="bg-[#effdfc]">
        <Pricing />
      </div>
      <Faq />
      <div className="bg-primary">
        <CtaSection />
      </div>
      <Footer />
    </main>
  );
}
