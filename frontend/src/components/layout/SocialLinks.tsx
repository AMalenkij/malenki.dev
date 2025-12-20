import { ExternalLink } from "@/components/ui/ExternalLink";
import { cn } from "@/lib/utils";
import type { SocialLinksProps } from "@/types/social.links.type";

export function SocialLinks({
  socialLinks,
  title,
  className,
}: SocialLinksProps) {
  return (
    <div className={cn("flex flex-col gap-y-3", className)}>
      <h3 className="font-medium text-sm uppercase tracking-wide opacity-80">
        {title}
      </h3>
      <nav className="flex flex-col gap-y-2" aria-label={title}>
        {socialLinks.map(({ url, label, text }) => (
          <ExternalLink
            key={url}
            href={url}
            aria-label={label}
            className="w-fit px-0 text-base hover:opacity-80 transition-opacity"
          >
            {text}
          </ExternalLink>
        ))}
      </nav>
    </div>
  );
}
