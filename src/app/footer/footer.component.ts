import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScrollService } from '../services/scroll.service';
import { Router } from '@angular/router';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(
    public scroll: ScrollService,
    private router: Router,
    public translation: TranslationService
  ) {}

  navigateToSection(section: string) {
    this.router.navigate(['/']).then(() => {
      setTimeout(() => {
        this.scroll.scrollTo(section);
      }, 50);
    });
  }
}