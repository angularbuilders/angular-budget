import { Id } from './id.interface';
import { ProjectId } from './projectid.interface';

export interface Expense extends Id, ProjectId {
  date?: Date;
  amount: number;
}
