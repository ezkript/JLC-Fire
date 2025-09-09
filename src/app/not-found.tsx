'use client';

import Link from 'next/link';
import { Home, ArrowLeft, Flame } from 'lucide-react';

export default function NotFound() {
  const handleGoBack = () => {
    if (typeof window !== 'undefined') {
      window.history.back();
    }
  };

  return (
    <div className="h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-2 h-2 bg-red-500/60 rounded-full animate-ping delay-300"></div>
        <div className="absolute top-1/4 right-1/3 w-1 h-1 bg-orange-400/80 rounded-full animate-ping delay-700"></div>
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-red-400/70 rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-yellow-400/60 rounded-full animate-ping delay-500"></div>
      </div>
      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        <div className="mb-6 animate-bounce">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full border-2 border-red-500/30 backdrop-blur-sm">
            <Flame className="w-8 h-8 text-red-500 animate-pulse" />
          </div>
        </div>
        <div className="mb-6">
          <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600 mb-2">
            404
          </h1>
          <div className="w-20 h-0.5 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full"></div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Página no encontrada
          </h2>
          <p className="text-base text-neutral-300 mb-2">
            Esta página se ha extinguido
          </p>
          <p className="text-sm text-neutral-400">
            Pero no te preocupes, podemos ayudarte
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6">
          <Link
            href="/"
            className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25"
          >
            <Home className="w-4 h-4 mr-2" />
            Inicio
          </Link>
          <button
            onClick={handleGoBack}
            className="group inline-flex items-center px-6 py-3 border border-neutral-600 hover:border-red-500 text-neutral-300 hover:text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Atrás
          </button>
        </div>
        <div className="text-center">
          <p className="text-xs text-neutral-500 mb-2">¿Necesitas ayuda?</p>
          <Link
            href="/contact"
            className="inline-flex items-center text-sm text-red-400 hover:text-red-300 font-medium transition-colors duration-300 hover:underline"
          >
            Contactar Soporte
            <ArrowLeft className="w-3 h-3 ml-1 rotate-180" />
          </Link>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-1 h-1 bg-red-400/40 rounded-full animate-pulse delay-200"></div>
        <div className="absolute top-3/4 right-1/6 w-0.5 h-0.5 bg-orange-400/50 rounded-full animate-pulse delay-800"></div>
        <div className="absolute top-1/2 left-1/12 w-1.5 h-1.5 bg-red-300/30 rounded-full animate-pulse delay-1200"></div>
        <div className="absolute bottom-1/4 right-1/3 w-0.5 h-0.5 bg-yellow-400/40 rounded-full animate-pulse delay-600"></div>
      </div>
    </div>
  );
}
