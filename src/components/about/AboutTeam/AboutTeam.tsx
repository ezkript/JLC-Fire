'use client';
import React from 'react';
import Image from 'next/image';
import { AnimatedSection } from '@/components/global/AnimatedSection/AnimatedSection';
import { AboutTeamProps as Props } from './AboutTeam.types';

export default function AboutTeam(props: Props) {
  const { team } = props;

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <AnimatedSection direction="up" delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-dark-900 mb-6">
              Nuestro Equipo
            </h2>
            <p className="text-lg text-dark-600 max-w-3xl mx-auto">
              Contamos con profesionales altamente calificados y con amplia
              experiencia en el sector de la seguridad y protección contra
              incendios.
            </p>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <AnimatedSection
              key={index}
              direction="up"
              delay={0.1 * (index + 1)}
            >
              <div className="text-center group">
                <div className="w-32 h-32 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    <span className="text-4xl font-bold text-primary-600">
                      {member.name
                        .split(' ')
                        .map(n => n[0])
                        .join('')}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-dark-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-semibold mb-4">
                  {member.position}
                </p>
                <p className="text-dark-600 leading-relaxed">
                  {member.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
