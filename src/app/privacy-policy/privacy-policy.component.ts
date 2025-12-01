import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollService } from '../services/scroll.service';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

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