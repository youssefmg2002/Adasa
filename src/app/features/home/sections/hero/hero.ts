import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StatCard } from '../../../../shared/components/stat-card/stat-card';

interface HeroStat {
  icon: string;
  value: string;
  label: string;
  delay: number;
}

@Component({
  selector: 'app-hero',
  imports: [RouterLink, StatCard],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  public readonly heroStats: HeroStat[] = [
    { icon: 'fa-newspaper', value: '+50', label: 'مقالة', delay: 0 },
    { icon: 'fa-users', value: '+10ألف', label: 'قارئ', delay: 100 },
    { icon: 'fa-folder-open', value: '4', label: 'تصنيفات', delay: 200 },
    { icon: 'fa-pen-nib', value: '6', label: 'كاتب', delay: 300 },
  ];
}
