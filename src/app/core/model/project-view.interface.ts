import { Project } from './project.interface';
import { Task } from './task.interface';
import { Transaction } from './transaction.interface';

export interface ProjectView extends Project {
  tasks?: Task[];
  transactions?: Transaction[];
  totalExpenses?: number;
  totalIncomes?: number;
  profit?: number;
  balance?: number;
}
