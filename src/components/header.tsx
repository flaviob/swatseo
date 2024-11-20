import Link from "next/link";

import { MobileNavbar } from "@/components/mobile-navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { config } from "../../site-config";
import { FloatingNav } from "./floating-navbar";

export function Header() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Services",
      link: "#services",
    },
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "Pricing",
      link: "#pricing",
    },
  ];
  return (
    <header className="container flex items-center justify-between gap-10 py-4">
      <FloatingNav navItems={navItems} />
      <Link href="/" className="flex flex-1 items-center gap-3">
        <Image src="/images/logo.png" alt="logo" width={24} height={24} />
        <span className="font-heading text-xl font-bold">{config.name}</span>
      </Link>
      <nav className="hidden flex-1 items-center justify-center gap-10 md:flex">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="flex cursor-pointer items-center text-lg font-medium text-muted-foreground transition-colors hover:text-foreground sm:text-sm"
          >
            {item.name}
          </Link>
        ))}
      </nav>
      <div className="hidden flex-1 items-center justify-end gap-2 md:flex">
        <Button asChild>
          <Link href={config.packageGetStartedLink} className="cursor-pointer">
            Book a Call
          </Link>
        </Button>
      </div>
      <MobileNavbar>
        <div className="container rounded-b-lg bg-background py-4 text-foreground shadow-xl">
          <nav className="flex flex-col gap-1 pt-2">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="flex w-full cursor-pointer items-center rounded-md p-2 font-medium text-muted-foreground hover:text-foreground"
              >
                {item.name}
              </Link>
            ))}

            <Button asChild size="lg" className="mt-2 w-full">
              <Link href={config.packageGetStartedLink} className="cursor-pointer">
                Book a Call
              </Link>
            </Button>
          </nav>
        </div>
      </MobileNavbar>
    </header>
  );
}
