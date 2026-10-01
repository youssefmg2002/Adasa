import { Component, EventEmitter, Input, Output } from '@angular/core';

export type BlogViewMode = 'grid' | 'list';

@Component({
  selector: 'app-blog-list-filters',
  templateUrl: './blog-list-filters.html',
})
export class BlogListFilters {
  @Input() allCategoriesLabel = '';
  @Input() categoryNames: string[] = [];
  @Input() selectedCategory = '';
  @Input() searchTerm = '';
  @Input() viewMode: BlogViewMode = 'grid';

  @Output() categoryChange = new EventEmitter<string>();
  @Output() searchChange = new EventEmitter<string>();

  protected readonly activeFilterClass =
    'px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 bg-gradient-to-r from-orange-500 to-orange-600 text-white';
  protected readonly inactiveFilterClass =
    'px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30';

  protected onSearchInput(event: Event): void {
    this.searchChange.emit((event.target as HTMLInputElement).value);
  }
}
