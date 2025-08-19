import Image from 'next/image';
import Link from 'next/link';
import { NewsCardProps } from '@/types/news';
import { formatDate, generateSlug } from '@/utils/news';
import ShareButtons from './ShareButtons';

export default function NewsCard({ news }: NewsCardProps) {
  return (
    <article className="bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <Link href={`/noticia/${news.id}/${generateSlug(news.title)}`}>
        <div className="flex flex-col md:flex-row">
          {/* Imagen a la izquierda */}
          <div className="relative w-full md:w-48 h-48 md:h-auto flex-shrink-0">
            <Image
              src={news.imageUrl}
              alt={news.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 192px"
              priority={false}
              loading="lazy"
            />
          </div>
          
          {/* Contenido a la derecha */}
          <div className="flex-1 p-6 flex flex-col justify-between">
            <div>
              {/* Categoría */}
              <span className="inline-block bg-emerald-900 text-emerald-300 text-xs font-medium px-2.5 py-0.5 rounded-full mb-2">
                {news.category}
              </span>
              
              {/* Título */}
              <h2 className="text-xl font-bold text-white mb-2 line-clamp-2 hover:text-emerald-400 transition-colors">
                {news.title}
              </h2>
              
              {/* Descripción */}
              <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                {news.shortDescription}
              </p>
            </div>
            
            {/* Meta información */}
            <div className="mt-4 flex items-center justify-between text-sm text-gray-400">
              <div className="flex items-center space-x-4">
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  {news.author}
                </span>
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  {formatDate(news.publishedAt)}
                </span>
              </div>
              
              {/* Leer más */}
              <span className="text-emerald-400 font-medium hover:text-emerald-300 transition-colors">
                Leer más →
              </span>
            </div>
          </div>
        </div>
      </Link>

      {/* Share Buttons */}
      <div className="p-4 pt-0">
        <ShareButtons
          url={`https://tecbits.com/noticia/${news.id}/${generateSlug(news.title)}`}
          title={news.title}
          description={news.shortDescription}
          className="justify-center"
        />
      </div>
    </article>
  );
}
