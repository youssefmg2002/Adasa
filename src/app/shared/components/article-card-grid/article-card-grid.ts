import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Article } from '../../models/article.model';
import { formatArabicDate } from '../../utils/arabic-date';
import { CategoryBadge } from '../category-badge/category-badge';

@Component({
  selector: 'app-article-card-grid',
  imports: [RouterLink, CategoryBadge],
  templateUrl: './article-card-grid.html',
  styleUrl: './article-card-grid.css',
})
export class ArticleCardGrid {
  @Input({ required: true }) article!: Article;
  @Input() animationDelay = 0;

  protected readonly formatDate = formatArabicDate;
}
