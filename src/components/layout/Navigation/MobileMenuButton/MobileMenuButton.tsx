'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { MobileMenuButtonProps as Props } from './MobileMenuButton.types';
import {
  buttonVariants,
  getHamburgerLineClasses,
} from './MobileMenuButton.helper';

export default function MobileMenuButton(props: Props) {
  const { isOpen, onClick } = props;

  return (
    <motion.button
      onClick={onClick}
      className="lg:hidden relative p-3.5 rounded-xl text-dark-700 hover:text-primary-600 hover:bg-neutral-50 transition-colors duration-300 flex items-center justify-center"
      aria-label="Toggle menu"
      variants={buttonVariants}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
    >
      <div className="relative w-7 h-7 flex items-center justify-center">
        {[0, 1, 2].map(lineIndex => (
          <motion.span
            key={lineIndex}
            className={getHamburgerLineClasses(isOpen, lineIndex)}
            animate={
              isOpen
                ? {
                    rotate: lineIndex === 0 ? 45 : lineIndex === 2 ? -45 : 0,
                    y: 0,
                    opacity: lineIndex === 1 ? 0 : 1,
                  }
                : {
                    rotate: 0,
                    y: lineIndex === 0 ? -8 : lineIndex === 2 ? 8 : 0,
                    opacity: 1,
                  }
            }
            transition={{
              duration: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <div className="w-7 h-0.5 bg-current rounded-full"></div>
          </motion.span>
        ))}
      </div>
    </motion.button>
  );
}
