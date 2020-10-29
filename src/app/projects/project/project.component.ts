import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/core/model/project.interface';
import { Task } from 'src/app/core/model/task.interface';
import { Transaction } from 'src/app/core/model/transaction.interface';
import { PROJECTS } from 'src/data/projects.data';
import { TASKS } from 'src/data/tasks.data';
import { TRANSACTIONS } from 'src/data/transactions.data';

@Component({
  selector: 'ab-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  project: Project;
  tasks: Task[];
  transactions: Transaction[];
  constructor(private activatetedRpute: ActivatedRoute) {}

  ngOnInit(): void {
    const projectSlug = this.activatetedRpute.snapshot.params.id;
    this.project = PROJECTS.find(project => project.id === projectSlug);
    this.tasks = TASKS.filter(task => task.projectId === projectSlug);
    this.transactions = TRANSACTIONS.filter(tranasaction => tranasaction.projectId === projectSlug);
  }
}
