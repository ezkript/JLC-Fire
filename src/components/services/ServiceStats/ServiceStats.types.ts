import { LucideIcon } from 'lucide-react';

interface Stat {
  value: string;
  label: string;
  icon: LucideIcon;
  description?: string;
}

export interface ServiceStatsProps {
  title: string;
  subtitle: string;
  stats: Stat[];
}
