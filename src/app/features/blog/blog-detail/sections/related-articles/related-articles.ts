import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Article } from '../../../../../shared/models/article.model';
import { ArticleCardCompact } from '../../../../../shared/components/article-card-compact/article-card-compact';

@Component({
  selector: 'app-related-articles',
  imports: [RouterLink, ArticleCardCompact],
  templateUrl: './related-articles.html',
})
export class RelatedArticles {
  @Input() articles: Article[] = [];
}
