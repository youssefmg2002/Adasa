import { PolicySection } from './policy-section.model';

export interface LegalPageData {
  title: string;
  icon: string;
  lastUpdated: string;
  notice: {
    icon: string;
    title: string;
    description: string;
    tone: 'orange' | 'yellow';
  };
  sections: PolicySection[];
  listTone: 'positive' | 'negative';
  contact: {
    number: number;
    title: string;
    intro: string;
  };
  footerText: string;
  relatedLink: string;
  relatedLabel: string;
}
