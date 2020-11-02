import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../model/project.interface';
import { Task } from '../model/task.interface';
import { Transaction } from '../model/transaction.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private rootUrl = `https://api-base.herokuapp.com/api/pub`;

  constructor(private httpClient: HttpClient) {}

  getProjects$(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(`${this.rootUrl}/projects`);
  }
  getProject(projectId: string): Observable<Project> {
    return this.httpClient.get<Project>(`${this.rootUrl}/projects/${projectId}`);
  }
  postProject(newProject: Project): Observable<Project> {
    return this.httpClient.post<Project>(`${this.rootUrl}/projects/`, newProject);
  }
  putProject(updatedProject: Project): Observable<Project> {
    return this.httpClient.put<Project>(`${this.rootUrl}/projects/${updatedProject.id}`, updatedProject);
  }
  deleteProject(projectId: string): Observable<Project> {
    return this.httpClient.delete<Project>(`${this.rootUrl}/projects/${projectId}`);
  }
  getTasks$(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(`${this.rootUrl}/tasks`);
  }
  getTransactions$(): Observable<Transaction[]> {
    return this.httpClient.get<Transaction[]>(`${this.rootUrl}/transactions`);
  }
}
