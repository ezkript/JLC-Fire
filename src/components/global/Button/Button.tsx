import Link from 'next/link';
import { ButtonProps as Props } from './Button.types';

export default function Button(props: Props) {
  const { children, href, onClick, variant = 'primary' } = props;
  const { size = 'md', fullWidth = false, className = '' } = props;
  const baseClasses =
    'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300';

  const variantClasses = {
    primary:
      'bg-primary-600 text-white hover:bg-primary-700 shadow-soft hover:shadow-medium hover:-translate-y-0.5',
    secondary:
      'bg-secondary-600 text-white hover:bg-secondary-700 shadow-soft hover:shadow-medium hover:-translate-y-0.5',
    outline:
      'border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white',
    ghost: 'text-dark-700 hover:text-primary-600 hover:bg-neutral-50',
  };

  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
