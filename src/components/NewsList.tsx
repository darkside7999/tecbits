'use client';

import { useState } from 'react';
import { NewsListProps } from '@/types/news';
import { searchNews } from '@/utils/news';
import NewsCard from './NewsCard';
import SearchBar from './SearchBar';

export default function NewsList({ news, showSearch = false }: NewsListProps) {
  const [filteredNews, setFilteredNews] = useState(news);

  const handleSearch = (query: string) => {
    if (query.trim() === '') {
      setFilteredNews(news);
    } else {
      const results = searchNews(query);
      setFilteredNews(results);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {showSearch && (
        <SearchBar onSearch={handleSearch} />
      )}
      
      {filteredNews.length === 0 ? (
        <div className="text-center py-12">
          <svg className="mx-auto h-12 w-12 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-white">No se encontraron noticias</h3>
          <p className="mt-1 text-sm text-gray-400">
            Intenta con otros términos de búsqueda.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {filteredNews.map((newsItem) => (
            <NewsCard key={newsItem.id} news={newsItem} />
          ))}
        </div>
      )}
    </div>
  );
}
