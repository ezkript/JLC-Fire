'use client';
import React from 'react';
import { getServiceById } from '@/lib/services-data';
import ServiceHero from '@/components/services/ServiceHero/ServiceHero';
import ServiceFeatures from '@/components/services/ServiceFeatures/ServiceFeatures';
import ServiceInfo from '@/components/services/ServiceInfo/ServiceInfo';
import { featuresList, technicalInfo } from '@/lib/softwareGraphic.utils';

export default function SoftwareGraphicPage() {
  const service = getServiceById('software-graphic');

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
        imageUrl="/images/services/software-graphic-hero.jpg"
        videoUrl={undefined}
      />
      <ServiceInfo
        title="Servicio de Desarrollo"
        subtitle="Nuestro equipo de desarrollo profesional crea software gráfico personalizado que optimiza la gestión de todos sus sistemas de seguridad con interfaces intuitivas y funcionales."
        sections={technicalInfo}
        gradientFrom="from-red-600"
        gradientTo="to-red-700"
        imageUrl="/images/services/software-graphic-installation.jpg"
        imageAlt="Desarrollo de software gráfico"
      />
      <ServiceFeatures
        title="Características Principales"
        subtitle="Funcionalidades avanzadas que distinguen nuestro software gráfico de la competencia."
        features={featuresList}
        gradientFrom="from-red-600"
        gradientTo="to-red-700"
        imageUrl="/images/services/software-graphic-features.jpg"
        imageAlt="Software gráfico en acción"
      />
    </div>
  );
}
