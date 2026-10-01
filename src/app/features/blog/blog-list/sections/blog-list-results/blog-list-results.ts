import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Article } from '../../../../../shared/models/article.model';
import { ArticleCardGrid } from '../../../../../shared/components/article-card-grid/article-card-grid';
import { ArticleCardList } from '../../../../../shared/components/article-card-list/article-card-list';
import { BlogViewMode } from '../blog-list-filters/blog-list-filters';

@Component({
  selector: 'app-blog-list-results',
  imports: [ArticleCardGrid, ArticleCardList],
  templateUrl: './blog-list-results.html',
})
export class BlogListResults {
  @Input() filteredArticles: Article[] = [];
  @Input() paginatedArticles: Article[] = [];
  @Input() pageNumbers: number[] = [];
  @Input() totalPages = 1;
  @Input() currentPage = 1;
  @Input() viewMode: BlogViewMode = 'grid';

  @Output() pageChange = new EventEmitter<number>();
  @Output() viewModeChange = new EventEmitter<BlogViewMode>();

  protected readonly activePageClass =
    'min-w-[44px] h-11 rounded-xl text-sm font-medium transition-all duration-300 bg-gradient-to-r from-orange-500 to-orange-600 text-white';
  protected readonly inactivePageClass =
    'min-w-[44px] h-11 rounded-xl text-sm font-medium transition-all duration-300 bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white';

  protected goToPage(page: number, results: HTMLElement): void {
    if (page < 1 || page > this.totalPages) return;
    this.pageChange.emit(page);
    results.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
