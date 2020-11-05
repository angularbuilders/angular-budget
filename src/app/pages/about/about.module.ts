import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AboutRoutingModule } from './about-routing.module';
import { AboutPage } from './about.page';

@NgModule({
  declarations: [AboutPage],
  imports: [CommonModule, AboutRoutingModule, SharedModule],
})
export class AboutModule {}
