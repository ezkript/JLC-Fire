import { NavigationItem } from '../Navigation.types';

export interface MobileNavigationProps {
  isOpen: boolean;
  navigationItems: NavigationItem[];
  currentPath: string;
  onClose: () => void;
}
