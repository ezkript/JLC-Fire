import { LucideIcon } from 'lucide-react';

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ServiceFeaturesProps {
  title: string;
  subtitle: string;
  features: Feature[];
  gradientFrom: string;
  gradientTo: string;
  imageUrl?: string;
  imageAlt?: string;
}
