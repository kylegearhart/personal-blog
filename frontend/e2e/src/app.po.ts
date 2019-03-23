import { browser, by, element } from 'protractor'

export class BlogHomePage {
  static navigateTo() {
    return browser.get('/');
  }

  static getTitleText() {
    return element(by.css('.title')).getText();
  }

  static getBlogArticleSummaries() {
    return element.all(by.css('app-root app-blog-article-summary')).getText();
  }

  static clickOnFirstBlogArticleSummary() {
    element.all(by.css('app-root app-blog-article-summary .container')).get(0).click()
  }
}
