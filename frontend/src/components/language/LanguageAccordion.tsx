"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useLanguageSwitcher } from "@/hooks/useLanguageSwitcher";
import type { Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import type { LanguageProps } from "@/types/language.types";

export function LanguageAccordion({
  changeLanguageLabel,
  englishLabel,
  polishLabel,
  ukrainianLabel,
}: LanguageProps) {
  const { changeLanguage, isPending, currentLocale } = useLanguageSwitcher();

  const renderItem = (locale: Locale, label: string, flag: string) => (
    <li>
      <Button
        variant="ghost"
        disabled={isPending}
        onClick={() => changeLanguage(locale)}
        className={cn(
          "w-full justify-start pl-2 font-normal",
          currentLocale === locale &&
            "bg-accent text-accent-foreground font-medium",
        )}
      >
        <span className="mr-2 text-lg">{flag}</span>
        {label}
      </Button>
    </li>
  );

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="language" className="border-none">
        <AccordionTrigger className="py-2 hover:no-underline">
          {changeLanguageLabel}
        </AccordionTrigger>
        <AccordionContent>
          <ul className="flex flex-col gap-1 pl-2 mt-1">
            {renderItem("en", englishLabel, "🇺🇸")}
            {renderItem("pl", polishLabel, "🇵🇱")}
            {renderItem("ua", ukrainianLabel, "🇺🇦")}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
