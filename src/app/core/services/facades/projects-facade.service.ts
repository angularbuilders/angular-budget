import { Injectable } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { LogicService } from 'src/app/core/services/logic.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectsFacadeService {
  constructor(private dataService: DataService, private logicService: LogicService) {}

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
}
