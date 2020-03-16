import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'ab-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css'],
})
export class NewProjectComponent implements OnInit {
  projects: ProjectModel[] = [];

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {}

  saveProject(newProject: ProjectModel) {
    this.projects = this.projectsService.saveProject(newProject);
  }

  deleteProject(project: ProjectModel) {
    this.projects = this.projectsService.deleteProject(project);
  }
}

export interface ProjectModel {
  projectId?: string;
  name: string;
}
