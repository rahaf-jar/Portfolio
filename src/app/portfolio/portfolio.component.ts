import { Component } from '@angular/core';
import { ProjectComponentComponent } from '../project-component/project-component.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectComponentComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}
