import { Component } from '@angular/core';
import { Project } from '../models/project.model';
import { ProjectComponentComponent } from '../project-component/project-component.component';
import { NgFor} from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectComponentComponent, NgFor],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  projects: Project[] = [
    {
      title: 'Join',
      skills: 'Angular | TypeScript | HTML | CSS | Firebase',
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      image: '/assets/imgs/projects/join.svg',
      liveLink: 'https://your-live-join-project.com',
      githubLink: 'https://github.com/yourrepo/join',
    },
    {
      title: 'El Pollo Loco',
      skills: 'JavaScript | HTML | CSS',
      description: 'Jump, run, and throw game based on object-oriented approach. Help Pepe to find coins and Tabasco salsa to fight against the crazy hen',
      image: '/assets/imgs/projects/el-pollo-loco.svg',
      liveLink: 'https://el-boyoloco.com',
      githubLink: 'https://github.com/yourrepo/boyoloco',
    },
  ];
}
