import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ab-label-value',
  templateUrl: './label-value.component.html',
  styleUrls: ['./label-value.component.css'],
})
export class LabelValueComponent implements OnInit {
  @Input() public label: string;
  @Input() public value: string;
  @Input() public isOk?: boolean;
  constructor() {}

  ngOnInit(): void {}
}
