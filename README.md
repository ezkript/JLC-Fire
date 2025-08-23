# JLC Fire - Sistemas de Seguridad y Detección de Incendios

Sitio web portfolio para empresa especializada en sistemas de seguridad electrónica, detección y extinción de incendios, control de acceso, BMS, mantenimiento y software gráfico.

## Tecnologías

- **Next.js 14** - Framework de React
- **TypeScript** - Tipado estático
- **TailwindCSS** - Framework de CSS
- **Lucide React** - Iconografía

## Arquitectura de Componentes

Cada componente sigue el patrón de división de responsabilidades:

- `Component.tsx` - Lógica de presentación
- `Component.types.ts` - Tipos e interfaces
- `Component.helper.ts` - Lógica de negocio y utilidades

## Páginas

- **Home** (`/`) - Página principal con hero y servicios
- **About** (`/about`) - Información sobre la empresa
- **Projects** (`/projects`) - Portfolio de proyectos
- **Certifications** (`/certifications`) - Certificaciones y acreditaciones
- **Contact** (`/contact`) - Formulario de contacto

## Estilos

- TailwindCSS configurado con colores personalizados
- Sistema de diseño con componentes reutilizables
- Responsive design para todos los dispositivos

## Configuración

- TypeScript configurado con paths aliases
- ESLint para linting
- PostCSS para procesamiento de CSS
- Configuración optimizada para Next.js 14

## Variables de Entorno

El proyecto utiliza variables de entorno para configurar EmailJS:

```bash
# Copiar el archivo de ejemplo
cp env.example .env.local

# Configurar las siguientes variables:
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```
