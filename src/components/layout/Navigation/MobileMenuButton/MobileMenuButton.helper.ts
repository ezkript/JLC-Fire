export const getHamburgerLineClasses = (
  isOpen: boolean,
  lineIndex: number
): string => {
  const baseClasses =
    'absolute inset-0 transform transition-all duration-300 flex items-center justify-center';

  if (lineIndex === 0) {
    return `${baseClasses} ${isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}`;
  }

  if (lineIndex === 1) {
    return `${baseClasses} ${isOpen ? 'opacity-0' : 'opacity-100'}`;
  }

  if (lineIndex === 2) {
    return `${baseClasses} ${isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}`;
  }

  return baseClasses;
};

export const buttonVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 }
};
