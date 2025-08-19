import { Metadata } from 'next';
import { getAllNews } from '@/utils/news';
import NewsList from '@/components/NewsList';
import ShareButtons from '@/components/ShareButtons';

export const metadata: Metadata = {
  title: 'Todas las Noticias',
  description: 'Explora todas nuestras noticias y artículos. Encuentra la información que necesitas con nuestro buscador avanzado.',
  openGraph: {
    title: 'Todas las Noticias | TecBits',
    description: 'Explora todas nuestras noticias y artículos.',
  },
};

export default function NoticiasPage() {
  const allNews = getAllNews();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">
          Todas las Noticias
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Explora nuestra colección completa de noticias sobre IA y tecnología. 
          Utiliza el buscador para encontrar temas específicos.
        </p>
      </div>

      {/* News List with Search */}
      <NewsList news={allNews} showSearch={true} />

      {/* Share Buttons */}
      <div className="text-center mt-12">
        <ShareButtons
          url="https://tecbits.com/noticias"
          title="Todas las Noticias | TecBits"
          description="Explora nuestra colección completa de noticias sobre IA y tecnología"
        />
      </div>
    </div>
  );
}
