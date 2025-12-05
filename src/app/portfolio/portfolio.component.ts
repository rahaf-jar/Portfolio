import { Component } from '@angular/core';
import { Project } from '../models/project.model';
import { ProjectComponentComponent } from '../project-component/project-component.component';
import { NgFor } from '@angular/common';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectComponentComponent, NgFor],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  constructor(public translation: TranslationService) {}

  projects: Project[] = [
    {
      title: 'Join',
      skills: 'JavaScript | HTML | CSS | Firebase',
      descriptionKey: 'portfolio.projects.join',
      image: 'assets/imgs/projects/join.svg',
      liveLink: 'https://join-467.developerakademie.net/index.html',
      githubLink: 'https://github.com/rahaf-jar/Join',
    },
    {
      title: 'El Pollo Loco',
      skills: 'JavaScript | HTML | CSS',
      descriptionKey: 'portfolio.projects.elPollo',
      image: 'assets/imgs/projects/el-pollo-loco.svg',
      liveLink: 'https://rahaf-jarrous.developerakademie.net/el_pollo_loco/index.html',
      githubLink: 'https://github.com/rahaf-jar/El-Pollo-Loco',
    },
  ];
}