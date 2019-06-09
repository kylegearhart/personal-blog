package com.kylegearhart.personalwebsitejavaspringbackend;

import java.util.Objects;

class BlogArticle {
  private String title;
  private String bodyPreview;

  BlogArticle(String title, String bodyPreview) {
    this.title = title;
    this.bodyPreview = bodyPreview;
  }

  public String getBodyPreview() {
    return bodyPreview;
  }

  public String getTitle() {
    return title;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;
    BlogArticle that = (BlogArticle) o;
    return Objects.equals(title, that.title) &&
      Objects.equals(bodyPreview, that.bodyPreview);
  }

  @Override
  public int hashCode() {
    return Objects.hash(title, bodyPreview);
  }

  @Override
  public String toString() {
    return "BlogArticle{" +
      "title='" + title + '\'' +
      ", bodyPreview='" + bodyPreview + '\'' +
      '}';
  }
}
