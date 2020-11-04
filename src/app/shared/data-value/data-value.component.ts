import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ab-data-value',
  templateUrl: './data-value.component.html',
  styleUrls: ['./data-value.component.css'],
})
export class DataValueComponent implements OnInit {
  @Input() public label: string;
  @Input() public value: string;
  @Input() public isOk?: boolean;
  constructor() {}

  ngOnInit(): void {}
}
