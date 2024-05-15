package com.airlines.repository;


import com.airlines.service.CompagnieService;
import org.junit.jupiter.api.Test;
import com.airlines.model.Compagnie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.ANY)  //configurer la base de données utilisée lors des tests.
@DataJpaTest //indique que la classe VolRepositoryTest est un test d'intégration pour les couches de persistance JPA.
public class CompagnieRepositoryTest {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private CompagnieRepository compagnieRepository;
    @Autowired
    private CompagnieService compagnieService;


    @Test
    void testdeleteCompagnie() {
        // Create a Vol object and persist it in the database
        Compagnie compagnie = new Compagnie();
        compagnie.setCode(20L);
        compagnie.setNom("NomTest");
        compagnie.setAdresse("AdresseTest");
        compagnie.setTel("0000000000");
        compagnie.setAdresse("AdresseTest");
        compagnie.setAdresse("AdresseTest");
        entityManager.merge(compagnie);
        //vérifier si l'entité a été effectivement supprimée en cherchant une entité avec le même code.
        // Si l'entité est supprimée, le résultat de entityManager.find sera null.

        compagnieRepository.deleteCompagnieByCode(20L);
        Compagnie  deleteCompagnie =  entityManager.find(Compagnie.class,20);;//entityManager.find(Vol.class,30);
        assertNull(deleteCompagnie);
    }



}
