import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ArticleComponent } from './article/article.component';
import { NoDataYetComponent } from './no-data-yet/no-data-yet.component';
import { DatesComponent } from './dates/dates.component';
import { DateTimeComponent } from './date-time/date-time.component';

@NgModule({
  declarations: [ArticleComponent, NoDataYetComponent, DatesComponent, DateTimeComponent],
  imports: [CommonModule],
  exports: [ArticleComponent, NoDataYetComponent, DatesComponent, DateTimeComponent],
})
export class SharedModule {}
