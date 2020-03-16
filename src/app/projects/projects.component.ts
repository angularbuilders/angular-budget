import { Component, OnInit } from '@angular/core';
import { ProjectModel } from './new-project/new-project.component';
import { ProjectsService } from './new-project/projects.service';

@Component({
  selector: 'ab-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: ProjectModel[] = [];

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.projects = this.projectsService.getProjects();
  }
}
