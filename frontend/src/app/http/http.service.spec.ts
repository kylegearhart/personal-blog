import { fakeAsync, tick } from '@angular/core/testing'

import { HttpService } from './http.service'
import { HttpClientAdapter } from './http-client-adapter'
import { asyncData } from '../../test-utilities/async-helper-functions'
import SpyObj = jasmine.SpyObj

describe('HttpService', () => {
  let subject: HttpService
  let httpClientSpyStub: SpyObj<HttpClientAdapter>

  describe('get HTTP requests', () => {
    beforeEach(() => {
      httpClientSpyStub = jasmine.createSpyObj<HttpClientAdapter>('HttpClientAdapter', [ 'get' ])
      subject = new HttpService(httpClientSpyStub)
    })

    it('is performed with the given URL and query params', () => {
      subject.get('a-url', { 'some-param': 'some-value' })

      expect(httpClientSpyStub.get).toHaveBeenCalledWith(
        'a-url', { 'params': { 'some-param': 'some-value' } },
      )
    })

    it('returns the data retrieved over HTTP', fakeAsync(() => {
      httpClientSpyStub.get.and.returnValue(asyncData('response-data'))

      subject.get('a-url', null).subscribe((responseData) => {
        expect(responseData).toEqual('response-data')
      })

      tick()
    }))
  })
})
