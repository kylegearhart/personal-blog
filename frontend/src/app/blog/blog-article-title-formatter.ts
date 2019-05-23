export function replaceSpacesWithHyphensForDisplayInURL(blogArticleTitle: string): string {
  return blogArticleTitle.replace(/ /g, '-')
}
