'use client';
import React from 'react';
import { Shield, Users, Award, Zap } from 'lucide-react';
import { AnimatedSection } from '@/components/global/AnimatedSection/AnimatedSection';
import { AboutValuesProps as Props } from './AboutValues.types';

export default function AboutValues(props: Props) {
  const { values } = props;
  const iconMap = {
    Shield,
    Users,
    Award,
    Zap
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <AnimatedSection direction="up" delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-dark-900 mb-6">
              Nuestra Visión
            </h2>
            <p className="text-lg text-dark-600 max-w-3xl mx-auto">
              Nuestra visión del futuro y los principios que nos guían hacia la
              excelencia.
            </p>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const IconComponent = iconMap[value.icon as keyof typeof iconMap];

            return (
              <AnimatedSection
                key={index}
                direction="up"
                delay={0.1 * (index + 1)}
              >
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-dark-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-dark-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
