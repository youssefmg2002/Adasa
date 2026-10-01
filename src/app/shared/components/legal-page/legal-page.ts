import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LegalPageData } from '../../models/legal-page.model';

@Component({
  selector: 'app-legal-page',
  imports: [RouterLink],
  templateUrl: './legal-page.html',
})
export class LegalPage {
  @Input({ required: true }) page!: LegalPageData;

  protected get noticeClasses(): string {
    return this.page.notice.tone === 'orange'
      ? 'bg-orange-500/10 border-orange-500/20 text-orange-500 text-orange-300/80'
      : 'bg-yellow-500/10 border-yellow-500/20 text-yellow-500 text-yellow-300/80';
  }

  protected get listClasses(): string {
    return this.page.listTone === 'positive' ? 'space-y-3' : 'space-y-2';
  }

  protected get listIcon(): string {
    return this.page.listTone === 'positive'
      ? 'fa-circle-check text-orange-500'
      : 'fa-xmark text-red-400';
  }
}
