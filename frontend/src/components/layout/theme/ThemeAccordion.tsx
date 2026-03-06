"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import type { ThemeProps } from "@/types/theme.types";

export function ThemeAccordion({
  lightLabel,
  darkLabel,
  systemLabel,
  toggleTheme,
}: ThemeProps) {
  const { setTheme } = useTheme();

  return (
    <Accordion type="single" collapsible className="w-full mb-10">
      <AccordionItem value="theme" className="border-none">
        <AccordionTrigger className="py-2 hover:no-underline">
          {toggleTheme}
        </AccordionTrigger>
        <AccordionContent>
          <ul className="flex flex-col gap-1 pl-2">
            <li>
              <Button
                variant="ghost"
                className="w-full justify-start gap-3 px-2 font-normal"
                onClick={() => setTheme("light")}
              >
                <Sun className="h-4 w-4" />
                {lightLabel}
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
                className="w-full justify-start gap-3 px-2 font-normal"
                onClick={() => setTheme("dark")}
              >
                <Moon className="h-4 w-4" />
                {darkLabel}
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
                className="w-full justify-start gap-3 px-2 font-normal"
                onClick={() => setTheme("system")}
              >
                <Monitor className="h-4 w-4" />
                {systemLabel}
              </Button>
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
