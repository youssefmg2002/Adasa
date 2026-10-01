import { Article } from './article.model';
import { Category } from './category.model';

export interface SiteInfo {
  name: string;
  tagline: string;
  description: string;
  email: string;
  social: {
    twitter: string;
    github: string;
    linkedin: string;
    youtube: string;
  };
}

export interface SiteData {
  posts: Article[];
  categories: Category[];
  siteInfo: SiteInfo;
}
