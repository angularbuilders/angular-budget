import { Id } from './id.interface';
import { ProjectId } from './projectid.interface';

export interface Task extends Id, ProjectId {
  dueDate?: Date;
  done: boolean;
}
