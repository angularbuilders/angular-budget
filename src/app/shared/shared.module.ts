import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoHomeComponent } from './go-home/go-home.component';



@NgModule({
  declarations: [GoHomeComponent],
  imports: [
    CommonModule
  ],
  exports: [GoHomeComponent]
})
export class SharedModule { }
