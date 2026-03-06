import { useTranslations } from "next-intl";
import { LanguageAccordion } from "@/components/layout/language/LanguageAccordion";
import { LanguageDropdown } from "@/components/layout/language/LanguageDropdown";
import { MobileNavSheet } from "@/components/layout/MobileNavSheet";
import { NavBar } from "@/components/layout/NavBar";
import { SocialLinks } from "@/components/layout/SocialLinks";
import { ThemeAccordion } from "@/components/layout/theme/ThemeAccordion";
import { ThemeDropdown } from "@/components/layout/theme/ThemeDropdown";
import {
	SheetDescription,
	SheetHeader,
	SheetTitle,
} from "@/components/ui/sheet";
import { SOCIAL_LINKS } from "@/config/app.content";
import { ROUTES_CONFIG } from "@/config/routes";

export function Header() {
	const tNavMenu = useTranslations("Nav");
	const tLanguageToggle = useTranslations("Header.LanguageToggle");
	const tModeToggle = useTranslations("Header.ModeToggle");
	const tMobileMenu = useTranslations("Header.MobileMenu");
	const tFooter = useTranslations("Footer");

	const routes = [
		{
			key: "home",
			label: tNavMenu("home"),
			href: ROUTES_CONFIG.HOME,
		},
		{
			key: "services",
			label: tNavMenu("services"),
			href: ROUTES_CONFIG.SERVICES,
		},
		{
			key: "showcase",
			label: tNavMenu("showcase"),
			href: ROUTES_CONFIG.SHOWCASE,
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
			{/* === MOBILE NAVIGATION === */}
			<MobileNavSheet triggerLabel={tMobileMenu("ToggleMenu")}>
				<SheetHeader className="text-left mb-6">
					<SheetTitle>
						{/*<Logo />*/}
						{"Logo"}
					</SheetTitle>
					<SheetDescription>{tMobileMenu("SheetDescription")}</SheetDescription>
				</SheetHeader>

				<div className="flex flex-col gap-6">
					<div className="flex flex-col gap-2">
						<LanguageAccordion
							englishLabel={tLanguageToggle("english")}
							polishLabel={tLanguageToggle("polski")}
							ukrainianLabel={tLanguageToggle("ukrainian")}
							changeLanguageLabel={tLanguageToggle("changeLanguage")}
						/>
						<ThemeAccordion
							lightLabel={tModeToggle("lightLabel")}
							darkLabel={tModeToggle("darkLabel")}
							systemLabel={tModeToggle("systemLabel")}
							toggleTheme={tModeToggle("toggleTheme")}
						/>
					</div>

					{/* Navigation */}
					<div className="space-y-4">
						<h3 className="text-sm font-medium uppercase text-muted-foreground">
							{tFooter("navigation.title")}
						</h3>
						<NavBar
							routes={routes}
							className="flex flex-col items-start gap-4"
						/>
					</div>
					<SocialLinks
						title={tFooter("social.title")}
						socialLinks={SOCIAL_LINKS}
					/>
				</div>
			</MobileNavSheet>
		</header>
	);
}
