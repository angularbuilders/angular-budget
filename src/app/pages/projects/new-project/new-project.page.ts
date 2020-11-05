import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/core/model/project.interface';
import { DataService } from 'src/app/core/services/data.service';
import { LogicService } from 'src/app/core/services/logic.service';

@Component({
  selector: 'ab-new-project',
  templateUrl: './new-project.page.html',
  styleUrls: ['./new-project.page.css'],
})
export class NewProjectPage implements OnInit {
  newProject: Project;
  loaded = false;

  private onProjectSaved = {
    next: () => {
      this.resetToNewProjet();
    },
  };
  constructor(private dataService: DataService, private logicService: LogicService) {}

  ngOnInit(): void {
    this.resetToNewProjet();
  }

  saveNewProject(): void {
    this.newProject.id = this.logicService.slugify(this.newProject.title);
    this.dataService.postProject$(this.newProject).subscribe(this.onProjectSaved);
  }

  private resetToNewProjet(): void {
    this.newProject = this.logicService.createNewProject();
  }
}
