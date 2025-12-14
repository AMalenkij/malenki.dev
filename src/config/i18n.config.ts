export const locales = ["en", "pl", "ua"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const labels: Record<Locale, string> = {
  en: "English",
  pl: "Polski",
  ua: "Українська",
};
