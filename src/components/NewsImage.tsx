import Image from 'next/image';

interface NewsImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export default function NewsImage({
  src,
  alt,
  className = '',
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 800px, 1200px'
}: NewsImageProps) {
  return (
    <div className={`relative w-full rounded-lg overflow-hidden bg-gray-700 shadow-lg ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={800}
        className="w-full h-auto object-contain transition-transform duration-300 hover:scale-105"
        sizes={sizes}
        priority={priority}
        style={{
          objectFit: 'contain',
          objectPosition: 'center'
        }}
      />
    </div>
  );
}
