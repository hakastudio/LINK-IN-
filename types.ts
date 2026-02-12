
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
  tag: string;
  title: string;
  description: string;
  image: string;
  ctaText: string;
  url: string;
}

export interface BioData {
  name: string;
  role: string;
  bio: string;
  profilePic: string;
  socials: SocialLink[];
  links: ActionLink[];
  featured: FeaturedCard[];
}
