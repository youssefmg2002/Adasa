import { Component, Input } from '@angular/core';

export type StatCardVariant = 'compact' | 'spacious';

@Component({
  selector: 'app-stat-card',
  templateUrl: './stat-card.html',
})
export class StatCard {
  @Input({ required: true }) icon!: string;
  @Input({ required: true }) value!: string;
  @Input({ required: true }) label!: string;
  @Input() animationDelay = 0;
  @Input() variant: StatCardVariant = 'compact';

  protected get cardClasses(): string {
    const variantClasses: Record<StatCardVariant, string> = {
      compact: 'p-4 hover:scale-105 transition-transform duration-300',
      spacious: 'p-6',
    };

    return `glass-card ${variantClasses[this.variant]}`;
  }
}
