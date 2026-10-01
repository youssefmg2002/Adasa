import { Component } from '@angular/core';
import { AboutHero } from './sections/about-hero/about-hero';
import { AboutValues } from './sections/about-values/about-values';
import { AboutTeam } from './sections/about-team/about-team';
import { AboutContact } from './sections/about-contact/about-contact';

@Component({
  selector: 'app-about',
  imports: [AboutHero, AboutValues, AboutTeam, AboutContact],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
