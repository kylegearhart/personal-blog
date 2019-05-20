import { $, browser, by, element, ExpectedConditions } from 'protractor'

export class ArticleDetailPage {
  static isDisplayed() {
    return browser.wait(ExpectedConditions.presenceOf($('app-blog-article-detail')))
  }

  static articleTitleText() {
    return element(by.css('app-blog-article-detail .title')).getText()
  }
}
