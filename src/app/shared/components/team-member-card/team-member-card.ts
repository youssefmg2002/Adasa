import { Component, Input } from '@angular/core';
import { Author } from '../../models/article.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-team-member-card',
  imports: [RouterLink],
  templateUrl: './team-member-card.html',
  styleUrl: './team-member-card.css',
})
export class TeamMemberCard {
  @Input({ required: true }) member!: Author;
}
