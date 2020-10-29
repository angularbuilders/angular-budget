import { Id } from './id.interface';
import { Status } from './status.enum';

export interface Project extends Id {
  budget: number;
  status: Status;
  description?: string;
  start?: Date;
  end?: Date;
}
