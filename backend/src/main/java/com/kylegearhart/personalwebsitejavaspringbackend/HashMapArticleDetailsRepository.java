package com.kylegearhart.personalwebsitejavaspringbackend;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.Map;

@Primary
@Repository
class HashMapArticleDetailsRepository implements ArticleDetailsRepository {
    private Map<String, ArticleDetails> articleTitleToDetailsMap = createArticleTitleToDetailsMap();

    private static Map<String, ArticleDetails> createArticleTitleToDetailsMap() {
        Map<String, ArticleDetails> map = new HashMap<>();
        map.put("A Chance of Rain", new ArticleDetails("A Chance of Rain", "Body Text"));
        map.put("Nomad Capitalist Book Review", new ArticleDetails("Nomad Capitalist Book Review", "Body Text"));
        map.put("Do What is Meaningful", new ArticleDetails("Do What is Meaningful", "Body Text"));

        return map;
    }

    @Override
    public ArticleDetails getArticleDetails(String articleTitle) {
        return articleTitleToDetailsMap.getOrDefault(
                articleTitle,
                new ArticleDetails("", "")
        );
    }
}
