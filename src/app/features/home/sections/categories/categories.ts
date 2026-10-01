import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Posts } from '../../../../core/services/posts';
import { SectionBadge } from '../../../../shared/components/section-badge/section-badge';

const ICON_MAP: Record<string, 'sun' | 'user' | 'mountain' | 'sliders'> = {
  'إضاءة': 'sun',
  'بورتريه': 'user',
  'مناظر طبيعية': 'mountain',
  'تقنيات': 'sliders',
  'معدات': 'sun',
};

@Component({
  selector: 'app-categories',
  imports: [RouterLink, SectionBadge],
  templateUrl: './categories.html',
  styleUrl: './categories.css',
})
export class Categories {
  private readonly postsService = inject(Posts);

  public readonly categoriesWithIcons = this.postsService
    .getCategories()
    .map((cat) => ({ ...cat, icon: ICON_MAP[cat.name] ?? 'sun' }));
}
