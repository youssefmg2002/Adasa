import { Component } from '@angular/core';
import { StatCard } from '../../../../shared/components/stat-card/stat-card';

interface AboutStat {
  icon: string;
  value: string;
  label: string;
}

@Component({
  selector: 'app-about-hero',
  imports: [StatCard],
  templateUrl: './about-hero.html',
})
export class AboutHero {
  protected readonly stats: AboutStat[] = [
    { icon: 'fa-users', value: '+2مليون', label: 'قارئ شهرياً' },
    { icon: 'fa-newspaper', value: '+500', label: 'مقالة منشورة' },
    { icon: 'fa-pen-nib', value: '+50', label: 'كاتب خبير' },
    { icon: 'fa-book-open', value: '+15', label: 'تصنيف' },
  ];
}
