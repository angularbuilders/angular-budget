import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/core/model/project.interface';
import { Task } from 'src/app/core/model/task.interface';
import { Transaction } from 'src/app/core/model/transaction.interface';
import { DataService } from 'src/app/core/services/data.service';

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

  private onProjectLoaded = {
    next: projectData => {
      this.project = projectData;
      this.dataService.getTransactions$().subscribe(this.onTransactionsLoaded);
    },
  };
  private onTransactionsLoaded = {
    next: transactionsData => {
      this.transactions = transactionsData.filter(tranasaction => tranasaction.projectId === this.projectSlug);
      this.dataService.getTasks$().subscribe(this.onTasksLoaded);
    },
  };
  private onTasksLoaded = {
    next: tasksData => {
      this.tasks = tasksData.filter(task => task.projectId === this.projectSlug);
      this.loaded = true;
    },
  };

  constructor(private activatedRoute: ActivatedRoute, private dataService: DataService) {}

  ngOnInit(): void {
    this.projectSlug = this.activatedRoute.snapshot.params.id;
    this.loadData();
  }

  private loadData(): void {
    this.dataService.getProject$(this.projectSlug).subscribe(this.onProjectLoaded);
  }
}
