import { Injectable } from '@angular/core';
import { ActivatedRoute, Event, NavigationEnd } from '@angular/router';
import { TitleAdapterService } from './title-adapter.service';

@Injectable({
  providedIn: 'root',
})
export class TitleService {
  private siteTitle = 'Angular.Budget';

  constructor(private titleService: TitleAdapterService) {}

  public setTitleFromRouterEvent(event: Event, activatedRoute: ActivatedRoute): void {
    if (event instanceof NavigationEnd) {
      const childRoute = this.getChildOfRoute(activatedRoute);
      const title = this.getTitleFromRoute(childRoute);
      this.setDocumentTitle(title);
    }
  }
  public setDocumentTitle(title: string): void {
    const documentTitle = title ? `${title} | ${this.siteTitle}` : this.siteTitle;
    this.titleService.setDocumentTitle(documentTitle);
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
}
