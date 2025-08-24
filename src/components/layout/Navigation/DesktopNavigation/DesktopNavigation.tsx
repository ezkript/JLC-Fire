'use client';
import { useState } from 'react';
import { DesktopNavigationProps as Props } from './DesktopNavigation.types';
import { getNavigationItems, isCurrentPath } from './DesktopNavigation.helper';
import NavLink from '../NavLink/NavLink';
import Button from '@/components/global/Button/Button';
import { useContactModal } from '@/components/global/ContactModal/ContactModalProvider';
import ServicesDropdown from '../ServicesDropdown/ServicesDropdown';

export default function DesktopNavigation(props: Props) {
  const navigationItems = getNavigationItems(props);
  const { openModal } = useContactModal();
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const handleServicesMouseEnter = () => {
    setIsServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    setIsServicesOpen(false);
  };

  return (
    <>
      <div className="hidden lg:flex items-center space-x-1">
        {navigationItems.map(item => {
          if (item.label === 'Servicios') {
            return (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={handleServicesMouseEnter}
                onMouseLeave={handleServicesMouseLeave}
              >
                <NavLink
                  item={item}
                  isActive={isCurrentPath(item.href, props.currentPath)}
                  variant="desktop"
                />
                {isServicesOpen ? (
                  <div className="absolute top-full left-0 right-0 h-4 bg-transparent" />
                ) : null}
                <ServicesDropdown
                  isOpen={isServicesOpen}
                  onClose={() => setIsServicesOpen(false)}
                />
              </div>
            );
          }

          return (
            <NavLink
              key={item.href}
              item={item}
              isActive={isCurrentPath(item.href, props.currentPath)}
              variant="desktop"
            />
          );
        })}
      </div>

      <div className="hidden lg:block">
        <Button onClick={openModal} variant="primary" size="md">
          Contactar
        </Button>
      </div>
    </>
  );
}
