'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { ServiceDetail } from '@/lib/services-data';

interface ServiceCardProps {
  service: ServiceDetail;
  categoryColor: string;
  CategoryIcon: any;
}

export default function ServiceCard({
  service,
  categoryColor,
  CategoryIcon
}: ServiceCardProps) {
  const IconComponent = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <Link
        href={service.href}
        className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-neutral-100 hover:border-primary-200 overflow-hidden block"
      >
        <div className={`bg-gradient-to-br ${categoryColor} p-6 text-white`}>
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <IconComponent className="w-6 h-6" />
            </div>
            <CategoryIcon className="w-5 h-5 opacity-60" />
          </div>
          <h3 className="text-xl font-bold mb-2">{service.title}</h3>
          <p className="text-primary-100 text-sm">{service.subtitle}</p>
        </div>
        <div className="p-6">
          <p className="text-neutral-600 mb-6 leading-relaxed">
            {service.description}
          </p>
          <div className="space-y-3 mb-6">
            {service.features.slice(0, 3).map((feature, index) => (
              <div
                key={index}
                className="flex items-center text-sm text-neutral-600"
              >
                <CheckCircle className="w-4 h-4 text-primary-500 mr-3 flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
            <span className="text-sm font-medium text-primary-600">
              Ver detalles
            </span>
            <ArrowRight className="w-4 h-4 text-primary-600 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
