import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

export abstract class HttpAdapterInterface {
  abstract get(url: string, params: { params: object }): Observable<any>
}

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpAdapter: HttpAdapterInterface) {
  }

  get<T>(url: string, queryParams: Object): Observable<T> {
    return this.httpAdapter.get(url, { params: queryParams })
  }
}
