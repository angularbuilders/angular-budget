import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormPresenterComponent } from './form-presenter/form-presenter.component';
import { NewProjectRoutingModule } from './new-project-routing.module';
import { NewProjectComponent } from './new-project.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';

@NgModule({
  declarations: [NewProjectComponent, FormPresenterComponent, ProjectsListComponent],
  imports: [CommonModule, NewProjectRoutingModule, FormsModule],
})
export class NewProjectModule {}
