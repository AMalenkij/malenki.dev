"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguageSwitcher } from "@/hooks/useLanguageSwitcher";
import type { LanguageProps } from "@/types/language.types";

export function LanguageDropdown({
  englishLabel,
  polishLabel,
  ukrainianLabel,
  changeLanguageLabel,
}: LanguageProps) {
  const { changeLanguage, isPending, currentLocale } = useLanguageSwitcher();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          disabled={isPending}
          className="h-9 w-9 uppercase"
        >
          {currentLocale}
          <span className="sr-only">{changeLanguageLabel}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => changeLanguage("en")}
          disabled={isPending}
        >
          🇺🇸 {englishLabel}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => changeLanguage("pl")}
          disabled={isPending}
        >
          🇵🇱 {polishLabel}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => changeLanguage("ua")}
          disabled={isPending}
        >
          🇺🇦 {ukrainianLabel}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
