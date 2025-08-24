import { DesktopNavigationProps } from './DesktopNavigation.types';
import { isLinkActive } from '../Navigation.helper';

export const getNavigationItems = (props: DesktopNavigationProps) => {
  return props.navigationItems;
};

export const isCurrentPath = (href: string, currentPath: string): boolean => {
  return isLinkActive(href, currentPath);
};
