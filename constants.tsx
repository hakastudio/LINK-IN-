
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
  /* 
     TIPS: Link ini sudah menggunakan direct link.
     Link: https://i.postimg.cc/CLqKRhfp/1000279212-jpg-copy.jpg
  */
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
      tag: 'NEW REVEAL',
      title: 'AI TOOLS CONTEN CREATOR',
      description: 'Eksplorasi sistem identitas visual terbaru kami yang berfokus pada fleksibilitas dan karakter yang bold.',
      image: 'https://i.postimg.cc/ydh8Lvsf/Screenshot-12-02-2026-21-00-19.png',
      ctaText: 'LIHAT DETAIL',
      url: 'https://gemini.google.com/share/b4ec20f7b0cb'
    }
  ]
};
