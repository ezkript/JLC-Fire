import Image from 'next/image';
import React from 'react';
import { BrandsProps as Props } from './Brands.types';
import { sectionConfig, getProviders, getPartners } from './Brands.helper';
import { AnimatedSection } from '@/components/global/AnimatedSection/AnimatedSection';

export default function Brands(props: Props) {
  const providers = getProviders();
  const partners = getPartners();

  return (
    <section className="py-16 bg-neutral-50">
      <div className="container-custom">
        <AnimatedSection direction="up" delay={0.2}>
          <div className="text-center mb-12">
            <h2 className="text-xl font-bold text-dark-900 mb-4">
              {sectionConfig.title}
            </h2>
          </div>
        </AnimatedSection>
        <AnimatedSection direction="up" delay={0.3}>
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-primary-500 mb-6 text-center">
              {sectionConfig.providers.title}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
              {providers.map(brand => (
                <a
                  key={brand.id}
                  href={brand.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group border border-neutral-100 hover:border-primary-200 cursor-pointer"
                  title={`Visitar sitio web de ${brand.name}`}
                >
                  <div className="relative w-16 h-10 grayscale group-hover:grayscale-0 transition-all duration-300">
                    <Image
                      src={brand.logo}
                      alt={`Logo de ${brand.name}`}
                      fill
                      className="object-contain"
                      sizes="64px"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection direction="up" delay={0.4}>
          <div>
            <h3 className="text-lg font-semibold text-primary-500 mb-6 text-center">
              {sectionConfig.partners.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
              {partners.map(brand => (
                <div
                  key={brand.id}
                  className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm border border-neutral-100"
                  title={brand.name}
                >
                  <div className="relative w-28 h-14">
                    <Image
                      src={brand.logo}
                      alt={`Logo de ${brand.name}`}
                      fill
                      className="object-contain"
                      sizes="112px"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
