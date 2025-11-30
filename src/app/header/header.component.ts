import { Component } from '@angular/core';
import { ScrollService } from '../scroll.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  selectedLang = 'DE';

  constructor(
    public scroll: ScrollService,
    private router: Router
  ) {}

  setLanguage(lang: string) {
    this.selectedLang = lang;
  }

  navigateToSection(section: string) {
    this.router.navigate(['/']).then(() => {
      setTimeout(() => {
        this.scroll.scrollTo(section);
      }, 50);
    });
  }
}


