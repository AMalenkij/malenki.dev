import Link from "next/link";
import { useTranslations } from "next-intl";
import { NavBar } from "@/components/layout/NavBar";
import { SocialLinks } from "@/components/layout/SocialLinks";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { DESIGN, LINK_DESIGN, SOCIAL_LINKS } from "@/config/app.content";
import { ROUTES_CONFIG } from "@/constants/routes";

export function Footer() {
  const tNavMenu = useTranslations("Nav");
  const tFooter = useTranslations("Footer");
  const currentYear = new Date().getFullYear();
  const routes = [
    {
      key: "home",
      label: tNavMenu("home"),
      href: ROUTES_CONFIG.HOME,
    },
    {
      key: "terms",
      label: tNavMenu("terms"),
      href: ROUTES_CONFIG.TERMS,
    },
    {
      key: "privacy",
      label: tNavMenu("privacy"),
      href: ROUTES_CONFIG.PRIVACY,
    },
  ];

  return (
    <div
      className="sticky mt-96 h-screen"
      style={{
        clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
      }}
    >
      <footer className="glass-surface fixed bottom-0 h-screen w-full px-6 pb-4 md:pb-6">
        <div className="container mx-auto mt-14 md:mt-32">
          {/* Main content grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-12">
            {/* About section */}
            <div className="hidden space-y-3 md:block md:space-y-4">
              <h3 className="font-semibold text-lg">
                {tFooter("about.title")}
              </h3>
              <p className="text-sm leading-relaxed opacity-90">
                {tFooter("about.description")}
              </p>
            </div>

            {/* Contact section */}
            <div className="space-y-2 md:space-y-4">
              <h3 className="font-medium text-sm uppercase tracking-wide opacity-80">
                {tFooter("contact.title")}
              </h3>
              <div className="space-y-2 px-2">
                <Link
                  href={`mailto:${tFooter("contact.email")}`}
                  className="block text-sm transition-opacity hover:opacity-80"
                >
                  {tFooter("contact.email")}
                </Link>
                <Link
                  href={`tel:${tFooter("contact.phone").replace(/\s/g, "")}`}
                  className="block text-sm transition-opacity hover:opacity-80"
                >
                  {tFooter("contact.phone")}
                </Link>
                <address className="text-sm not-italic opacity-90 whitespace-pre-line">
                  {tFooter("contact.address.line1")}
                  {tFooter("contact.address.line2")}
                </address>
              </div>
            </div>

            <SocialLinks
              title={tFooter("social.title")}
              socialLinks={SOCIAL_LINKS}
            />

            {/* Navigation section */}
            <div className="space-y-2 md:space-y-4">
              <h3 className="font-medium text-sm uppercase tracking-wide opacity-80">
                {tFooter("navigation.title")}
              </h3>
              <NavBar routes={routes} className="flex flex-col" />
            </div>
          </div>

          {/* Divider */}
          <div className="my-4 h-px bg-border/20 md:my-8 md:mt-20" />

          {/* Copyright section */}
          <div className="flex flex-col items-center justify-between gap-4 text-sm md:flex-row md:gap-2">
            <p className="opacity-90">
              &copy; {currentYear} {tFooter("copyright.text")}
            </p>
            <ExternalLink href={LINK_DESIGN}>{DESIGN}</ExternalLink>
          </div>
        </div>
      </footer>
    </div>
  );
}
