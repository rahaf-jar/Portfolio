import { Component } from '@angular/core';
import { ScrollService } from '../services/scroll.service';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  constructor(
    public scroll: ScrollService,
    public translation: TranslationService
  ) {}
}

