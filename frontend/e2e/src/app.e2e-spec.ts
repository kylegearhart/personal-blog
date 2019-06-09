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
    // @ts-ignore
    const blogArticleSummariesText: string[] = await BlogHomePage.getBlogArticleSummariesText()
    expect(blogArticleSummariesText[0]).toContain('A Chance of Rain')
    expect(blogArticleSummariesText[1]).toContain('Nomad Capitalist Book Review')
    expect(blogArticleSummariesText[2]).toContain('Do What is Meaningful')
  })

  it('should display blog article details page', async () => {
    BlogHomePage.clickOnSecondBlogArticleSummary()

    expect(await ArticleDetailPage.isDisplayed())
    expect(await ArticleDetailPage.articleTitleText()).toEqual('Nomad Capitalist Book Review')
  })
});
