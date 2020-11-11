import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/core/model/project.interface';
import { DataService } from 'src/app/core/services/data.service';
import { LogicService } from 'src/app/core/services/logic.service';
import { UtilService } from 'src/app/core/services/util.service';

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
  constructor(private dataService: DataService, private logicService: LogicService, private utilService: UtilService) {}

  ngOnInit(): void {
    this.resetToNewProjet();
  }

  saveNewProject(): void {
    this.newProject.id = this.utilService.slugify(this.newProject.title);
    this.dataService.postProject$(this.newProject).subscribe(this.onProjectSaved);
  }

  private resetToNewProjet(): void {
    this.newProject = this.logicService.createNewProject();
  }
}
