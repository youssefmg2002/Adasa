import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Article } from '../../models/article.model';
import { formatArabicDate } from '../../utils/arabic-date';
import { CategoryBadge } from '../category-badge/category-badge';

@Component({
  selector: 'app-article-card-list',
  imports: [RouterLink, CategoryBadge],
  templateUrl: './article-card-list.html',
  styleUrl: './article-card-list.css',
})
export class ArticleCardList {
  @Input({ required: true }) article!: Article;
  @Input() animationDelay = 0;

  protected readonly formatDate = formatArabicDate;
}
