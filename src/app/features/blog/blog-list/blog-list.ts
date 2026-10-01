import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { Posts } from '../../../core/services/posts';
import { Article } from '../../../shared/models/article.model';
import { BlogListHero } from './sections/blog-list-hero/blog-list-hero';
import { BlogListFilters, BlogViewMode } from './sections/blog-list-filters/blog-list-filters';
import { BlogListResults } from './sections/blog-list-results/blog-list-results';

const ALL_CATEGORIES = 'جميع المقالات';

@Component({
  selector: 'app-blog-list',
  imports: [BlogListHero, BlogListFilters, BlogListResults],
  templateUrl: './blog-list.html',
  styleUrl: './blog-list.css',
})
export class BlogList {
  private readonly postsService = inject(Posts);
  private readonly route = inject(ActivatedRoute);
  private readonly cdr = inject(ChangeDetectorRef);

  private readonly allArticles: Article[] = this.postsService.getAllArticles();

  public readonly allCategoriesLabel = ALL_CATEGORIES;
  public readonly categoryNames: string[] = this.postsService
    .getCategories()
    .map((category) => category.name);

  public readonly pageSize = 6;

  public selectedCategory = ALL_CATEGORIES;
  public searchTerm = '';
  public viewMode: BlogViewMode = 'grid';
  public currentPage = 1;

  public filteredArticles: Article[] = [];
  public paginatedArticles: Article[] = [];
  public pageNumbers: number[] = [];
  public totalPages = 1;

  constructor() {
    // بيتنفذ أول مرة، وكمان لو الرابط اتغير وإحنا في نفس الصفحة (زي لينك التصنيفات في الفوتر)
    this.route.queryParamMap.pipe(takeUntilDestroyed()).subscribe((params) => {
      const category = params.get('category');
      this.selectedCategory =
        category && this.categoryNames.includes(category) ? category : ALL_CATEGORIES;
      this.currentPage = 1;
      this.updateView();
      this.cdr.markForCheck();
    });
  }

  public onSelectCategory(category: string): void {
    this.selectedCategory = category;
    this.currentPage = 1;
    this.updateView();
  }

  public onSearchInputValue(value: string): void {
    this.searchTerm = value;
    this.currentPage = 1;
    this.updateView();
  }

  public setViewMode(mode: BlogViewMode): void {
    this.viewMode = mode;
  }

  public goToPage(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.updateView();
  }

  private updateView(): void {
    const term = this.searchTerm.trim().toLowerCase();

    this.filteredArticles = this.allArticles.filter((article) => {
      const matchesCategory =
        this.selectedCategory === ALL_CATEGORIES || article.category === this.selectedCategory;

      const matchesSearch =
        term === '' ||
        article.title.toLowerCase().includes(term) ||
        article.excerpt.toLowerCase().includes(term);

      return matchesCategory && matchesSearch;
    });

    this.totalPages = Math.max(1, Math.ceil(this.filteredArticles.length / this.pageSize));
    this.currentPage = Math.min(this.currentPage, this.totalPages);
    this.pageNumbers = Array.from({ length: this.totalPages }, (_, index) => index + 1);

    const start = (this.currentPage - 1) * this.pageSize;
    this.paginatedArticles = this.filteredArticles.slice(start, start + this.pageSize);
  }
}
