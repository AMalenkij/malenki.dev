import { setRequestLocale } from "next-intl/server";
import { Suspense } from "react";
import { Section } from "@/components/layout/Section";
import DiagonalLines from "@/components/ui/DiagonalLines";
import { ContactSection } from "./_components/ContactSection";
import { FeaturedProjects } from "./_components/FeaturedProjects";
import { HeroSection } from "./_components/HeroSection";
import { ServicesSection } from "./_components/ServicesSection";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <Section className="relative justify-between pt-16 pb-8 h-lg mt-22">
        <HeroSection />
        <Suspense
          fallback={
            <div className="mt-8 h-64 w-full animate-pulse rounded-lg bg-muted"></div>
          }
        >
          <FeaturedProjects />
        </Suspense>
        <ServicesSection />
        <div className="relative mt-24">
          <DiagonalLines
            spacing={16}
            color="currentColor"
            className="text-foreground opacity-20 absolute inset-0 z-0"
            maskImage="radial-gradient(circle at right, black 0%, transparent 60%)"
          ></DiagonalLines>
          <ContactSection />
        </div>
      </Section>
    </main>
  );
}
