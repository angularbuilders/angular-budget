import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'ab-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-budget';

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private titleService: Title) {
    this.setTitleOnRouteChange();
  }

  private setTitleOnRouteChange(): void {
    this.router.events.subscribe({
      next: event => {
        if (event instanceof NavigationEnd) {
          const childRoute = this.getChild(this.activatedRoute);
          const title = this.getTitle(childRoute);
          this.titleService.setTitle(title);
        }
      },
    });
  }
  private getTitle(activatedRoute: ActivatedRoute): string {
    return activatedRoute.snapshot.data.title || this.title;
  }
  private getChild(activatedRoute: ActivatedRoute): ActivatedRoute {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }
  }
}
