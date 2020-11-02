import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/core/model/project.interface';
import { Task } from 'src/app/core/model/task.interface';
import { Transaction } from 'src/app/core/model/transaction.interface';

@Component({
  selector: 'ab-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  project: Project;
  tasks: Task[];
  transactions: Transaction[];
  loaded = false;
  private projectSlug: string;
  private rootUrl = `https://api-base.herokuapp.com/api/pub`;

  private onProjectLoaded = {
    next: projectData => {
      this.project = projectData;
      this.httpClient.get<Transaction[]>(`${this.rootUrl}/transactions`).subscribe(this.onTransactionsLoaded);
    },
  };
  private onTransactionsLoaded = {
    next: transactionsData => {
      this.transactions = transactionsData.filter(tranasaction => tranasaction.projectId === this.projectSlug);
      this.httpClient.get<Task[]>(`${this.rootUrl}/tasks`).subscribe(this.onTasksLoaded);
    },
  };
  private onTasksLoaded = {
    next: tasksData => {
      this.tasks = tasksData.filter(task => task.projectId === this.projectSlug);
      this.loaded = true;
    },
  };

  constructor(private activatedRoute: ActivatedRoute, private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.projectSlug = this.activatedRoute.snapshot.params.id;
    this.loadData();
  }

  private loadData(): void {
    this.httpClient.get<Project>(`${this.rootUrl}/projects/${this.projectSlug}`).subscribe(this.onProjectLoaded);
  }
}
