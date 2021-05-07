import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectView } from 'src/app/core/model/project-view.interface';
import { Project } from 'src/app/core/model/project.interface';
import { Task } from 'src/app/core/model/task.interface';
import { Transaction } from 'src/app/core/model/transaction.interface';
import { DataService } from 'src/app/core/services/data.service';
import { LogicService } from 'src/app/core/services/logic.service';
import { UtilService } from 'src/app/core/services/util.service';
import { TASKS } from 'src/data/tasks.data';

@Component({
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  projectView: ProjectView;
  project: Project;
  tasks: Task[];
  transactions: Transaction[];
  loaded = false;
  private projectSlug: string;

  private onProjectLoaded = {
    next: (projectData: Project) => {
      this.project = projectData;
      this.utilService.setDocumentTitle(this.project.title);
      this.dataService.getTransactions$().subscribe(this.onTransactionsLoaded);
    },
  };
  private onTransactionsLoaded = {
    next: (transactionsData: Transaction[]) => {
      this.transactions = this.logicService.filterTransactionsByProjectId(transactionsData, this.projectSlug);
      this.dataService.getTasks$().subscribe(this.onTasksLoaded);
    },
  };
  private onTasksLoaded = {
    next: (tasksData: Task[]) => {
      if (tasksData === null) tasksData = TASKS;
      this.tasks = this.logicService.filterTasksByProjectId(tasksData, this.projectSlug);
      this.projectView = this.logicService.composeProjectView(this.project, this.transactions);
      this.loaded = true;
    },
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private logicService: LogicService,
    private utilService: UtilService
  ) {}

  ngOnInit(): void {
    this.projectSlug = this.activatedRoute.snapshot.params.id;
    this.loadData();
  }

  private loadData(): void {
    this.dataService.getProject$(this.projectSlug).subscribe(this.onProjectLoaded);
  }
}
