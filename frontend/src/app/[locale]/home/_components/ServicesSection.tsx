import { useTranslations } from "next-intl";

export function ServicesSection() {
  const t = useTranslations("Home.Services");
  const services = [
    {
      number: "01",
      title: t("items.design.title"),
      description: t("items.design.description"),
      tags: ["Figma", "UI/UX", "CJM"],
    },
    {
      number: "02",
      title: t("items.frontend.title"),
      description: t("items.frontend.description"),
      tags: ["Next.js", "Framer Motion"],
    },
    {
      number: "03",
      title: t("items.cms.title"),
      description: t("items.cms.description"),
      tags: ["Sanity.io"],
    },
    {
      number: "04",
      title: t("items.automation.title"),
      description: t("items.automation.description"),
      tags: ["n8n", "Webhooks"],
    },
  ];

  return (
    <div className="py-20">
      <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">
        {t("subtitle")}
      </p>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-16 max-w-2xl leading-tight">
        {t("title")}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service) => (
          <div key={service.number} className="pt-6">
            <p className="text-sm text-muted-foreground mb-3">
              {service.number} <span className="mx-1">|</span> {service.title}
            </p>
            <p className="text-sm text-foreground leading-relaxed mb-4">
              {service.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs border border-border rounded-full px-3 py-1 text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
