import { Injectable } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { LogicService } from 'src/app/core/services/logic.service';
import { Project } from '../model/project.interface';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor(private dataService: DataService, private logicService: LogicService, private utilService: UtilService) {}

  getProjects$() {
    return this.dataService.getProjects$();
  }
  getTransactions$() {
    return this.dataService.getTransactions$();
  }
  getTasks$() {
    return this.dataService.getTasks$();
  }

  getProjectViews(projects, transactions) {
    return this.logicService.composeProjectViews(projects, transactions);
  }

  getTasksView(tasks) {
    return this.logicService.composeTasksView(tasks);
  }

  slugify(text: string) {
    return this.utilService.slugify(text);
  }

  postProject$(newProject: Project) {
    return this.dataService.postProject$(newProject);
  }
  createNewProject() {
    return this.logicService.createNewProject();
  }
}
