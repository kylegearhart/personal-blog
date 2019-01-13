import { BlogHomePage } from './app.po';

describe('personal website', () => {
  const blogHomePage = new BlogHomePage();

  beforeEach(() => {
    blogHomePage.navigateTo()
  });

  it('should display blog title', () => {
    expect(blogHomePage.getTitleText())
      .toEqual('Hello World');
  });

  it('should display blog article titles', () => {
    expect(blogHomePage.getBlogArticleTitles())
      .toEqual(['A Chance of Rain', 'Nomad Capitalist Book Review']);
  })
});
