import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';

const routes: Routes = [
  { path: '', component: ProjectsComponent },
  { path: 'new-project', loadChildren: () => import('./new-project/new-project.module').then(m => m.NewProjectModule) },
  { path: ':projectId', loadChildren: () => import('./project/project.module').then(m => m.ProjectModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
