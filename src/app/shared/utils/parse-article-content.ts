import { ArticleSection, ParsedArticle } from "../models/ArticleSection";

export function parseArticleContent(content: string): ParsedArticle {
  const blocks = content
    .split(/\n\n+/)
    .map((b) => b.trim())
    .filter(Boolean);

  const sections: ArticleSection[] = [];
  let intro: string | null = null;
  let current: ArticleSection | null = null;

  for (const block of blocks) {
    if (block.startsWith('## ')) {
      if (current) sections.push(current);
      current = { id: `section-${sections.length}`, title: block.replace(/^##\s*/, ''), paragraphs: [] };
    } else if (current) {
      current.paragraphs.push(block);
    } else if (intro === null) {
      intro = block;
    }
  }
  if (current) sections.push(current);

  return { intro, sections };
}

