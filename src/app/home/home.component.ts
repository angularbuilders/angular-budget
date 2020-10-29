import { Component, OnInit } from '@angular/core';
import { PROJECTS } from 'src/data/projects.data';
import { TASKS } from 'src/data/tasks.data';
import { TRANSACTIONS } from 'src/data/transactions.data';
import { ProjectView } from '../core/model/project-view.interface';
import { TasksView } from '../core/model/tasksView.interface';
import { TransactionType } from '../core/model/transaction-type.enum';

@Component({
  selector: 'ab-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  projectViews: ProjectView[] = [];
  tasksViews?: TasksView;
  constructor() {}

  ngOnInit(): void {
    this.setProjectsView();
    this.setTasksView();
  }

  private setProjectsView(): void {
    this.projectViews = PROJECTS.map(project => {
      const projectView: ProjectView = { ...project };
      const transactions = TRANSACTIONS.filter(transaction => transaction.projectId === projectView.id);
      const expenses = transactions.filter(transaction => transaction.type === TransactionType.Expense);
      if (expenses.length > 0) {
        projectView.totalExpenses = expenses
          .map(expense => expense.amount)
          .reduce((accumulator, current) => accumulator + current);
      } else {
        projectView.totalExpenses = 0;
      }
      const incomes = transactions.filter(transaction => transaction.type === TransactionType.Incoming);
      if (incomes.length > 0) {
        projectView.totalIncomes = incomes
          .map(income => income.amount)
          .reduce((accumulator, current) => accumulator + current);
      } else {
        projectView.totalIncomes = 0;
      }
      projectView.profit = projectView.totalIncomes - projectView.totalExpenses;
      projectView.balance = projectView.budget + projectView.profit;
      return projectView;
    });
  }
  private setTasksView(): void {
    this.tasksViews = {
      total: TASKS.length,
      pending: TASKS.filter(task => !task.done).length,
    };
  }
}
