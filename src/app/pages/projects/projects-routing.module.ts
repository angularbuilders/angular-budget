import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectPage } from './project/project.page';
import { ProjectsPage } from './projects.page';

const routes: Routes = [
  { path: '', component: ProjectsPage },
  {
    path: 'new',
    loadChildren: () => import('./new-project/new-project.module').then(m => m.NewProjectModule),
    data: { title: 'Nuevo proyecto' },
  },
  {
    path: ':id',
    component: ProjectPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
