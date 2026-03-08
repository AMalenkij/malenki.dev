import { useTranslations } from "next-intl";
import { TableOfContents } from "@/components/common/table-of-contents";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ROUTES_CONFIG } from "@/config/routes";

export default function TermsPage() {
  const t = useTranslations("Terms");
  const tNav = useTranslations("Nav");
  const sectionsData = t.raw("sections") as Array<{
    id: string;
    title: string;
    content: string;
  }>;

  return (
    <section className="py-32">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="relative grid-cols-3 gap-20 lg:grid">
          <div className="lg:col-span-2">
            <div className="mb-12 lg:mb-20">
              <Breadcrumb className="mb-6 lg:mb-10">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href={ROUTES_CONFIG.HOME}>
                      {tNav("home")}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>{t("header.title")}</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <h1 className="mt-6 lg:mt-10 text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
                {t("header.title")}
              </h1>
              <p className="mt-4 text-xl text-muted-foreground">
                {t("header.lastUpdate")}
              </p>
            </div>
            {sectionsData.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="prose mb-12 lg:mb-16 dark:prose-invert text-foreground max-w-none"
              >
                <h2 className="text-2xl font-bold mb-6">{section.title}</h2>
                <div
                  className="text-muted-foreground text-lg leading-relaxed whitespace-pre-wrap space-y-6"
                  dangerouslySetInnerHTML={{
                    __html: section.content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  }}
                />
              </section>
            ))}
          </div>
          <TableOfContents sections={sectionsData} />
        </div>
      </div>
    </section>
  );
}
