'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ExpandableImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export default function ExpandableImage({
  src,
  alt,
  className = '',
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 800px, 1200px'
}: ExpandableImageProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {/* Imagen con altura limitada */}
      <div className={`relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden bg-gray-700 shadow-lg cursor-pointer group ${className}`} onClick={() => setIsExpanded(true)}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
          sizes={sizes}
          priority={priority}
          style={{
            objectFit: 'cover',
            objectPosition: 'center'
          }}
        />
        
        {/* Overlay con botón de expandir */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-90 rounded-full p-3">
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
          </div>
        </div>
        
        {/* Texto indicativo */}
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
          Click para expandir
        </div>
      </div>

      {/* Modal para imagen expandida */}
      {isExpanded && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setIsExpanded(false)}
        >
          <div className="relative max-w-full max-h-full">
            {/* Botón de cerrar */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(false);
              }}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Imagen expandida */}
            <Image
              src={src}
              alt={alt}
              width={1200}
              height={800}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              sizes="90vw"
              priority
              style={{
                objectFit: 'contain',
                objectPosition: 'center'
              }}
            />
            
            {/* Texto de la imagen */}
            <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-75 text-white p-3 rounded-lg">
              <p className="text-sm">{alt}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
