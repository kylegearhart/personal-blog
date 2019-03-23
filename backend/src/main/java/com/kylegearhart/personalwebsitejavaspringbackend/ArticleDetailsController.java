package com.kylegearhart.personalwebsitejavaspringbackend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/articleDetails")
public class ArticleDetailsController {
    @GetMapping
    public ArticleDetails getBlogArticles() {
        return new ArticleDetails(
                "Blog Article Title",
                "This is the blog article body."
        );
    }
}
