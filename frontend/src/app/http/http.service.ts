import { Injectable } from '@angular/core';
import { HttpClientWrapper } from './http-client-wrapper'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private httpClientWrapper: HttpClientWrapper) {
  }

  get<T>(url: string): Observable<T> {
    return this.httpClientWrapper.get(url)
  }
}
