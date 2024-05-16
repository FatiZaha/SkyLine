package com.airlines.controller;

import com.airlines.model.Compagnie;
import com.airlines.service.CompagnieService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(CompagniesController.class)
public class CompagniesControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private CompagnieService compagnieService;

    private List<Compagnie> compagnies;

    @BeforeEach
    public void setup() {
        // Créez des données de test
        compagnies = new ArrayList<>();
        Compagnie compagnie1 = new Compagnie();
        compagnie1.setCode(1L);
        compagnie1.setNom("Compagnie A");
        compagnie1.setAdresse("Adresse_A");
        compagnie1.setTel("1111111111");
        compagnie1.setLogo("logotestA.png");
        compagnies.add(compagnie1);
        Compagnie compagnie2 = new Compagnie();
        compagnie2.setCode(2L);
        compagnie2.setNom("Compagnie B");
        compagnie2.setAdresse("Adresse_B");
        compagnie2.setTel("2222222222");
        compagnie2.setLogo("logotestB.png");
        compagnies.add(compagnie2);
    }

    @Test
    public void testGetAllCompagnies() {
        try {
            // Définissez le comportement simulé du service
            when(compagnieService.getAllCompanies()).thenReturn(compagnies);

            // Effectuez la requête GET sur l'API
            mockMvc.perform(get("/api/admin/1/compagnies/all")
                            .contentType(MediaType.APPLICATION_JSON))
                    .andExpect(status().isOk())
                    .andExpect(jsonPath("$.length()").value(compagnies.size()))
                    .andExpect(jsonPath("$[0].code").value(compagnies.get(0).getCode()))
                    .andExpect(jsonPath("$[0].nom").value(compagnies.get(0).getNom()))
                    .andExpect(jsonPath("$[1].code").value(compagnies.get(1).getCode()))
                    .andExpect(jsonPath("$[1].nom").value(compagnies.get(1).getNom()));
        } catch (Exception e) {
            // Gérez l'exception ici ou lancez une nouvelle exception
        }


    }
}