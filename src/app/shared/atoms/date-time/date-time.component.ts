import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ab-date-time',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.css'],
})
export class DateTimeComponent implements OnInit {
  @Input() public date: Date;
  @Input() public userFormat = 'dd/MM/yyyy';
  @Input() public botFormat = 'yyyy/MM/dd';
  constructor() {}

  ngOnInit(): void {}
}
