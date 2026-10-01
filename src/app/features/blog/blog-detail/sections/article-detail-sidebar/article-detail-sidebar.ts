import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Article } from '../../../../../shared/models/article.model';
import { formatArabicDayMonth } from '../../../../../shared/utils/arabic-date';

export interface ArticleTocItem {
  id: string;
  index: number;
  title: string;
}

@Component({
  selector: 'app-article-detail-sidebar',
  imports: [RouterLink],
  templateUrl: './article-detail-sidebar.html',
})
export class ArticleDetailSidebar {
  @Input({ required: true }) article!: Article;
  @Input() tocItems: ArticleTocItem[] = [];

  protected readonly formatDayMonth = formatArabicDayMonth;
}
