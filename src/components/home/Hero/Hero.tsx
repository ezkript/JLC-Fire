'use client';
import { HeroProps as Props } from './Hero.types';
import { heroProjects, getCurrentProject } from './Hero.helper';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Button from '@/components/global/Button/Button';
import { AnimatedSection } from '@/components/global/AnimatedSection/AnimatedSection';

export default function Hero(props: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const currentProject = getCurrentProject(currentIndex);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((currentIndex + 1) % heroProjects.length);
        setIsTransitioning(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToSlide = (index: number) => {
    if (index === currentIndex) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <section className="relative h-[calc(100vh-80px)]">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={currentProject.image}
          alt={currentProject.title}
          fill
          priority
          className="object-cover transition-all duration-1000"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="container-custom text-center text-white">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection delay={0.2} direction="up">
              <h1
                className={`text-xl sm:text-xl md:text-xl lg:text-xl xl:text-xl font-bold mb-4 sm:mb-6 leading-tight text-primary-500 drop-shadow-lg transition-all duration-300 ${
                  isTransitioning
                    ? 'opacity-0 transform translate-y-4'
                    : 'opacity-100 transform translate-y-0'
                }`}
              >
                {currentProject.title}
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.2} direction="up">
              <p
                className={`text-sm sm:text-sm md:text-sm lg:text-sm mb-6 sm:mb-8 text-white leading-relaxed max-w-3xl mx-auto drop-shadow-md transition-all duration-300 delay-75 ${
                  isTransitioning
                    ? 'opacity-0 transform translate-y-4'
                    : 'opacity-100 transform translate-y-0'
                }`}
              >
                {currentProject.description}
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.6} direction="up">
              <div
                className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center transition-all duration-300 delay-150 ${
                  isTransitioning
                    ? 'opacity-0 transform translate-y-4'
                    : 'opacity-100 transform translate-y-0'
                }`}
              >
                <Button
                  href={currentProject.ctaLink}
                  variant="primary"
                  size="lg"
                  className="text-sm sm:text-sm lg:text-sm px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
                >
                  {currentProject.ctaText}
                </Button>
                <Button
                  href="/services"
                  variant="outline-light"
                  size="lg"
                  className="text-sm sm:text-sm lg:text-sm px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
                >
                  Ver Todos los Servicios
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-1.5 sm:space-x-2">
          {heroProjects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-primary-500'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Ir al servicio ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
        <div
          className="h-full bg-primary-500 transition-all duration-300 ease-linear"
          style={{
            width: `${((currentIndex + 1) / heroProjects.length) * 100}%`
          }}
        />
      </div>
    </section>
  );
}
