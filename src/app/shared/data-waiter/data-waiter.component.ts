import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ab-data-waiter',
  templateUrl: './data-waiter.component.html',
  styleUrls: ['./data-waiter.component.css'],
})
export class DataWaiterComponent implements OnInit {
  @Input() public loaded = false;
  constructor() {}

  ngOnInit(): void {}
}
