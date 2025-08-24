'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import { ProjectCardProps as Props } from './ProjectCard.types';
import { AnimatedSection } from '@/components/global/AnimatedSection/AnimatedSection';
import { getIconComponent } from '@/lib/icon-utils';
import { getCategoryColor, getCategoryLabel } from './ProjectCard.helper';

export const ProjectCard = (props: Props) => {
  const { project, delay = 0 } = props;
  const IconComponent = getIconComponent(project.icon);

  return (
    <AnimatedSection direction="up" delay={delay}>
      <Link
        href={`/projects/${project.id}`}
        className="group block bg-white rounded-2xl border-2 border-transparent hover:border-primary-200 hover:shadow-xl transition-all duration-500 overflow-hidden"
      >
        <div className="relative h-48 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute top-4 left-4">
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(project.category)}`}
            >
              {getCategoryLabel(project.category)}
            </span>
          </div>
          <div className="absolute bottom-4 right-4">
            <div className="w-12 h-12 bg-white/90 rounded-xl flex items-center justify-center shadow-lg">
              <IconComponent className="w-6 h-6 text-primary-600" />
            </div>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-lg font-bold text-dark-900 mb-2 group-hover:text-primary-700 transition-colors duration-300 line-clamp-2">
            {project.title}
          </h3>
          <p className="text-sm text-dark-600 mb-4 line-clamp-2">
            {project.subtitle}
          </p>
          <div className="space-y-2 mb-4">
            <div className="flex items-center text-xs text-dark-500">
              <MapPin className="w-3 h-3 mr-2 flex-shrink-0" />
              <span className="truncate">{project.location}</span>
            </div>
            <div className="flex items-center justify-between text-xs text-dark-500">
              <div className="flex items-center">
                <Calendar className="w-3 h-3 mr-2 flex-shrink-0" />
                <span>{project.year}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-3 h-3 mr-2 flex-shrink-0" />
                <span>{project.duration}</span>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <p className="text-xs text-dark-500 mb-1">Cliente</p>
            <p className="text-sm font-medium text-dark-700 truncate">
              {project.client}
            </p>
          </div>
          <div className="mb-4">
            <p className="text-xs text-dark-500 mb-2">Servicios principales</p>
            <div className="flex flex-wrap gap-1">
              {project.services.slice(0, 3).map((service, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded-md"
                >
                  {service}
                </span>
              ))}
              {project.services.length > 3 && (
                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                  +{project.services.length - 3} más
                </span>
              )}
            </div>
          </div>
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <span className="text-sm font-medium text-primary-600 group-hover:text-primary-700 transition-colors">
              Ver detalles
            </span>
            <ArrowRight className="w-4 h-4 text-primary-600 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </Link>
    </AnimatedSection>
  );
};
