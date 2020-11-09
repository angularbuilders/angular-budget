import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo',
})
export class TimeAgoPipe implements PipeTransform {
  private coloquiales = [
    { hasta: 1000 * 60 * 60 * 24 * 1, expresion: 'un día' },
    { hasta: 1000 * 60 * 60 * 24 * 7, expresion: 'una semana' },
    { hasta: 1000 * 60 * 60 * 24 * 30, expresion: 'un mes' },
  ];
  transform(fecha: Date, ...args: unknown[]): string {
    console.log({ fecha });
    const ahora = Date.now();
    const diferencia = new Date(fecha).getTime() - ahora;
    console.log({ diferencia });
    const expresionDefault = 'mucho tiempo';
    const expresionColoquial = this.coloquiales.find(c => c.hasta > Math.abs(diferencia));
    console.log({ expresionColoquial });
    let expresionResultado = expresionColoquial != undefined ? expresionColoquial.expresion : expresionDefault;
    if (diferencia > 0) {
      expresionResultado = 'dentro de ' + expresionResultado;
    } else {
      expresionResultado = 'hace ' + expresionResultado;
    }
    console.log({ expresionResultado });
    return expresionResultado;
  }
}
