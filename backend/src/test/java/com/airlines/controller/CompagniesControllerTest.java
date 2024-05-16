package com.airlines.controller;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.hamcrest.Matchers.notNullValue;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest(classes = CompagniesController.class)
@AutoConfigureMockMvc
@ComponentScan("com.airlines")
public class CompagniesControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void testGetAllCompagnies() throws Exception {
        mockMvc.perform(get("/api/admin/1/compagnies/all")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk()) //vérifie si le code d'état HTTP de la réponse est 200 OK
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
        //pour vérifier si le type de contenu de la réponse est correctement défini comme application/json.
                .andExpect(content().string(notNullValue()));
    }

}