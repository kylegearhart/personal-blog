import { browser, by, element } from 'protractor';

export class BlogHomePage {
  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText();
  }

  getBlogArticleTitles() {
    return element.all(by.css('app-root app-blog-article')).getText();
  }
}
