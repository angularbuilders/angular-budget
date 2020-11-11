import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../model/project.interface';
import { Task } from '../model/task.interface';
import { Transaction } from '../model/transaction.interface';
import { DataService } from './data.service';
import { LogicService } from './logic.service';
import { TitleService } from './title.service';

@Injectable()
export class ProjectService {
  constructor(
    private dataService: DataService,
    private logicService: LogicService,
    private titleService: TitleService,
    private activatedRoute: ActivatedRoute
  ) {}

  getSlugFromRoute() {
    return this.activatedRoute.snapshot.params.id;
  }

  getProject$(projectSlug: string) {
    return this.dataService.getProject$(projectSlug);
  }

  filterTransactionsByProjectId(transactions: Transaction[], projectSlug) {
    return this.logicService.filterTransactionsByProjectId(transactions, projectSlug);
  }
  filterTasksByProjectId(tasks: Task[], projectSlug) {
    return this.logicService.filterTasksByProjectId(tasks, projectSlug);
  }
  getTransactions$() {
    return this.dataService.getTransactions$();
  }
  getTasks$() {
    return this.dataService.getTasks$();
  }
  getprojectView(project: Project, transactions: Transaction[]) {
    return this.logicService.composeProjectView(project, transactions);
  }

  setDocumentTitle(projectTitle: string) {
    this.titleService.setDocumentTitle(projectTitle);
  }
}
