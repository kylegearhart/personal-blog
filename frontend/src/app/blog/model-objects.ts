export class BlogArticle {
  title: string

  constructor(title: string) {
    this.title = title
  }
}

export class BlogArticleDetails { title: string
  body: string

  constructor(title: string, body: string) {
    this.title = title
    this.body = body
  }
}
