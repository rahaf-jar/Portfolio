import { Component, HostListener, OnDestroy } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ScrollService } from '../services/scroll.service';
import { TranslationService } from '../services/translation.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, NgIf],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnDestroy {
  selectedLang: 'EN' | 'DE' = 'DE';
  isMenuOpen = false;

  constructor(
    public scroll: ScrollService,
    private router: Router,
    public translation: TranslationService
  ) {
    this.translation.currentLang$.subscribe(
      lang => (this.selectedLang = lang)
    );
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;

    if (this.isMenuOpen) {
      document.body.classList.add('no-scroll');
      document.documentElement.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
      document.documentElement.classList.remove('no-scroll');
    }
  }

  closeMenu() {
    this.isMenuOpen = false;
    document.body.classList.remove('no-scroll');
    document.documentElement.classList.remove('no-scroll');
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

  onOverlayNavigate(section: string) {
    this.closeMenu();
    this.navigateToSection(section);
  }

  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth > 1000 && this.isMenuOpen) {
      this.closeMenu();
    }
  }

  ngOnDestroy() {
    document.body.classList.remove('no-scroll');
    document.documentElement.classList.remove('no-scroll');
  }
}