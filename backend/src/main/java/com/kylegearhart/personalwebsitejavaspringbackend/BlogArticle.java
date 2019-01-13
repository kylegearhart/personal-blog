package com.kylegearhart.personalwebsitejavaspringbackend;

class BlogArticle {
   private String title;

   public BlogArticle(String title) {
      this.title = title;
   }

   public String getTitle() {
      return title;
   }

   @Override
   public boolean equals(Object o) {
      if (this == o) return true;
      if (o == null || getClass() != o.getClass()) return false;

      BlogArticle that = (BlogArticle) o;

      return title != null ? title.equals(that.title) : that.title == null;

   }

   @Override
   public int hashCode() {
      return title != null ? title.hashCode() : 0;
   }

   @Override
   public String toString() {
      return "BlogArticle{" +
              "title='" + title + '\'' +
              '}';
   }
}
