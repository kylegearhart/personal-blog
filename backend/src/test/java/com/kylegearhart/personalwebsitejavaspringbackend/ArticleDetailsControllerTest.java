package com.kylegearhart.personalwebsitejavaspringbackend;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.is;
import static org.junit.Assert.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class ArticleDetailsControllerTest {
  private ArticleDetailsController subject;
  private SpyArticleDetailsRepository spyArticleDetailsRepository;
  private MockMvc mockMvc;

  @Before
  public void setUp() {
    this.spyArticleDetailsRepository = new SpyArticleDetailsRepository();
    this.subject = new ArticleDetailsController(spyArticleDetailsRepository);
    this.mockMvc = MockMvcBuilders.standaloneSetup(subject).build();
  }

  @Test
  public void get_returnsOkStatus() throws Exception {
    this.mockMvc.perform(get("/api/articleDetails")).andExpect(status().isOk());
  }

  @Test
  public void get_retrievesArticleDetails_fromRepository_usingArticleTitleInQueryParam() throws Exception {
    this.mockMvc.perform(get("/api/articleDetails?articleTitle=the-article-title"));

    assertThat(spyArticleDetailsRepository.getArticleDetails_argument, is(equalTo("the-article-title")));
  }

  @Test
  public void get_returnsArticleDetailsData_givenByRepository() throws Exception {
    spyArticleDetailsRepository.getArticleDetails_return = new ArticleDetails("the-title", "the-body");

    this.mockMvc.perform(get("/api/articleDetails"))
      .andExpect(jsonPath("$.title").value("the-title"))
      .andExpect(jsonPath("$.body").value("the-body"));
  }
}
