import { DesktopNavigationProps as Props } from './DesktopNavigation.types';
import { getNavigationItems, isCurrentPath } from './DesktopNavigation.helper';
import NavLink from '../NavLink/NavLink';
import Button from '@/components/global/Button/Button';

export default function DesktopNavigation(props: Props) {
  const navigationItems = getNavigationItems(props);

  return (
    <>
      <div className="hidden lg:flex items-center space-x-1">
        {navigationItems.map(item => (
          <NavLink
            key={item.href}
            item={item}
            isActive={isCurrentPath(item.href, props.currentPath)}
            variant="desktop"
          />
        ))}
      </div>

      <div className="hidden lg:block">
        <Button href="/contact" variant="primary" size="md">
          Contactar
        </Button>
      </div>
    </>
  );
}
