import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  private coloquiales = [
    { hasta: 1000 * 60 * 60 * 24 * 1, expresion: 'un día' },
    { hasta: 1000 * 60 * 60 * 24 * 7, expresion: 'una semana' },
    { hasta: 1000 * 60 * 60 * 24 * 30, expresion: 'un mes' },
  ];

  constructor() {}

  public getFechaColoquial(fecha: Date): string {
    const ahora = Date.now();
    const momento = new Date(fecha).getTime();
    const diferencia = momento - ahora;
    const antesDespues = diferencia > 0 ? 'dentro de ' : 'hace ';
    const absDiferencia = Math.abs(diferencia);
    const coloquial = this.coloquiales.find(c => c.hasta > absDiferencia);
    const expresionDefault = 'mucho tiempo';
    const expresion = coloquial !== undefined ? coloquial.expresion : expresionDefault;
    return antesDespues + expresion;
  }

  public slugify(text: string): string {
    return text
      .toLowerCase()
      .trim()
      .replace(/[\s\W-]+/g, '-');
  }
}
