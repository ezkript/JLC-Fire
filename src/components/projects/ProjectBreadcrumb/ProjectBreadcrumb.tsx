'use client';
import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { ProjectBreadcrumbProps as Props } from './ProjectBreadcrumb.types';

export default function ProjectBreadcrumb(props: Props) {
  const { items } = props;

  return (
    <nav className="flex items-center space-x-2 text-sm text-dark-600 mb-8">
      <Link
        href="/"
        className="flex items-center gap-1 hover:text-primary-600 transition-colors"
      >
        <Home className="w-4 h-4" />
        <span>Inicio</span>
      </Link>
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <ChevronRight className="w-4 h-4 text-dark-400" />
          {item.href ? (
            <Link
              href={item.href}
              className="hover:text-primary-600 transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-dark-900 font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
