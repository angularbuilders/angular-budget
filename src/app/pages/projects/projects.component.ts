import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/core/services/projects.service';
import { ProjectView } from '../../core/model/project-view.interface';
import { Project } from '../../core/model/project.interface';
import { Transaction } from '../../core/model/transaction.interface';

@Component({
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projectViews: ProjectView[] = [];
  loaded = false;
  private projects: Project[];
  private transactions: Transaction[];

  private onProjectsLoaded = {
    next: (projectsData: Project[]) => {
      this.projects = projectsData;
      this.service.getTransactions$().subscribe(this.onTransactionsLoaded);
    },
  };

  private onTransactionsLoaded = {
    next: (transactionsData: Transaction[]) => {
      this.transactions = transactionsData;
      this.setDataViews();
    },
  };

  constructor(private service: ProjectsService) {}

  ngOnInit(): void {
    this.loadData();
  }

  private loadData(): void {
    this.service.getProjects$().subscribe(this.onProjectsLoaded);
  }

  private setDataViews(): void {
    this.projectViews = this.service.getProjectViews(this.projects, this.transactions);
    this.loaded = true;
  }
}
