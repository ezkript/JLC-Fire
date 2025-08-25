'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Play, Volume2, VolumeX } from 'lucide-react';
import { GalleryItemProps as Props } from './GalleryItem.types';

export default function GalleryItem(props: Props) {
  const { item, index, projectTitle } = props;
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);

  const handleVideoClick = () => {
    setIsPlaying(!isPlaying);
  };

  const handleMuteToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  if (item.type === 'image') {
    return (
      <div className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer">
        <Image
          src={item.src}
          alt={item.alt || `${projectTitle} - Imagen ${index + 1}`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
      </div>
    );
  }

  if (item.type === 'video') {
    return (
      <div
        className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
        onClick={handleVideoClick}
      >
        {item.thumbnail ? (
          <Image
            src={item.thumbnail}
            alt={item.alt || `${projectTitle} - Video ${index + 1}`}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-900 flex items-center justify-center">
            <span className="text-white text-sm">Video no disponible</span>
          </div>
        )}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
        {!isPlaying ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white transition-colors duration-300">
              <Play className="w-8 h-8 text-dark-900 ml-1" />
            </div>
          </div>
        ) : null}
        {showControls ? (
          <div className="absolute bottom-4 right-4 flex items-center gap-2">
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
        ) : null}
        <iframe
          src={item.src}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  }

  return null;
}
