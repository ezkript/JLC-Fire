'use client';
import React from 'react';
import { getServiceById } from '@/lib/services-data';
import { getServiceImages } from '@/lib/services-images';
import ServiceHero from '@/components/services/ServiceHero/ServiceHero';
import ServiceFeatures from '@/components/services/ServiceFeatures/ServiceFeatures';
import ServiceInfo from '@/components/services/ServiceInfo/ServiceInfo';
import { featuresList, technicalInfo } from '@/lib/fireSuppresion.utils';

export default function FireSuppressionPage() {
  const service = getServiceById('fire-suppression');
  const images = getServiceImages('fire-suppression');

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
        title="Extinción por agua"
        subtitle="Ingeniería e instalación de redes de cañerías, ranuras y soldaduras calificadas, rociadores automáticos y salas de bombas; con pruebas hidráulicas y puesta en marcha."
        sections={technicalInfo}
        gradientFrom="from-red-600"
        gradientTo="to-red-700"
        imageUrl={images.info.imageUrl}
        imageAlt={images.info.imageAlt}
      />
      <ServiceFeatures
        title="Extinción por gases (agentes limpios)"
        subtitle="Sistemas con cañerías de descarga, cilindros y toberas dimensionadas, integrados a detección con zonas cruzadas para activación automática u opción de activación manual mediante pulsadores de extinción."
        features={featuresList}
        gradientFrom="from-red-600"
        gradientTo="to-red-700"
        imageUrl={images.features.imageUrl}
        imageAlt={images.features.imageAlt}
      />
    </div>
  );
}
