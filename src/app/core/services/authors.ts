import { Injectable, inject } from '@angular/core';
import { Posts } from './posts';
import { Author } from '../../shared/models/article.model';

@Injectable({ providedIn: 'root' })
export class AuthorService {
  private readonly postsService = inject(Posts);

  /** يرجّع كل الكُتّاب الفريدين (بدون تكرار) من مقالات الموقع */
  getUniqueAuthors(): Author[] {
    const seenNames = new Set<string>();
    const authors: Author[] = [];

    for (const article of this.postsService.getAllArticles()) {
      if (!seenNames.has(article.author.name)) {
        seenNames.add(article.author.name);
        authors.push(article.author);
      }
    }

    return authors;
  }
}
