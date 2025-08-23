'use client';
import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavigationProps as Props } from './Navigation.types';
import { navigationItems } from './Navigation.helper';
import { usePathname } from 'next/navigation';
import Logo from '@/components/global/Logo/Logo';
import DesktopNavigation from './DesktopNavigation/DesktopNavigation';
import MobileNavigation from './MobileNavigation/MobileNavigation';
import MobileMenuButton from './MobileMenuButton/MobileMenuButton';

export default function Navigation(props: Props) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const currentPath = pathname || '/';

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <>
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
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>
    </>
  );
}
