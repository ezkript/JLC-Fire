'use client';

import Link from 'next/link';
import { Flame, Shield, Key, Building2, Wrench, Monitor } from 'lucide-react';
import { ServicesProps as Props } from './Services.types';
import { services } from './Services.helper';

export default function Services(props: Props) {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-xl font-bold text-dark-900 mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-sm text-dark-600 max-w-3xl mx-auto">
            Soluciones integrales en sistemas de seguridad electrónica,
            detección y extinción de incendios
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          <div className="hidden sm:block absolute left-1/3 top-0 bottom-0 w-px bg-neutral-300" />
          <div className="hidden lg:block absolute left-2/3 top-0 bottom-0 w-px bg-neutral-300" />
          <div className="hidden sm:block absolute top-1/2 left-0 right-0 h-px bg-neutral-300" />
          <div className="hidden sm:block absolute top-1/2 left-1/3 right-0 h-px bg-neutral-300" />
          <div className="hidden lg:block absolute top-1/2 left-2/3 right-0 h-px bg-neutral-300" />
          {services.map((service, index) => (
            <Link
              key={service.id}
              href={service.href}
              className="group relative bg-white rounded-2xl p-8 border-2 border-transparent hover:border-primary-200 hover:bg-gradient-to-br hover:from-primary-50 hover:to-white transition-all duration-500 cursor-pointer block"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                      {service.icon === 'Flame' && (
                        <Flame className="w-5 h-5 text-primary-600" />
                      )}
                      {service.icon === 'Shield' && (
                        <Shield className="w-5 h-5 text-primary-600" />
                      )}
                      {service.icon === 'Key' && (
                        <Key className="w-5 h-5 text-primary-600" />
                      )}
                      {service.icon === 'Building2' && (
                        <Building2 className="w-5 h-5 text-primary-600" />
                      )}
                      {service.icon === 'Wrench' && (
                        <Wrench className="w-5 h-5 text-primary-600" />
                      )}
                      {service.icon === 'Monitor' && (
                        <Monitor className="w-5 h-5 text-primary-600" />
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-dark-900 group-hover:text-primary-700 transition-colors duration-300 mb-2">
                    {service.title}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-0.5 bg-primary-300 rounded-full" />
                    <div className="w-1 h-1 bg-primary-400 rounded-full" />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-100" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
