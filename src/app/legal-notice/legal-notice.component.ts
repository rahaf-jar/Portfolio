import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {

  constructor(public scroll: ScrollService, private router: Router){}
  
  navigateToSection(section: string) {
    this.router.navigate(['/']).then(() => {
      setTimeout(() => {
        this.scroll.scrollTo(section);
      }, 50);
    });
  }
}
