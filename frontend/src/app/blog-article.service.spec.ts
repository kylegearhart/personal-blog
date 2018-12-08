import { BlogArticleService } from './blog-article.service'

describe('BlogArticleService', () => {
  describe('retrieving blog articles', () => {
    it('always returns stub article titles', () => {
      const subject: BlogArticleService = new BlogArticleService()

      expect(subject.getArticles()).toEqual(
        [{ title: 'blog-title-1' }, { title: 'blog-title-2' }]
      );
    });
  })
});
