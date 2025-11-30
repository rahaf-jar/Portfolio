import { Component } from '@angular/core';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  constructor(public translation: TranslationService) {}
}