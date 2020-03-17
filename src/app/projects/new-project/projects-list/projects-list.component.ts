import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProjectModel } from '../../ProjectModel';

@Component({
  selector: 'ab-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css'],
})
export class ProjectsListComponent implements OnInit {
  @Input() projects: ProjectModel[] = [];
  @Output() delete = new EventEmitter<ProjectModel>();

  constructor() {}

  ngOnInit(): void {}

  onDeleteClick(project: ProjectModel) {
    this.delete.emit(project);
  }
}
