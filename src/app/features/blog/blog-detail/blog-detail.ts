import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { Posts } from '../../../core/services/posts';
import { Article } from '../../../shared/models/article.model';
import { parseArticleContent } from '../../../shared/utils/parse-article-content';
import { ParsedArticle } from '../../../shared/models/ArticleSection';
import { ArticleDetailHero } from './sections/article-detail-hero/article-detail-hero';
import { ArticleDetailContent } from './sections/article-detail-content/article-detail-content';
import { ArticleDetailSidebar, ArticleTocItem } from './sections/article-detail-sidebar/article-detail-sidebar';
import { RelatedArticles } from './sections/related-articles/related-articles';

@Component({
  selector: 'app-blog-detail',
  imports: [ArticleDetailHero, ArticleDetailContent, ArticleDetailSidebar, RelatedArticles],
  templateUrl: './blog-detail.html',
  styleUrl: './blog-detail.css',
})
export class BlogDetail {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly postsService = inject(Posts);

  public article: Article | null = null;
  public parsed: ParsedArticle = { intro: null, sections: [] };
  public tocItems: ArticleTocItem[] = [];
  public relatedArticles: Article[] = [];

  constructor() {
    this.route.paramMap.pipe(takeUntilDestroyed()).subscribe((params) => {
      this.loadArticle(params.get('slug') ?? '');
    });
  }

  private loadArticle(slug: string): void {
    const found = this.postsService.getArticleBySlug(slug);

    if (!found) {
      this.article = null;
      this.router.navigateByUrl('/not-found');
      return;
    }

    this.article = found;
    this.parsed = parseArticleContent(found.content);
    this.tocItems = this.parsed.sections.map((section, index) => ({
      id: section.id,
      index: index + 1,
      title: section.title,
    }));
    this.relatedArticles = this.postsService.getRelatedArticles(found, 3);
  }
}
