import { NavigationItem } from '../Navigation.types';

export interface NavLinkProps {
  item: NavigationItem;
  isActive: boolean;
  onClick?: () => void;
  variant?: 'desktop' | 'mobile';
}
