import { Component } from '@angular/core';
import { ActivatedRoute, Event, Router } from '@angular/router';
import { UtilService } from './core/services/util.service';

@Component({
  selector: 'ab-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-budget';

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private utilService: UtilService) {
    this.setTitleOnRouteChange();
  }

  private setTitleOnRouteChange(): void {
    this.router.events.subscribe({
      next: (event: Event) => {
        this.utilService.setTitleFromRouterEvent(event, this.activatedRoute, this.title);
      },
    });
  }
}
