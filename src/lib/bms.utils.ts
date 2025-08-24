import { Building2, Shield, Clock, ShieldCheck } from 'lucide-react';
import { TrendingUp, CheckCircle, Cpu, Network } from 'lucide-react';
import { Activity, Database } from 'lucide-react';

export const featuresList = [
  {
    title: 'Control de HVAC',
    description:
      'Gestión centralizada de sistemas de calefacción, ventilación y aire acondicionado para optimizar el confort y la eficiencia energética.',
    icon: Building2
  },
  {
    title: 'Iluminación Inteligente',
    description:
      'Sistemas de iluminación automatizados que se adaptan a la ocupación, horarios y condiciones ambientales para ahorrar energía.',
    icon: Shield
  },
  {
    title: 'Monitoreo de Energía',
    description:
      'Seguimiento en tiempo real del consumo energético de todos los sistemas para identificar oportunidades de optimización.',
    icon: Clock
  },
  {
    title: 'Control de Elevadores',
    description:
      'Gestión inteligente de elevadores y escaleras mecánicas para mejorar la eficiencia y reducir tiempos de espera.',
    icon: ShieldCheck
  },
  {
    title: 'Seguridad Integrada',
    description:
      'Integración completa con sistemas de seguridad, control de acceso y CCTV para una gestión unificada del edificio.',
    icon: TrendingUp
  },
  {
    title: 'Interfaz Web y Móvil',
    description:
      'Acceso remoto a través de aplicaciones web y móviles para monitorear y controlar todos los sistemas desde cualquier lugar.',
    icon: CheckCircle
  }
];

export const technicalInfo = [
  {
    title: 'Instalación Integral',
    content:
      'Implementamos sistemas BMS completos que integran todos los sistemas del edificio: HVAC, iluminación, elevadores, seguridad y energía. Incluye instalación de sensores, controladores y software de gestión.',
    icon: Cpu
  },
  {
    title: 'Configuración Personalizada',
    content:
      'Configuramos el sistema según las necesidades específicas de su edificio, incluyendo horarios de operación, parámetros de confort, estrategias de ahorro energético y protocolos de seguridad.',
    icon: Network
  },
  {
    title: 'Integración de Sistemas',
    content:
      'Conectamos todos los sistemas existentes del edificio en una plataforma unificada, permitiendo control centralizado y optimización automática de todos los procesos.',
    icon: Activity
  },
  {
    title: 'Capacitación y Soporte',
    content:
      'Entrenamos a su equipo de operaciones sobre el uso del sistema BMS, generación de reportes, mantenimiento preventivo y resolución de problemas. Incluimos soporte técnico continuo.',
    icon: Database
  }
];
