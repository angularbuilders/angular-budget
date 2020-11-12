import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/core/model/project.interface';
import { ProjectFacadeService } from 'src/app/core/services/facades/project-facade.service';

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
  constructor(private service: ProjectFacadeService) {}

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
