import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProjectModel } from '../../ProjectModel';

@Component({
  selector: 'ab-form-presenter',
  templateUrl: './form-presenter.component.html',
  styleUrls: ['./form-presenter.component.css'],
})
export class FormPresenterComponent implements OnInit {
  @Output() save = new EventEmitter<ProjectModel>();
  project = { name: '' };
  constructor() {}

  ngOnInit(): void {}
  saveProject() {
    this.save.emit({ ...this.project });
  }
}
