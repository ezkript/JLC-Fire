import { Building2, Factory, Home, ShoppingBag } from 'lucide-react';
import { Car, Plane, Ship, Flame, Shield } from 'lucide-react';
import { Key, Wrench, Monitor, Fan, LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Building2,
  Factory,
  Home,
  ShoppingBag,
  Car,
  Plane,
  Ship,
  Flame,
  Shield,
  Key,
  Wrench,
  Monitor,
  Fan
};

export const getIconComponent = (iconName: string): LucideIcon => {
  return iconMap[iconName] || Building2;
};

export const isValidIcon = (iconName: string): boolean => {
  return iconName in iconMap;
};
