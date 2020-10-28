import { Expense } from './expense.interface';
import { Id } from './id.interface';
import { Status } from './status.enum';
import { Task } from './task.interface';

export interface Project extends Id {
  description?: string;
  start?: Date;
  end?: Date;
  budget: number;
  status: Status;
  tasks: Task[];
  expenses: Expense[];
}
