import Link from 'next/link';
import { ReactNode } from 'react';
import { siteConfig } from '@/config/site';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      {/* Header */}
      <header className="bg-gray-800 shadow-sm border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <img src="/logo.svg" alt="TecBits Logo" className="h-8 w-8" />
              <span className="text-xl font-bold text-white">{siteConfig.name}</span>
            </Link>
            
            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link 
                href="/" 
                className="text-gray-300 hover:text-emerald-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                Noticias de IA
              </Link>
              <Link 
                href="/noticias" 
                className="text-gray-300 hover:text-emerald-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                Todas las Noticias
              </Link>
            </nav>
            
            {/* Mobile menu */}
            <div className="md:hidden">
              <button className="text-gray-300 hover:text-emerald-400 p-2">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/logo.svg" alt="TecBits Logo" className="h-6 w-6" />
                <span className="text-lg font-bold text-white">{siteConfig.name}</span>
              </div>
            <p className="text-gray-400 text-sm">
              {siteConfig.description}
            </p>
            </div>
            
            {/* Quick links */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">
                    Noticias de IA
                  </Link>
                </li>
                <li>
                  <Link href="/noticias" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">
                    Todas las Noticias
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Contacto</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p>Email: {siteConfig.contact.email}</p>
              </div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
