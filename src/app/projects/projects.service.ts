import { Injectable } from '@angular/core';
import { ProjectModel } from './new-project/new-project.component';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private projects: ProjectModel[] = [];

  constructor() {}

  getProjects(): ProjectModel[] {
    return [...this.projects];
  }

  saveProject(newProject: ProjectModel): ProjectModel[] {
    newProject.projectId = new Date().getTime().toString();
    this.projects.push(newProject);
    console.log(newProject.name);
    return [...this.projects];
  }

  deleteProject(project: ProjectModel): any[] {
    this.projects = this.projects.filter(p => p.name !== project.name);
    return [...this.projects];
  }

  findById(projectId: string): ProjectModel {
    return this.projects.find(p => p.projectId === projectId);
  }
}

/*
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
'https://api-base.herokuapp.com/api/pub/projects'
this.httpClient
  .post('https://api-base.herokuapp.com/api/pub/projects', { name: 'covid' })
  .subscribe(o => {
    this.httpClient.get('https://api-base.herokuapp.com/api/pub/projects').subscribe(
      p => console.log({ p }),
      e => console.error({ e })
    );
  });
*/
