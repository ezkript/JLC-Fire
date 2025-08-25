import Image from 'next/image';
import { BrandsProps as Props } from './Brands.types';
import { brands, sectionConfig } from './Brands.helper';
import { AnimatedSection } from '@/components/global/AnimatedSection/AnimatedSection';

export default function Brands(props: Props) {
  return (
    <section className="py-16 bg-neutral-50">
      <div className="container-custom">
        <AnimatedSection direction="up" delay={0.2}>
          <div className="text-center mb-12">
            <h2 className="text-xl font-bold text-dark-900 mb-4">
              {sectionConfig.title}
            </h2>
            <p className="text-sm text-neutral-600 max-w-2xl mx-auto">
              {sectionConfig.subtitle}
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
          direction="up"
          delay={0.2}
        >
          {brands.map(brand => (
            <a
              key={brand.id}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group border border-neutral-100 hover:border-primary-200 cursor-pointer"
              title={`Visitar sitio web de ${brand.name}`}
            >
              <div className="relative w-20 h-12 grayscale group-hover:grayscale-0 transition-all duration-300">
                <Image
                  src={brand.logo}
                  alt={`Logo de ${brand.name}`}
                  fill
                  className="object-contain"
                  sizes="80px"
                />
              </div>
            </a>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
