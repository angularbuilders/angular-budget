import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article/article.component';
import { NoDataYetComponent } from './no-data-yet/no-data-yet.component';
import { DataWaiterComponent } from './data-waiter/data-waiter.component';



@NgModule({
  declarations: [ArticleComponent, NoDataYetComponent, DataWaiterComponent],
  imports: [
    CommonModule
  ],
  exports: [ArticleComponent, NoDataYetComponent, DataWaiterComponent]
})
export class SharedModule { }
