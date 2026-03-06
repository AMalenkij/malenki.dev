"use client";

import { AlignLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface Section {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  sections: Section[];
}

export function TableOfContents({ sections }: TableOfContentsProps) {
  const [activeSection, setActiveSection] = useState<string | null>(
    sections[0]?.id || null,
  );

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = sections[0]?.id || null;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // 250px offset to accommodate header and comfortable reading zone
          if (rect.top <= 250) {
            currentSection = section.id;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  return (
    <div className="sticky top-24 hidden h-fit lg:block">
      <span className="flex items-center gap-2 text-sm font-semibold mb-4 text-foreground">
        <AlignLeft className="h-4 w-4" />
        On this page
      </span>
      <nav className="text-sm border-l-2 border-border/50">
        <ul className="flex flex-col">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={cn(
                  "block py-2 pl-4 -ml-0.5 border-l-2 transition-colors duration-200",
                  activeSection === section.id
                    ? "font-medium text-primary border-primary"
                    : "text-muted-foreground border-transparent hover:text-primary hover:border-border",
                )}
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
