import { Injectable } from '@angular/core';
import { ActivatedRoute, Event, Router } from '@angular/router';
import { TitleService } from './core/services/title.service';

@Injectable()
export class AppFacadeService {
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private titleService: TitleService) {}

  setTitleOnRouteChange(): void {
    this.router.events.subscribe({
      next: (event: Event) => {
        this.titleService.setTitleFromRouterEvent(event, this.activatedRoute);
      },
    });
  }
}
