import { defer, Observable, Observer, of } from 'rxjs'

export function asyncData<T>(data: T): Observable<T> {
  return defer(() => Promise.resolve(data));
}

export function syncData<T>(data: T): any {
  return of(() => data);
}
