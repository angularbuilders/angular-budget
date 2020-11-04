import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ab-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.css'],
})
export class DatesComponent implements OnInit {
  @Input() public start: Date;
  @Input() public end: Date;

  constructor() {}

  ngOnInit(): void {}
}
