package com.airlines.service;

import com.airlines.model.Compagnie;
import com.airlines.repository.CompagnieRepository;
import static org.mockito.Mockito.verify;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(MockitoJUnitRunner.class)
public class TestCompagnieService {

    @Mock
    CompagnieRepository compagnieRepository;

    @InjectMocks
    CompagnieService compagnieService = new CompagnieService();


    @Test
     public void testDeleteCompagnie() {
        // Créez une compagnie de test
        Compagnie compagnie = new Compagnie();
        compagnie.setCode(1L);
        compagnie.setNom("Compagnie A");
        compagnie.setAdresse("Adresse_C");
        compagnie.setTel("1111111111");
        compagnie.setLogo("logotest.png");

        // Appelez la méthode du service pour supprimer la compagnie
        compagnieService.deleteCompagnie(1L);

        // Vérifiez que la méthode de suppression du repository a été appelée avec le bon ID
        verify(compagnieRepository).deleteById(1L);
    }
}