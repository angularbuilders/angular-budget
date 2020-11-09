import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Event, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  private siteTitle = 'Angular.Budget';
  private coloquiales = [
    { hasta: 1000 * 60 * 60 * 24 * 1, expresion: 'un día' },
    { hasta: 1000 * 60 * 60 * 24 * 7, expresion: 'una semana' },
    { hasta: 1000 * 60 * 60 * 24 * 30, expresion: 'un mes' },
  ];

  constructor(private titleService: Title) {}

  public setTitleFromRouterEvent(event: Event, activatedRoute: ActivatedRoute): void {
    if (event instanceof NavigationEnd) {
      const childRoute = this.getChildOfRoute(activatedRoute);
      const title = this.getTitleFromRoute(childRoute);
      this.setDocumentTitle(title);
    }
  }
  public setDocumentTitle(title: string): void {
    const documentTitle = title ? `${title} | ${this.siteTitle}` : this.siteTitle;
    this.titleService.setTitle(documentTitle);
  }

  private getTitleFromRoute(activatedRoute: ActivatedRoute): string {
    return activatedRoute.snapshot.data.title;
  }
  private getChildOfRoute(activatedRoute: ActivatedRoute): ActivatedRoute {
    if (activatedRoute.firstChild) {
      return this.getChildOfRoute(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }
  }
  public getFechaColoquial(fecha: Date): string {
    const ahora = Date.now();
    const momento = new Date(fecha).getTime();
    const diferencia = momento - ahora;
    const antesDespues = diferencia > 0 ? 'dentro de ' : 'hace ';
    const absDiferencia = Math.abs(diferencia);
    const coloquial = this.coloquiales.find(c => c.hasta > absDiferencia);
    const expresionDefault = 'mucho tiempo';
    const expresion = coloquial != undefined ? coloquial.expresion : expresionDefault;
    return antesDespues + expresion;
  }
}
