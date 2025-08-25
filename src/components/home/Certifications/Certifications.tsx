'use client';
import { CertificationsProps as Props } from './Certifications.types';
import { certificationLogos, sectionConfig } from './Certifications.helper';
import { AnimatedSection } from '@/components/global/AnimatedSection/AnimatedSection';
import Image from 'next/image';
import Link from 'next/link';

export default function Certifications(props: Props) {
  return (
    <section className="py-16 bg-neutral-50">
      <div className="container-custom">
        <AnimatedSection direction="up" delay={0.2}>
          <div className="text-center mb-12">
            <h2 className="text-xl font-bold text-dark-900 mb-4">
              {sectionConfig.title}
            </h2>
            <p className="text-sm text-dark-600 max-w-2xl mx-auto">
              {sectionConfig.subtitle}
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection direction="up" delay={0.2}>
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {certificationLogos.map(certification => (
                <Link
                  key={`first-${certification.id}`}
                  href="/certifications"
                  className="flex-shrink-0 mx-8 flex flex-col items-center group cursor-pointer"
                  title={`Ver certificación ${certification.name}`}
                >
                  <div className="relative w-32 h-16 md:w-40 md:h-20">
                    <Image
                      src={certification.logo}
                      alt={certification.name}
                      className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 w-full h-full"
                      width={100}
                      height={100}
                    />
                  </div>
                  <p className="text-sm font-medium text-dark-700 mt-2 text-center group-hover:text-primary-600 transition-colors duration-300 truncate max-w-32 md:max-w-40">
                    {certification.name}
                  </p>
                </Link>
              ))}
              {certificationLogos.map(certification => (
                <Link
                  key={`second-${certification.id}`}
                  href="/certifications"
                  className="flex-shrink-0 mx-8 flex flex-col items-center group cursor-pointer"
                  title={`Ver certificación ${certification.name}`}
                >
                  <div className="relative w-32 h-16 md:w-40 md:h-20">
                    <Image
                      src={certification.logo}
                      alt={certification.name}
                      className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 w-full h-full"
                      width={100}
                      height={100}
                    />
                  </div>
                  <p className="text-sm font-medium text-dark-700 mt-2 text-center group-hover:text-primary-600 transition-colors duration-300 truncate max-w-32 md:max-w-40">
                    {certification.name}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
