import { Component } from '@angular/core';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  constructor(public scroll: ScrollService){}

}
