'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ServiceHeroProps as Props } from './ServiceHero.types';

export default function ServiceHero(props: Props) {
  const { title, subtitle, description } = props;
  const { icon: Icon, gradientFrom, gradientTo } = props;
  const { imageUrl, videoUrl } = props;

  return (
    <section
      className={`py-20 bg-gradient-to-br ${gradientFrom} ${gradientTo} text-white relative overflow-hidden`}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-dots-pattern"></div>
      </div>
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center">
              <Icon className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium">
              {subtitle}
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              {description}
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Contactar
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {videoUrl && videoUrl.trim() !== '' ? (
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <video
                  className="w-full h-auto"
                  controls
                  poster={imageUrl}
                  preload="metadata"
                >
                  <source src={videoUrl} type="video/mp4" />
                  Tu navegador no soporta el elemento video.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
              </div>
            ) : imageUrl ? (
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <Image
                  src={imageUrl}
                  alt={title}
                  className="w-full h-auto object-cover"
                  width={800}
                  height={600}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10"></div>
              </div>
            ) : (
              <div className="relative w-full h-80 bg-white/10 rounded-2xl flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                <Icon className="w-32 h-32 text-white/30 relative z-10" />
                <div className="absolute bottom-4 right-4 text-white/40 text-sm">
                  Imagen disponible próximamente
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
