import { useTranslations } from "next-intl";

export function ContactSection() {
  const t = useTranslations("Home.Contact");
  return (
    <div className=" p-4 z-50">
      <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">
        {t("subtitle")}
      </p>
      <h2 className="text-3xl md:text-4xl lg:text-6xl font-light text-foreground mb-8 leading-tight">
        {t("title")}
      </h2>
      <a
        href="mailto:itotttoro@gmail.com"
        className="text-2xl font-light text-foreground/80 underline underline-offset-4 decoration-border/50 hover:text-foreground hover:decoration-foreground/50 transition-all duration-500"
      >
        itotttoro@gmail.com
      </a>
    </div>
  );
}
