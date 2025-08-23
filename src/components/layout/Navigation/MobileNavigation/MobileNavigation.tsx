import { MobileNavigationProps as Props } from './MobileNavigation.types';
import {
  shouldRenderMobileMenu,
  getMobileMenuClasses,
  getMobileMenuContentClasses,
} from './MobileNavigation.helper';
import NavLink from '../NavLink/NavLink';
import Button from '@/components/global/Button/Button';
import { useContactModal } from '@/components/global/ContactModal/ContactModalProvider';

export default function MobileNavigation(props: Props) {
  const { openModal } = useContactModal();

  if (!shouldRenderMobileMenu(props.isOpen)) return null;

  return (
    <div className={getMobileMenuClasses()}>
      <div className={getMobileMenuContentClasses()}>
        {props.navigationItems.map(item => (
          <NavLink
            key={item.href}
            item={item}
            isActive={props.currentPath === item.href}
            onClick={props.onClose}
            variant="mobile"
          />
        ))}
        <div className="pt-2">
          <Button
            onClick={() => {
              openModal();
              props.onClose();
            }}
            variant="primary"
            size="lg"
            fullWidth
          >
            Contactar
          </Button>
        </div>
      </div>
    </div>
  );
}
