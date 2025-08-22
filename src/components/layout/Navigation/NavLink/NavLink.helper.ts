export const getNavLinkClasses = (
  variant: 'desktop' | 'mobile',
  isActive: boolean
): string => {
  const baseClasses = 'font-medium transition-all duration-300';

  const desktopClasses = `relative px-4 py-2 rounded-lg text-sm ${baseClasses} ${
    isActive
      ? 'text-primary-600 bg-primary-50'
      : 'text-dark-700 hover:text-primary-600 hover:bg-neutral-50'
  }`;

  const mobileClasses = `block px-4 py-3 rounded-xl text-base ${baseClasses} ${
    isActive
      ? 'text-primary-600 bg-primary-50 border border-primary-100'
      : 'text-dark-700 hover:text-primary-600 hover:bg-neutral-50'
  }`;

  return variant === 'desktop' ? desktopClasses : mobileClasses;
};

export const shouldShowActiveIndicator = (
  variant: 'desktop' | 'mobile',
  isActive: boolean
): boolean => {
  return variant === 'desktop' && isActive;
};
