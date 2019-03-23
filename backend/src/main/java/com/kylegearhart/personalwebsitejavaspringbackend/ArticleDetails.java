package com.kylegearhart.personalwebsitejavaspringbackend;

import org.springframework.lang.NonNull;

public class ArticleDetails {
    private String title;
    private String body;

    public ArticleDetails(@NonNull String title, @NonNull String body) {
        this.title = title;
        this.body = body;
    }

    public String getTitle() {
        return title;
    }

    public String getBody() {
        return body;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        ArticleDetails that = (ArticleDetails) o;

        if (!title.equals(that.title)) return false;
        return body.equals(that.body);

    }

    @Override
    public int hashCode() {
        int result = title.hashCode();
        result = 31 * result + body.hashCode();
        return result;
    }

    @Override
    public String toString() {
        return "ArticleDetails{" +
                "title='" + title + '\'' +
                ", body='" + body + '\'' +
                '}';
    }
}
