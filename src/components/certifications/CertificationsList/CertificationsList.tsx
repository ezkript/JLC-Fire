'use client';

import React from 'react';
import { AnimatedSection } from '@/components/global/AnimatedSection/AnimatedSection';
import CertificationCard from '../CertificationCard/CertificationCard';
import { CertificationsListProps as Props } from './CertificationsList.types';

export default function CertificationsList(props: Props) {
  const { certifications } = props;

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <AnimatedSection direction="up" delay={0.2}>
          <div className="text-center mb-16">
            <h1 className="text-3xl font-bold text-dark-900 mb-6">
              Nuestras Certificaciones
            </h1>
            <p className="text-lg text-dark-600 max-w-3xl mx-auto">
              Contamos con las certificaciones más importantes del sector que
              garantizan la calidad y cumplimiento de nuestros servicios en
              sistemas de seguridad y protección contra incendios.
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          direction="up"
          delay={0.3}
        >
          {certifications.map((certification, index) => (
            <CertificationCard
              key={certification.id}
              certification={certification}
              delay={0.1 * (index + 1)}
            />
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
