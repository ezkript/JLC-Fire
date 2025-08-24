'use client';
import React from 'react';
import { getServiceById } from '@/lib/services-data';
import ServiceHero from '@/components/services/ServiceHero/ServiceHero';
import ServiceFeatures from '@/components/services/ServiceFeatures/ServiceFeatures';
import ServiceInfo from '@/components/services/ServiceInfo/ServiceInfo';
import { featuresList, technicalInfo } from '@/lib/maintenance.utils';

export default function MaintenancePage() {
  const service = getServiceById('maintenance');

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
        imageUrl="/images/services/maintenance-hero.jpg"
        videoUrl={undefined}
      />
      <ServiceInfo
        title="Servicio de Mantenimiento"
        subtitle="Nuestro equipo de mantenimiento profesional garantiza que todos sus sistemas funcionen de manera confiable y eficiente, previniendo fallas y maximizando la vida útil de los equipos."
        sections={technicalInfo}
        gradientFrom="from-red-600"
        gradientTo="to-red-700"
        imageUrl="/images/services/maintenance-installation.jpg"
        imageAlt="Servicio de mantenimiento de sistemas"
      />
      <ServiceFeatures
        title="Características Principales"
        subtitle="Servicios de mantenimiento integral que distinguen nuestro soporte técnico de la competencia."
        features={featuresList}
        gradientFrom="from-red-600"
        gradientTo="to-red-700"
        imageUrl="/images/services/maintenance-features.jpg"
        imageAlt="Servicio de mantenimiento en acción"
      />
    </div>
  );
}
