import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ab-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  public title = 'Angular Budget';

  constructor() {}

  ngOnInit(): void {}
}
