import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Nosotros | JLC Fire - Expertos en Protección Contra Incendios',
  description:
    'Conoce a JLC Fire, nuestra misión, visión y el equipo detrás de nuestras soluciones integrales en seguridad electrónica y extinción de incendios.',
  alternates: {
    canonical: '/about'
  },
  openGraph: {
    title: 'Nosotros | JLC Fire',
    description:
      'Conoce a JLC Fire, nuestra misión, visión y el equipo detrás de nuestras soluciones.',
    url: '/about',
    type: 'website'
  }
};
import { aboutData } from '@/lib/about-data';
import AboutHero from '@/components/about/AboutHero/AboutHero';
import AboutMission from '@/components/about/AboutMission/AboutMission';
import AboutValues from '@/components/about/AboutValues/AboutValues';
import AboutTeam from '@/components/about/AboutTeam/AboutTeam';

export default function AboutPage() {
  return (
    <>
      <AboutHero
        title={aboutData.hero.title}
        description={aboutData.hero.description}
      />
      <AboutMission mission={aboutData.mission.mission} />
      <AboutValues values={aboutData.values} />
      <AboutTeam team={aboutData.team} />
    </>
  );
}
