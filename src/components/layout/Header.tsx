import { useTranslations } from "next-intl";
import { LanguageDropdown } from "@/components/language/LanguageDropdown";
import { NavBar } from "@/components/layout/NavBar";
import { ThemeDropdown } from "@/components/theme/ThemeDropdown";
import { ROUTES_CONFIG } from "@/constants/routes";

export function Header() {
  const tNavMenu = useTranslations("Nav");
  const tLanguageToggle = useTranslations("Header.LanguageToggle");
  const tModeToggle = useTranslations("Header.ModeToggle");

  const routes = [
    {
      key: "home",
      label: tNavMenu("home"),
      href: ROUTES_CONFIG.HOME,
    },
  ];

  return (
    <header className="container sticky inset-x-1 top-0 z-50 mx-auto flex items-center justify-between px-2 py-2 md:px-0 md:py-4">
      {/*<Logo />*/}
      {"Logo"}
      <nav className="hidden items-center space-x-2 md:flex">
        <NavBar routes={routes} className="hidden md:flex" />
        <div className="flex items-center space-x-2 pl-4">
          <ThemeDropdown
            lightLabel={tModeToggle("lightLabel")}
            darkLabel={tModeToggle("darkLabel")}
            systemLabel={tModeToggle("systemLabel")}
            toggleTheme={tModeToggle("toggleTheme")}
          />
          <LanguageDropdown
            englishLabel={tLanguageToggle("english")}
            polishLabel={tLanguageToggle("polski")}
            ukrainianLabel={tLanguageToggle("ukrainian")}
            changeLanguageLabel={tLanguageToggle("changeLanguage")}
          />
        </div>
      </nav>
    </header>
  );
}
