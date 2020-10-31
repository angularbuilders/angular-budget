import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProjectView } from '../core/model/project-view.interface';
import { Project } from '../core/model/project.interface';
import { TransactionType } from '../core/model/transaction-type.enum';
import { Transaction } from '../core/model/transaction.interface';

@Component({
  selector: 'ab-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projectViews: ProjectView[] = [];
  loaded = false;
  private projects: Project[];
  private transactions: Transaction[];
  private rootUrl = `https://api-base.herokuapp.com/api/pub`;

  private onProjectsLoaded = {
    next: projectsData => {
      this.projects = projectsData;
      this.httpClient.get<Transaction[]>(`${this.rootUrl}/transactions`).subscribe(this.onTransactionsLoaded);
    },
  };

  private onTransactionsLoaded = {
    next: transactionsData => {
      this.transactions = transactionsData;
      this.setDataViews();
    },
  };

  constructor(private httpClient: HttpClient) {
    this.loadData();
  }

  ngOnInit(): void {
    this.loadData();
  }

  private loadData(): void {
    this.httpClient.get<Project[]>(`${this.rootUrl}/projects`).subscribe(this.onProjectsLoaded);
  }

  private setDataViews(): void {
    this.setProjectsView();
    this.loaded = true;
  }

  private setProjectsView(): void {
    this.projectViews = this.projects.map(project => {
      const projectView: ProjectView = { ...project };
      const transactions = this.transactions.filter(transaction => transaction.projectId === projectView.id);
      this.processExpenses(transactions, projectView);
      this.processIncomes(transactions, projectView);
      projectView.profit = projectView.totalIncomes - projectView.totalExpenses;
      projectView.balance = projectView.budget + projectView.profit;
      return projectView;
    });
  }

  private processIncomes(transactions: Transaction[], projectView: ProjectView): void {
    const incomes = transactions.filter(transaction => transaction.type === TransactionType.Incoming);
    if (incomes.length > 0) {
      projectView.totalIncomes = incomes
        .map(income => income.amount)
        .reduce((accumulator, current) => accumulator + current);
    } else {
      projectView.totalIncomes = 0;
    }
  }

  private processExpenses(transactions: Transaction[], projectView: ProjectView): void {
    const expenses = transactions.filter(transaction => transaction.type === TransactionType.Expense);
    if (expenses.length > 0) {
      projectView.totalExpenses = expenses
        .map(expense => expense.amount)
        .reduce((accumulator, current) => accumulator + current);
    } else {
      projectView.totalExpenses = 0;
    }
  }
}
