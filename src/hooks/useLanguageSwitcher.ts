import { useLocale } from "next-intl";
import { useTransition } from "react";
import { type Locale, usePathname, useRouter } from "@/i18n/routing";

export function useLanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const [isPending, startTransition] = useTransition();

  const changeLanguage = (nextLocale: Locale) => {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return {
    changeLanguage,
    isPending,
    currentLocale: locale,
  };
}
