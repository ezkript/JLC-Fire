'use client';
import React from 'react';
import { getServiceById } from '@/lib/services-data';
import ServiceHero from '@/components/services/ServiceHero/ServiceHero';
import ServiceFeatures from '@/components/services/ServiceFeatures/ServiceFeatures';
import ServiceInfo from '@/components/services/ServiceInfo/ServiceInfo';
import { featuresList, technicalInfo } from '@/lib/fireSuppresion.utils';

export default function FireSuppressionPage() {
  const service = getServiceById('fire-suppression');

  if (!service) {
    return <div>Servicio no encontrado</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-white">
      <ServiceHero
        title={service.title}
        subtitle={service.subtitle}
        description={service.description}
        icon={service.icon}
        gradientFrom="from-red-700"
        gradientTo="to-red-900"
        imageUrl="/images/services/fire-suppression-hero.jpg"
        videoUrl={undefined}
      />
      <ServiceInfo
        title="Servicio de Instalación"
        subtitle="Nuestro equipo de instalación profesional garantiza que su sistema de extinción de incendios esté listo para proteger su instalación, con la máxima calidad y cumpliendo todas las normativas de seguridad."
        sections={technicalInfo}
        gradientFrom="from-red-600"
        gradientTo="to-red-700"
        imageUrl="/images/services/fire-suppression-installation.jpg"
        imageAlt="Instalación de sistema de extinción de incendios"
      />
      <ServiceFeatures
        title="Características Principales"
        subtitle="Funcionalidades avanzadas que distinguen nuestros sistemas de extinción de incendios de la competencia."
        features={featuresList}
        gradientFrom="from-red-600"
        gradientTo="to-red-700"
        imageUrl="/images/services/fire-suppression-features.jpg"
        imageAlt="Sistema de extinción de incendios en instalación"
      />
    </div>
  );
}
