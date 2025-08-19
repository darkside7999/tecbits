import { NewsItem } from '@/types/news';
import { newsData } from '@/data/news';

/**
 * Obtiene todas las noticias ordenadas por fecha de publicación (más recientes primero)
 */
export function getAllNews(): NewsItem[] {
  return newsData.sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

/**
 * Obtiene las noticias más recientes (limitadas por cantidad)
 */
export function getRecentNews(limit: number = 5): NewsItem[] {
  return getAllNews().slice(0, limit);
}

/**
 * Obtiene una noticia específica por ID
 */
export function getNewsById(id: string): NewsItem | undefined {
  return newsData.find(news => news.id === id);
}

/**
 * Busca noticias por título o contenido
 */
export function searchNews(query: string): NewsItem[] {
  const lowercaseQuery = query.toLowerCase();
  return newsData.filter(news => 
    news.title.toLowerCase().includes(lowercaseQuery) ||
    news.shortDescription.toLowerCase().includes(lowercaseQuery) ||
    news.content.toLowerCase().includes(lowercaseQuery)
  );
}

/**
 * Obtiene noticias por categoría
 */
export function getNewsByCategory(category: string): NewsItem[] {
  return newsData.filter(news => 
    news.category.toLowerCase() === category.toLowerCase()
  );
}

/**
 * Genera una URL amigable basada en el título de la noticia
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[áäâà]/g, 'a')
    .replace(/[éëêè]/g, 'e')
    .replace(/[íïîì]/g, 'i')
    .replace(/[óöôò]/g, 'o')
    .replace(/[úüûù]/g, 'u')
    .replace(/ñ/g, 'n')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

/**
 * Formatea la fecha para mostrar de manera legible
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}
