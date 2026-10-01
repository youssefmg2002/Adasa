import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-badge',
  templateUrl: './section-badge.html',
})
export class SectionBadge {
  @Input({ required: true }) label!: string;
}
