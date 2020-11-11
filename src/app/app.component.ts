import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'ab-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService],
})
export class AppComponent {
  constructor(private service: AppService) {
    this.service.setTitleOnRouteChange();
  }
}
