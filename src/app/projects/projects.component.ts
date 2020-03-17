import { Component, OnInit } from '@angular/core';
import { ProjectModel } from './ProjectModel';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'ab-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: ProjectModel[] = [];

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.projectsService.getProjects$().subscribe(projects => {
      this.projects = projects;
    });
  }
}
