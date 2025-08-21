# JLC Fire - Sistemas de Seguridad y Detección de Incendios

Sitio web portfolio para empresa especializada en sistemas de seguridad electrónica, detección y extinción de incendios, control de acceso, BMS, mantenimiento y software gráfico.

## Tecnologías

- **Next.js 14** - Framework de React
- **TypeScript** - Tipado estático
- **TailwindCSS** - Framework de CSS
- **Lucide React** - Iconografía

## Estructura del Proyecto

```
src/
├── app/                          
│   ├── about/             
│   ├── projects/          
│   ├── contact/           
│   ├── globals.css       
│   ├── layout.tsx         
│   └── page.tsx           
├── components/           
│   ├── layout/           
│   │   ├── Header/       
│   │   ├── Footer/       
│   │   └── Navigation/   
│   └── home/             
│       ├── Hero/         
│       └── Services/     
│   └── certifications/ 
│       ├── CertificationsList/
│       └── CertificationCard/
├── lib/                  
│   ├── constants.ts      
│   └── utils.ts          
└── types/               
    └── index.ts          
```

## Arquitectura de Componentes

Cada componente sigue el patrón de división de responsabilidades:

- `Component.tsx` - Lógica de presentación
- `Component.types.ts` - Tipos e interfaces
- `Component.helper.ts` - Lógica de negocio y utilidades
- `index.ts` - Exportaciones

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
Portfolio para la empresa JLC Fire
