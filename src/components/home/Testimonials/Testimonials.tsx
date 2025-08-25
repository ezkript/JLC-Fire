import Image from 'next/image';
import Link from 'next/link';
import { ClientsProps as Props } from './Testimonials.types';
import { clients, sectionConfig } from './Testimonials.helper';
import { AnimatedSection } from '@/components/global/AnimatedSection/AnimatedSection';

export default function Clients(props: Props) {
  return (
    <section className="py-16 bg-gradient-to-br from-neutral-50 to-white">
      <div className="container-custom">
        <AnimatedSection direction="up" delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-xl font-bold text-dark-900 mb-4">
              {sectionConfig.title}
            </h2>
            <p className="text-sm text-neutral-600 max-w-3xl mx-auto">
              {sectionConfig.subtitle}
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          direction="up"
          delay={0.2}
        >
          {clients.map(client => (
            <Link
              key={client.id}
              href={client.url || '#'}
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-neutral-100 hover:border-primary-200 overflow-hidden cursor-pointer"
              title={`Ver proyecto de ${client.name}`}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-500/5 to-transparent rounded-bl-full transition-all duration-500 group-hover:from-primary-500/10"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <div className="relative w-24 h-16">
                    <Image
                      src={client.logo}
                      alt={`Logo de ${client.name}`}
                      fill
                      className="object-contain"
                      sizes="96px"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-dark-900 mb-2 text-sm group-hover:text-primary-600 transition-colors duration-300">
                    {client.name}
                  </h3>
                  <p className="text-xs text-neutral-500 bg-neutral-50 px-3 py-1 rounded-full inline-block">
                    {client.industry}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary-500 to-primary-600 transition-all duration-500 group-hover:w-full"></div>
              </div>
            </Link>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
