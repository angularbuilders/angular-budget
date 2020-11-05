import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { NewProjectRoutingModule } from './new-project-routing.module';
import { NewProjectPage } from './new-project.page';

@NgModule({
  declarations: [NewProjectPage],
  imports: [CommonModule, NewProjectRoutingModule, FormsModule, SharedModule],
})
export class NewProjectModule {}
