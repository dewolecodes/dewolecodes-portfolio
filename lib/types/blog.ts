export interface Author {
  name: string;
  bio?: string;
  avatar?: string;
  website?: string;
  twitter?: string;
  linkedin?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: Author;
  tags: string[];
  publishedAt: string;
  updatedAt?: string;
  readingTime: number;
  category: string;
  featured: boolean;
  featuredImage?: string;
  coverImage?: string;
}

export interface BlogTag {
  name: string;
  count: number;
}
