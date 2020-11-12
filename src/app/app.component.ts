import { Component } from '@angular/core';
import { AppFacadeService } from './app-facade.service';

@Component({
  selector: 'ab-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppFacadeService],
})
export class AppComponent {
  constructor(private service: AppFacadeService) {
    this.service.setTitleOnRouteChange();
  }
}
