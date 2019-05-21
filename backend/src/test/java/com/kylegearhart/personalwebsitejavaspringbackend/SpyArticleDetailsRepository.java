package com.kylegearhart.personalwebsitejavaspringbackend;

import org.springframework.stereotype.Repository;

@Repository
class SpyArticleDetailsRepository implements ArticleDetailsRepository {
    String getArticleDetails_argument;
    ArticleDetails getArticleDetails_return;

    @Override
    public ArticleDetails getArticleDetails(String articleTitle) {
        this.getArticleDetails_argument = articleTitle;
        return this.getArticleDetails_return;
    }
}
