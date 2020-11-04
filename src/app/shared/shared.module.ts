import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ArticleComponent } from './article/article.component';
import { NoDataYetComponent } from './no-data-yet/no-data-yet.component';
import { DatesComponent } from './dates/dates.component';

@NgModule({
  declarations: [ArticleComponent, NoDataYetComponent, DatesComponent],
  imports: [CommonModule],
  exports: [ArticleComponent, NoDataYetComponent, DatesComponent],
})
export class SharedModule {}
