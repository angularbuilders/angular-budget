import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/core/model/project.interface';
import { ProjectsService } from 'src/app/core/services/projects.service';

@Component({
  selector: 'ab-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css'],
})
export class NewProjectComponent implements OnInit {
  newProject: Project;
  loaded = false;

  private onProjectSaved = {
    next: () => {
      this.resetToNewProjet();
    },
  };
  constructor(private service: ProjectsService) {}

  ngOnInit(): void {
    this.resetToNewProjet();
  }

  saveNewProject(): void {
    this.newProject.id = this.service.slugify(this.newProject.title);
    this.service.postProject$(this.newProject).subscribe(this.onProjectSaved);
  }

  private resetToNewProjet(): void {
    this.newProject = this.service.createNewProject();
  }
}
