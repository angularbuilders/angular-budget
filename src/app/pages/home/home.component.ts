import { Component, OnInit } from '@angular/core';
import { ProjectView } from '../../core/model/project-view.interface';
import { Project } from '../../core/model/project.interface';
import { Task } from '../../core/model/task.interface';
import { TasksView } from '../../core/model/tasksView.interface';
import { Transaction } from '../../core/model/transaction.interface';
import { ProjectsFacadeService } from '../../core/services/facades/projects-facade.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  projectViews: ProjectView[] = [];
  tasksView: TasksView = {
    total: 0,
    pending: 0,
  };
  loaded = false;
  private projects: Project[];
  private transactions: Transaction[];
  private tasks: Task[];

  private onProjectsLoaded = {
    next: (projectsData: Project[]) => {
      this.projects = projectsData;
      this.service.getTransactions$().subscribe(this.onTransactionsLoaded);
    },
  };

  private onTransactionsLoaded = {
    next: (transactionsData: Transaction[]) => {
      this.transactions = transactionsData;
      this.service.getTasks$().subscribe(this.onTasksLoaded);
    },
  };

  private onTasksLoaded = {
    next: (tasksData: Task[]) => {
      this.tasks = tasksData;
      this.setDataViews();
    },
  };

  constructor(private service: ProjectsFacadeService) {}

  ngOnInit(): void {
    this.loadData();
  }

  private loadData(): void {
    this.service.getProjects$().subscribe(this.onProjectsLoaded);
  }

  private setDataViews(): void {
    this.projectViews = this.service.getProjectViews(this.projects, this.transactions);
    this.tasksView = this.service.getTasksView(this.tasks);
    this.loaded = true;
  }
}
