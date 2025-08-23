export const shouldRenderMobileMenu = (isOpen: boolean): boolean => {
  return isOpen;
};

export const getMobileMenuClasses = (): string => {
  return 'lg:hidden overflow-hidden';
};

export const getMobileMenuContentClasses = (): string => {
  return 'px-2 pt-4 pb-6 space-y-2 border-t border-neutral-100 bg-white/50 backdrop-blur-sm rounded-b-2xl';
};
