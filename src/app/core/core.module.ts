import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { MainComponent } from './layout/main/main.component';



@NgModule({
  declarations: [LayoutComponent, HeaderComponent, MainComponent],
  imports: [
    CommonModule
  ],
  exports: [LayoutComponent]
})
export class CoreModule { }
