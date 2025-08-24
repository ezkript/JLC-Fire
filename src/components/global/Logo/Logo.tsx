import Link from 'next/link';
import Image from 'next/image';
import { LogoProps as Props } from './Logo.types';

export default function Logo(props: Props) {
  const { onClick, variant = 'default' } = props;

  return (
    <Link href="/" className="flex items-center group" onClick={onClick}>
      <div className="relative">
        <Image
          src="/logo.png"
          alt="JLC Fire Logo"
          width={48}
          height={48}
          className="object-contain"
        />
      </div>

      {variant === 'default' ? (
        <div className="py-1">
          <Image
            src="/logotext.png"
            alt="JLC Fire"
            width={80}
            height={24}
            className="object-contain"
          />
        </div>
      ) : null}
      {variant === 'light' ? (
        <div className="rounded-md py-1">
          <Image
            src="/logotext.png"
            alt="JLC Fire"
            width={80}
            height={24}
            className="object-contain brightness-0 invert"
          />
        </div>
      ) : null}
      {variant === 'compact' ? (
        <div className="w-8 h-8 flex items-center justify-center shadow-soft group-hover:shadow-medium transition-all duration-300 group-hover:scale-105">
          <Image
            src="/logo.png"
            alt="JLC Fire Logo"
            width={32}
            height={32}
            className="object-contain"
          />
        </div>
      ) : null}
    </Link>
  );
}
