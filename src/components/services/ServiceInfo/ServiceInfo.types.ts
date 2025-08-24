import { LucideIcon } from 'lucide-react';

interface InfoSection {
  title: string;
  content: string;
  icon: LucideIcon;
}

export interface ServiceInfoProps {
  title: string;
  subtitle: string;
  sections: InfoSection[];
  gradientFrom: string;
  gradientTo: string;
  imageUrl?: string;
  imageAlt?: string;
}
