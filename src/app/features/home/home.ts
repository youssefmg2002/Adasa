import { Component } from '@angular/core';
import { Hero } from './sections/hero/hero';
import { FeaturedArticles } from './sections/featured-articles/featured-articles';
import { Categories } from './sections/categories/categories';
import { LatestArticles } from './sections/latest-articles/latest-articles';
import { Newsletter } from './sections/newsletter/newsletter';

@Component({
  selector: 'app-home',
  imports: [Hero, FeaturedArticles, Categories, LatestArticles, Newsletter],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
