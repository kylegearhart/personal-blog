package com.kylegearhart.personalwebsitejavaspringbackend;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class BlogArticlesControllerTest {
  @Autowired
  MockMvc mockMvc;

  @Test
  public void get_returnsOkStatus() throws Exception {
    this.mockMvc.perform(get("/api/blogArticles")).andExpect(status().isOk());
  }

  @Test
  public void get_returnsStockBlogArticlesData() throws Exception {
    this.mockMvc.perform(get("/api/blogArticles"))
      .andExpect(jsonPath("$[0].title").value("A Chance of Rain"))
      .andExpect(jsonPath("$[0].bodyPreview").value("(body-preview) A Chance of Rain"))
      .andExpect(jsonPath("$[1].title").value("Nomad Capitalist Book Review"))
      .andExpect(jsonPath("$[1].bodyPreview").value("(body-preview) Nomad Capitalist Book Review"))
      .andExpect(jsonPath("$[2].title").value("Do What is Meaningful"))
      .andExpect(jsonPath("$[2].bodyPreview").value("(body-preview) Do What is Meaningful"));
  }
}