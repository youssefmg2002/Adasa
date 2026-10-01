import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface FooterLink {
  label: string;
  href: string;
}

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  public readonly currentYear = new Date().getFullYear();

  public readonly exploreLinks: FooterLink[] = [
    { label: 'الرئيسية', href: '/' },
    { label: 'المدونة', href: '/blog' },
    { label: 'من نحن', href: '/about' },
  ];

  public readonly categoryLinks: FooterLink[] = [
    { label: 'إضاءة', href: '/blog?category=إضاءة' },
    { label: 'بورتريه', href: '/blog?category=بورتريه' },
    { label: 'مناظر طبيعية', href: '/blog?category=مناظر طبيعية' },
    { label: 'تقنيات', href: '/blog?category=تقنيات' },
  ];

  public onSubscribe(event: Event): void {
    event.preventDefault();

  }
}
