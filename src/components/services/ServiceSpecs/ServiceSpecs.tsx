'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ServiceSpecsProps as Props } from './ServiceSpects.types';

export default function ServiceSpecs(props: Props) {
  const { title, subtitle, specifications } = props;
  const { gradientFrom, gradientTo } = props;

  return (
    <section className="py-12 bg-neutral-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {specifications.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-neutral-100"
            >
              <div
                className={`w-12 h-12 bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-lg flex items-center justify-center mb-4`}
              >
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>

              <h3 className="text-lg font-semibold text-dark-900 mb-2">
                {spec.label}
              </h3>

              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-dark-900">
                  {spec.value}
                </span>
                {spec.unit && (
                  <span className="text-sm text-neutral-500">{spec.unit}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
