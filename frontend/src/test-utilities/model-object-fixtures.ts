import { BlogArticle } from '../app/blog/model-objects'

export default class ModelObjectFixtures {
  static blogArticle: BlogArticle = new BlogArticle('title', 'body-preview')
}
