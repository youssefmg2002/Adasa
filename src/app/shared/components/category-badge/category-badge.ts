import { Component, Input } from '@angular/core';

export type CategoryBadgeVariant = 'soft' | 'dark' | 'solid' | 'gradient';

@Component({
  selector: 'app-category-badge',
  templateUrl: './category-badge.html',
})
export class CategoryBadge {
  @Input({ required: true }) label!: string;
  @Input() variant: CategoryBadgeVariant = 'soft';

  protected get badgeClasses(): string {
    const variantClasses: Record<CategoryBadgeVariant, string> = {
      soft: 'border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-orange-500',
      dark: 'border border-[#333333] bg-[#0a0a0a]/80 px-3 py-1 text-white backdrop-blur-sm',
      solid: 'bg-orange-500 px-3 py-1 text-white',
      gradient: 'bg-linear-to-r from-orange-500 to-yellow-500 px-3 py-1.5 text-white',
    };

    return `inline-flex items-center rounded-full text-xs font-semibold ${variantClasses[this.variant]}`;
  }
}
