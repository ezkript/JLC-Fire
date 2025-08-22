'use client';
import { NavigationProps as Props } from './Navigation.types';
import { navigationItems } from './Navigation.helper';
import { usePathname } from 'next/navigation';
import { useState, useCallback } from 'react';
import Logo from '@/components/global/Logo/Logo';
import DesktopNavigation from './DesktopNavigation/DesktopNavigation';
import MobileNavigation from './MobileNavigation/MobileNavigation';
import MobileMenuButton from './MobileMenuButton/MobileMenuButton';

export default function Navigation(props: Props) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const currentPath = pathname || '/';

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-medium border-b border-neutral-100 sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Logo onClick={closeMenu} />

          <DesktopNavigation
            navigationItems={navigationItems}
            currentPath={currentPath}
          />

          <MobileMenuButton isOpen={isMenuOpen} onClick={toggleMenu} />
        </div>

        <MobileNavigation
          isOpen={isMenuOpen}
          navigationItems={navigationItems}
          currentPath={currentPath}
          onClose={closeMenu}
        />
      </div>
    </nav>
  );
}
