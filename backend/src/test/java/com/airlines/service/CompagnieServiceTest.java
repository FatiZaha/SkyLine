package com.airlines.service;

import com.airlines.model.Compagnie;
import com.airlines.repository.CompagnieRepository;
import static org.mockito.Mockito.verify;
import org.junit.Test;
import org.junit.jupiter.api.BeforeEach;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

@RunWith(MockitoJUnitRunner.class)
public class CompagnieServiceTest {

    @Mock
    CompagnieRepository compagnieRepository;

    @InjectMocks
    CompagnieService compagnieService = new CompagnieService();

    @BeforeEach
    public void setup() {
        Compagnie compagnie1 = new Compagnie();
        compagnie1.setCode(1L);
        compagnie1.setNom("Compagnie A");
        compagnie1.setAdresse("Adresse_A");
        compagnie1.setTel("1111111111");
        compagnie1.setLogo("logotestA.png");
    }

    @Test
     public void testDeleteCompagnie() {
        // Créez une compagnie de test


        // Appelez la méthode du service pour supprimer la compagnie
        compagnieService.deleteCompagnie(1L);

        // Vérifiez que la méthode de suppression du repository a été appelée avec le bon ID
        verify(compagnieRepository).deleteByCode(1L);
    }
}