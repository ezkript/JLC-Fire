import { AlertTriangle, Zap, Clock, ShieldCheck } from 'lucide-react';
import { TrendingUp, CheckCircle, Cpu, Network } from 'lucide-react';
import { Activity, Database } from 'lucide-react';

export const featuresList = [
  {
    title: 'Detección Temprana',
    description:
      'Sensores que detectan humo, calor y gases tóxicos antes de que el fuego se propague, dando tiempo para evacuar y responder.',
    icon: AlertTriangle
  },
  {
    title: 'Alertas Automáticas',
    description:
      'El sistema envía alertas automáticas a personal de seguridad, bomberos y autoridades cuando detecta un incendio.',
    icon: Zap
  },
  {
    title: 'Funcionamiento Continuo',
    description:
      'El sistema funciona las 24 horas del día, los 7 días de la semana, sin interrupciones, para proteger su instalación.',
    icon: Clock
  },
  {
    title: 'Conectado con Otros Sistemas',
    description:
      'Se conecta automáticamente con sistemas de extinción, alarmas de evacuación y control de acceso para una respuesta coordinada.',
    icon: ShieldCheck
  },
  {
    title: 'Fácil de Usar',
    description:
      'Panel de control simple e intuitivo que cualquier persona puede usar para verificar el estado del sistema.',
    icon: TrendingUp
  },
  {
    title: 'Cumple Normativas',
    description:
      'Todos nuestros sistemas cumplen con las normativas de seguridad locales e internacionales vigentes.',
    icon: CheckCircle
  }
];

export const technicalInfo = [
  {
    title: 'Instalación Profesional',
    content:
      'Nuestro equipo de técnicos especializados realiza la instalación completa del sistema de detección de incendios. Incluye la colocación estratégica de sensores, conexión de cables, configuración del panel de control y pruebas exhaustivas para garantizar el funcionamiento correcto.',
    icon: Cpu
  },
  {
    title: 'Configuración Personalizada',
    content:
      'Cada instalación se adapta a las necesidades específicas de su edificio. Analizamos el layout, identificamos las áreas de mayor riesgo y configuramos la sensibilidad de los detectores según el tipo de actividad y materiales presentes.',
    icon: Network
  },
  {
    title: 'Integración con Sistemas Existentes',
    content:
      'Conectamos el sistema de detección con otros sistemas de seguridad ya instalados, como extinción automática, sistemas de evacuación y control de acceso. Esto crea una red de protección integral que funciona de manera coordinada.',
    icon: Activity
  },
  {
    title: 'Capacitación y Documentación',
    content:
      'Después de la instalación, capacitamos a su personal sobre el uso del sistema, mantenimiento básico y procedimientos de emergencia. Entregamos documentación completa incluyendo manuales de usuario y planos de instalación.',
    icon: Database
  }
];
