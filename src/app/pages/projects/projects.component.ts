import { Component, OnInit } from '@angular/core';
import { ProjectView } from '../../core/model/project-view.interface';
import { Project } from '../../core/model/project.interface';
import { Transaction } from '../../core/model/transaction.interface';
import { DataService } from '../../core/services/data.service';
import { LogicService } from '../../core/services/logic.service';

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
      this.dataService.getTransactions$().subscribe(this.onTransactionsLoaded);
    },
  };

  private onTransactionsLoaded = {
    next: (transactionsData: Transaction[]) => {
      this.transactions = transactionsData;
      this.setDataViews();
    },
  };

  constructor(private dataService: DataService, private logicService: LogicService) {
    this.loadData();
  }

  ngOnInit(): void {
    this.loadData();
  }

  private loadData(): void {
    this.dataService.getProjects$().subscribe(this.onProjectsLoaded);
  }

  private setDataViews(): void {
    this.projectViews = this.logicService.composeProjectViews(this.projects, this.transactions);
    this.loaded = true;
  }
}
