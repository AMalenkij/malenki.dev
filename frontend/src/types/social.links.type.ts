export type SocialLinkItem = {
  url: string;
  label: string;
  text: string;
};

export type SocialLinksProps = {
  title: string;
  className?: string;
  socialLinks: SocialLinkItem[];
};
