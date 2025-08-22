import Link from 'next/link';
import { NavLinkProps as Props } from './NavLink.types';
import { getNavLinkClasses, shouldShowActiveIndicator } from './NavLink.helper';

export default function NavLink(props: Props) {
  const { item, isActive, onClick, variant = 'desktop' } = props;
  const classes = getNavLinkClasses(variant, isActive);
  const showIndicator = shouldShowActiveIndicator(variant, isActive);

  return (
    <Link href={item.href} className={classes} onClick={onClick}>
      {item.label}
      {showIndicator && (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary-500 rounded-full"></div>
      )}
    </Link>
  );
}
