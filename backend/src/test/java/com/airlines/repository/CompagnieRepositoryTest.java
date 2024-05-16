package com.airlines.repository;


import com.airlines.service.CompagnieService;
import org.junit.jupiter.api.BeforeEach;
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

    @BeforeEach
    public void setup() {
        // Create a Vol object and persist it in the database
        Compagnie compagnie1 = new Compagnie();
        compagnie1.setCode(1L);
        compagnie1.setNom("Compagnie A");
        compagnie1.setAdresse("Adresse_A");
        compagnie1.setTel("1111111111");
        compagnie1.setLogo("logotestA.png");
        entityManager.merge(compagnie1);
    }

    @Test
    void testdeleteCompagnie() {

        compagnieRepository.deleteCompagnieByCode(20L);
        Compagnie  deleteCompagnie =  entityManager.find(Compagnie.class,20);;//entityManager.find(Vol.class,30);
        assertNull(deleteCompagnie);
    }



}
