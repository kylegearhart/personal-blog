package com.kylegearhart.personalwebsitejavaspringbackend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/blogArticles")
public class BlogArticlesController {
  @GetMapping
  public List<BlogArticle> getBlogArticles() {
    return Arrays.asList(
      new BlogArticle("A Chance of Rain", "(body-preview) A Chance of Rain"),
      new BlogArticle("Nomad Capitalist Book Review", "(body-preview) Nomad Capitalist Book Review"),
      new BlogArticle("Do What is Meaningful", "(body-preview) Do What is Meaningful")
    );
  }
}
