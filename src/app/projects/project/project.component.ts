import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectModel } from '../new-project/new-project.component';
import { ProjectsService } from '../new-project/projects.service';

@Component({
  selector: 'ab-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  projectId: string;
  project: ProjectModel;

  constructor(route: ActivatedRoute, projectsService: ProjectsService) {
    route.params.subscribe(params => {
      this.projectId = params.projectId;
      this.project = projectsService.findById(this.projectId);
    });
  }

  ngOnInit(): void {}
}
