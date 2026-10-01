import { Component, inject } from '@angular/core';
import { AuthorService } from '../../../../core/services/authors';
import { TeamMemberCard } from '../../../../shared/components/team-member-card/team-member-card';

@Component({
  selector: 'app-about-team',
  imports: [TeamMemberCard],
  templateUrl: './about-team.html',
})
export class AboutTeam {
  private readonly authorService = inject(AuthorService);

  protected readonly team = this.authorService.getUniqueAuthors();
}
