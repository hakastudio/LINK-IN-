
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

// Add FeaturedCard interface to fix the import error in FeaturedSlider.tsx
export interface FeaturedCard {
  id: string;
  title: string;
  description: string;
  image: string;
  tag: string;
  url: string;
  ctaText: string;
}

export interface BioData {
  name: string;
  role: string;
  bio: string;
  profilePic: string;
  socials: SocialLink[];
  links: ActionLink[];
  featured?: FeaturedCard[];
}
