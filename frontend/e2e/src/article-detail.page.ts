import { $, browser, by, element, ExpectedConditions } from 'protractor'

export class ArticleDetailPage {
  static isDisplayed() {
    return browser.wait(ExpectedConditions.presenceOf($('app-article-detail')))
  }

  static articleTitleText() {
    return element(by.css('app-article-detail .title')).getText()
  }
}
