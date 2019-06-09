export class BlogArticle {
  title: string
  bodyPreview: string

  constructor(title: string, bodyPreview: string) {
    this.title = title
    this.bodyPreview = bodyPreview
  }
}

export class BlogArticleDetails {
  title: string
  body: string

  constructor(title: string, body: string) {
    this.title = title
    this.body = body
  }
}
