import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getNewsById, getAllNews, formatDate, generateSlug } from '@/utils/news';
import ShareButtons from '@/components/ShareButtons';
import { siteConfig } from '@/config/site';

interface NewsPageProps {
  params: Promise<{
    id: string;
    slug: string;
  }>;
}

// Generar metadatos dinámicos para cada noticia
export async function generateMetadata({ params }: NewsPageProps): Promise<Metadata> {
  const { id, slug } = await params;
  const news = getNewsById(id);
  
  if (!news) {
    return {
      title: 'Noticia no encontrada',
      description: 'La noticia que buscas no existe.',
    };
  }

  const expectedSlug = generateSlug(news.title);
  
  // Si el slug no coincide, redirigir a la URL correcta
  if (slug !== expectedSlug) {
    return {
      title: 'Redirigiendo...',
    };
  }

  return {
    title: news.title,
    description: news.shortDescription,
    openGraph: {
      title: news.title,
      description: news.shortDescription,
      type: 'article',
      publishedTime: news.publishedAt,
      authors: [news.author],
      images: [
        {
          url: news.imageUrl,
          width: 1200,
          height: 630,
          alt: news.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: news.title,
      description: news.shortDescription,
      images: [news.imageUrl],
    },
  };
}

// Generar rutas estáticas para todas las noticias
export async function generateStaticParams() {
  const allNews = getAllNews();
  
  return allNews.map((news) => ({
    id: news.id,
    slug: generateSlug(news.title),
  }));
}

export default async function NewsPage({ params }: NewsPageProps) {
  const { id, slug } = await params;
  const news = getNewsById(id);
  
  if (!news) {
    notFound();
  }

  const expectedSlug = generateSlug(news.title);
  
  // Si el slug no coincide, redirigir a la URL correcta
  if (slug !== expectedSlug) {
    // En un caso real, aquí redirigiríamos a la URL correcta
    // Por ahora, solo verificamos que exista
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <ol className="flex items-center space-x-2 text-sm text-gray-400">
          <li>
            <Link href="/" className="hover:text-emerald-400 transition-colors">
              Inicio
            </Link>
          </li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li>
            <Link href="/noticias" className="hover:text-emerald-400 transition-colors">
              Noticias
            </Link>
          </li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li className="text-white truncate">
            {news.title}
          </li>
        </ol>
      </nav>

      {/* Article Header */}
      <header className="mb-8">
        {/* Category */}
        <span className="inline-block bg-emerald-900 text-emerald-300 text-sm font-medium px-3 py-1 rounded-full mb-4">
          {news.category}
        </span>
        
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          {news.title}
        </h1>
        
        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 mb-6">
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
            Por {news.author}
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            {formatDate(news.publishedAt)}
          </div>
        </div>
        
        {/* Short Description */}
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          {news.shortDescription}
        </p>
      </header>

      {/* Featured Image */}
      <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
        <Image
          src={news.imageUrl}
          alt={news.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 800px"
          priority
        />
      </div>

      {/* Article Content */}
      <div className="prose prose-lg max-w-none">
        {news.content.split('\n\n').map((paragraph, index) => (
          <p key={index} className="text-gray-300 leading-relaxed mb-6">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Share Buttons */}
      <div className="mt-8 pt-8 border-t border-gray-700">
        <ShareButtons
          url={`${siteConfig.seo.siteUrl}/noticia/${news.id}/${generateSlug(news.title)}`}
          title={news.title}
          description={news.shortDescription}
        />
      </div>

      {/* Article Footer */}
      <footer className="mt-12 pt-8 border-t border-gray-700">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="text-sm text-gray-400">
            <p>Publicado el {formatDate(news.publishedAt)}</p>
            <p>Autor: {news.author}</p>
          </div>
          
          <div className="flex space-x-4">
            <Link
              href="/noticias"
              className="inline-flex items-center px-4 py-2 border border-gray-600 rounded-md text-sm font-medium text-gray-300 bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              ← Volver a Noticias
            </Link>
          </div>
        </div>
      </footer>
    </article>
  );
}
