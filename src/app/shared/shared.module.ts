import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article/article.component';
import { NoDataYetComponent } from './no-data-yet/no-data-yet.component';



@NgModule({
  declarations: [ArticleComponent, NoDataYetComponent],
  imports: [
    CommonModule
  ],
  exports: [ArticleComponent, NoDataYetComponent]
})
export class SharedModule { }
