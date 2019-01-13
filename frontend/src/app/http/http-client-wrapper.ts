import { HttpClient, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'

@Injectable()
export class HttpClientWrapper {
  constructor(private httpClient: HttpClient) {
  }

  get<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(url)
  }
}
