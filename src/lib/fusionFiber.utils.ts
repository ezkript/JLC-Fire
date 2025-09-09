import { Activity, Cpu, Database, Zap } from 'lucide-react';
import { Shield, ShieldCheck, Network } from 'lucide-react';

export const featuresList = [
  {
    title: 'Fusión de fibra monomodo y multimodo',
    description:
      'Empalmes de alta calidad para fibras monomodo y multimodo con pérdidas mínimas y máxima confiabilidad del enlace.',
    icon: Network
  },
  {
    title: 'Terminaciones en conectores',
    description:
      'Instalación de conectores SC, LC, ST y otros tipos según requerimientos, con pulido y certificación de calidad.',
    icon: Shield
  },
  {
    title: 'Certificación de enlaces',
    description:
      'Medición y certificación completa de enlaces con OTDR, power meter y visual fault locator para garantizar rendimiento.',
    icon: ShieldCheck
  },
  {
    title: 'Reparación de cables dañados',
    description:
      'Servicio de emergencia para reparación de cables ópticos dañados con restauración rápida del servicio.',
    icon: Zap
  }
];

export const technicalInfo = [
  {
    title: 'Equipos de fusión profesional',
    content:
      'Utilizamos equipos de fusión de última generación para garantizar empalmes de alta calidad con pérdidas mínimas y máxima durabilidad.',
    icon: Network
  },
  {
    title: 'Medición y certificación',
    content:
      'Certificación completa de enlaces con equipos OTDR, power meter y VFL para verificar rendimiento y localizar fallas.',
    icon: Cpu
  },
  {
    title: 'Documentación técnica',
    content:
      'Entrega de reportes de medición, certificados de calidad y documentación técnica completa del trabajo realizado.',
    icon: Database
  },
  {
    title: 'Servicio técnico especializado',
    content:
      'Personal técnico certificado con experiencia en fusión de fibra óptica y resolución de problemas complejos.',
    icon: Activity
  }
];
