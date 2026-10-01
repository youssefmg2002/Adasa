import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-article-card-compact',
  imports: [RouterLink],
  templateUrl: './article-card-compact.html',
  styleUrl: './article-card-compact.css',
})
export class ArticleCardCompact {
  @Input({ required: true }) article!: Article;
}
