
import { BioData } from './types';

export const COLORS = {
  blue: '#0035C1',
  orange: '#FF7300',
  yellow: '#FECE00',
  white: '#FFFFFF',
  background: '#FECE00',
};

export const MOCK_DATA: BioData = {
  name: "Heri Kurniawan",
  role: "Powered by caffeine and creativity",
  bio: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
  profilePic: "https://i.postimg.cc/CLqKRhfp/1000279212-jpg-copy.jpg", 
  socials: [
    { id: '1', platform: 'TikTok', url: 'https://www.tiktok.com/@heriikurniawann_?is_from_webapp=1&sender_device=pc', icon: 'music' },
    { id: '2', platform: 'Instagram', url: 'https://www.instagram.com/heriikurniawann', icon: 'instagram' },
    { id: '3', platform: 'Pinterest', url: 'https://id.pinterest.com/heriikurniawann_', icon: 'target' },
    { id: '4', platform: 'Facebook', url: 'https://www.facebook.com/backpakerann', icon: 'facebook' },
  ],
  links: [
    { id: 'l1', title: 'INSTAGRAM', url: 'https://www.instagram.com/heriikurniawann', isPriority: true },
    { id: 'l2', title: 'DEMO APP KASIR', url: 'https://kasirku.hakastudio.online/' },
    { id: 'l3', title: 'DEMO APP TIKET EVENT', url: 'http://eventkuy.hakastudio.online/' },
    { id: 'l4', title: 'APLIKSI INVOICE', url: 'https://flowkas.hakastudio.online/' },
    { id: 'l5', title: 'KERJASAMA', url: 'https://bit.ly/4qx42z2' },
  ],
  featured: [
    {
      id: 'f1',
      title: 'AI Tools Generator',
      description: 'Eksplorasi konten dn ide kreatifmu.',
      image: 'https://i.postimg.cc/ydh8Lvsf/Screenshot_12_02_2026_21_00_19.png',
      tag: '#',
      url: 'https://gemini.google.com/share/b4ec20f7b0cb',
      ctaText: 'Lihat Detail'
    },
  ]
};
