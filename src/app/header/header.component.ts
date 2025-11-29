import { Component } from '@angular/core';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(public scroll: ScrollService) {}
  selectedLang = 'DE';

  setLanguage(lang: string) {
    this.selectedLang = lang;
  }
}

