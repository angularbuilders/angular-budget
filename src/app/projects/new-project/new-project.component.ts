import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/core/model/project.interface';
import { Status } from 'src/app/core/model/status.enum';

@Component({
  selector: 'ab-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css'],
})
export class NewProjectComponent implements OnInit {
  newProject: Project;
  loaded = false;
  private projectSlug: string;
  private rootUrl = `https://api-base.herokuapp.com/api/pub`;

  private onProjectSaved = {
    next: projectData => {
      this.resetNewProjet();
    },
  };
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.resetNewProjet();
  }

  resetNewProjet(): void {
    this.newProject = {
      id: '',
      title: '',
      start: new Date(),
      budget: 0,
      description: '',
      status: Status.InProgress,
    };
  }

  saveNewProject(): void {
    this.newProject.id = this.slugify(this.newProject.title);
    this.httpClient.post(`${this.rootUrl}/projects/`, this.newProject).subscribe(this.onProjectSaved);
  }
  slugify(text: string): string {
    return text
      .toLowerCase()
      .trim()
      .replace(/[\s\W-]+/g, '-');
  }
}
