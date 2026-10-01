export interface ArticleSection {
  id: string;
  title: string;
  paragraphs: string[];
}
export interface ParsedArticle {
  intro: string | null;
  sections: ArticleSection[];
}
