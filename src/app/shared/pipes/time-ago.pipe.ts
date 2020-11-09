import { Pipe, PipeTransform } from '@angular/core';
import { UtilService } from 'src/app/core/services/util.service';

@Pipe({
  name: 'timeAgo',
})
export class TimeAgoPipe implements PipeTransform {
  constructor(private util: UtilService) {}

  transform(fecha: Date, ...args: unknown[]): string {
    return this.util.getFechaColoquial(fecha);
  }
}
