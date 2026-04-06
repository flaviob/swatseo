import { Metadata } from "next";
import { Globe } from "lucide-react";
import { ServicePageLayout } from "@/components/service-page-layout";
import type { ServiceData } from "@/lib/services";

const directorySubmission: ServiceData = {
  slug: "directory-submission",
  title: "Directory Submission",
  subtitle:
    "Our Directory Submission service builds your online presence by getting your business listed on high-authority directories, boosting local SEO, brand visibility, and referral traffic.",
  seoTitle: "Directory Submission Service | SwatSEO",
  seoDescription:
    "Get your business listed on high-authority directories to boost local SEO, build quality backlinks, and increase brand visibility with SwatSEO's managed directory submission service.",
  heroIcon: Globe,
  comparisonHeading: "Why Most Directory Submissions Fail",
  commonMistakes: [
    { label: "Submitting to low-quality, spammy directories" },
    { label: "Using the same NAP (Name, Address, Phone) inconsistently" },
    { label: "Ignoring niche and industry-specific directories" },
    { label: "Submitting once and never updating listings" },
    { label: "No strategy for anchor text or categories" },
    { label: "Treating all directories the same regardless of authority" },
    { label: "Skipping citation audits for existing listings" },
  ],
  swatseoWay: [
    { label: "Hand-picked, high-authority directories only" },
    { label: "Consistent NAP data across all listings" },
    { label: "Industry-specific and geo-targeted directory selection" },
    { label: "Ongoing monitoring and listing updates" },
    { label: "Strategic category and anchor text optimization" },
    { label: "Authority-weighted directory prioritization" },
    { label: "Full citation audit before new submissions" },
  ],
  processHeading: "Our Directory Submission Process",
  process: [
    {
      title: "Citation Audit",
      description:
        "We start by auditing your existing online citations to find inconsistencies, duplicates, and missed opportunities.",
      bullets: [
        "NAP consistency check across the web",
        "Duplicate listing identification",
        "Competitor citation gap analysis",
        "Industry directory opportunity mapping",
      ],
    },
    {
      title: "Strategic Submission",
      description:
        "We create and submit optimized listings to directories selected for relevance, authority, and SEO value.",
      bullets: [
        "High-DA directory targeting",
        "Optimized business descriptions",
        "Category and geo-targeting alignment",
        "Rich media and profile completion",
      ],
    },
    {
      title: "Monitoring & Reporting",
      description:
        "We track listing performance, fix issues, and keep your citations accurate as your business evolves.",
      bullets: [
        "Live listing verification",
        "Performance tracking per directory",
        "Quarterly citation refresh",
        "Detailed backlink impact reporting",
      ],
    },
  ],
  differentiatorHeading: "What Makes Our Directory Submission Different",
  differentiators: [
    {
      title: "Quality Over Quantity",
      description:
        "We only submit to directories that pass our authority and relevance criteria — no spam, no filler.",
    },
    {
      title: "Local SEO Focus",
      description:
        "Every submission is optimized for local search signals, helping you rank in your target geography.",
    },
    {
      title: "Niche Targeting",
      description:
        "We identify and prioritize industry-specific directories that your competitors are missing.",
    },
    {
      title: "Ongoing Management",
      description:
        "Listings aren't set-and-forget. We monitor, update, and maintain your citations over time.",
    },
  ],
  faq: [
    {
      question: "What types of directories do you submit to?",
      answer:
        "We submit to a mix of general high-authority directories (like Google Business Profile, Bing Places, and Apple Maps), industry-specific directories relevant to your niche, and local/regional directories that strengthen your local SEO signals. Every directory is vetted for domain authority and relevance before submission.",
    },
    {
      question: "How many directories will my business be listed on?",
      answer:
        "The number depends on your industry and location, but we typically target 50-150 high-quality directories. We prioritize quality and relevance over sheer volume — a listing on 50 authoritative directories outperforms 500 low-quality ones.",
    },
    {
      question: "How long does it take to see results from directory submissions?",
      answer:
        "Most directories approve listings within 1-4 weeks. You can expect to see improvements in local search visibility within 2-3 months as search engines crawl and index your new citations. Backlink benefits compound over time as directory authority passes through to your site.",
    },
    {
      question: "Do I need directory submission if I already have a Google Business Profile?",
      answer:
        "Google Business Profile is just one piece of the puzzle. Search engines cross-reference your business information across many sources. Consistent citations across multiple authoritative directories strengthen your local SEO signals and help Google trust your business data, which directly improves your local pack rankings.",
    },
    {
      question: "Will you handle existing incorrect listings?",
      answer:
        "Yes. Our process starts with a full citation audit. We identify and correct inconsistent, duplicate, or outdated listings before creating new ones. Clean, consistent citations are the foundation of effective directory submission.",
    },
  ],
};

export const metadata: Metadata = {
  title: directorySubmission.seoTitle,
  description: directorySubmission.seoDescription,
  openGraph: {
    title: directorySubmission.seoTitle,
    description: directorySubmission.seoDescription,
    images: ["https://swatseo.net/opengraph-image.png"],
  },
  alternates: {
    canonical: `https://swatseo.net/${directorySubmission.slug}/`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DirectorySubmissionPage() {
  return <ServicePageLayout service={directorySubmission} />;
}
