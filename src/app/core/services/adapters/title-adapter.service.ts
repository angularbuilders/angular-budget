import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class TitleAdapterService {
  constructor(private titleService: Title) {}

  public setDocumentTitle(documentTitle: string): void {
    this.titleService.setTitle(documentTitle);
  }
}
