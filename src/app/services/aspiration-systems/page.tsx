'use client';

import React from 'react';
import { getServiceById } from '@/lib/services-data';
import { getServiceImages } from '@/lib/services-images';
import ServiceHero from '@/components/services/ServiceHero/ServiceHero';
import ServiceFeatures from '@/components/services/ServiceFeatures/ServiceFeatures';
import ServiceInfo from '@/components/services/ServiceInfo/ServiceInfo';
import { featuresList, technicalInfo } from '@/lib/aspirationSystems.utils';

export default function AspirationSystemsPage() {
  const service = getServiceById('aspiration-systems');
  const images = getServiceImages('aspiration-systems');

  if (!service || !images) {
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
        imageUrl={images.hero.imageUrl}
        videoUrl={images.hero.videoUrl}
      />
      <ServiceInfo
        title="Servicio de Instalación"
        subtitle="Nuestro equipo de instalación especializado garantiza que su sistema de aspiración funcione perfectamente, proporcionando detección ultra temprana y máxima protección para espacios críticos."
        sections={technicalInfo}
        gradientFrom="from-red-600"
        gradientTo="to-red-700"
        imageUrl={images.info.imageUrl}
        imageAlt={images.info.imageAlt}
      />
      <ServiceFeatures
        title="Características Principales"
        subtitle="Funcionalidades avanzadas que distinguen nuestros sistemas de aspiración de la competencia."
        features={featuresList}
        gradientFrom="from-red-600"
        gradientTo="to-red-700"
        imageUrl={images.features.imageUrl}
        imageAlt={images.features.imageAlt}
      />
    </div>
  );
}
