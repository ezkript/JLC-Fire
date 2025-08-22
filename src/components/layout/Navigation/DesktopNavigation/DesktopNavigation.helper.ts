import { DesktopNavigationProps } from './DesktopNavigation.types';

export const getNavigationItems = (props: DesktopNavigationProps) => {
  return props.navigationItems;
};

export const isCurrentPath = (href: string, currentPath: string): boolean => {
  return currentPath === href;
};
