
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
  role: "Creative & Tech Enthusiast",
  bio: "Membangun solusi digital yang fungsional dengan sentuhan estetika retro-modern.",
  socials: [
    { id: '1', platform: 'TikTok', url: 'https://www.tiktok.com/@heriikurniawann_', icon: 'music' },
    { id: '2', platform: 'Instagram', url: 'https://www.instagram.com/heriikurniawann', icon: 'instagram' },
    { id: '3', platform: 'Pinterest', url: 'https://id.pinterest.com/heriikurniawann_', icon: 'target' },
    { id: '4', platform: 'Facebook', url: 'https://www.facebook.com/backpakerann', icon: 'facebook' },
  ],
  links: [
    { id: 'l1', title: 'SAWERIA', url: 'https://saweria.co/heriikurniawann', isPriority: true },
    { id: 'l2', title: 'APLIKASI KASIR ', url: 'https://kasirku.hakastudio.online/' },
    { id: 'l3', title: 'EVENT TICKETING SYSTEM', url: 'https://www.eventkuy.web.id/' },
    { id: 'l4', title: 'APLIKASI INVOICE ', url: 'https://flowkas.hakastudio.online/' },
    { id: 'l5', title: 'HUBUNGI KERJASAMA', url: 'https://bit.ly/4qx42z2' },
  ]
};
