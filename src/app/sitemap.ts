import { MetadataRoute } from 'next';
import { getAllNews, generateSlug } from '@/utils/news';
import { siteConfig } from '@/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.seo.siteUrl;
  const allNews = getAllNews();

  // Páginas estáticas
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/noticias`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
  ];

  // Páginas de noticias individuales
  const newsPages = allNews.map((news) => ({
    url: `${baseUrl}/noticia/${news.id}/${generateSlug(news.title)}`,
    lastModified: new Date(news.publishedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...newsPages];
}
