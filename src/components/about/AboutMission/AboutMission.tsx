'use client';
import React from 'react';
import { AnimatedSection } from '@/components/global/AnimatedSection/AnimatedSection';
import { AboutMissionProps as Props } from './AboutMission.types';
import { ShieldCheck } from 'lucide-react';

export default function AboutMission(props: Props) {
  const { mission } = props;

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <AnimatedSection direction="up" delay={0.2}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-dark-900 mb-6">
              Nuestra Misión
            </h2>
            <div className="bg-white border-2 border-primary-200 rounded-3xl p-8 shadow-lg">
              <p className="text-xl leading-relaxed mb-6 text-dark-900">
                {mission}
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                  <ShieldCheck className="w-8 h-8 text-primary-600" />
                </div>
                <div>
                  <div className="font-semibold text-dark-900">
                    Seguridad Garantizada
                  </div>
                  <div className="text-sm text-dark-600">
                    Más de 15 años de experiencia
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
