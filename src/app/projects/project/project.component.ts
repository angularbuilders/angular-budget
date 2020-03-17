import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectModel } from '../ProjectModel';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'ab-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  projectId: string;
  message: string;
  project: ProjectModel;

  constructor(private route: ActivatedRoute, private projectsService: ProjectsService) {
    this.route.params.subscribe(params => {
      this.projectId = params.projectId;
      this.projectsService.getProjectById$(this.projectId).subscribe(
        project => (this.project = project),
        error => (this.message = error.message)
      );
    });
  }

  ngOnInit(): void {}

  onDeleteClick(project: ProjectModel) {
    this.projectsService.deleteProject$(project).subscribe(() => {
      this.project = null;
      this.projectId = '';
    });
  }
}
