import { Component, OnInit } from '@angular/core';
import { ProjectView } from 'src/app/core/model/project-view.interface';
import { Project } from 'src/app/core/model/project.interface';
import { Task } from 'src/app/core/model/task.interface';
import { Transaction } from 'src/app/core/model/transaction.interface';
import { ProjectFacadeService } from 'src/app/core/services/facades/project-facade.service';

@Component({
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  providers: [],
})
export class ProjectComponent implements OnInit {
  projectView: ProjectView;
  project: Project;
  tasks: Task[];
  transactions: Transaction[];
  loaded = false;
  projectSlug: string;

  private onProjectLoaded = {
    next: (projectData: Project) => {
      this.project = projectData;
      this.service.getTransactions$().subscribe(this.onTransactionsLoaded);
    },
  };
  private onTransactionsLoaded = {
    next: (transactionsData: Transaction[]) => {
      this.transactions = this.service.filterTransactionsByProjectId(
        transactionsData,
        this.projectSlug
      );
      this.service.getTasks$().subscribe(this.onTasksLoaded);
    },
  };
  private onTasksLoaded = {
    next: (tasksData: Task[]) => {
      this.tasks = this.service.filterTasksByProjectId(tasksData, this.projectSlug);
      this.setViedData();
    },
  };

  constructor(private service: ProjectFacadeService) {}

  ngOnInit(): void {
    this.projectSlug = this.service.getSlugFromRoute();
    this.loadData();
  }

  private loadData(): void {
    this.service.getProject$(this.projectSlug).subscribe(this.onProjectLoaded);
  }

  private setViedData(): void {
    this.service.setDocumentTitle(this.project.title);
    this.projectView = this.service.getprojectView(this.project, this.transactions);
    this.loaded = true;
  }
}
