'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { getAnimatePos, getInitialPos } from './AnimatedSection.helper';
import { AnimatedSectionProps as Props } from './AnimatedSection.types';

export const AnimatedSection = (props: Props) => {
  const { children, className, delay, direction = 'up', duration } = props;

  return (
    <motion.div
      className={className}
      initial={getInitialPos(direction)}
      whileInView={getAnimatePos(direction)}
      viewport={{ once: true }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
};
