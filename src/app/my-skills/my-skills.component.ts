import { Component } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';
import { ScrollService } from '../services/scroll.service';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent {

  constructor(public scroll: ScrollService, public translation: TranslationService){}

  skills = [
    { name: 'HTML', icon: 'html.svg' },
    { name: 'CSS', icon: 'css.svg' },
    { name: 'JavaScript', icon: 'javascript.svg' },
    { name: 'TypeScript', icon: 'typescript.svg' },
    { name: 'Angular', icon: 'angular.svg' },
    { name: 'Firebase', icon: 'firebase.svg' },
    { name: 'Git', icon: 'git.svg' },
    { name: 'REST API', icon: 'restapi.svg' },
    { name: 'Scrum', icon: 'scrum.svg' },
    { name: 'Material Design', icon: 'material-design.svg' },
    { name: 'Continually Learning', icon: 'continually-learning.svg' }
  ];
}
