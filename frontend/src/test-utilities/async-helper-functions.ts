import { defer, Observable, Observer, of } from 'rxjs'

export function asyncData<T>(data: T): Observable<T> {
  return defer(() => Promise.resolve(data));
}

export function syncData<T>(data: T): any {
  return of(() => data);
}

export function stubbedObservableUsingObserver<T>(observer: Observer<T>): Observable<T> {
  return Observable.create(subscriber => {
    observer = subscriber
  })
}
