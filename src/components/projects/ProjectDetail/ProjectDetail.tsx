'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, MapPin, Clock, Users, Award } from 'lucide-react';
import { AnimatedSection } from '@/components/global/AnimatedSection/AnimatedSection';
import ProjectBreadcrumb from '../ProjectBreadcrumb/ProjectBreadcrumb';
import {
  sectionConfig,
  getCategoryLabel,
  getCategoryColor
} from './ProjectDetail.helper';
import { ProjectDetailProps as Props } from './ProjectDetails.types';

export default function ProjectDetail(props: Props) {
  const { project } = props;

  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-96 lg:h-[500px] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container-custom pb-12">
            <AnimatedSection direction="up" delay={0.2}>
              <div className="flex items-center gap-4 mb-4">
                <Link
                  href="/projects"
                  className="flex items-center gap-2 text-white hover:text-primary-300 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Volver a proyectos
                </Link>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(project.category)}`}
                >
                  {getCategoryLabel(project.category)}
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-white/90 max-w-3xl">
                {project.subtitle}
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container-custom">
          <ProjectBreadcrumb
            items={[
              { label: 'Proyectos', href: '/projects' },
              { label: project.title }
            ]}
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <AnimatedSection direction="up" delay={0.3}>
                <h2 className="text-2xl font-bold text-dark-900 mb-6">
                  Descripción del Proyecto
                </h2>
                <p className="text-lg text-dark-600 leading-relaxed mb-8">
                  {project.description}
                </p>
              </AnimatedSection>
              <AnimatedSection direction="up" delay={0.4}>
                <h3 className={sectionConfig.content.services.className}>
                  {sectionConfig.content.services.title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {project.services.map((service: string, index: number) => (
                    <div
                      key={index}
                      className={sectionConfig.content.services.itemClassName}
                    >
                      <div
                        className={
                          sectionConfig.content.services.bulletClassName
                        }
                      />
                      <span className="text-dark-700">{service}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
              <AnimatedSection direction="up" delay={0.5}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className={sectionConfig.content.challenges.className}>
                      {sectionConfig.content.challenges.title}
                    </h3>
                    <ul className="space-y-3">
                      {project.challenges.map(
                        (challenge: string, index: number) => (
                          <li
                            key={index}
                            className={
                              sectionConfig.content.challenges.itemClassName
                            }
                          >
                            <div
                              className={
                                sectionConfig.content.challenges.bulletClassName
                              }
                            />
                            <span className="text-dark-600">{challenge}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                  <div>
                    <h3 className={sectionConfig.content.solutions.className}>
                      {sectionConfig.content.solutions.title}
                    </h3>
                    <ul className="space-y-3">
                      {project.solutions.map(
                        (solution: string, index: number) => (
                          <li
                            key={index}
                            className={
                              sectionConfig.content.solutions.itemClassName
                            }
                          >
                            <div
                              className={
                                sectionConfig.content.solutions.bulletClassName
                              }
                            />
                            <span className="text-dark-600">{solution}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection direction="up" delay={0.6}>
                <h3 className={sectionConfig.content.results.className}>
                  {sectionConfig.content.results.title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {project.results.map((result: string, index: number) => (
                    <div
                      key={index}
                      className={sectionConfig.content.results.itemClassName}
                    >
                      <Award
                        className={sectionConfig.content.results.iconClassName}
                      />
                      <span className="text-dark-700">{result}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
              <AnimatedSection direction="up" delay={0.7}>
                <h3 className="text-xl font-bold text-dark-900 mb-4">
                  Tecnologías Utilizadas
                </h3>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gray-100 text-dark-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </AnimatedSection>
              <AnimatedSection direction="up" delay={0.8}>
                <h3 className="text-xl font-bold text-dark-900 mb-4">
                  Equipo del Proyecto
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.team.map((member, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg"
                    >
                      <Users className="w-5 h-5 text-primary-600 flex-shrink-0" />
                      <span className="text-dark-700">{member}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                <AnimatedSection direction="up" delay={0.4}>
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-dark-900 mb-4">
                      Información del Cliente
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-dark-500 mb-1">Cliente</p>
                        <p className="font-semibold text-dark-900">
                          {project.client}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-dark-500 mb-1">Ubicación</p>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-primary-600" />
                          <span className="text-dark-700">
                            {project.location}
                          </span>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-dark-500 mb-1">Año</p>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-primary-600" />
                          <span className="text-dark-700">{project.year}</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-dark-500 mb-1">Duración</p>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-primary-600" />
                          <span className="text-dark-700">
                            {project.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
                {project.testimonial && (
                  <AnimatedSection direction="up" delay={0.6}>
                    <div className="bg-white border-2 border-primary-200 rounded-2xl p-6">
                      <h3 className="text-lg font-bold text-dark-900 mb-4">
                        Testimonio del Cliente
                      </h3>
                      <blockquote className="text-dark-600 italic mb-4">
                        &quot;{project.testimonial.text}&quot;
                      </blockquote>
                      <div className="border-t border-gray-200 pt-4">
                        <p className="font-semibold text-dark-900">
                          {project.testimonial.author}
                        </p>
                        <p className="text-sm text-dark-500">
                          {project.testimonial.position}
                        </p>
                        <p className="text-sm text-primary-600">
                          {project.testimonial.company}
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                )}
                <AnimatedSection direction="up" delay={0.7}>
                  <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-6 text-white text-center">
                    <h3 className="text-lg text-white font-bold mb-2">
                      ¿Necesitas un proyecto similar?
                    </h3>
                    <p className="text-sm text-white mb-4 opacity-90">
                      Contáctanos para discutir cómo podemos ayudarte
                    </p>
                    <Link
                      href="/contact"
                      className="inline-block px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      Contactar
                    </Link>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>
      {project.gallery && project.gallery.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <AnimatedSection direction="up" delay={0.8}>
              <h2 className="text-2xl font-bold text-dark-900 mb-8 text-center">
                Galería del Proyecto
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.gallery.map((image, index) => (
                  <div
                    key={index}
                    className="relative h-64 rounded-2xl overflow-hidden"
                  >
                    <Image
                      src={image}
                      alt={`${project.title} - Imagen ${index + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}
    </div>
  );
}
