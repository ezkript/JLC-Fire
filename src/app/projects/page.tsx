import type { Metadata } from 'next';
import { projectsData } from '@/lib/projects-data';

export const metadata: Metadata = {
  title: 'Proyectos | JLC Fire - Casos de Éxito',
  description:
    'Explora nuestros casos de éxito y proyectos implementados en protección contra incendios, sistemas BMS y seguridad corporativa.',
  alternates: {
    canonical: '/projects'
  },
  openGraph: {
    title: 'Proyectos y Casos de Éxito | JLC Fire',
    description:
      'Explora nuestros proyectos en protección contra incendios y sistemas BMS.',
    url: '/projects',
    type: 'website'
  }
};
import ProjectsList from '@/components/projects/ProjectsList/ProjectsList';

export default function ProjectsPage() {
  return <ProjectsList projects={projectsData} />;
}
