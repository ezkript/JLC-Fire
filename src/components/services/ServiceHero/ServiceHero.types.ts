import { LucideIcon } from 'lucide-react';

export interface ServiceHeroProps {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  gradientFrom: string;
  gradientTo: string;
  imageUrl?: string;
  videoUrl?: string;
}
