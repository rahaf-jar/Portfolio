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
      skills: 'JavaScript | HTML | CSS | Firebase',
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      image: '/assets/imgs/projects/join.svg',
      liveLink: 'https://join-467.developerakademie.net/index.html',
      githubLink: 'https://github.com/rahaf-jar/Join',
    },
    {
      title: 'El Pollo Loco',
      skills: 'JavaScript | HTML | CSS',
      description: 'Jump, run, and throw game based on object-oriented approach. Help Pepe to find coins and Tabasco salsa to fight against the crazy hen',
      image: '/assets/imgs/projects/el-pollo-loco.svg',
      liveLink: 'https://rahaf-jarrous.developerakademie.net/el_pollo_loco/index.html',
      githubLink: 'https://github.com/rahaf-jar/El-Pollo-Loco',
    },
  ];
}
