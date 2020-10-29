import { Id } from './id.interface';
import { ProjectId } from './projectid.interface';
import { TransactionType } from './transaction-type.enum';

export interface Transaction extends Id, ProjectId {
  type: TransactionType;
  amount: number;
  date?: Date;
}
