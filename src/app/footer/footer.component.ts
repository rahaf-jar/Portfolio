import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule], 
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(public scroll: ScrollService){}
}

