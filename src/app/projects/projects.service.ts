import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ProjectModel } from './ProjectModel';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private projectsUrl = environment.apiUrl + '/projects';

  constructor(private httpClient: HttpClient) {}

  getProjects$(): Observable<ProjectModel[]> {
    return this.httpClient.get<ProjectModel[]>(this.projectsUrl);
  }

  getProjectById$(projectId: string): Observable<ProjectModel> {
    const url = this.projectsUrl + '/' + projectId;
    return this.httpClient.get<ProjectModel>(url);
  }

  postProject$(newProject: ProjectModel): Observable<ProjectModel> {
    newProject.projectId = new Date().getTime().toString();
    return this.httpClient.post<ProjectModel>(this.projectsUrl, newProject);
  }

  deleteProject$(project: ProjectModel): Observable<any> {
    const url = this.projectsUrl + '/' + project._id;
    return this.httpClient.delete(url);
  }
}
