import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Event, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  constructor(private titleService: Title) {}

  public setTitleFromRouterEvent(event: Event, activatedRoute: ActivatedRoute, defaultTitle: string): void {
    if (event instanceof NavigationEnd) {
      const childRoute = this.getChild(activatedRoute);
      const title = this.getTitle(childRoute, defaultTitle);
      this.titleService.setTitle(title);
    }
  }
  private getTitle(activatedRoute: ActivatedRoute, defaultTitle: string): string {
    return activatedRoute.snapshot.data.title || defaultTitle;
  }
  private getChild(activatedRoute: ActivatedRoute): ActivatedRoute {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }
  }
}
