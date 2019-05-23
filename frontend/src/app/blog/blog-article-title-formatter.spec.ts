import { replaceSpacesWithHyphensForDisplayInURL } from './blog-article-title-formatter'

describe('BlogArticleTitle Formatting', () => {
  describe('replaceSpacesWithHyphensForDisplayInURL', () => {
    it('replaces spaces at the beginning, middle, and end of a title with hyphens', () => {
      const titleWithSpaces = ' a title with spaces '

      const actual = replaceSpacesWithHyphensForDisplayInURL(titleWithSpaces)

      expect(actual).toEqual('-a-title-with-spaces-')
    })
  })
})
