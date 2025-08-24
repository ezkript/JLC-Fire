'use client';

import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { ScrollToTopProps as Props } from './ScrollToTop.types';
import { defaultScrollToTopConfig } from './ScrollToTop.helper';

export default function ScrollToTop(props: Props) {
  const { showAfter = defaultScrollToTopConfig.showAfter, className } = props;
  const { position = defaultScrollToTopConfig.position } = props;

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > showAfter) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [showAfter]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className={`fixed ${position} z-40 bg-primary-600 hover:bg-primary-700 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 ${className}`}
      aria-label="Volver arriba"
    >
      <ChevronUp className="w-8 h-8" />
    </button>
  );
}
