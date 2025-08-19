import ResponsiveImage from './ResponsiveImage';

interface ImageGalleryProps {
  images: Array<{
    src: string;
    alt: string;
    caption?: string;
  }>;
  layout?: 'grid' | 'masonry' | 'carousel';
  columns?: 1 | 2 | 3 | 4;
  aspectRatio?: 'square' | 'video' | 'wide' | 'auto';
  className?: string;
}

export default function ImageGallery({
  images,
  layout = 'grid',
  columns = 2,
  aspectRatio = 'video',
  className = ''
}: ImageGalleryProps) {
  const gridColumns = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  };

  if (layout === 'grid') {
    return (
      <div className={`grid gap-4 ${gridColumns[columns]} ${className}`}>
        {images.map((image, index) => (
          <div key={index} className="relative group">
            <ResponsiveImage
              src={image.src}
              alt={image.alt}
              aspectRatio={aspectRatio}
              className="group-hover:scale-105 transition-transform duration-300"
            />
            {image.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-2 text-sm">
                {image.caption}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }

  if (layout === 'masonry') {
    return (
      <div className={`columns-1 md:columns-2 lg:columns-3 gap-4 ${className}`}>
        {images.map((image, index) => (
          <div key={index} className="break-inside-avoid mb-4 group">
            <ResponsiveImage
              src={image.src}
              alt={image.alt}
              aspectRatio="auto"
              className="group-hover:scale-105 transition-transform duration-300"
            />
            {image.caption && (
              <div className="mt-2 text-sm text-gray-400">
                {image.caption}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }

  // Carousel layout (simple version)
  return (
    <div className={`flex overflow-x-auto gap-4 pb-4 ${className}`}>
      {images.map((image, index) => (
        <div key={index} className="flex-shrink-0 w-80 group">
          <ResponsiveImage
            src={image.src}
            alt={image.alt}
            aspectRatio={aspectRatio}
            className="group-hover:scale-105 transition-transform duration-300"
          />
          {image.caption && (
            <div className="mt-2 text-sm text-gray-400">
              {image.caption}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
