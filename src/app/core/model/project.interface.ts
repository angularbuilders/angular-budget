import { Id } from './id.interface';
import { Status } from './status.enum';
import { Task } from './task.interface';
import { Transaction } from './transaction.interface';

export interface Project extends Id {
  budget: number;
  status: Status;
  description?: string;
  start?: Date;
  end?: Date;
  totalExpenses?: number;
  tasks?: Task[];
  transactions?: Transaction[];
}
