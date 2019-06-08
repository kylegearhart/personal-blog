import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'

@Injectable()
export class HttpClientAdapter {
  constructor(private httpClient: HttpClient) {
  }

  get<T>(url: string, queryParams: Object): Observable<T> {
    return this.httpClient.get<T>(url, queryParams)
  }
}
