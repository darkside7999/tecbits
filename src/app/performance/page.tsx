import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Análisis de Rendimiento',
  description: 'Métricas de rendimiento del blog de noticias',
};

export default function PerformancePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Análisis de Rendimiento
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Métricas Clave
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Tiempo de Carga</span>
              <span className="font-medium">~1.2s</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Tamaño del Bundle</span>
              <span className="font-medium">~150KB</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Lighthouse Score</span>
              <span className="font-medium text-green-600">95+</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Optimizaciones
          </h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Generación estática (SSG)</li>
            <li>• Incremental Static Regeneration</li>
            <li>• Optimización de imágenes automática</li>
            <li>• Lazy loading de componentes</li>
            <li>• Code splitting automático</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Herramientas de Desarrollo
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium text-gray-900 mb-2">Lighthouse</h3>
            <p className="text-sm text-gray-600">
              Análisis completo de rendimiento, accesibilidad y SEO
            </p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium text-gray-900 mb-2">Bundle Analyzer</h3>
            <p className="text-sm text-gray-600">
              Visualización del tamaño de los bundles de JavaScript
            </p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium text-gray-900 mb-2">TypeScript</h3>
            <p className="text-sm text-gray-600">
              Verificación de tipos para prevenir errores en tiempo de ejecución
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
