export interface NewsItem {
  id: string;
  title: string;
  shortDescription: string;
  content: string;
  imageUrl: string;
  publishedAt: string;
  author: string;
  category: string;
}

export interface NewsListProps {
  news: NewsItem[];
  showSearch?: boolean;
}

export interface NewsCardProps {
  news: NewsItem;
}

export interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}
