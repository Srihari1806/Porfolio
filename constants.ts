import { Project, Skill, ExperienceItem } from './types';

export const PERSONAL_INFO = {
  name: "Srihari Beesetti",
  role: "Creative Writer & Story Architect",
  tagline: "Telugu-native storyteller blending cinematic instincts, lyric craft, and sharp comedy timing.",
  about: "A Telugu-native writer and creative producer who crafts lyric-driven stories and cinematic scripts. My work lives where emotion meets rhythm — I write songs, short-form scenes, and pitchable series concepts that feel local, cinematic, and instantly relatable.",
  email: "srihari.beesetti@example.com",
  location: "Hyderabad, India",
  linkedin: "#",
  resume: "#"
};

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Nalugu Neram',
    description: 'A nostalgic, slow-burning Telugu lyric composition focusing on rural imagery and light instrumentation.',
    techUsed: ['Lyrics', 'Telugu', 'Composition'],
    imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop',
    link: '#'
  },
  {
    id: '2',
    title: 'Fairground Tattoo',
    description: 'A 1-page cinematic scene script featuring a character named Soori and a mysterious tribal woman at a fairground.',
    techUsed: ['Script', 'Screenwriting', 'Drama'],
    imageUrl: 'https://images.unsplash.com/photo-1533551033494-41532259a50c?q=80&w=800&auto=format&fit=crop',
    link: '#'
  },
  {
    id: '3',
    title: 'Bahubali Breakdown',
    description: 'In-depth analysis of scene structure focusing on Setup, Escalation, and Payoff using visual metaphors.',
    techUsed: ['Analysis', 'Film Study', 'Blog'],
    imageUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=800&auto=format&fit=crop',
    link: '#'
  },
  {
    id: '4',
    title: 'Telugu Web Series',
    description: 'SEO-optimized blog post analyzing emotional beats in top Telugu web series.',
    techUsed: ['SEO', 'Content Writing', 'Review'],
    imageUrl: 'https://images.unsplash.com/photo-1499750310159-52f58ea53899?q=80&w=800&auto=format&fit=crop',
    link: '#'
  }
];

export const SKILLS: Skill[] = [
  { name: "Lyric Writing", category: "Creative" },
  { name: "Screenwriting", category: "Creative" },
  { name: "Comedy Timing", category: "Creative" },
  { name: "Dialogue", category: "Creative" },
  { name: "Story Structure", category: "Technical" },
  { name: "SEO Content", category: "Technical" },
  { name: "Telugu Language", category: "Language" },
  { name: "English Transliteration", category: "Language" },
];

export const SKILLS_DATA = [
  { subject: 'Lyric Writing', A: 95, fullMark: 100 },
  { subject: 'Screenwriting', A: 85, fullMark: 100 },
  { subject: 'Comedy', A: 90, fullMark: 100 },
  { subject: 'Story Structure', A: 80, fullMark: 100 },
  { subject: 'SEO', A: 75, fullMark: 100 },
  { subject: 'Telugu', A: 100, fullMark: 100 },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: '1',
    title: 'Creative Writer & Producer',
    company: 'Freelance',
    date: 'Present',
    description: 'Crafting lyric-driven stories and cinematic scripts. Developing music-driven web series concepts and pairing singers for multi-platform projects.',
    type: 'work'
  },
  {
    id: '2',
    title: 'Lyricist',
    company: 'Independent',
    date: '2020 - Present',
    description: 'Writing songs rooted in Telugu sensibility, exploring themes of nostalgia, longing, romance, and situational humor.',
    type: 'work'
  },
  {
    id: '3',
    title: 'Content Strategist',
    company: 'Various Platforms',
    date: '2018 - 2022',
    description: 'Created blog-style analyses, film breakdowns, and platform copy optimized for discoverability and SEO.',
    type: 'work'
  }
];

export const PROFILES = [
  { id: 'writer', name: 'Writer', avatar: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=400&fit=crop' },
  { id: 'producer', name: 'Producer', avatar: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=400&h=400&fit=crop' },
  { id: 'analyst', name: 'Analyst', avatar: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=400&fit=crop' },
  { id: 'guest', name: 'Guest', avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop' }
];
