'use client';

import React from 'react';
import { getServiceById } from '@/lib/services-data';
import ServiceHero from '@/components/services/ServiceHero/ServiceHero';
import ServiceFeatures from '@/components/services/ServiceFeatures/ServiceFeatures';
import ServiceInfo from '@/components/services/ServiceInfo/ServiceInfo';
import { featuresList, technicalInfo } from '@/lib/aspirationSystems.utils';

export default function AspirationSystemsPage() {
  const service = getServiceById('aspiration-systems');

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
        imageUrl="/images/services/aspiration-systems-hero.jpg"
        videoUrl={undefined}
      />
      <ServiceInfo
        title="Servicio de Instalación"
        subtitle="Nuestro equipo de instalación especializado garantiza que su sistema de aspiración funcione perfectamente, proporcionando detección ultra temprana y máxima protección para espacios críticos."
        sections={technicalInfo}
        gradientFrom="from-red-600"
        gradientTo="to-red-700"
        imageUrl="/images/services/aspiration-systems-installation.jpg"
        imageAlt="Instalación de sistema de aspiración"
      />
      <ServiceFeatures
        title="Características Principales"
        subtitle="Funcionalidades avanzadas que distinguen nuestros sistemas de aspiración de la competencia."
        features={featuresList}
        gradientFrom="from-red-600"
        gradientTo="to-red-700"
        imageUrl="/images/services/aspiration-systems-features.jpg"
        imageAlt="Sistema de aspiración en instalación"
      />
    </div>
  );
}
