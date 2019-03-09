import { BlogHomePage } from './app.po'

describe('personal website', () => {
  const blogHomePage = new BlogHomePage();

  beforeEach(async () => {
    await blogHomePage.navigateTo()
  });

  it('should display blog title', async () => {
    expect(await blogHomePage.getTitleText())
      .toEqual('Hello World');
  });

  it('should display blog article titles', async () => {
    expect(await blogHomePage.getBlogArticleTitles())
      .toEqual([ 'A Chance of Rain', 'Nomad Capitalist Book Review' ])
  })
});
