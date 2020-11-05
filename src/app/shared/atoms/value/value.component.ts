import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ab-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css'],
})
export class ValueComponent implements OnInit {
  @Input() public value: string;
  @Input() public isOk?: boolean;
  constructor() {}

  ngOnInit(): void {}
}
