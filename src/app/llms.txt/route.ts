import { NextResponse } from 'next/server';

export async function GET() {
  const content = `JLC Fire - Sistemas de Seguridad y Protección contra Incendios

Acerca de la empresa:
JLC Fire es una empresa especializada en brindar soluciones integrales en sistemas de seguridad electrónica, detección y extinción de incendios, control de acceso, BMS (Building Management System) y mantenimiento preventivo.
Destacan por su ingeniería, instalación y mantenimiento bajo normas internacionales como NFPA (13, 14, 20, 72, etc.).

Servicios Principales:
1. Detección de Incendios: Instalación y mantenimiento de sistemas inteligentes de detección de humo y fuego.
2. Extinción de Incendios: Sistemas automáticos mediante agentes limpios, agua, espuma o gases.
3. Cañerías contra Incendios: Ingeniería, ranurado mecánico, soldadura y montaje de redes, rociadores y salas de bombas.
4. Sistemas de Aspiración Temprana (VESDA): Detección de humo por aspiración para respuesta ultra temprana.
5. Sistemas BMS: Gestión inteligente y centralizada de edificios.
6. Control de Acceso: Gestión de acceso de personas y biometría.
7. Fusión de Fibra Óptica: Tendido y certificación de fibra óptica.
8. Mantenimiento Preventivo y Correctivo: Aseguramiento de la operatividad continua de sistemas.
9. Software Gráfico: Integración visual de sistemas de seguridad.

Contacto:
Teléfono: +54 9 11 3292-6347
Sitio Web: https://jlc-fire.vercel.app
`;

  return new NextResponse(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8'
    }
  });
}
