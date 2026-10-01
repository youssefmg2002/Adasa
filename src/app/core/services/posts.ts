import { Injectable } from '@angular/core';
import siteData from '../data/posts.json';
import { SiteData } from '../../shared/models/site-data.model';
import { Article } from '../../shared/models/article.model';
import { Category } from '../../shared/models/category.model';

const data = siteData as SiteData;

@Injectable({
  providedIn: 'root'
})
export class Posts {
  getAllArticles(): Article[] {
    return data.posts;
  }

  getFeaturedArticles(): Article[] {
    return data.posts.filter((a) => a.featured);
  }

  getLatestArticles(limit = 3): Article[] {
    return [...data.posts]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, limit);
  }

  getArticleBySlug(slug: string): Article | undefined {
    return data.posts.find((a) => a.slug === slug);
  }

  getRelatedArticles(article: Article, limit = 3): Article[] {
    return data.posts
      .filter((a) => a.category === article.category && a.slug !== article.slug)
      .slice(0, limit);
  }

  getCategories(): Category[] {
    return data.categories;
  }

  getSiteInfo() {
    return data.siteInfo;
  }
}
