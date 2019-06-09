package com.kylegearhart.personalwebsitejavaspringbackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.websocket.server.PathParam;

@RestController
@RequestMapping("/api/articleDetails")
final class ArticleDetailsController {
  private final ArticleDetailsRepository articleDetailsRepository;

  @Autowired
  ArticleDetailsController(ArticleDetailsRepository articleDetailsRepository) {
    this.articleDetailsRepository = articleDetailsRepository;
  }

  @GetMapping
  public ArticleDetails getBlogArticles(@PathParam("articleTitle") String articleTitle) {
    return this.articleDetailsRepository.getArticleDetails(articleTitle);
  }
}
