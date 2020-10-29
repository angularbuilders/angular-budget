import { Project } from '../../core/model/project.interface';
import { Task } from '../../core/model/task.interface';
import { Transaction } from '../../core/model/transaction.interface';

export interface ProjectView extends Project {
  tasks?: Task[];
  transactions?: Transaction[];
  totalExpenses?: number;
  totalIncomes?: number;
  profit?: number;
  balance?: number;
}
