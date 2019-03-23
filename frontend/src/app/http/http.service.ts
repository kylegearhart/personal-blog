import { Injectable } from '@angular/core'
import { HttpClientWrapper } from './http-client-wrapper'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private httpClientWrapper: HttpClientWrapper) {
  }

  // TODO: Actually use the queryParams to query the server for the correct article details.
  // noinspection JSUnusedLocalSymbols
  get<T>(url: string, queryParams: Object): Observable<T> {
    return this.httpClientWrapper.get(url)
  }
}
