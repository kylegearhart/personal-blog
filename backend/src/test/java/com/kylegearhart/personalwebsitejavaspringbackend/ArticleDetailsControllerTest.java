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
public class ArticleDetailsControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @Test
    public void get_returnsOkStatus() throws Exception {
        this.mockMvc.perform(get("/api/articleDetails")).andExpect(status().isOk());
    }

    @Test
    public void get_returnsStockArticleDetailsData() throws Exception {
        this.mockMvc.perform(get("/api/articleDetails"))
                .andExpect(jsonPath("$.title").value("Blog Article Title"))
                .andExpect(jsonPath("$.body").value("This is the blog article body."));
    }
}
