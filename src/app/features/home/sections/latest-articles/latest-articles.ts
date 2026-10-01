import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Posts } from '../../../../core/services/posts';
import { formatArabicDate } from '../../../../shared/utils/arabic-date';
import { ArticleCardGrid } from '../../../../shared/components/article-card-grid/article-card-grid';
import { SectionBadge } from '../../../../shared/components/section-badge/section-badge';

@Component({
  selector: 'app-latest-articles',
  imports: [RouterLink, ArticleCardGrid, SectionBadge],
  templateUrl: './latest-articles.html',
  styleUrl: './latest-articles.css',
})
export class LatestArticles {
  private readonly postsService = inject(Posts);

  protected readonly articles = this.postsService.getLatestArticles(3);
  protected readonly formatDate = formatArabicDate;
}
