import { Component } from '@angular/core';
import { ScrollService } from '../services/scroll.service';
import { Router, RouterModule } from '@angular/router';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  selectedLang: 'EN' | 'DE' = 'DE';

  constructor(
    public scroll: ScrollService,
    private router: Router,
    public translation: TranslationService
  ) {
    this.translation.currentLang$.subscribe(lang => this.selectedLang = lang);
  }

  setLanguage(lang: 'EN' | 'DE') {
    this.translation.setLanguage(lang);
  }

  navigateToSection(section: string) {
    this.router.navigate(['/']).then(() => {
      setTimeout(() => {
        this.scroll.scrollTo(section);
      }, 50);
    });
  }
}


