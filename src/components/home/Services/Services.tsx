'use client';

import Link from 'next/link';
import {
  Flame,
  Shield,
  Key,
  Building2,
  Wrench,
  Monitor,
  Fan,
  Cable,
  Network,
  ArrowRight
} from 'lucide-react';
import { ServicesProps as Props } from './Services.types';
import { services, sectionConfig } from './Services.helper';
import { AnimatedSection } from '@/components/global/AnimatedSection/AnimatedSection';

const ICON_MAP: Record<string, React.ReactNode> = {
  Network: <Network className="w-5 h-5" />,
  Flame: <Flame className="w-5 h-5" />,
  Shield: <Shield className="w-5 h-5" />,
  Key: <Key className="w-5 h-5" />,
  Building2: <Building2 className="w-5 h-5" />,
  Wrench: <Wrench className="w-5 h-5" />,
  Monitor: <Monitor className="w-5 h-5" />,
  Fan: <Fan className="w-5 h-5" />,
  Cable: <Cable className="w-5 h-5" />
};

export default function Services(props: Props) {
  const featured = services.find(s => s.isFeatured);
  const secondary = services.filter(s => !s.isFeatured);

  return (
    <section className="py-24 bg-neutral-50">
      <div className="container-custom">
        {/* ── Section Header ── */}
        <AnimatedSection direction="up" delay={0.1}>
          <div className="mb-16 max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary-600 mb-4">
              <span className="w-6 h-px bg-primary-500 inline-block" />
              {sectionConfig.eyebrow}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark-900 leading-tight mb-4">
              {sectionConfig.title}
            </h2>
            <p className="text-base text-dark-500 leading-relaxed">
              {sectionConfig.subtitle}
            </p>
          </div>
        </AnimatedSection>

        {/* ── Featured Card ── */}
        {featured && (
          <AnimatedSection direction="up" delay={0.2}>
            <Link
              href={featured.href}
              className="group relative flex flex-col md:flex-row gap-8 items-start md:items-center rounded-3xl bg-gradient-to-br from-dark-950 via-neutral-900 to-red-950 border border-primary-700/40 p-8 md:p-10 mb-8 overflow-hidden shadow-2xl shadow-primary-900/20 transition-all duration-500 hover:shadow-primary-700/30 hover:border-primary-500/60 cursor-pointer"
            >
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 to-red-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-primary-600/10 blur-3xl group-hover:bg-primary-500/15 transition-colors duration-700 pointer-events-none" />

              {/* Icon */}
              <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-600 to-red-700 flex items-center justify-center shadow-lg shadow-primary-900/40 group-hover:scale-105 transition-transform duration-300">
                <div className="w-10 h-10 bg-white/15 backdrop-blur-sm rounded-xl flex items-center justify-center text-white">
                  <Network className="w-6 h-6" />
                </div>
              </div>

              {/* Copy */}
              <div className="flex-1 min-w-0 relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary-400 bg-primary-500/10 border border-primary-500/20 px-3 py-1 rounded-full">
                    Nuestra Especialidad
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3 group-hover:text-primary-200 transition-colors duration-300">
                  {featured.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed max-w-2xl group-hover:text-neutral-300 transition-colors duration-300">
                  {featured.tagline}
                </p>
              </div>

              {/* CTA */}
              <div className="flex-shrink-0 flex items-center gap-2 text-sm font-semibold text-primary-400 group-hover:text-white transition-colors duration-300 self-end md:self-center relative z-10">
                <span className="whitespace-nowrap">
                  Ver servicio y galería
                </span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            </Link>
          </AnimatedSection>
        )}

        {/* ── Secondary Grid ── */}
        <AnimatedSection
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          direction="up"
          delay={0.3}
        >
          {secondary.map(service => (
            <Link
              key={service.id}
              href={service.href}
              className="group relative flex flex-col gap-4 rounded-2xl bg-white border border-neutral-200 p-6 hover:border-primary-300 hover:shadow-lg hover:shadow-primary-100/60 transition-all duration-300 overflow-hidden cursor-pointer"
            >
              {/* Icon pill */}
              <div className="w-10 h-10 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:border-primary-600 group-hover:text-white transition-all duration-300">
                {ICON_MAP[service.icon] ?? null}
              </div>

              {/* Text */}
              <div className="flex-1">
                <h3 className="text-sm font-bold text-dark-900 group-hover:text-primary-700 transition-colors duration-300 mb-1.5">
                  {service.title}
                </h3>
                {service.tagline && (
                  <p className="text-xs text-neutral-500 leading-relaxed group-hover:text-neutral-600 transition-colors duration-300">
                    {service.tagline}
                  </p>
                )}
              </div>

              {/* Hover arrow */}
              <div className="flex items-center gap-1 text-[11px] font-semibold text-primary-500 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                <span>Ver servicio</span>
                <ArrowRight className="w-3 h-3" />
              </div>

              {/* Bottom red line on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-red-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            </Link>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
