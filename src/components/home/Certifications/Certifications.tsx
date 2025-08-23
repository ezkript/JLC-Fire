'use client';
import { CertificationsProps as Props } from './Certifications.types';
import { certificationLogos, sectionConfig } from './Certifications.helper';

export default function Certifications(props: Props) {
  return (
    <section className="py-16 bg-neutral-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-xl font-bold text-dark-900 mb-4">
            {sectionConfig.title}
          </h2>
          <p className="text-sm text-dark-600 max-w-2xl mx-auto">
            {sectionConfig.subtitle}
          </p>
        </div>

        {/* Continuous Horizontal Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {/* First set of logos */}
            {certificationLogos.map(certification => (
              <div
                key={`first-${certification.id}`}
                className="flex-shrink-0 mx-8 flex flex-col items-center"
              >
                <div className="relative w-32 h-16 md:w-40 md:h-20">
                  <img
                    src={certification.logo}
                    alt={certification.name}
                    className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300 w-full h-full"
                  />
                </div>
                <p className="text-sm font-medium text-dark-700 mt-2 text-center">
                  {certification.name}
                </p>
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {certificationLogos.map(certification => (
              <div
                key={`second-${certification.id}`}
                className="flex-shrink-0 mx-8 flex flex-col items-center"
              >
                <div className="relative w-32 h-16 md:w-40 md:h-20">
                  <img
                    src={certification.logo}
                    alt={certification.name}
                    className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300 w-full h-full"
                  />
                </div>
                <p className="text-sm font-medium text-dark-700 mt-2 text-center">
                  {certification.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
