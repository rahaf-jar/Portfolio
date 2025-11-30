import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScrollService } from '../scroll.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule], 
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(public scroll: ScrollService, private router: Router){}

  navigateToSection(section: string) {
    this.router.navigate(['/']).then(() => {
      setTimeout(() => {
        this.scroll.scrollTo(section);
      }, 50);
    });
  }
}

