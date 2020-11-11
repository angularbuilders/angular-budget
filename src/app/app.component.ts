import { Component } from '@angular/core';
import { ActivatedRoute, Event, Router } from '@angular/router';
import { TitleService } from './core/services/title.service';

@Component({
  selector: 'ab-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private titleService: TitleService) {
    this.setTitleOnRouteChange();
  }

  private setTitleOnRouteChange(): void {
    this.router.events.subscribe({
      next: (event: Event) => {
        this.titleService.setTitleFromRouterEvent(event, this.activatedRoute);
      },
    });
  }
}
