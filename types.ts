export interface Project {
  id: string;
  title: string;
  description: string;
  techUsed: string[];
  imageUrl: string;
  link: string;
}

export interface Skill {
  name: string;
  category: string;
  icon?: React.ReactNode;
}

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  date: string;
  description: string;
  type: 'work' | 'education';
}

export interface Profile {
  id: string;
  name: string;
  avatar: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model' | 'system';
  text: string;
  timestamp: Date;
  isStreaming?: boolean;
}
