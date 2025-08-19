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
    <div className={`relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden bg-gray-700 shadow-lg ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-center transition-transform duration-300 hover:scale-105"
        sizes={sizes}
        priority={priority}
        style={{
          objectFit: 'cover',
          objectPosition: 'center'
        }}
      />
    </div>
  );
}
