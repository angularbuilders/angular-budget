import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/core/model/project.interface';
import { Status } from 'src/app/core/model/status.enum';
import { PROJECTS } from 'src/data/projects.data';

@Component({
  selector: 'ab-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css'],
})
export class NewProjectComponent implements OnInit {
  newProject: Project;
  constructor() {}

  ngOnInit(): void {
    this.resetNewProjet();
  }

  resetNewProjet(): void {
    this.newProject = {
      id: '',
      title: '',
      start: new Date(),
      budget: 0,
      description: '',
      status: Status.InProgress,
    };
  }

  saveNewProject(): void {
    this.newProject.id = this.slugify(this.newProject.title);
    PROJECTS.push({ ...this.newProject });
    this.resetNewProjet();
  }
  slugify(text: string): string {
    return text
      .toLowerCase()
      .trim()
      .replace(/[\s\W-]+/g, '-');
  }
}
