import { fakeAsync, TestBed, tick } from '@angular/core/testing'

import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http'
import { HttpClientWrapper } from './http-client-wrapper'
import SpyObj = jasmine.SpyObj
import { asyncData } from '../../test-utilities/async-helper-functions'

describe('HttpService', () => {
  let subject: HttpService
  let httpClientSpyStub: SpyObj<HttpClientWrapper>

  describe('get HTTP requests', () => {
    beforeEach(() => {
      httpClientSpyStub = jasmine.createSpyObj<HttpClientWrapper>('HttpClientWrapper', ['get'])
      subject = new HttpService(httpClientSpyStub)
    })

    it('is performed with the given URL', () => {
      subject.get('a-url')

      expect(httpClientSpyStub.get).toHaveBeenCalledWith('a-url')
    })

    it('returns the data retrieved over HTTP', fakeAsync(() => {
      httpClientSpyStub.get.and.returnValue(asyncData('response-data'))

      subject.get('a-url').subscribe((responseData) => {
        expect(responseData).toEqual('response-data')
      })

      tick()
    }))
  })
});
