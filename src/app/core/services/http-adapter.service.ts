import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpAdapterService {
  constructor(private httpClient: HttpClient) {}

  get<T>(url: string) {
    return this.httpClient.get<T>(url);
  }

  post<T>(url: string, payload: T) {
    return this.httpClient.post<T>(url, payload);
  }

  put<T>(url: string, payload: T) {
    return this.httpClient.put<T>(url, payload);
  }

  delete<T>(url: string) {
    return this.httpClient.delete<T>(url);
  }
}
