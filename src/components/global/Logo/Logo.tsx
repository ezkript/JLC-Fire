import Link from 'next/link';
import { LogoProps as Props } from './Logo.types';

export default function Logo(props: Props) {
  const { onClick, variant = 'default', showSubtitle = true } = props;
  return (
    <Link
      href="/"
      className="flex items-center space-x-3 group"
      onClick={onClick}
    >
      <div className="relative">
        <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-soft group-hover:shadow-medium transition-all duration-300 group-hover:scale-105">
          <span className="text-white font-bold text-sm">JLC</span>
        </div>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary-400 rounded-full opacity-75"></div>
      </div>
      {variant === 'default' && (
        <div className="flex flex-col">
          <span className="text-xl font-bold text-dark-900 group-hover:text-primary-600 transition-colors duration-300">
            JLC Fire
          </span>
          {showSubtitle && (
            <span className="text-xs text-dark-500 font-medium">
              Sistemas de Seguridad
            </span>
          )}
        </div>
      )}
    </Link>
  );
}
