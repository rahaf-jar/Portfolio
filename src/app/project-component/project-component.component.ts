import { Component, Input } from '@angular/core';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-project-component',
  standalone: true,
  imports: [],
  templateUrl: './project-component.component.html',
  styleUrl: './project-component.component.scss'
})
export class ProjectComponentComponent {
  @Input() project!: Project;
  @Input() reverse: boolean = false;

}
