'use client';
import React from 'react';
import { AnimatedSection } from '@/components/global/AnimatedSection/AnimatedSection';
import { AboutHistoryProps as Props } from './AboutHistory.types';

export default function AboutHistory(props: Props) {
  const { milestones } = props;

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <AnimatedSection direction="up" delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-dark-900 mb-6">
              Nuestra Historia
            </h2>
            <p className="text-lg text-dark-600 max-w-3xl mx-auto">
              Desde nuestros inicios, hemos estado comprometidos con la
              excelencia y la innovación en el campo de la seguridad y
              protección contra incendios.
            </p>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {milestones.map((milestone, index) => (
            <AnimatedSection
              key={index}
              direction="up"
              delay={0.1 * (index + 1)}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary-600">
                    {milestone.year}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-dark-900 mb-4">
                  {milestone.title}
                </h3>
                <p className="text-dark-600 leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
