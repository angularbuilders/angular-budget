import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ArticleComponent } from './article/article.component';
import { NoDataYetComponent } from './no-data-yet/no-data-yet.component';

@NgModule({
  declarations: [ArticleComponent, NoDataYetComponent],
  imports: [CommonModule],
  exports: [ArticleComponent, NoDataYetComponent],
})
export class SharedModule {}
