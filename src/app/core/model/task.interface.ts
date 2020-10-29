import { Id } from './id.interface';
import { ProjectId } from './projectid.interface';

export interface Task extends Id, ProjectId {
  done: boolean;
  dueDate?: Date;
}
