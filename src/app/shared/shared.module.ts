import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DateTimeComponent } from './atoms/date-time/date-time.component';
import { NoDataYetComponent } from './atoms/no-data-yet/no-data-yet.component';
import { ValueComponent } from './atoms/value/value.component';
import { DatesComponent } from './molecules/dates/dates.component';
import { LabelValueComponent } from './molecules/label-value/label-value.component';
import { ArticleComponent } from './templates/article/article.component';
import { TimeAgoPipe } from './pipes/time-ago.pipe';

@NgModule({
  declarations: [
    ArticleComponent,
    NoDataYetComponent,
    DatesComponent,
    DateTimeComponent,
    LabelValueComponent,
    ValueComponent,
    TimeAgoPipe,
  ],
  imports: [CommonModule],
  exports: [ArticleComponent, NoDataYetComponent, DatesComponent, DateTimeComponent, LabelValueComponent, TimeAgoPipe],
})
export class SharedModule {}
