'use client';
import React from 'react';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import { AnimatedSection } from '@/components/global/AnimatedSection/AnimatedSection';
import { ProjectDetail } from '@/lib/projects-data';
import { ProjectsListProps as Props } from './ProjectsList.types';

export default function ProjectsList(props: Props) {
  const { projects } = props;

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <AnimatedSection direction="up" delay={0.2}>
          <div className="text-center mb-16">
            <h1 className="text-3xl font-bold text-dark-900 mb-6">
              Nuestros Proyectos
            </h1>
            <p className="text-lg text-dark-600 max-w-3xl mx-auto">
              Descubre cómo hemos ayudado a empresas de diversos sectores a
              implementar soluciones de seguridad y protección contra incendios
              de vanguardia.
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          direction="up"
          delay={0.3}
        >
          {projects.map((project: ProjectDetail, index: number) => (
            <ProjectCard
              key={project.id}
              project={project}
              delay={0.1 * (index + 1)}
            />
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
