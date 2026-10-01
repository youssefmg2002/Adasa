import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Posts } from '../../../../core/services/posts';
import { formatArabicDate } from '../../../../shared/utils/arabic-date';
import { CategoryBadge } from '../../../../shared/components/category-badge/category-badge';
import { SectionBadge } from '../../../../shared/components/section-badge/section-badge';

@Component({
  selector: 'app-featured-articles',
  imports: [RouterLink, CategoryBadge, SectionBadge],
  templateUrl: './featured-articles.html',
  styleUrl: './featured-articles.css',
})
export class FeaturedArticles {
  private readonly postsService = inject(Posts);

  protected readonly articles = this.postsService.getFeaturedArticles();
  protected readonly formatDate = formatArabicDate;
}
