import { fakeAsync, tick } from '@angular/core/testing'

import { HttpService } from './http.service'
import { HttpClientWrapper } from './http-client-wrapper'
import { asyncData } from '../../test-utilities/async-helper-functions'
import SpyObj = jasmine.SpyObj

describe('HttpService', () => {
  let subject: HttpService
  let httpClientSpyStub: SpyObj<HttpClientWrapper>

  describe('get HTTP requests', () => {
    beforeEach(() => {
      httpClientSpyStub = jasmine.createSpyObj<HttpClientWrapper>('HttpClientWrapper', [ 'get' ])
      subject = new HttpService(httpClientSpyStub)
    })

    it('is performed with the given URL', () => {
      subject.get('a-url', null)

      expect(httpClientSpyStub.get).toHaveBeenCalledWith('a-url')
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
