import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Article } from '../../../../../shared/models/article.model';
import { CategoryBadge } from '../../../../../shared/components/category-badge/category-badge';
import { formatArabicDate } from '../../../../../shared/utils/arabic-date';

@Component({
  selector: 'app-article-detail-hero',
  imports: [RouterLink, CategoryBadge],
  templateUrl: './article-detail-hero.html',
})
export class ArticleDetailHero {
  @Input({ required: true }) article!: Article;

  protected readonly formatDate = formatArabicDate;
}
