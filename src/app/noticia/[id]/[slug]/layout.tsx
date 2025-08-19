import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Noticia',
  description: 'Lee las noticias más importantes del momento.',
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

// Configuración para ISR - regenerar páginas cada hora
export const revalidate = 3600;
