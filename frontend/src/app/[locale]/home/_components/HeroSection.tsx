import { getTranslations } from "next-intl/server";
import DiagonalLines from "@/components/ui/DiagonalLines";

export async function HeroSection() {
  const t = await getTranslations("Home");

  // Full Masked Diagonal Background
  // Diagonal lines form the background, but they are masked by a gradient that follows the hover
  // or just a radial gradient mask. Gives a technical, blueprint feel.
  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center relative overflow-hidden bg-background group cursor-crosshair">
      {/* Diagonal Lines Background with Mask */}
      <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity duration-1000 pointer-events-none">
        <DiagonalLines
          spacing={16}
          color="currentColor"
          className="text-foreground"
          maskImage="radial-gradient(circle at center, black 0%, transparent 60%)"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
        <div className="mb-12">
          <span className="inline-flex items-center gap-4 border-b border-foreground/30 pb-2 text-[10px] font-mono tracking-[0.5em] uppercase text-foreground/70 group-hover:text-foreground transition-colors duration-700">
            {t("hero.badge")}
          </span>
        </div>

        <h1 className="font-sans flex flex-col">
          <span className="block text-[clamp(4rem,10vw,12rem)] font-light leading-[0.9] tracking-tighter text-foreground bg-background px-4 z-10">
            {t("hero.line1")}
          </span>
          <span className="block text-[clamp(4.5rem,10vw,13rem)] font-black leading-[0.9] tracking-tighter text-transparent bg-clip-text bg-foreground relative mix-blend-difference group-hover:scale-105 transition-transform duration-1500 ease-out">
            {t("hero.line2")}
          </span>
        </h1>

        <p className="mt-12 max-w-lg text-sm font-light leading-relaxed text-foreground/70 bg-background/80 backdrop-blur-sm p-4 rounded-xl border border-border/40">
          {t("description")}
        </p>
      </div>
    </div>
  );
}
