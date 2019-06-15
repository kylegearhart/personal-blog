package com.kylegearhart.personalwebsitejavaspringbackend;

import org.junit.Before;
import org.junit.Test;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.Matchers.equalTo;
import static org.junit.Assert.assertThat;

public class HashMapArticleDetailsRepositoryTest {
  private HashMapArticleDetailsRepository subject;

  @Before
  public void setUp() {
    this.subject = new HashMapArticleDetailsRepository();
  }

  @Test
  public void getArticleDetails_returnsArticleDetails_whenGivenArticleTitleTakenFromTheURLIsFoundInHashMap() {
    ArticleDetails actual = this.subject.getArticleDetails("A-Chance-of-Rain");

    assertThat(actual.getTitle(), is(equalTo("A Chance of Rain")));
    assertThat(actual.getBody().contains("Lorem ipsum"), is(equalTo(true)));
  }

  @Test
  public void getArticleDetails_returnsDefaultArticleDetails_whenGivenArticleTitleIsAbsentFromTheHashMap() {
    ArticleDetails actual = this.subject.getArticleDetails("A Non-Existent Blog Article Title");

    assertThat(actual.getTitle(), is(equalTo("Lorem Ipsum")));
    assertThat(actual.getBody().contains("Lorem ipsum"), is(equalTo(true)));
  }
}