'use client';
import React from 'react';
import { AnimatedSection } from '@/components/global/AnimatedSection/AnimatedSection';
import { AboutHeroProps as Props } from './AboutHero.types';

export default function AboutHero(props: Props) {
  const { title, description } = props;

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection direction="up" delay={0.2}>
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-dark-900 mb-6">
                {title}
              </h1>
              <p className="text-lg text-dark-600 leading-relaxed">
                {description}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
