import { browser, by, element } from 'protractor';

export class BlogHomePage {
  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('.title')).getText();
  }

  getBlogArticleTitles() {
    return element.all(by.css('app-root app-blog-article-summary')).getText();
  }
}
