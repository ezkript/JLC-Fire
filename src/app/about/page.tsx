import React from 'react';
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
