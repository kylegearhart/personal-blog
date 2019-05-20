import { BlogHomePage } from './app.po'
import { ArticleDetailPage } from './article-detail.page'

describe('personal website', () => {
  beforeEach(async () => {
    await BlogHomePage.navigateTo()
  });

  it('should display blog title', async () => {
    expect(await BlogHomePage.getTitleText()).toEqual('Hello World')
  });

  it('should display blog article titles', async () => {
    expect(await BlogHomePage.getBlogArticleSummaries())
      .toEqual([ 'A Chance of Rain', 'Nomad Capitalist Book Review' ])
  })

  it('should display blog article details page', async () => {
    BlogHomePage.clickOnFirstBlogArticleSummary()

    expect(await ArticleDetailPage.isDisplayed())
    expect(await ArticleDetailPage.articleTitleText()).toEqual('Blog Article Title')
  })
});
