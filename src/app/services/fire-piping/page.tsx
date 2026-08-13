'use client';

import React from 'react';
import { getServiceById } from '@/lib/services-data';
import { getServiceImages } from '@/lib/services-images';
import ServiceHero from '@/components/services/ServiceHero/ServiceHero';
import ServiceFeatures from '@/components/services/ServiceFeatures/ServiceFeatures';
import ServiceInfo from '@/components/services/ServiceInfo/ServiceInfo';
import ServiceBenefits from '@/components/services/ServiceBenefits/ServiceBenefits';
import ServiceGallery from '@/components/services/ServiceGallery/ServiceGallery';
import {
  featuresList,
  technicalInfo,
  pipingGallery
} from '@/lib/firePiping.utils';
import { useContactModal } from '@/components/global/ContactModal/ContactModalProvider';
import { PhoneCall, ArrowRight, Droplets } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FirePipingPage() {
  const service = getServiceById('fire-piping');
  const images = getServiceImages('fire-piping');
  const { openModal } = useContactModal();

  if (!service || !images) {
    return (
      <div className="p-12 text-center text-dark-900">
        Servicio no encontrado
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <ServiceHero
        title={service.title}
        subtitle={service.subtitle}
        description={service.description}
        icon={service.icon}
        gradientFrom="from-red-700"
        gradientTo="to-red-900"
        imageUrl={images.hero.imageUrl}
        videoUrl={images.hero.videoUrl}
      />

      {/* Ingeniería y Especificación Técnica */}
      <ServiceInfo
        title="Ingeniería y Fabricación de Redes de Cañerías"
        subtitle="Diseño hidráulico, suministro de materiales certificados e instalación completa para sistemas de rociadores, hidrantes, nichos y salas de bombas, conforme a NFPA 13, 14 y 20."
        sections={technicalInfo}
        gradientFrom="from-red-700"
        gradientTo="to-red-900"
        imageUrl={images.info.imageUrl}
        imageAlt={images.info.imageAlt}
      />

      {/* Tecnologías de Unión y Montaje */}
      <ServiceFeatures
        title="Ranurado, Soldadura y Colectores"
        subtitle="Equipamiento propio de ranurado mecánico, soldadores calificados AWS y equipos de ensayo de presión para garantizar obras sin fisuras ni filtraciones."
        features={featuresList}
        gradientFrom="from-red-800"
        gradientTo="to-neutral-900"
        imageUrl={images.features.imageUrl}
        imageAlt={images.features.imageAlt}
      />

      {/* Galería de Instalaciones */}
      <ServiceGallery
        title="Instalaciones en Obra"
        subtitle="Ejemplos reales de redes aéreas, colectores de sala de bombas y uniones de alta presión ejecutadas por nuestro equipo."
        items={pipingGallery}
      />

      {/* CTA Final */}
      <section className="py-20 bg-neutral-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/60 to-neutral-900 pointer-events-none" />
        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-white/90 text-xs font-semibold uppercase tracking-widest">
              <Droplets className="w-4 h-4" />
              <span>Presupuesto para tu obra</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
              ¿Necesitás instalar o certificar la red de cañerías de tu planta o
              edificio?
            </h2>
            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
              Nuestros ingenieros evalúan tu proyecto en obra, computan
              materiales y presentan una propuesta técnica detallada con plazos
              y certificaciones incluidas.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={openModal}
                className="w-full sm:w-auto px-8 py-4 bg-white text-neutral-900 font-bold rounded-xl shadow-xl transition-all duration-300 hover:bg-neutral-100 hover:scale-105 flex items-center justify-center space-x-3 group"
              >
                <PhoneCall className="w-5 h-5 text-primary-600" />
                <span>Solicitar Presupuesto</span>
                <ArrowRight className="w-5 h-5 text-primary-600 transform group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
