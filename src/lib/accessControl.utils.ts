import { Key, Shield, Clock, ShieldCheck } from 'lucide-react';
import { TrendingUp, CheckCircle, Cpu, Network } from 'lucide-react';
import { Activity, Database } from 'lucide-react';

export const featuresList = [
  {
    title: 'Tarjetas RFID',
    description:
      'Sistemas de identificación por tarjetas de proximidad que permiten acceso rápido y seguro sin contacto físico.',
    icon: Key
  },
  {
    title: 'Lectores Biométricos',
    description:
      'Tecnología de huella dactilar y reconocimiento facial para máxima seguridad y comodidad de uso.',
    icon: Shield
  },
  {
    title: 'Control de Horarios',
    description:
      'Configuración de horarios específicos para diferentes usuarios y áreas, con restricciones personalizables.',
    icon: Clock
  },
  {
    title: 'Registro Detallado',
    description:
      'Registro completo de todos los accesos con fecha, hora, usuario y área, para auditoría y seguridad.',
    icon: ShieldCheck
  },
  {
    title: 'Integración con CCTV',
    description:
      'Conecta automáticamente con sistemas de videovigilancia para verificación visual de accesos.',
    icon: TrendingUp
  },
  {
    title: 'Gestión Centralizada',
    description:
      'Panel de control centralizado para administrar todos los accesos, usuarios y permisos desde un solo lugar.',
    icon: CheckCircle
  }
];

export const technicalInfo = [
  {
    title: 'Instalación Profesional',
    content:
      'Nuestro equipo especializado instala sistemas de control de acceso completos, incluyendo lectores, controladores, software de gestión y configuración de permisos según sus necesidades específicas.',
    icon: Cpu
  },
  {
    title: 'Configuración de Permisos',
    content:
      'Configuramos niveles de acceso personalizados para diferentes usuarios, horarios y áreas. Incluye configuración de tarjetas RFID, lectores biométricos y software de gestión.',
    icon: Network
  },
  {
    title: 'Integración con Sistemas Existentes',
    content:
      'Conectamos el sistema de control de acceso con otros sistemas de seguridad como CCTV, alarmas y sistemas de incendio para crear una red de protección integral.',
    icon: Activity
  },
  {
    title: 'Capacitación del Personal',
    content:
      'Entrenamos a su equipo sobre el uso del sistema, gestión de usuarios, generación de reportes y procedimientos de seguridad. Incluimos manuales de usuario.',
    icon: Database
  }
];
