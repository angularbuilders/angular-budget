import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ProjectPage } from './project/project.page';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsPage } from './projects.page';

@NgModule({
  declarations: [ProjectsPage, ProjectPage],
  imports: [CommonModule, ProjectsRoutingModule, SharedModule],
})
export class ProjectsModule {}
