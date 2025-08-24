'use client';
import React from 'react';
import { getServiceById } from '@/lib/services-data';
import ServiceHero from '@/components/services/ServiceHero/ServiceHero';
import ServiceFeatures from '@/components/services/ServiceFeatures/ServiceFeatures';
import ServiceInfo from '@/components/services/ServiceInfo/ServiceInfo';
import { featuresList, technicalInfo } from '@/lib/bms.utils';

export default function BMSPage() {
  const service = getServiceById('bms');

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
        imageUrl="/images/services/bms-hero.jpg"
        videoUrl={undefined}
      />
      <ServiceInfo
        title="Servicio de Instalación"
        subtitle="Nuestro equipo de instalación profesional garantiza que su sistema BMS optimice completamente la gestión de su edificio, mejorando la eficiencia y reduciendo costos operativos."
        sections={technicalInfo}
        gradientFrom="from-red-600"
        gradientTo="to-red-700"
        imageUrl="/images/services/bms-installation.jpg"
        imageAlt="Instalación de sistema BMS"
      />
      <ServiceFeatures
        title="Características Principales"
        subtitle="Funcionalidades avanzadas que distinguen nuestros sistemas BMS de la competencia."
        features={featuresList}
        gradientFrom="from-red-600"
        gradientTo="to-red-700"
        imageUrl="/images/services/bms-features.jpg"
        imageAlt="Sistema BMS en instalación"
      />
    </div>
  );
}
