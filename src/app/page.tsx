import { Metadata } from 'next';
import { getRecentNews } from '@/utils/news';
import NewsList from '@/components/NewsList';
import ShareButtons from '@/components/ShareButtons';

export const metadata: Metadata = {
  title: 'TecBits - Noticias de IA y Tecnología',
  description: 'Descubre las últimas noticias sobre inteligencia artificial, machine learning, tecnología emergente e innovación digital. Análisis profundo de las tendencias que transforman el mundo.',
  keywords: 'inteligencia artificial, IA, machine learning, tecnología, innovación, noticias tecnológicas, AI news, tecnología emergente',
  openGraph: {
    title: 'TecBits - Noticias de IA y Tecnología',
    description: 'Descubre las últimas noticias sobre inteligencia artificial, machine learning y tecnología emergente.',
    type: 'website',
    url: 'https://tecbits.com',
  },
};

export default function HomePage() {
  const recentNews = getRecentNews(5);

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            TecBits
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-emerald-400">
            Noticias de IA y Tecnología
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Tu fuente confiable de noticias sobre inteligencia artificial y tecnología
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Descubre los últimos avances en inteligencia artificial, machine learning, deep learning y tecnología emergente. 
            Análisis profundo de las tendencias que están transformando el mundo digital y la industria tecnológica.
          </p>
        </div>
      </section>

      {/* Recent News Section */}
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Noticias Recientes
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Los últimos avances en inteligencia artificial, machine learning y tecnología que están transformando el mundo.
            </p>
          </div>
          
          <NewsList news={recentNews} />
          
          {/* View All News Button */}
          <div className="text-center mt-12">
            <a
              href="/noticias"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 transition-colors duration-200"
            >
              Ver Todas las Noticias
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>

          {/* Share Buttons */}
          <div className="text-center mt-8">
            <ShareButtons
              url="https://tecbits.com"
              title="TecBits - Tu Portal de Tecnología e IA"
              description="Tu fuente confiable de noticias sobre IA y tecnología"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-800 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              ¿Por qué elegir TecBits?
            </h2>
            <p className="text-lg text-gray-300">
              Nuestro compromiso con la excelencia en el análisis de tecnología e IA
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-emerald-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Análisis de IA Verificado
              </h3>
              <p className="text-gray-300">
                Todos nuestros análisis de inteligencia artificial pasan por un riguroso proceso de verificación técnica.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-emerald-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Actualizaciones en Tiempo Real
              </h3>
              <p className="text-gray-300">
                Mantente al día con los últimos avances en IA, machine learning y tecnología emergente.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-emerald-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Análisis Técnico Profundo
              </h3>
              <p className="text-gray-300">
                No solo te contamos qué avances hay en IA, sino también cómo funcionan y su impacto en el futuro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Responsive Images Showcase */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Imágenes Adaptativas
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Nuestras imágenes se adaptan automáticamente a cualquier dispositivo, 
              manteniendo siempre la mejor calidad y proporción visual.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-3">Adaptación Automática</h3>
              <p className="text-gray-300 text-sm mb-4">
                Las imágenes se ajustan automáticamente al tamaño del contenedor, 
                manteniendo siempre la proporción correcta.
              </p>
              <div className="aspect-video bg-gray-700 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 text-sm">Imagen Responsive</span>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-3">Optimización Inteligente</h3>
              <p className="text-gray-300 text-sm mb-4">
                Carga diferida y formatos modernos (WebP, AVIF) para máxima velocidad 
                y calidad visual.
              </p>
              <div className="aspect-square bg-gray-700 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 text-sm">Imagen Optimizada</span>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-3">Experiencia Fluida</h3>
              <p className="text-gray-300 text-sm mb-4">
                Transiciones suaves y efectos hover que mejoran la experiencia 
                de navegación del usuario.
              </p>
              <div className="aspect-[16/9] bg-gray-700 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 text-sm">Imagen Interactiva</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
