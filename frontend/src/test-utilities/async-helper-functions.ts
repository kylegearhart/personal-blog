import { defer, of } from 'rxjs'

export function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

export function syncData<T>(data: T) {
  return of(() => data);
}
