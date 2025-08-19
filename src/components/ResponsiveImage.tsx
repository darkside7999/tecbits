import Image from 'next/image';
import { ReactNode } from 'react';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  sizes?: string;
  priority?: boolean;
  loading?: 'lazy' | 'eager';
  aspectRatio?: 'square' | 'video' | 'wide' | 'auto';
  children?: ReactNode;
}

export default function ResponsiveImage({
  src,
  alt,
  className = '',
  containerClassName = '',
  sizes = '(max-width: 768px) 100vw, 800px',
  priority = false,
  loading = 'lazy',
  aspectRatio = 'auto',
  children
}: ResponsiveImageProps) {
  // Clases de aspecto ratio predefinidas
  const aspectRatioClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    wide: 'aspect-[16/9]',
    auto: ''
  };

  return (
    <div className={`relative overflow-hidden bg-gray-700 ${aspectRatioClasses[aspectRatio]} ${containerClassName}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover object-center transition-transform duration-300 hover:scale-105 ${className}`}
        sizes={sizes}
        priority={priority}
        loading={loading}
        style={{
          objectFit: 'cover',
          objectPosition: 'center'
        }}
      />
      {children && (
        <div className="absolute inset-0 flex items-center justify-center">
          {children}
        </div>
      )}
    </div>
  );
}
