import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../model/project.interface';
import { Task } from '../model/task.interface';
import { Transaction } from '../model/transaction.interface';
import { HttpAdapterService } from './adapters/http-adapter.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private rootUrl = `https://api-base.herokuapp.com/api/pub`;

  constructor(private httpAdapter: HttpAdapterService) {}

  getProjects$(): Observable<Project[]> {
    return this.httpAdapter.get<Project[]>(`${this.rootUrl}/projects`);
  }
  getProject$(projectId: string): Observable<Project> {
    return this.httpAdapter.get<Project>(`${this.rootUrl}/projects/${projectId}`);
  }
  postProject$(newProject: Project): Observable<Project> {
    return this.httpAdapter.post<Project>(`${this.rootUrl}/projects/`, newProject);
  }
  putProject$(updatedProject: Project): Observable<Project> {
    return this.httpAdapter.put<Project>(`${this.rootUrl}/projects/${updatedProject.id}`, updatedProject);
  }
  deleteProject$(projectId: string): Observable<Project> {
    return this.httpAdapter.delete<Project>(`${this.rootUrl}/projects/${projectId}`);
  }
  getTasks$(): Observable<Task[]> {
    return this.httpAdapter.get<Task[]>(`${this.rootUrl}/tasks`);
  }
  getTransactions$(): Observable<Transaction[]> {
    return this.httpAdapter.get<Transaction[]>(`${this.rootUrl}/transactions`);
  }
}
