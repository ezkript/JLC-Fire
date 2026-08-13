'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Maximize2, Play, Volume2, VolumeX } from 'lucide-react';
import { ServiceGalleryProps as Props } from './ServiceGallery.types';
import { GalleryItem } from '@/lib/firePiping.utils';
import ImageModal from '@/components/global/ImageModal/ImageModal';
import { AnimatedSection } from '@/components/global/AnimatedSection/AnimatedSection';

/* —— Sub-componente con estado local por ítem de video —————————————— */
function VideoCard({
  item,
  onExpand
}: {
  item: GalleryItem;
  onExpand: () => void;
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);

  const handleMuteToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  return (
    <div
      className="relative h-full w-full cursor-pointer"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
      onClick={() => setIsPlaying(true)}
    >
      {/* Thumbnail o fallback */}
      {item.thumbnail ? (
        <Image
          src={item.thumbnail}
          alt={item.mediaAlt}
          fill
          className="object-cover"
        />
      ) : (
        <div className="w-full h-full bg-gray-900 flex items-center justify-center">
          <span className="text-white/40 text-sm">Video</span>
        </div>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />

      {/* Botón Play (visible hasta que empiece) */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white transition-colors duration-300 shadow-lg">
            <Play className="w-8 h-8 text-dark-900 ml-1" />
          </div>
        </div>
      )}

      {/* Control de mute */}
      {showControls && isPlaying && (
        <div className="absolute bottom-4 right-4 z-10">
          <button
            onClick={handleMuteToggle}
            className="w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4" />
            ) : (
              <Volume2 className="w-4 h-4" />
            )}
          </button>
        </div>
      )}

      {/* Expand */}
      <div
        className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md z-10"
        onClick={e => {
          e.stopPropagation();
          onExpand();
        }}
      >
        <Maximize2 className="w-4 h-4 text-primary-600" />
      </div>

      {/* iframe del video */}
      <iframe
        src={item.mediaUrl}
        className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${
          isPlaying ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

/* —— Componente principal ——————————————————————————————————————————— */
export default function ServiceGallery({
  title = 'Galería de Instalaciones',
  subtitle,
  items
}: Props) {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container-custom">
        <AnimatedSection direction="up" delay={0.1}>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-dark-900 tracking-tight mb-4">
              {title}
            </h2>
            {subtitle && (
              <p className="text-base text-neutral-600">{subtitle}</p>
            )}
          </div>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.2}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500 bg-neutral-100"
              >
                <div className="relative h-56 sm:h-64 w-full overflow-hidden">
                  {item.type === 'video' ? (
                    <VideoCard
                      item={item}
                      onExpand={() => setSelectedItem(item)}
                    />
                  ) : (
                    <>
                      <Image
                        src={item.mediaUrl}
                        alt={item.mediaAlt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        onClick={() => setSelectedItem(item)}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 via-transparent to-transparent pointer-events-none" />
                      <div
                        className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md cursor-pointer"
                        onClick={() => setSelectedItem(item)}
                      >
                        <Maximize2 className="w-4 h-4 text-primary-600" />
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>

      {selectedItem && (
        <ImageModal
          isOpen={!!selectedItem}
          onClose={() => setSelectedItem(null)}
          mediaSrc={selectedItem.mediaUrl}
          mediaAlt={selectedItem.mediaAlt}
          isVideo={selectedItem.type === 'video'}
        />
      )}
    </section>
  );
}
