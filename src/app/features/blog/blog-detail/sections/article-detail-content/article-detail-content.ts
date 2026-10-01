import { ChangeDetectorRef, Component, Input, inject } from '@angular/core';
import { Article } from '../../../../../shared/models/article.model';
import { ParsedArticle } from '../../../../../shared/models/ArticleSection';

type SharePlatform = 'x' | 'linkedin' | 'whatsapp';

@Component({
  selector: 'app-article-detail-content',
  templateUrl: './article-detail-content.html',
})
export class ArticleDetailContent {
  @Input({ required: true }) article!: Article;
  @Input({ required: true }) parsed!: ParsedArticle;

  private readonly changeDetector = inject(ChangeDetectorRef);

  protected linkCopied = false;

  protected share(platform: SharePlatform): void {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(this.article.title);
    const shareUrls: Record<SharePlatform, string> = {
      x: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      whatsapp: `https://wa.me/?text=${text}%20${url}`,
    };

    window.open(shareUrls[platform], '_blank', 'noopener,noreferrer');
  }

  protected copyLink(): void {
    navigator.clipboard.writeText(window.location.href).then(() => {
      this.linkCopied = true;
      this.changeDetector.markForCheck();
      setTimeout(() => {
        this.linkCopied = false;
        this.changeDetector.markForCheck();
      }, 2000);
    });
  }
}
