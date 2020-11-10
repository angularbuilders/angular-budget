import { Injectable } from '@angular/core';
import { ProjectView } from '../model/project-view.interface';
import { Project } from '../model/project.interface';
import { Status } from '../model/status.enum';
import { Task } from '../model/task.interface';
import { TasksView } from '../model/tasksView.interface';
import { TransactionType } from '../model/transaction-type.enum';
import { Transaction } from '../model/transaction.interface';

@Injectable({
  providedIn: 'root',
})
export class LogicService {
  constructor() {}

  public filterTransactionsByProjectId(transactions: Transaction[], projectId: string): Transaction[] {
    return transactions.filter(transaction => transaction.projectId === projectId);
  }

  public filterTasksByProjectId(tasks: Task[], projectId: string): Task[] {
    return tasks.filter(task => task.projectId === projectId);
  }

  public composeProjectViews(projects: Project[], transactions: Transaction[]): ProjectView[] {
    // throw new Error('Fake error para probar dependencias ocultas');
    return projects.map(project => this.composeProjectView(project, transactions));
  }

  public composeProjectView(project: Project, transactions: Transaction[]): ProjectView {
    const projectView: ProjectView = { ...project };
    const projectTransactions = this.filterTransactionsByProjectId(transactions, projectView.id);
    this.processExpenses(projectTransactions, projectView);
    this.processIncomes(projectTransactions, projectView);
    projectView.profit = projectView.totalIncomes - projectView.totalExpenses;
    projectView.balance = projectView.budget + projectView.profit;
    return projectView;
  }

  public createNewProject(): Project {
    return {
      id: '',
      title: '',
      start: new Date(),
      budget: 0,
      description: '',
      status: Status.InProgress,
    };
  }

  public composeTasksView(tasks: Task[]): TasksView {
    return {
      total: tasks.length,
      pending: tasks.filter(task => !task.done).length,
    };
  }

  public slugify(text: string): string {
    return text
      .toLowerCase()
      .trim()
      .replace(/[\s\W-]+/g, '-');
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
}
