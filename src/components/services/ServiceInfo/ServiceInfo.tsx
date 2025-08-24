'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Settings } from 'lucide-react';
import { ServiceInfoProps as Props } from './ServiceInfo.types';

export default function ServiceInfo(props: Props) {
  const { title, subtitle, sections, imageAlt } = props;
  const { gradientFrom, gradientTo, imageUrl } = props;

  return (
    <section className="py-12">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-lg flex items-center justify-center flex-shrink-0`}
                >
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-dark-900 mb-3">
                    {section.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {imageUrl ? (
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <img
                  src={imageUrl}
                  alt={imageAlt || title}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
            ) : (
              <div className="w-full h-80 bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-xl flex items-center justify-center">
                <div className="text-center text-neutral-500">
                  <div
                    className={`w-24 h-24 bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-xl flex items-center justify-center mx-auto mb-4 opacity-50`}
                  >
                    <Settings className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-lg font-medium">Información Técnica</p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
