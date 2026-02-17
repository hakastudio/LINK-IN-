
export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon: string;
}

export interface ActionLink {
  id: string;
  title: string;
  url: string;
  isPriority?: boolean;
}

export interface FeaturedCard {
  id: string;
  title: string;
  image: string;
  url: string;
  ctaText?: string;
}

export interface BioData {
  name: string;
  role: string;
  bio: string;
  socials: SocialLink[];
  links: ActionLink[];
  featured?: FeaturedCard[];
}
