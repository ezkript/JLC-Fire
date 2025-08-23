import { DesktopNavigationProps as Props } from './DesktopNavigation.types';
import { getNavigationItems, isCurrentPath } from './DesktopNavigation.helper';
import NavLink from '../NavLink/NavLink';
import Button from '@/components/global/Button/Button';
import { useContactModal } from '@/components/global/ContactModal/ContactModalProvider';

export default function DesktopNavigation(props: Props) {
  const navigationItems = getNavigationItems(props);
  const { openModal } = useContactModal();

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
        <Button onClick={openModal} variant="primary" size="md">
          Contactar
        </Button>
      </div>
    </>
  );
}
