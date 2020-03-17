import { Component, OnInit } from '@angular/core';
import { ProjectModel } from '../ProjectModel';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'ab-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css'],
})
export class NewProjectComponent implements OnInit {
  project: ProjectModel = null;
  projects: ProjectModel[] = [];

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.getProjects();
  }

  saveProject(newProject: ProjectModel) {
    this.projectsService.postProject$(newProject).subscribe(project => {
      this.project = project;
      this.getProjects();
    });
  }

  deleteProject(project: ProjectModel) {
    this.projectsService.deleteProject$(project).subscribe(() => {
      this.getProjects();
    });
  }

  private getProjects() {
    this.projectsService.getProjects$().subscribe(apiResult => {
      this.projects = apiResult;
    });
  }
}
