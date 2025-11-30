import { Component, Input } from '@angular/core';
import { Project } from '../models/project.model';
import { TranslationService } from '../services/translation.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-project-component',
  standalone: true,
  imports: [NgIf],
  templateUrl: './project-component.component.html',
  styleUrls: ['./project-component.component.scss']
})
export class ProjectComponentComponent {
  @Input() project!: Project;
  @Input() reverse: boolean = false;

  constructor(public translation: TranslationService) {}
}