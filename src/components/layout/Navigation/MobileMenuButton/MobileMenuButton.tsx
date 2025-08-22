import { MobileMenuButtonProps as Props } from './MobileMenuButton.types';
import { getHamburgerLineClasses } from './MobileMenuButton.helper';

export default function MobileMenuButton(props: Props) {
  const { isOpen, onClick } = props;
  return (
    <button
      onClick={onClick}
      className="lg:hidden relative p-3 rounded-xl text-dark-700 hover:text-primary-600 hover:bg-neutral-50 transition-all duration-300"
      aria-label="Toggle menu"
    >
      <div className="relative w-6 h-6">
        {[0, 1, 2].map(lineIndex => (
          <span
            key={lineIndex}
            className={getHamburgerLineClasses(isOpen, lineIndex)}
          >
            <div className="w-6 h-0.5 bg-current rounded-full"></div>
          </span>
        ))}
      </div>
    </button>
  );
}
